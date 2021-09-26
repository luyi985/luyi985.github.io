import React from "react";
import { useLocation, useRouteMatch } from "react-router-dom";

export const Content: React.FunctionComponent<{}> = () => {
  const location = useLocation();
  const match = useRouteMatch();
  return (
    <p>
      Content
      {JSON.stringify({ location, match })}
    </p>
  );
};
