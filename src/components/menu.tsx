import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@components/button";
import React from "react";

const Styles = styled.div``;

export const Menu: React.FunctionComponent<{}> = () => {
  return (
    <Styles>
      <Link to="/content/abc">Content</Link>
      <Link to="/repos/abc">Repos</Link>
      <Button bgColor="primaryDark">Test</Button>
    </Styles>
  );
};
