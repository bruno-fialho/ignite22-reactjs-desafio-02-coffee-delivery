import { Address } from './components/Address'
import { Cart } from './components/Cart'
import { Payment } from './components/Payment'
import {
  CheckoutContainer,
  CheckoutTitle,
  LeftContainer,
  RightContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <LeftContainer>
        <CheckoutTitle>Complete seu pedido</CheckoutTitle>
        <Address />
        <Payment />
      </LeftContainer>
      <RightContainer>
        <CheckoutTitle>Cafés selecionados</CheckoutTitle>
        <Cart />
      </RightContainer>
    </CheckoutContainer>
  )
}
