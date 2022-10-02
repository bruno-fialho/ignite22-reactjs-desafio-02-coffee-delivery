export function getPriceString(price: number): string {
  const priceInteger = price.toString().split('.')[0]
  const priceDecimal = price.toFixed(2).toString().split('.')[1].padEnd(2, '0')

  return `${priceInteger},${priceDecimal}`
}
