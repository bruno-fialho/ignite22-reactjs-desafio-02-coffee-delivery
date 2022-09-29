import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.3;
  }

  @media (max-width: 1200px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 75%;
    }
  }
`
