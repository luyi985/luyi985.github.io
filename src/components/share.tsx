import React from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import { Layout } from "./layout";
import { Facebook, LinkedIn, Twitter } from "./assets/icons";
export const Share: React.FunctionComponent<{
  url?: string;
  title?: string;
  text?: string;
  justify?: "flex-start" | "center" | "flex-end";
}> = ({ url, title, text, justify }) => {
  const match = useRouteMatch();
  console.log({ match, url: location.href });
  return (
    <Layout
      template={"repeat(3, 30px)"}
      padding={"0"}
      gap={5}
      align="center"
      justify={justify}
    >
      <Facebook />
      <LinkedIn />
      <Twitter />
    </Layout>
  );
};
