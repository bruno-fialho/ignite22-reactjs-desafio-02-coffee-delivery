import { useContext } from 'react'
import { Trash } from 'phosphor-react'

import { CoffeeProps } from '../../../Home'
import { CustomQuantityInput } from '../../../../components/CustomQuantityInput'
import { CartContext, CartItemProps } from '../../../../context/CartContext'

import {
  CartContainer,
  CartItemContainer,
  ConfirmButton,
  InputAndButtonContainer,
  NameAndQuantityContainer,
  NameText,
  PriceWrapper,
  RemoveButton,
  TotalContainer,
  TotalLine,
} from './styles'

interface CartProps {
  cart: CartItemProps[]
}

export function Cart({ cart }: CartProps) {
  const { coffees } = useContext(CartContext)

  if (!cart || coffees.length === 0) {
    return <p>Carregando..</p>
  }

  function decrementQuantity() {}

  function incrementQuantity() {}

  return (
    <CartContainer>
      {cart.map((item) => {
        const coffeeData: CoffeeProps[] = coffees.filter(
          (coffee) => coffee.id === item.id,
        )

        const totalPrice = item.quantity * coffeeData[0].price

        const priceInteger = totalPrice.toString().split('.')[0]
        const priceDecimal = totalPrice.toString().split('.')[1].padEnd(2, '0')

        return (
          <CartItemContainer key={item.id}>
            <img src={`./coffees/${coffeeData[0].type}.svg`} alt="" />

            <NameAndQuantityContainer>
              <NameText>{coffeeData[0].name}</NameText>

              <InputAndButtonContainer>
                <CustomQuantityInput
                  heightInRem={2}
                  quantity={item.quantity}
                  onDecrementQuantity={decrementQuantity}
                  onIncrementQuantity={incrementQuantity}
                />

                <RemoveButton>
                  <Trash />
                  Remover
                </RemoveButton>
              </InputAndButtonContainer>
            </NameAndQuantityContainer>

            <PriceWrapper>
              <span>R${`${priceInteger},${priceDecimal}`}</span>
            </PriceWrapper>
          </CartItemContainer>
        )
      })}

      <TotalContainer>
        <TotalLine>
          <p>Total de Itens</p>
          <p>R$ 29,70</p>
        </TotalLine>

        <TotalLine>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </TotalLine>

        <TotalLine>
          <span>Total</span>
          <span>R$ 33,20</span>
        </TotalLine>
      </TotalContainer>

      <ConfirmButton type="submit">Confirmar Pedido</ConfirmButton>
    </CartContainer>
  )
}
