import styled from 'styled-components'

export const PaymentContainer = styled.div`
  width: 100%;
  min-height: 13rem;
  border-radius: 6px;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const PaymentHeader = styled.header`
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
    color: ${(props) => props.theme.purple};
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

export const InputContainer = styled.div`
  width: 100%;
  min-height: 3.125rem;

  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  label {
    width: 100%;
    height: 100%;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid transparent;
    cursor: pointer;

    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-button']};

    font-size: 0.75rem;
    text-transform: uppercase;
    line-height: 1.6;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;

    transition: background-color 0.2s;

    svg {
      width: 1rem;
      height: 1rem;
      color: ${(props) => props.theme.purple};
    }

    input {
      display: none;
    }
  }

  label:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  label:has(input:checked) {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;

    label {
      max-width: 50%;
    }
  }
`
