import styled from 'styled-components'

export const PaymentContainer = styled.div`
  width: 100%;
  min-height: 13rem;
  border-radius: 6px;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['base-card']};
`
