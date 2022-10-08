import { Controller, useFormContext } from 'react-hook-form'
import { MapPinLine } from 'phosphor-react'
import { PatternFormat } from 'react-number-format'

import { cepApi } from '../../../../services/cep'

import { Input } from '../Input'

import {
  AddressContainer,
  AddressForm,
  AddressHeader,
  FirstLine,
  FourthLine,
  SearchAddressButton,
  SecondLine,
  ThirdLine,
} from './styles'

interface AddressResponseFromApi {
  cep: string
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}

export function Address() {
  const {
    control,
    register,
    setValue,
    setFocus,
    setError,
    watch,
    // reset,
    formState: { errors },
  } = useFormContext()

  async function getAddressFromApi(
    cep: string,
  ): Promise<AddressResponseFromApi> {
    let addressFromApi = {} as AddressResponseFromApi

    try {
      const response = await cepApi.get<AddressResponseFromApi>(`${cep}/json`)

      if (response.status === 200) {
        const { data } = response

        addressFromApi = {
          cep: data.cep,
          logradouro: data.logradouro,
          bairro: data.bairro,
          localidade: data.localidade,
          uf: data.uf,
        }
      }
    } catch (err) {
      console.log('err', err)
    }

    return addressFromApi
  }

  async function handleUpdateAddressFromApi() {
    const cep: string = watch('cep')

    if (cep.length === 8 || cep.length === 9) {
      const addressFromApi = await getAddressFromApi(String(cep))

      if (addressFromApi.logradouro) {
        setValue('street', addressFromApi.logradouro)
        setValue('city', addressFromApi.localidade)
        setValue('neighborhood', addressFromApi.bairro)
        setValue('state', addressFromApi.uf)
        setFocus('streetNumber')
      } else {
        console.log('erro')
        // reset()
        setError('cep', { type: 'validate' }, { shouldFocus: true })
      }
    }
  }

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
          <Controller
            control={control}
            name="cep"
            render={({ field: { name, onChange, value } }) => (
              <PatternFormat
                name={name}
                value={value}
                onChange={onChange}
                format="#####-###"
                mask="_"
                isError={!!errors.cep?.message}
                customInput={Input}
              />
            )}
          />
          <SearchAddressButton
            type="button"
            onClick={handleUpdateAddressFromApi}
          >
            Pesquisar
          </SearchAddressButton>
        </FirstLine>
        <SecondLine>
          <Controller
            control={control}
            name="street"
            render={({ field: { value, onChange, ref } }) => (
              <Input
                id="street"
                ref={ref}
                value={value}
                onChange={onChange}
                type="text"
                placeholder="Rua"
                isError={!!errors.street?.message}
              />
            )}
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
            isError={!!errors.complement?.message}
            {...register('complement')}
          />
        </ThirdLine>
        <FourthLine>
          <Controller
            control={control}
            name="neighborhood"
            render={({ field: { value, onChange, ref } }) => (
              <Input
                id="neighborhood"
                ref={ref}
                value={value}
                onChange={onChange}
                type="text"
                placeholder="Bairro"
                isError={!!errors.neighborhood?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="city"
            render={({ field: { value, onChange, ref } }) => (
              <Input
                id="city"
                ref={ref}
                value={value}
                onChange={onChange}
                type="text"
                placeholder="Cidade"
                isError={!!errors.city?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="state"
            render={({ field: { value, onChange, ref } }) => (
              <Input
                id="state"
                ref={ref}
                value={value}
                onChange={onChange}
                type="text"
                placeholder="UF"
                isError={!!errors.state?.message}
              />
            )}
          />
        </FourthLine>
      </AddressForm>
    </AddressContainer>
  )
}
