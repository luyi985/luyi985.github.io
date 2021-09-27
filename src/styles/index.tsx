import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Theme, theme } from "../styles/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
		font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: ${theme.middleText};
    box-sizing: border-box;
  }

  p, span, input, button, li , a , label, strong, li {
    line-height: 1.4;
    font-size: inherit;
    color: inherit;
    text-decoration: unset;
  }

  a {
    font-style: italic;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 0;
    padding: 0;
  }

  div {
    line-height: 1;
    font-size: inherit;
    box-sizing: border-box;
  }

  h1, h2, h3, h4 {
    margin: 0 0 0 0;
    padding: 0;
    line-height: 1.2;
  }

  h1 {
    font-size: 25px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 16px;
  }
`;

export { GlobalStyle, ThemeProvider, Theme, theme };
