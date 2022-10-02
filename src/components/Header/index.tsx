import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffee from '../../assets/logo-coffee.svg'

import { CartContext } from '../../context/CartContext'

import {
  CartLinkWrapper,
  HeaderContainer,
  HeaderWrapper,
  LocalButton,
  LogoContainer,
} from './styles'

export function Header() {
  const { cart } = useContext(CartContext)

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoContainer>
          <NavLink to="/">
            <img src={logoCoffee} alt="" />
          </NavLink>
        </LogoContainer>

        <nav>
          <LocalButton type="button">
            <MapPin weight="fill" />
            Porto Alegre, RS
          </LocalButton>

          <CartLinkWrapper>
            <NavLink to="/checkout" title="Carrinho">
              <ShoppingCart weight="fill" />
              {cart.length > 0 && <span>{cart.length}</span>}
            </NavLink>
          </CartLinkWrapper>
        </nav>
      </HeaderContainer>
    </HeaderWrapper>
  )
}
