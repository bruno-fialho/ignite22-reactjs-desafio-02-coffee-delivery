import styled, { css } from 'styled-components'

interface CustomInputProps {
  isError: boolean
}

export const CustomInput = styled.input<CustomInputProps>`
  width: 100%;
  height: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  ${(props) =>
    props.isError &&
    css`
      border: 1px solid red;
    `}
`
