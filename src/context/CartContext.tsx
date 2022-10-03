import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

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

export interface AddressProps {
  state: string
  cep: string
  street: string
  streetNumber: number
  complement?: string
  neighborhood: string
  city: string
  payment: 'credit' | 'debit' | 'money'
}

interface CartContextProps {
  coffees: CoffeeProps[]
  cart: CartItemProps[]
  cartItemsTotal: number
  address: AddressProps
  addItemToCart: (id: string, quantity: number) => void
  removeItemFromCart: (id: string) => void
  incrementItemQuantityByOne: (id: string) => void
  decrementItemQuantityByOne: (id: string) => void
  resetCart: () => void
  saveAddress: (addressData: AddressProps) => void
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
  const [address, setAddress] = useState({} as AddressProps)

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

  function saveAddress(addressData: AddressProps) {
    setAddress(addressData)
  }

  return (
    <CartContext.Provider
      value={{
        coffees,
        cart,
        address,
        cartItemsTotal,
        addItemToCart,
        removeItemFromCart,
        incrementItemQuantityByOne,
        decrementItemQuantityByOne,
        resetCart,
        saveAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
