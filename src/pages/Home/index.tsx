import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Banner } from './components/Banner'
import { CoffeeProduct } from './components/CoffeeProduct'

import {
  CoffeesContainer,
  CoffeesList,
  CoffeesTitle,
  HomeContainer,
} from './styles'

export interface CoffeeProps {
  id: string
  name: string
  description: string
  type:
    | 'american'
    | 'arabic'
    | 'capuccino'
    | 'coffee-with-milk'
    | 'creamy-espresso'
    | 'cuban'
    | 'espresso'
    | 'hawaiian'
    | 'hot-chocolate'
    | 'iced-coffee'
    | 'irish'
    | 'latte'
    | 'macchiato'
    | 'mochaccino'
  price: number
  categories: string[]
}

export function Home() {
  const { coffees } = useContext(CartContext)

  if (!coffees) {
    return <p>Carregando...</p>
  }

  return (
    <HomeContainer>
      <Banner />

      <CoffeesContainer>
        <CoffeesTitle>Nossos cafés</CoffeesTitle>
        <CoffeesList>
          {coffees.map((coffee) => (
            <CoffeeProduct key={coffee.id} data={coffee} />
          ))}
        </CoffeesList>
      </CoffeesContainer>
    </HomeContainer>
  )
}
