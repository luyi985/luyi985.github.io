import { render } from "react-dom";
import React, { FunctionComponent } from "react";
import { GlobalStyle, theme, ThemeProvider } from "@/styles/index";
import { ConfigProvider } from "@/configs/index";
import { Main } from "@/main";
import "@/common/connection";
const App: FunctionComponent<{}> = () => {
  return (
    <ConfigProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </ConfigProvider>
  );
};

export const startApp = () => {
  render(<App />, document.getElementById("app"));
};
