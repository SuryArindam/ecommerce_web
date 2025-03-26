import { Color } from "../../App.model";

export enum ButtonVariant {
  Text = "text",
  Contained = "contained",
  Outlined = "outlined",
}

export interface IButton {
  id?: string;
  name?: string;
  variant?: ButtonVariant;
  color?: Color;
  children?: React.ReactNode;
}
