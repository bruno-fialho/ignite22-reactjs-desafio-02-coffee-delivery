import { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface CoffeeQuantityCustomInputProps extends HTMLAttributes<HTMLElement> {
  heightInRem: number
}

export const CoffeeQuantityCustomInput = styled.div<CoffeeQuantityCustomInputProps>`
  width: 4.5rem;
  height: ${(props) => `${props.heightInRem}rem`};
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;

  color: ${(props) => props.theme['base-title']};
  background-color: ${(props) => props.theme['base-button']};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button {
    height: 100%;
    border: 0;
    border-radius: 2px;
    background-color: transparent;
    color: ${(props) => props.theme.purple};
    padding: 0;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: color 0.2s;

    svg {
      width: 0.875rem;
      height: 0.875rem;
    }

    &:disabled {
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      color: ${(props) => props.theme['purple-dark']};
    }

    &:focus {
      box-shadow: none;
    }
  }

  input {
    width: 1.25rem;
    height: 1.25rem;
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme['base-title']};
    padding: 0;
    text-align: center;
    cursor: default;

    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    &:focus {
      box-shadow: none;
    }
  }
`
