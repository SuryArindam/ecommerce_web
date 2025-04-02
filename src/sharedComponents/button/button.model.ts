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
  className?: string;
  variant?: ButtonVariant;
  color?:
    | Color.Primary
    | Color.Secondary
    | Color.Success
    | Color.Error
    | Color.Info
    | Color.Warning;
  icon?: React.ReactNode;
  children: React.ReactNode;
  size?: ButtonSize;
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  fullWidth?: boolean;
}
