import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  height: 100%;
  margin: 6.5rem auto 0;
  padding: 5rem 10rem 15rem;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 1200px) {
    padding: 5rem 5rem 15rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;

    padding: 5rem 2rem 15rem;
  }
`

export const SuccessContent = styled.div`
  min-width: 47%;
  display: flex;
  flex-direction: column;
`
export const SuccessTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme['yellow-dark']};
`

export const SuccessSubtitle = styled.p`
  margin-top: 0.25rem;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const DeliveryInfoContainer = styled.div`
  width: 100%;
  min-height: 16.875rem;
  margin-top: 2.5rem;
  padding: 2.5rem;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    padding: 1px;
    background: linear-gradient(
        102.89deg,
        ${(props) => props.theme.yellow} 2.61%,
        ${(props) => props.theme.purple} 98.76%
      )
      border-box;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const AddressInfoContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  span {
    font-weight: 700;
  }

  svg {
    width: 1rem;
    height: 1rem;

    color: ${(props) => props.theme.white};
  }

  div:first-of-type {
    background-color: ${(props) => props.theme.purple};
  }
`

export const TimeInfoContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  span {
    font-weight: 700;
  }

  svg {
    width: 1rem;
    height: 1rem;

    color: ${(props) => props.theme.white};
  }

  div:first-of-type {
    background-color: ${(props) => props.theme.yellow};
  }
`

export const PaymentInfoContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  span {
    font-weight: 700;
  }

  svg {
    width: 1rem;
    height: 1rem;

    color: ${(props) => props.theme.white};
  }

  div:first-of-type {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const IconWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 999px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const SuccessImageContainer = styled.div`
  margin-top: 6.25rem;

  img {
    width: 30.75rem;
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 1200px) {
    max-width: 40%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`
