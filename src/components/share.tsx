import React from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import { Layout } from "./layout";
import { Facebook, LinkedIn, Twitter } from "./assets/icons";
import { useConfigStore } from "@/configs";
import { IconBtn } from "./button";
import { get } from "lodash";

const useShare = (args: {
  url?: string;
  title?: string;
  summary?: string;
  width?: number;
  height?: number;
}): {
  shareFacebook: () => void;
  shareTwitter: () => void;
  shareLinkedin: () => void;
} => {
  const { url, title, summary, width, height } = args;
  const [shareData, setShareDate] = React.useState<{
    faceBookUrl: string;
    twitterUrl: string;
    linkedinUrl: string;
    windowParams: string;
  }>({
    faceBookUrl: "",
    twitterUrl: "",
    linkedinUrl: "",
    windowParams: "",
  });
  const [configs, actions] = useConfigStore();
  const shareUrl = url || configs.webHomeUrl;
  const shareTitle = title || configs.webTitle;
  const shareSummary = summary || configs.webSummary;
  React.useEffect(() => {
    if (!shareUrl) return;
    const w = width || 600;
    const h = height || 500;
    const y = window.top.outerHeight / 2 + window.top.screenY - h / 2;
    const x = window.top.outerWidth / 2 + window.top.screenX - w / 2;
    setShareDate({
      linkedinUrl: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}&summary=${summary}`,
      twitterUrl: `https://twitter.com/intent/tweet?text=${shareTitle} - ${shareSummary}&url=${shareUrl}`,
      faceBookUrl: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&src=sdkpreparse`,
      windowParams: `menubar=yes,status=yes,width=${w},height=${h},left=${x},top=${y}`,
    });
  }, [shareUrl]);

  const shareFacebook = () => {
    window.open(shareData.faceBookUrl, title, shareData.windowParams);
  };
  const shareTwitter = () => {
    window.open(shareData.twitterUrl, title, shareData.windowParams);
  };
  const shareLinkedin = () => {
    window.open(shareData.linkedinUrl, title, shareData.windowParams);
  };

  return { shareFacebook, shareTwitter, shareLinkedin };
};

export const Share: React.FunctionComponent<{
  url?: string;
  title?: string;
  summary?: string;
  justify?: "flex-start" | "center" | "flex-end";
}> = ({ url, title, summary, justify }) => {
  const { shareFacebook, shareTwitter, shareLinkedin } = useShare({
    url,
    title,
    summary,
  });

  return (
    <Layout
      template={"repeat(3, 30px)"}
      padding={"0"}
      gap={5}
      align="center"
      justify={justify}
    >
      <IconBtn onClick={shareFacebook} width={30} height={30}>
        <Facebook />
      </IconBtn>
      <IconBtn onClick={shareLinkedin} width={30} height={30}>
        <LinkedIn />
      </IconBtn>
      <IconBtn onClick={shareTwitter} width={30} height={30}>
        <Twitter />
      </IconBtn>
    </Layout>
  );
};
