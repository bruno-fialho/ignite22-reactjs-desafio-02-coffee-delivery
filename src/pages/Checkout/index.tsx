import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import { Address } from './components/Address'
import { Cart, CartItemProps } from './components/Cart'
import { Payment } from './components/Payment'

import {
  CheckoutContainer,
  CheckoutTitle,
  LeftContainer,
  RightContainer,
} from './styles'

export function Checkout() {
  const [cart, setCart] = useState<CartItemProps[]>([])

  async function getCart() {
    try {
      const cartList = await api.get<CartItemProps[]>('/shoppingCart')

      setCart(cartList.data)
    } catch (err) {
      console.log('err', err)
    }
  }

  useEffect(() => {
    getCart()
  }, [])

  return (
    <CheckoutContainer>
      <LeftContainer>
        <CheckoutTitle>Complete seu pedido</CheckoutTitle>
        <Address />
        <Payment />
      </LeftContainer>
      <RightContainer>
        <CheckoutTitle>Cafés selecionados</CheckoutTitle>
        <Cart cart={cart} />
      </RightContainer>
    </CheckoutContainer>
  )
}
