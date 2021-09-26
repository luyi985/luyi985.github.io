import React from "react";
import { AboutMe } from "@/aboutMe";
import { Content } from "@/content";
import { Repos } from "@/repos";
import { Page } from "@components/layout";
import { Menu } from "@components/menu";
import { Stress } from "@components/assets/stress";
import {
  HashRouter as Router,
  Switch,
  Route,
  RouteProps,
} from "react-router-dom";

import { useConfigStore } from "./configs";

const routes: RouteProps[] = [
  {
    path: `/about`,
    component: AboutMe,
  },
  {
    path: `/content/:name`,
    component: Content,
  },
  {
    path: `/repos/:name`,
    component: Repos,
  },
];

export const Main: React.FunctionComponent<{
  children?: React.ReactNode;
}> = ({ children }) => {
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
  return (
    <Router>
      <Page>
        <Menu />
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
        {!!children && children}
      </Page>
    </Router>
  );
};
