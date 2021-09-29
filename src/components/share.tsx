import React from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import { Layout } from "./layout";
import { Facebook, LinkedIn, Twitter } from "./assets/icons";
import { Modal } from "./modal";
import { Button, IconBtn } from "./button";
import { get } from "lodash";
export const Share: React.FunctionComponent<{
  url?: string;
  title?: string;
  text?: string;
  justify?: "flex-start" | "center" | "flex-end";
}> = ({ url, title, text, justify }) => {
  const match = useRouteMatch();
  const shareUrl = url || location.href;
  const shareTitle = title || get(match, ["params", "name"], "");
  const shareSummary = text || "";
  const w = 400;
  const h = 300;
  const y = window.top.outerHeight / 2 + window.top.screenY - h / 2;
  const x = window.top.outerWidth / 2 + window.top.screenX - w / 2;
  return (
    <Layout
      template={"repeat(3, 30px)"}
      padding={"0"}
      gap={5}
      align="center"
      justify={justify}
    >
      <Modal
        title="Share on Facebook"
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
        title="Share on LinkedIn"
        button={({ setOpen }) => (
          <IconBtn
            onClick={
              //() => setOpen(true)} width={30} height={30}
              () =>
                window.open(
                  `https://www.linkedin.com/shareArticle?mini=true&url=${"https://luyi985.github.io/"}&title=${shareTitle}&summary=${shareSummary}`,
                  shareTitle,
                  `menubar=yes,status=yes,width=${w},height=${h},left=${x},top=${y}`
                )
            }
          >
            <LinkedIn />
          </IconBtn>
        )}
        content={() => (
          <iframe
            src={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}&summary=${shareSummary}`}
          ></iframe>
        )}
      />

      <Modal
        title="Share on Twitter"
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
