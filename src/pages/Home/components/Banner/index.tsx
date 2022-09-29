import bannerImage from '../../../../assets/banner-image.svg'

import { BannerInfo } from '../BannerInfo'

import {
  BannerContainer,
  BannerInfoContainer,
  BannerSubtitle,
  BannerTextContainer,
  BannerTitle,
  BannerTitleContainer,
  BannerWrapper,
} from './styles'

export function Banner() {
  return (
    <BannerWrapper>
      <BannerContainer>
        <BannerTextContainer>
          <BannerTitleContainer>
            <BannerTitle>
              Encontre o café perfeito para qualquer hora do dia
            </BannerTitle>
            <BannerSubtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </BannerSubtitle>
          </BannerTitleContainer>
          <BannerInfoContainer>
            <div>
              <BannerInfo type="cart" text="Compra simples e segura" />
              <BannerInfo type="timer" text="Entrega rápida e rastreada" />
            </div>
            <div>
              <BannerInfo
                type="package"
                text="Embalagem mantém o café intacto"
              />
              <BannerInfo
                type="coffee"
                text="O café chega fresquinho até você"
              />
            </div>
          </BannerInfoContainer>
        </BannerTextContainer>

        <img src={bannerImage} alt="" />
      </BannerContainer>
    </BannerWrapper>
  )
}
