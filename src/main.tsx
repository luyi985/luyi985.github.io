import React, { ReactNode } from "react";
import { AboutMe } from "@/aboutMe";
import { Content } from "@/content";
import { Repos } from "@/repos";
import { Layout, Page } from "@components/layout";
import { Share } from "@components/share";
import { Menu } from "@components/menu";
import { Stress } from "@components/assets/stress";
import {
  HashRouter as Router,
  Switch,
  Route,
  RouteProps,
  Link,
  Redirect,
} from "react-router-dom";

import { useConfigStore } from "./configs";
import { render } from "react-dom";

const PageHeader: React.FunctionComponent<{}> = () => {
  return (
    <Layout
      background="secondaryDark"
      template={"65px 50px 1fr"}
      align="flex-end"
    >
      <Link to="/" className="normal no-lingHight">
        <h1 className="no-lingHight">Lu Yi</h1>
      </Link>
      <Link to="/about" className="no-lingHight">
        About
      </Link>
      <Share justify="flex-end" />
    </Layout>
  );
};

const AppLayout: React.FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <Page column>
      <PageHeader />
      <Menu />
      {children}
    </Page>
  );
};

const routes: RouteProps[] = [
  // {
  //   path: `/`,
  //   render: () => (
  //     <AppLayout>
  //       <p>home page</p>
  //     </AppLayout>
  //   ),
  // },
  {
    path: `/about`,
    render: () => (
      <AppLayout>
        <AboutMe />
      </AppLayout>
    ),
  },
  {
    path: `/content/:name`,
    render: () => (
      <AppLayout>
        <Content />
      </AppLayout>
    ),
  },
  {
    path: `/repos/:name`,
    render: () => (
      <AppLayout>
        <Repos />
      </AppLayout>
    ),
  },
  {
    path: `*`,
    render: () => (
      <AppLayout>
        <p>home page</p>
      </AppLayout>
    ),
  },
];

export const Main: React.FunctionComponent<{}> = () => {
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
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
        {/* <Redirect to="/" /> */}
      </Switch>
    </Router>
  );
};
