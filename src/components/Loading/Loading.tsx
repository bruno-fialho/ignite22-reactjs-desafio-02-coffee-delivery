import { useLottie } from 'lottie-react'

import loadingAnimation from '../../assets/loading.json'

import { LoadingContainer } from './styles'

interface LoadingProps {
  isVerticallyCentered?: boolean
  animationSizeInRem?: number
}

export function Loading({
  isVerticallyCentered = true,
  animationSizeInRem,
}: LoadingProps) {
  const { View } = useLottie({
    animationData: loadingAnimation,
    loop: true,
  })

  return (
    <LoadingContainer
      isVerticallyCentered={isVerticallyCentered}
      animationSizeInRem={animationSizeInRem}
    >
      {View}
    </LoadingContainer>
  )
}
