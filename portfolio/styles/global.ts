import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SF Pro Display';
    src: url('/fonts/SFProDisplay-Thin.otf');
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: url('/fonts/SFProDisplay-Regular.otf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: url('/fonts/SFProDisplay-Medium.otf');
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: url('/fonts/SFProDisplay-Bold.otf');
    font-style: normal;
    font-weight: 600;
    font-display: swap;
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
    color: inherit;
    text-decoration: none;
    transition: color .4s;

    &:hover {
      color: #0070f3;
      transition: color .4s;
    }
  }

  body {
    font-family: 'SF Pro Display', sans-serif;
    color: #16161a;
    background: #fffffe;
  }

  button,
  input,
  textarea {
    outline: none;
  }

  h1 {
    font-size: 56px;
    font-weight: 500;
  }

  h2 {
    font-size: 32px;
    font-weight: 500;
  }

  .container {
    width: 100%;
    max-width: 1250px;
    margin: 0 auto;
    padding: 20px;
  }
`

export default GlobalStyle
