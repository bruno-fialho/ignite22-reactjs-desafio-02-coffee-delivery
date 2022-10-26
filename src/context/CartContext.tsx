import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

interface AddressProps {
  cep: string
  street: string
  streetNumber?: number
  complement?: string
  neighborhood: string
  city: string
  state: string
}

export interface CoffeeProps {
  id: string
  name: string
  description: string
  type:
    | 'american'
    | 'arabic'
    | 'capuccino'
    | 'coffee-with-milk'
    | 'creamy-espresso'
    | 'cuban'
    | 'espresso'
    | 'hawaiian'
    | 'hot-chocolate'
    | 'iced-coffee'
    | 'irish'
    | 'latte'
    | 'macchiato'
    | 'mochaccino'
  price: number
  categories: string[]
}

export interface CartItemProps {
  id: string
  quantity: number
}

interface CartContextProps {
  coffees: CoffeeProps[]
  cart: CartItemProps[]
  cartItemsTotal: number
  addItemToCart: (id: string, quantity: number) => void
  removeItemFromCart: (id: string) => void
  incrementItemQuantityByOne: (id: string) => void
  decrementItemQuantityByOne: (id: string) => void
  resetCart: () => void
  createAddress: (address: AddressProps) => void
  updateAddress: (value: string, type: 'streetNumber' | 'complement') => void
  address: AddressProps
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])
  const [cart, setCart] = useState<CartItemProps[]>(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:cart-state-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return []
  })
  const [cartItemsTotal, setCartItemsTotal] = useState(0)
  const [address, setAddress] = useState<AddressProps>(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:address-state-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return []
  })

  useEffect(() => {
    async function getCoffees() {
      try {
        const coffeesList = await api.get<CoffeeProps[]>('/coffees')

        setCoffees(coffeesList.data)
      } catch (err) {
        console.log('err', err)
      }
    }

    setTimeout(() => getCoffees(), 700)
  }, [])

  useEffect(() => {
    const cartJSON = JSON.stringify(cart)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', cartJSON)

    if (cart.length > 0 && coffees.length > 0) {
      const sumCartTotal = cart.reduce((accumulator, currentValue) => {
        const currentCoffeeIndex = coffees.findIndex(
          (coffee) => coffee.id === currentValue.id,
        )

        return (
          accumulator +
          currentValue.quantity * coffees[currentCoffeeIndex].price
        )
      }, 0)

      setCartItemsTotal(sumCartTotal)
    }
  }, [cart, coffees])

  function addItemToCart(id: string, quantity: number) {
    const cartItem = cart.find((item) => item.id === id)

    if (cartItem) {
      let updatedQuantity: number = 0

      if (cartItem.quantity + quantity <= 10) {
        updatedQuantity = cartItem.quantity + quantity
      } else if (cartItem.quantity + quantity > 10) {
        updatedQuantity = 10
      }

      setCart((state) =>
        state.map((coffee) => {
          if (coffee.id === id) {
            return { ...coffee, quantity: updatedQuantity }
          } else {
            return coffee
          }
        }),
      )
    } else {
      const newItem = {
        id,
        quantity,
      }

      setCart((state) => [...state, newItem])
    }
  }

  function removeItemFromCart(id: string) {
    const cartWithoutDeletedOne = cart.filter((item) => item.id !== id)

    setCart(cartWithoutDeletedOne)
  }

  function incrementItemQuantityByOne(id: string) {
    setCart((state) =>
      state.map((cartItem) => {
        if (cartItem.id === id && cartItem.quantity < 10) {
          const updatedQuantity = cartItem.quantity + 1

          return { ...cartItem, quantity: updatedQuantity }
        }

        return cartItem
      }),
    )
  }

  function decrementItemQuantityByOne(id: string) {
    setCart((state) =>
      state.map((cartItem) => {
        if (cartItem.id === id && cartItem.quantity > 1) {
          const updatedQuantity = cartItem.quantity - 1

          return { ...cartItem, quantity: updatedQuantity }
        }

        return cartItem
      }),
    )
  }

  function resetCart() {
    setCart(() => [])
  }

  function createAddress(address: AddressProps) {
    setAddress({} as AddressProps)
    setAddress(address)
  }

  function updateAddress(value: string, type: 'streetNumber' | 'complement') {
    if (type === 'streetNumber') {
      setAddress((state) => {
        return {
          ...state,
          streetNumber: Number(value),
        }
      })
    } else if (type === 'complement') {
      setAddress((state) => {
        return {
          ...state,
          complement: value,
        }
      })
    }
  }

  useEffect(() => {
    const addressJSON = JSON.stringify(address)

    localStorage.setItem('@coffee-delivery:address-state-1.0.0', addressJSON)
  }, [address])

  return (
    <CartContext.Provider
      value={{
        coffees,
        cart,
        cartItemsTotal,
        addItemToCart,
        removeItemFromCart,
        incrementItemQuantityByOne,
        decrementItemQuantityByOne,
        resetCart,
        createAddress,
        updateAddress,
        address,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
