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

export interface CheckoutDataProps {
  state: string
  street: string
  streetNumber: number
  complement?: string
  neighborhood: string
  city: string
  payment: 'credit' | 'debit' | 'money'
}

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, { message: 'Informe o CEP correto' }),
  street: zod.string().min(1, { message: 'Inaforme o endereço' }),
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
  const [checkoutData, setCheckoutData] = useState({} as CheckoutDataProps)

  const { coffees, cart, resetCart } = useContext(CartContext)

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      city: '',
      neighborhood: '',
      state: '',
    },
  })

  const { handleSubmit, reset } = checkoutForm

  function handleConfirmCheckout(data: CheckoutFormData) {
    setCheckoutData(data)

    reset()

    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return <Success checkoutData={checkoutData} resetCart={resetCart} />
  }

  return (
    <>
      {coffees.length === 0 ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit(handleConfirmCheckout)} action="">
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
