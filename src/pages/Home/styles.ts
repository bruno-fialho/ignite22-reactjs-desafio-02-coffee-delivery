import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const CoffeesContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  height: 100%;
  margin: 0 auto;
  padding: 2rem 10rem 10rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 2rem 5rem 10rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem 10rem;
  }
`

export const CoffeesTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;

  color: ${(props) => props.theme['base-subtitle']};
`

export const CoffeesList = styled.div`
  flex: 1;
  margin-top: 3.375rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
`
