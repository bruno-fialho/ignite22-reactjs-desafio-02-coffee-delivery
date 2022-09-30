import { Minus, Plus } from 'phosphor-react'

import { CoffeeQuantityCustomInput } from './styles'

interface CustomQuantityInputProps {
  quantity: number
  heightInRem?: number
  onDecrementQuantity: () => void
  onIncrementQuantity: () => void
}

export function CustomQuantityInput({
  quantity,
  heightInRem = 2.375,
  onDecrementQuantity,
  onIncrementQuantity,
}: CustomQuantityInputProps) {
  function handleDecrementQuantity() {
    onDecrementQuantity()
  }

  function handleIncrementQuantity() {
    onIncrementQuantity()
  }

  return (
    <CoffeeQuantityCustomInput heightInRem={heightInRem}>
      <button
        type="button"
        onClick={handleDecrementQuantity}
        disabled={quantity === 1}
      >
        <Minus weight="bold" />
      </button>

      <input type="number" value={quantity} readOnly />

      <button
        type="button"
        onClick={handleIncrementQuantity}
        disabled={quantity === 10}
      >
        <Plus weight="bold" />
      </button>
    </CoffeeQuantityCustomInput>
  )
}
