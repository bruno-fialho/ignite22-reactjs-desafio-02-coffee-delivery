import { Timer, MapPin, CurrencyDollar } from 'phosphor-react'

import deliveryImage from '../../../../assets/delivery.svg'

import { CheckoutDataProps } from '../..'

import {
  AddressInfoContent,
  DeliveryInfoContainer,
  IconWrapper,
  PaymentInfoContent,
  SuccessContainer,
  SuccessContent,
  SuccessImageContainer,
  SuccessSubtitle,
  SuccessTitle,
  TimeInfoContent,
} from './styles'
import { useEffect } from 'react'

interface SuccessProps {
  checkoutData: CheckoutDataProps
  resetCart: () => void
}

export function Success({ checkoutData, resetCart }: SuccessProps) {
  const {
    street,
    streetNumber,
    complement,
    neighborhood,
    city,
    state,
    payment,
  } = checkoutData

  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    money: 'Dinheiro',
  }

  useEffect(() => {
    resetCart()
  }, [resetCart])

  return (
    <SuccessContainer>
      <SuccessContent>
        <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
        <SuccessSubtitle>
          Agora é só aguardar que logo o café chegará até você
        </SuccessSubtitle>

        <DeliveryInfoContainer>
          <AddressInfoContent>
            <IconWrapper>
              <MapPin weight="fill" />
            </IconWrapper>
            <div>
              <p>
                Entrega em{' '}
                <span>
                  {street}, {streetNumber} ({complement})
                </span>
              </p>
              <p>
                {neighborhood} - {city}, {state}
              </p>
            </div>
          </AddressInfoContent>
          <TimeInfoContent>
            <IconWrapper>
              <Timer weight="fill" />
            </IconWrapper>
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </div>
          </TimeInfoContent>
          <PaymentInfoContent>
            <IconWrapper>
              <CurrencyDollar weight="fill" />
            </IconWrapper>
            <div>
              <p>Pagamento na entrega</p>
              <span>{paymentMethod[payment]}</span>
            </div>
          </PaymentInfoContent>
        </DeliveryInfoContainer>
      </SuccessContent>

      <SuccessImageContainer>
        <img src={deliveryImage} alt="" />
      </SuccessImageContainer>
    </SuccessContainer>
  )
}
