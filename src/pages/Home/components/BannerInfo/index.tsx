import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
  BannerInfoContainer,
  BannerInfoIconWrapper,
  BannerInfoText,
} from './styles'

interface BannerInfoProps {
  text: string
  type: 'cart' | 'timer' | 'package' | 'coffee'
}

export function BannerInfo({ text, type }: BannerInfoProps) {
  return (
    <BannerInfoContainer>
      <BannerInfoIconWrapper type={type}>
        {type === 'cart' && <ShoppingCart weight="fill" />}
        {type === 'timer' && <Timer weight="fill" />}
        {type === 'package' && <Package weight="fill" />}
        {type === 'coffee' && <Coffee weight="fill" />}
      </BannerInfoIconWrapper>

      <BannerInfoText>{text}</BannerInfoText>
    </BannerInfoContainer>
  )
}
