import React, { FunctionComponent } from "react";
import { useConfigStore } from "./configs";
import { Page } from "./components/Page";
import { Stress } from "./components/icons/Stress";
import {} from "react-router";
export const MainPage: FunctionComponent<{}> = () => {
  const [config, actions] = useConfigStore();
  const { isToShutDown } = config;

  if (isToShutDown) {
    return (
      <Page align={"center"} justify={"center"} column>
        <h1>Comming Soon!</h1>
        <Stress />
      </Page>
    );
  }
  return <Page></Page>;
};
