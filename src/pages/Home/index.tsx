import { useEffect, useState } from 'react'
import { api } from '../../services/api'
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
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])

  async function getCoffees() {
    try {
      const coffeesList = await api.get<CoffeeProps[]>('/coffees')

      setCoffees(coffeesList.data)
    } catch (err) {
      console.log('err', err)
    }
  }

  useEffect(() => {
    getCoffees()
  }, [])

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
