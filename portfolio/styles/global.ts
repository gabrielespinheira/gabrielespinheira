import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #0070F3;
    --radius: 12px;
    --font: 'Open Sans', sans-serif;
    --white: #FFFFFE;
    --black: #050406;
  }

  [data-theme="dark"] {
    --text: #EFEFEF;
    --bg: #050406;
    --shape: #1A1A1A;
    --bgTransp: rgba(75, 75, 75, 0.3);
    --navyBlue: #4a5f79;
  }

  [data-theme="light"] {
    --text: #3A4553;
    --bg: #FFFFFE;
    --shape: #ECECEC;
    --bgTransp: rgba(32, 32, 32, 0.10);
    --navyBlue: #3A4553;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: var(--text);
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }

  body {
    // font-family: var(--font);
    color: var(--text);
    background: var(--bg);
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  button,
  input,
  textarea,
  a,
  p {
    // font-family: var(--font);
    outline: none;
  }

  .container {
    width: 100%;
    max-width: 1410px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 899px) {
      padding: 0 15px;
    }
  }

  body .__react_component_tooltip.show {
    background: var(--primary);
    color: var(--text);
    // font-family: var(--font);
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 14px;
    margin-top: -5px;
    opacity: 1;
  }
`

export default GlobalStyle
