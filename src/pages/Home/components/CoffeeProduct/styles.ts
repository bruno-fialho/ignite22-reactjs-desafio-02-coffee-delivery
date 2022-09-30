import styled from 'styled-components'

export const CoffeeProductContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  padding: 0 1.25rem 1.25rem;

  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: calc(0px - 1.25rem);
  }
`

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;

  margin-top: 0.75rem;
`

export const CategoryBox = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 999px;

  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};

  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const CoffeeTitle = styled.h3`
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};

  margin-top: 1rem;
`

export const CoffeeDescription = styled.p`
  font-size: 0.875rem;
  text-align: center;
  color: ${(props) => props.theme['base-label']};

  margin-top: 0.5rem;
`

export const CoffeeFooter = styled.footer`
  width: 100%;
  height: 2.375rem;
  margin-top: 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    margin-right: 0.25rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-text']};
  }
`
export const CoffeePriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CoffeeAddToCartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  cursor: pointer;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['purple-dark']};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
