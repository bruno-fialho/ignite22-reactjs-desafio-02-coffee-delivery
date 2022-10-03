import { MouseEvent, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Trash, Warning } from 'phosphor-react'

import { getPriceString } from '../../../../helpers/getPriceInteger'

import { CoffeeProps } from '../../../Home'
import { CustomQuantityInput } from '../../../../components/CustomQuantityInput'
import { CartContext, CartItemProps } from '../../../../context/CartContext'

import {
  CartContainer,
  CartItemContainer,
  ConfirmButton,
  EmptyCartMessageContainer,
  InputAndButtonContainer,
  NameAndQuantityContainer,
  NameText,
  PriceWrapper,
  RemoveButton,
  TotalContainer,
  TotalLine,
} from './styles'

interface CartProps {
  coffees: CoffeeProps[]
  cart: CartItemProps[]
}

export function Cart({ coffees, cart }: CartProps) {
  const deliveryFee = 3.5

  const {
    cartItemsTotal,
    removeItemFromCart,
    incrementItemQuantityByOne,
    decrementItemQuantityByOne,
  } = useContext(CartContext)

  const cartTotalWithDeliveryFee = cartItemsTotal + deliveryFee

  function handleRemoveItemFromCart(event: MouseEvent<HTMLButtonElement>) {
    removeItemFromCart(event.currentTarget.id)
  }

  function decrementQuantity(id: string) {
    decrementItemQuantityByOne(id)
  }

  function incrementQuantity(id: string) {
    incrementItemQuantityByOne(id)
  }

  return (
    <CartContainer>
      {cart.length === 0 ? (
        <EmptyCartMessageContainer>
          <Warning />
          <p>Seu carrinho ainda está vazio!</p>
          <p>
            <NavLink to="/">Volte para a loja.</NavLink>
          </p>
        </EmptyCartMessageContainer>
      ) : (
        <>
          {cart.map((item) => {
            const coffeeData: CoffeeProps[] = coffees.filter(
              (coffee) => coffee.id === item.id,
            )

            const totalPrice = item.quantity * coffeeData[0].price

            return (
              <CartItemContainer key={item.id}>
                <img src={`./coffees/${coffeeData[0].type}.svg`} alt="" />

                <NameAndQuantityContainer>
                  <NameText>{coffeeData[0].name}</NameText>

                  <InputAndButtonContainer>
                    <CustomQuantityInput
                      itemId={item.id}
                      heightInRem={2}
                      quantity={item.quantity}
                      onDecrementQuantity={decrementQuantity}
                      onIncrementQuantity={incrementQuantity}
                    />

                    <RemoveButton
                      id={item.id}
                      onClick={(event) => handleRemoveItemFromCart(event)}
                    >
                      <Trash />
                      Remover
                    </RemoveButton>
                  </InputAndButtonContainer>
                </NameAndQuantityContainer>

                <PriceWrapper>
                  <span>R$ {getPriceString(totalPrice)}</span>
                </PriceWrapper>
              </CartItemContainer>
            )
          })}

          <TotalContainer>
            <TotalLine>
              <p>Total de Itens</p>

              {cartItemsTotal ? (
                <p>R$ {getPriceString(cartItemsTotal)}</p>
              ) : (
                <p>R$ 0,00</p>
              )}
            </TotalLine>

            <TotalLine>
              <p>Entrega</p>

              {deliveryFee ? (
                <p>R$ {getPriceString(deliveryFee)}</p>
              ) : (
                <p>R$ 0,00</p>
              )}
            </TotalLine>

            <TotalLine>
              <span>Total</span>

              {cartTotalWithDeliveryFee ? (
                <span>R$ {getPriceString(cartTotalWithDeliveryFee)}</span>
              ) : (
                <span>R$ 0,00</span>
              )}
            </TotalLine>
          </TotalContainer>

          <ConfirmButton type="submit">Confirmar Pedido</ConfirmButton>
        </>
      )}
    </CartContainer>
  )
}
