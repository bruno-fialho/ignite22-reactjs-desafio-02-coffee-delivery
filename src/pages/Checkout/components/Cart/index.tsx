import { useEffect, useState } from 'react'
import { Trash } from 'phosphor-react'
import { api } from '../../../../services/api'

import { CoffeeProps } from '../../../Home'
import { CustomQuantityInput } from '../../../../components/CustomQuantityInput'

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

export interface CartItemProps {
  id: string
  quantity: number
}

interface CartProps {
  cart: CartItemProps[]
}

export function Cart({ cart }: CartProps) {
  console.log('cart', cart)
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])

  async function getCoffees() {
    try {
      const coffeesList = await api.get<CoffeeProps[]>('/coffees')

      setCoffees(coffeesList.data)
    } catch (err) {
      console.log('err', err)
    }
  }

  useEffect(() => {
    getCoffees()
  }, [])

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

      <ConfirmButton type="button">Confirmar Pedido</ConfirmButton>
    </CartContainer>
  )
}
