import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: #f5f5f5;
  }

  #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
  }

  body, input, button {
    font: 14px 'Roboto-bold', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
