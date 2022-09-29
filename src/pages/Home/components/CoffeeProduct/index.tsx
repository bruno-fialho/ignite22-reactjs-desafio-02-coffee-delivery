import { useState } from 'react'

import {
  CategoriesWrapper,
  CategoryBox,
  CoffeeAddToCartButton,
  CoffeeDescription,
  CoffeeFooter,
  CoffeePriceContainer,
  CoffeeProductContainer,
  CoffeeQuantityCustomInput,
  CoffeeTitle,
} from './styles'

import { CoffeeProps } from '../..'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

interface CoffeeProductProps {
  data: CoffeeProps
}

export function CoffeeProduct({ data }: CoffeeProductProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(1)

  const { name, description, type, price, categories } = data

  const priceInteger = price.toString().split('.')[0]
  const priceDecimal = price.toString().split('.')[1].padEnd(2, '0')

  function handleDecrementQuantity() {
    if (selectedQuantity > 1) {
      setSelectedQuantity((value) => value - 1)
    }
  }

  function handleIncrementQuantity() {
    if (selectedQuantity < 10) {
      setSelectedQuantity((value) => value + 1)
    }
  }

  return (
    <CoffeeProductContainer>
      <img src={`./coffees/${type}.svg`} alt="" />

      <CategoriesWrapper>
        {categories.map((category) => (
          <CategoryBox key={category}>{category}</CategoryBox>
        ))}
      </CategoriesWrapper>

      <CoffeeTitle>{name}</CoffeeTitle>

      <CoffeeDescription>{description}</CoffeeDescription>

      <CoffeeFooter>
        <CoffeePriceContainer>
          <span>R$</span>
          <h3>{`${priceInteger},${priceDecimal}`}</h3>
        </CoffeePriceContainer>

        <CoffeeQuantityCustomInput>
          <button
            type="button"
            onClick={handleDecrementQuantity}
            disabled={selectedQuantity === 1}
          >
            <Minus weight="bold" />
          </button>

          <input type="number" value={selectedQuantity} readOnly />

          <button
            type="button"
            onClick={handleIncrementQuantity}
            disabled={selectedQuantity === 10}
          >
            <Plus weight="bold" />
          </button>
        </CoffeeQuantityCustomInput>

        <CoffeeAddToCartButton>
          <ShoppingCart weight="fill" />
        </CoffeeAddToCartButton>
      </CoffeeFooter>
    </CoffeeProductContainer>
  )
}
