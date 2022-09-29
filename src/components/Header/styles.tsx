import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;

  background-color: ${(props) => props.theme.background};
`

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  height: 6.5rem;
  margin: 0 auto;
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
        width: 1.375rem;
        height: 1.375rem;

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

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 1.375rem;
        height: 1.375rem;
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 0 5rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`
