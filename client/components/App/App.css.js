import { createGlobalStyle } from "styled-components";

import { Color } from "../../styles";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${Color.HARRY};
  }

  a {
    text-decoration: none;
  }
`;
