import React from "react";
import styled, { css } from "styled-components";
export const Page = styled.div<{
  justify?: "flex-start" | "flex-end" | "center";
  align?: "flex-start" | "flex-end" | "center";
  column?: boolean;
}>`
  background-color: ${({ theme }) => theme.textBackground};
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "flex-start"};
  padding: 20px;
  width: 100%;
  height: 100vh;
  overflow: auto;
`;
