import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 100%;
  min-height: 31.125rem;
  border-radius: 6px 44px;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['base-card']};
`

export const EmptyCartMessageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;

  p:first-of-type {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p:last-of-type {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  svg {
    width: 8rem;
    height: 8rem;
    margin-bottom: 4rem;

    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CartItemContainer = styled.div`
  width: 100%;
  min-height: 6.5rem;
  padding: 0.5rem 0.25rem 2rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  display: grid;
  grid-template-columns: 1fr 2.6875fr 1.0625fr;

  & > img {
    width: 4rem;
    height: 4rem;

    margin-right: 1.25rem;
  }

  & + & {
    margin-top: 1.5rem;
  }
`

export const NameAndQuantityContainer = styled.div`
  width: 10.75rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const NameText = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
`

export const InputAndButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const PriceWrapper = styled.div`
  width: 100%;
  height: 100%;

  font-weight: 700;
  color: ${(props) => props.theme['base-text']};

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`

export const RemoveButton = styled.button`
  min-width: 5.75rem;
  height: 2rem;
  border: 0;
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;

  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-button']};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.purple};
    margin-right: 0.25rem;
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const TotalContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const TotalLine = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.theme['base-text']};

  p:first-of-type {
    font-size: 0.875rem;
  }

  span {
    font-size: 1.25rem;
    font-weight: 700;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  height: 2.875rem;
  padding: 0.75rem;
  border: 0;
  border-radius: 6px;
  /* border: 1px solid transparent; */
  cursor: pointer;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1.5rem;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
