import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  height: 100%;
  margin: 6.5rem auto 0;
  padding: 2.5rem 10rem 15rem;

  display: grid;
  grid-template-columns: 1.428571429fr 1fr;
  gap: 2rem;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1.125rem;

    padding: 2.5rem 5rem 15rem;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 2rem 15rem;
  }
`

export const LeftContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.75rem;
`

export const CheckoutTitle = styled.h3`
  font-size: 1.125rem;
`

export const RightContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.75rem;
`
