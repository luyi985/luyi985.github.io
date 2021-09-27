import { Theme } from "@/styles";
import React from "react";
import styled, { css } from "styled-components";
type BGColor = keyof Theme;

export const Page = styled.div<{
  background?: BGColor;
  justify?: "flex-start" | "flex-end" | "center";
  align?: "flex-start" | "flex-end" | "center";
  column?: boolean;
}>`
  background-color: ${({ theme, background }) =>
    theme[background] || theme.textBackground};
  color: ${({ theme, background }) => theme[`${background}Text`] || theme.text};
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "flex-start"};
  width: 100%;
  min-height: 100vh;
  overflow: auto;
`;

export const Layout = styled.div<{
  template?: string;
  justify?: "flex-start" | "flex-end" | "center";
  align?: "flex-start" | "flex-end" | "center";
  background?: BGColor;
  padding?: string;
  gap?: number;
}>`
  padding: ${({ padding }) => padding || "20px"};
  width: 100%;
  display: grid;
  grid-template-columns: ${({ template }) => template || "1fr"};
  grid-gap: ${({ gap }) => `${gap || 20}px`};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "flex-start"};
  background-color: ${({ theme, background }) =>
    theme[background] || "transparent"};
  color: ${({ theme, background }) => theme[`${background}Text`] || theme.text};
`;
