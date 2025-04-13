import { ReactElement } from "react";

export enum TooltipPosition {
  BottomEnd = "bottom-end",
  BottomStart = "bottom-start",
  Bottom = "bottom",
  LeftEnd = "left-end",
  LeftStart = "left-start",
  Left = "left",
  RightEnd = "right-end",
  RightStart = "right-start",
  Right = "right",
  TopEnd = "top-end",
  TopStart = "top-start",
  Top = "top",
}
export enum TooltipTransitionType {
  Fade = "Fade",
  Grow = "Grow",
  Zoom = "Zoom",
}
export interface ITooltipProps {
  children: ReactElement;
  title: string;
  arrow?: boolean;
  enterDelay?: number;
  followCursor?: boolean;
  leaveDelay?: number;
  open?: boolean;
  direction?: TooltipPosition;
  transition?: TooltipTransitionType;
}
