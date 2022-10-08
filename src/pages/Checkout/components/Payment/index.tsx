import { Controller, useFormContext } from 'react-hook-form'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import {
  PaymentContainer,
  PaymentHeader,
  PaymentTypeButton,
  PaymentTypeContainer,
} from './styles'

export function Payment() {
  const { control } = useFormContext()

  return (
    <PaymentContainer>
      <PaymentHeader>
        <CurrencyDollar />
        <div>
          <p>Pagamento</p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentHeader>
      <Controller
        control={control}
        name="payment"
        render={({ field }) => {
          return (
            <PaymentTypeContainer
              onValueChange={field.onChange}
              value={field.value}
            >
              <PaymentTypeButton value="credit">
                <CreditCard />
                Cartão de Crédito
              </PaymentTypeButton>
              <PaymentTypeButton value="debit">
                <Bank />
                Cartão de Débito
              </PaymentTypeButton>
              <PaymentTypeButton value="money">
                <Money />
                Dinheiro
              </PaymentTypeButton>
            </PaymentTypeContainer>
          )
        }}
      />
    </PaymentContainer>
  )
}
