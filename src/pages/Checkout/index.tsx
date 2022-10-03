import { useContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CartContext } from '../../context/CartContext'

import { Loading } from '../../components/Loading/Loading'
import { Address } from './components/Address'
import { Cart } from './components/Cart'
import { Payment } from './components/Payment'
import { Success } from './components/Success'

import {
  CheckoutContainer,
  CheckoutTitle,
  LeftContainer,
  RightContainer,
} from './styles'

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, { message: 'Informe o CEP' }),
  street: zod.string().min(1, { message: 'Informe o endereço' }),
  streetNumber: zod.number().int({ message: 'Informe o número' }),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, { message: 'Informe o bairro' }),
  city: zod.string().min(1, { message: 'Informe o cidade' }),
  state: zod.string().min(1, { message: 'Informe o estado' }),
  payment: zod.enum(['credit', 'debit', 'money']),
})

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { coffees, cart, address, resetCart, saveAddress } =
    useContext(CartContext)

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
  })

  const { handleSubmit, reset } = checkoutForm

  function handleCreateNewCycle(data: CheckoutFormData) {
    saveAddress(data)

    reset()

    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return <Success address={address} resetCart={resetCart} />
  }

  return (
    <>
      {coffees.length === 0 ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
          <FormProvider {...checkoutForm}>
            <CheckoutContainer>
              <LeftContainer>
                <CheckoutTitle>Complete seu pedido</CheckoutTitle>
                <Address />
                <Payment />
              </LeftContainer>
              <RightContainer>
                <CheckoutTitle>Cafés selecionados</CheckoutTitle>
                <Cart cart={cart} coffees={coffees} />
              </RightContainer>
            </CheckoutContainer>
          </FormProvider>
        </form>
      )}
    </>
  )
}
