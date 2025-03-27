import React from "react";
import { ButtonSize, ButtonVariant, IButton } from "./button.model";
import { Color } from "../../App.model";
import { Button as MUI_Button } from "@mui/material";

export const Button: React.FC<IButton> = ({
  color,
  id,
  name,
  variant,
  children,
  icon,
  size,
}) => {
  return (
    <MUI_Button
      variant={variant ?? ButtonVariant.Contained}
      color={color ?? Color.Primary}
      id={id}
      name={name}
      endIcon={icon ? icon : null}
      size={size ?? ButtonSize.Medium}
    >
      {children}
    </MUI_Button>
  );
};
