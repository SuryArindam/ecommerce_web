import React from "react";
import { Color } from "../../App.model";

export enum ButtonVariant {
  Text = "text",
  Contained = "contained",
  Outlined = "outlined",
}

export enum ButtonSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}
export interface IButton {
  id?: string;
  name?: string;
  variant?: ButtonVariant;
  color?: Color;
  icon?: React.ReactNode;
  children: React.ReactNode;
  size?: ButtonSize;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
