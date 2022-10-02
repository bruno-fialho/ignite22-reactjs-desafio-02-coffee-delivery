import { Minus, Plus } from 'phosphor-react'

import { CoffeeQuantityCustomInput } from './styles'

interface CustomQuantityInputProps {
  itemId: string
  quantity: number
  heightInRem?: number
  onDecrementQuantity: (id: string) => void
  onIncrementQuantity: (id: string) => void
}

export function CustomQuantityInput({
  itemId,
  quantity,
  heightInRem = 2.375,
  onDecrementQuantity,
  onIncrementQuantity,
}: CustomQuantityInputProps) {
  function handleDecrementQuantity() {
    onDecrementQuantity(itemId)
  }

  function handleIncrementQuantity() {
    onIncrementQuantity(itemId)
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
