import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-SemiBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway-Medium.ttf') format('truetype');
  }

  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
    display: flex;
    flex: 1;
  }
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
  body {
    background-color: #0400ad;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    flex: 1;
    display: flex;

    font-family: Raleway;
  }

  #root {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    flex: 1;
    display: flex;

    font-family: Raleway;
  }

  h1, h2, h3, h4, h5 {
    font-family: Poppins;
  }
`;

export default globalStyle;
