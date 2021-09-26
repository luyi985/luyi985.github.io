import React from "react";
import { useLocation } from "react-router-dom";

export const Repos: React.FunctionComponent<{}> = () => {
  const location = useLocation();
  return (
    <p>
      Reops
      {JSON.stringify(location)}
    </p>
  );
};
