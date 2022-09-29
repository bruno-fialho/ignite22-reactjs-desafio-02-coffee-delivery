import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffee from '../../assets/logo-coffee.svg'

import { HeaderContainer, HeaderWrapper } from './styles'

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <img src={logoCoffee} alt="" />

        <nav>
          <button type="button">
            <MapPin weight="fill" />
            Porto Alegre, RS
          </button>

          <NavLink to="/checkout" title="Carrinho">
            <ShoppingCart weight="fill" />
          </NavLink>
        </nav>
      </HeaderContainer>
    </HeaderWrapper>
  )
}
