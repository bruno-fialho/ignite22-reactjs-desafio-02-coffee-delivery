import { useContext, useState } from 'react'
import { ShoppingCart } from 'phosphor-react'

import { CoffeeProps } from '../..'
import { CartContext } from '../../../../context/CartContext'
import { CustomQuantityInput } from '../../../../components/CustomQuantityInput'

import {
  CategoriesWrapper,
  CategoryBox,
  CoffeeAddToCartButton,
  CoffeeDescription,
  CoffeeFooter,
  CoffeePriceContainer,
  CoffeeProductContainer,
  CoffeeTitle,
} from './styles'

interface CoffeeProductProps {
  data: CoffeeProps
}

export function CoffeeProduct({ data }: CoffeeProductProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(1)

  const { name, description, type, price, categories } = data
  const { addItemToCart } = useContext(CartContext)

  const priceInteger = price.toString().split('.')[0]
  const priceDecimal = price.toString().split('.')[1].padEnd(2, '0')

  function decrementQuantity() {
    if (selectedQuantity > 1) {
      setSelectedQuantity((value) => value - 1)
    }
  }

  function incrementQuantity() {
    if (selectedQuantity < 10) {
      setSelectedQuantity((value) => value + 1)
    }
  }

  function handleAddToCart() {
    addItemToCart(data.id, selectedQuantity)
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

        <CustomQuantityInput
          quantity={selectedQuantity}
          onDecrementQuantity={decrementQuantity}
          onIncrementQuantity={incrementQuantity}
        />

        <CoffeeAddToCartButton onClick={handleAddToCart}>
          <ShoppingCart weight="fill" />
        </CoffeeAddToCartButton>
      </CoffeeFooter>
    </CoffeeProductContainer>
  )
}
