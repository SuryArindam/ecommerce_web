import React from "react";
import { Fade, Grow, Tooltip as MUI_Tooltip, Zoom } from "@mui/material";
import {
  ITooltipProps,
  TooltipPosition,
  TransitionType,
} from "./tooltip.model";
export const Tooltip: React.FC<ITooltipProps> = ({
  children,
  title,
  arrow,
  direction,
  enterDelay,
  followCursor,
  leaveDelay,
  open,
  transition,
}) => {
  const getTransition = (transition: TransitionType) => {
    switch (transition) {
      case TransitionType.Fade:
        return Fade;
      case TransitionType.Grow:
        return Grow;
      case TransitionType.Zoom:
        return Zoom;
    }
  };
  return (
    <MUI_Tooltip
      title={title}
      arrow={arrow !== undefined ? true : arrow}
      placement={direction ?? TooltipPosition.Bottom}
      enterDelay={enterDelay}
      followCursor={followCursor}
      leaveDelay={leaveDelay}
      open={open ?? true}
      slots={{
        transition: transition ? getTransition(transition) : Grow,
      }}
    >
      {children}
    </MUI_Tooltip>
  );
};
