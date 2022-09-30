import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { InputContainer, PaymentContainer, PaymentHeader } from './styles'

export function Payment() {
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
          <input type="radio" name="options" id="credit" />
          <CreditCard />
          Cartão de Crédito
        </label>
        <label>
          <input type="radio" name="options" id="debit" />
          <Bank />
          Cartão de Débito
        </label>
        <label>
          <input type="radio" name="options" id="money" />
          <Money />
          Dinheiro
        </label>
      </InputContainer>
    </PaymentContainer>
  )
}
