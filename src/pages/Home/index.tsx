import { useContext } from 'react'
import { Loading } from '../../components/Loading/Loading'

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

  return (
    <HomeContainer>
      <Banner />

      <CoffeesContainer>
        <CoffeesTitle>Nossos cafés</CoffeesTitle>

        {coffees.length === 0 ? (
          <Loading isVerticallyCentered={false} />
        ) : (
          <CoffeesList>
            {coffees.map((coffee) => (
              <CoffeeProduct key={coffee.id} data={coffee} />
            ))}
          </CoffeesList>
        )}
      </CoffeesContainer>
    </HomeContainer>
  )
}
