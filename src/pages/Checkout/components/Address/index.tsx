import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import { Input } from '../Input'

import {
  AddressContainer,
  AddressForm,
  AddressHeader,
  FirstLine,
  FourthLine,
  SecondLine,
  ThirdLine,
} from './styles'

export function Address() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <AddressContainer>
      <AddressHeader>
        <MapPinLine />
        <div>
          <p>Endereço de Entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </AddressHeader>
      <AddressForm>
        <FirstLine>
          <Input
            id="cep"
            type="text"
            placeholder="CEP"
            isError={!!errors.cep?.message}
            {...register('cep')}
          />
        </FirstLine>
        <SecondLine>
          <Input
            id="street"
            type="text"
            placeholder="Rua"
            isError={!!errors.street?.message}
            {...register('street')}
          />
        </SecondLine>
        <ThirdLine>
          <Input
            id="streetNumber"
            type="number"
            placeholder="Número"
            isError={!!errors.streetNumber?.message}
            {...register('streetNumber', { valueAsNumber: true })}
          />
          <Input
            id="complement"
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
        </ThirdLine>
        <FourthLine>
          <Input
            id="neighborhood"
            type="text"
            placeholder="Bairro"
            isError={!!errors.neighborhood?.message}
            {...register('neighborhood')}
          />
          <Input
            id="city"
            type="text"
            placeholder="Cidade"
            isError={!!errors.city?.message}
            {...register('city')}
          />
          <Input
            id="state"
            type="text"
            placeholder="UF"
            isError={!!errors.state?.message}
            {...register('state')}
          />
        </FourthLine>
      </AddressForm>
    </AddressContainer>
  )
}
