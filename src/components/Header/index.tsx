import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffee from '../../assets/logo-coffee.svg'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />

      <nav>
        <button type="button">
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </button>

        <NavLink to="/checkout" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
