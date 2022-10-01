import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import { InputContainer, PaymentContainer, PaymentHeader } from './styles'

export function Payment() {
  const { register } = useFormContext()

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
      <InputContainer>
        <label>
          <input type="radio" value="credit" {...register('payment')} />
          <CreditCard />
          Cartão de Crédito
        </label>
        <label>
          <input type="radio" value="debit" {...register('payment')} />
          <Bank />
          Cartão de Débito
        </label>
        <label>
          <input type="radio" value="money" {...register('payment')} />
          <Money />
          Dinheiro
        </label>
      </InputContainer>
    </PaymentContainer>
  )
}
