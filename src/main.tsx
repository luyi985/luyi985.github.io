import { render } from "react-dom";
import React, { FunctionComponent } from "react";
import { GlobalStyle, theme, ThemeProvider } from "./styles";
import { ConfigProvider } from "./configs";
import { MainPage } from "./mainPage";
import "./connection";
const App: FunctionComponent<{}> = () => {
  return (
    <ConfigProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainPage />
      </ThemeProvider>
    </ConfigProvider>
  );
};

export const startApp = () => {
  render(<App />, document.getElementById("app"));
};
