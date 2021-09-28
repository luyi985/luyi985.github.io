import React from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import { Layout } from "./layout";
import { Facebook, LinkedIn, Twitter } from "./assets/icons";
import { Modal } from "./modal";
import { Button, IconBtn } from "./button";
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
      <Modal
        title="Test"
        button={({ setOpen }) => (
          <IconBtn onClick={() => setOpen(true)} width={30} height={30}>
            <Facebook />
          </IconBtn>
        )}
        content={() => (
          <div>
            <p>modal content</p>
          </div>
        )}
      />

      <Modal
        title="Test"
        button={({ setOpen }) => (
          <IconBtn onClick={() => setOpen(true)} width={30} height={30}>
            <LinkedIn />
          </IconBtn>
        )}
        content={() => (
          <div>
            <p>modal content 1</p>
          </div>
        )}
      />

      <Modal
        title="Test"
        button={({ setOpen }) => (
          <IconBtn onClick={() => setOpen(true)} width={30} height={30}>
            <Twitter />
          </IconBtn>
        )}
        content={() => (
          <div>
            <p>modal content 2</p>
          </div>
        )}
      />
    </Layout>
  );
};
