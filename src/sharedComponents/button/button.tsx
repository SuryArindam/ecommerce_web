import React from "react";
import { ButtonSize, ButtonVariant, IButton } from "./button.model";
import { Color } from "src/App.model";
import { Button as MUI_Button } from "@mui/material";

export const Button: React.FC<IButton> = ({
  color,
  id,
  name,
  variant,
  children,
  icon,
  size,
  onClick,
  fullWidth,
  className,
}) => {
  return (
    <MUI_Button
      onClick={onClick}
      className={className}
      variant={variant ?? ButtonVariant.Contained}
      color={color ?? Color.Primary}
      id={id}
      name={name}
      endIcon={icon ? icon : null}
      size={size ?? ButtonSize.Medium}
      fullWidth={fullWidth ?? false}
    >
      {children}
    </MUI_Button>
  );
};
