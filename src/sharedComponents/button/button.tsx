import React from "react";
import { ButtonVariant, IButton } from "./button.model";
import { Color } from "../../App.model";
import { Button as MUI_Button } from "@mui/material";

export const Button: React.FC<IButton> = ({
  color,
  id,
  name,
  variant,
  children,
}) => {
  return (
    <MUI_Button
      variant={variant ?? ButtonVariant.Contained}
      color={color ?? Color.Primary}
      id={id}
      name={name}
    >
      {children}
    </MUI_Button>
  );
};
