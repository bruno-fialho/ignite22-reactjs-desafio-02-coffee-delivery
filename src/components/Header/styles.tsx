import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  padding: 0 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: auto;
    height: 2.5rem;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    button {
      width: auto;
      height: 2.375rem;
      border: 0;
      border-radius: 6px;
      padding: 0.5rem;

      background-color: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 0.25rem;

      font-size: 0.875rem;

      svg {
        color: ${(props) => props.theme.purple};
      }
    }

    a {
      width: 2.375rem;
      height: 2.375rem;
      border-radius: 6px;
      padding: 0.5rem;

      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

// export const CityButton = styled.button``

// export const CartButton = styled.button``
