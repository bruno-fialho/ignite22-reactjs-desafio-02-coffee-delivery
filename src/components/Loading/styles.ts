import styled, { css } from 'styled-components'

interface LoadingContainerProps {
  isVerticallyCentered?: boolean
  animationSizeInRem?: number
}

export const LoadingContainer = styled.div<LoadingContainerProps>`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    props.isVerticallyCentered
      ? css`
          justify-content: center;
        `
      : css`
          margin-top: 2rem;
          justify-content: flex-start;
        `}

  svg {
    width: ${(props) =>
      props.animationSizeInRem
        ? `${props.animationSizeInRem}rem !important`
        : '15rem !important'};
    height: ${(props) =>
      props.animationSizeInRem
        ? `${props.animationSizeInRem}rem !important`
        : '15rem !important'};
  }
`
