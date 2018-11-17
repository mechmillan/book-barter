import { createGlobalStyle } from "styled-components";

import { Color } from "../../styles";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', 'Lato', 'sans-serif';
    margin: 0;
    background: ${Color.HARRY};
  }

  a {
    text-decoration: none;
  }
`;
