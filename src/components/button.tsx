import React from "react";
import styled, { css } from "styled-components";
import { Theme } from "@/styles/theme";

export const Button = styled.button<{
  bgColor?: keyof Theme;
  width?: number;
  height?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.2;
  padding: 5px;
  font-size: ${({ theme }) => theme.middleText};
  background-color: ${({ theme, bgColor }) => theme[bgColor] || "transparent"};
  color: ${({ theme, bgColor }) => theme[`${bgColor}Text`] || theme.text};
  min-height: 30px;
  border-radius: 5px;
  transition: opacity 0.3s ease;
  cursor: pointer;
  ${({ width }) =>
    css`
      width: ${!!width ? `${width}px` : "auto"};
      min-width: ${!width ? `100px` : "auto"};
    `}

  ${({ height }) =>
    css`
      height: ${!!height ? `${height}px` : "auto"};
    `};

  &:hover,
  &:active {
    opacity: 0.9;
  }
`;

export const IconBtn = styled(Button)`
  background-color: transparent;
  transition: transform 0.3s ease;
  ${({ width }) =>
    css`
      width: ${width || 30}px;
      height: ${width || 30}px;
      min-width: auto;
    `}
  padding: 0;
  svg {
    width: 100%;
    height: 100%;
  }
  &:active,
  &:hover {
    transform: scale(1.03);
  }
`;
