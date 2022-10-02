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

interface CartContextProps {
  coffees: CoffeeProps[]
  cart: CartItemProps[]
  addItemToCart: (id: string, quantity: number) => void
  // incrementItemQuantityByOne: (id: string) => void
  // decrementItemQuantityByOne: (id: string) => void
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
  }, [cart])

  function addItemToCart(id: string, quantity: number) {
    const cartItem = cart.find((item) => item.id === id)

    console.log('cartItem', cartItem)

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

  // function incrementItemQuantityByOne(id: string) {
  //   const updatedCart = cart.forEach((item) => {
  //     if (item.id === id) {
  //       if (item.quantity < 10) {
  //         item.quantity += 1
  //       }
  //     }
  //   })

  //   localStorage.setItem(
  //     '@coffee-delivery:cart-state-1.0.0',
  //     JSON.stringify(updatedCart),
  //   )
  // }

  // function decrementItemQuantityByOne(id: string) {
  //   const updatedCart = cart.forEach((item) => {
  //     if (item.id === id) {
  //       if (item.quantity < 10) {
  //         item.quantity += 1
  //       }
  //     }
  //   })

  //   localStorage.setItem(
  //     '@coffee-delivery:cart-state-1.0.0',
  //     JSON.stringify(updatedCart),
  //   )
  // }

  return (
    <CartContext.Provider
      value={{
        coffees,
        cart,
        addItemToCart,
        // incrementItemQuantityByOne,
        // decrementItemQuantityByOne,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
