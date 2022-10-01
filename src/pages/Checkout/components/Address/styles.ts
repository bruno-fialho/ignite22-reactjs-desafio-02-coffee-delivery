import styled from 'styled-components'

export const AddressContainer = styled.div`
  width: 100%;
  min-height: 23.25rem;
  border-radius: 6px;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AddressHeader = styled.header`
  width: 100%;
  min-height: 2.75rem;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;

  svg {
    width: 1.375rem;
    height: 1.375rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  div {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    p:first-of-type {
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p:last-of-type {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`

export const FirstLine = styled.div`
  width: 100%;
  min-height: 2.265rem;

  input {
    max-width: 12.5rem;
  }
`

export const SecondLine = styled.div`
  width: 100%;
  min-height: 2.265rem;
`

export const ThirdLine = styled.div`
  width: 100%;
  min-height: 2.265rem;

  display: grid;
  grid-template-columns: 1fr 1.74fr;
  gap: 0.75rem;
`

export const FourthLine = styled.div`
  width: 100%;
  min-height: 2.265rem;

  display: grid;
  grid-template-columns: 3.333333333fr 4.6fr 1fr;
  gap: 0.75rem;

  @media (max-width: 576px) {
    grid-template-columns: 2.5fr 4fr 1fr;
  }
`
