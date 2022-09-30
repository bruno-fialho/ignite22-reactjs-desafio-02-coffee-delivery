import styled from 'styled-components'

export const CustomInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
