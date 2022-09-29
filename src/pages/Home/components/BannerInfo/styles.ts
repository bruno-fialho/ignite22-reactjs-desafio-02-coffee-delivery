import styled from 'styled-components'

export const BannerInfoContainer = styled.div`
  width: 100%;
  height: 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
`

const STATUS_COLORS = {
  cart: 'yellow-dark',
  timer: 'yellow',
  package: 'base-text',
  coffee: 'purple',
} as const

interface StatusProps {
  type: keyof typeof STATUS_COLORS
}

export const BannerInfoIconWrapper = styled.div<StatusProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 999px;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme[STATUS_COLORS[props.type]]};

  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1rem;
    height: 1rem;
  }
`

export const BannerInfoText = styled.p``
