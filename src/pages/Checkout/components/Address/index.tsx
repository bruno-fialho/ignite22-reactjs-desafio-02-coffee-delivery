import { MapPinLine } from 'phosphor-react'

import { Input } from '../Input'

import {
  AddressContainer,
  AddressHeader,
  FirstLine,
  FourthLine,
  SecondLine,
  ThirdLine,
} from './styles'

export function Address() {
  return (
    <AddressContainer>
      <AddressHeader>
        <MapPinLine />
        <div>
          <p>Endereço de Entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </AddressHeader>
      <form action="">
        <FirstLine>
          <Input type="text" placeholder="CEP" />
        </FirstLine>
        <SecondLine>
          <Input type="text" placeholder="Rua" />
        </SecondLine>
        <ThirdLine>
          <Input type="number" placeholder="Número" />
          <Input type="text" placeholder="Complemento" />
        </ThirdLine>
        <FourthLine>
          <Input type="text" placeholder="Bairro" />
          <Input type="text" placeholder="Cidade" />
          <Input type="text" placeholder="UF" />
        </FourthLine>
      </form>
    </AddressContainer>
  )
}
