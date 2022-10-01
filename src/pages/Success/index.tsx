import { Timer, MapPin, CurrencyDollar } from 'phosphor-react'
import deliveryImage from '../../assets/delivery.svg'

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

export function Success() {
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
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <span>Cartão de Crédito</span>
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
