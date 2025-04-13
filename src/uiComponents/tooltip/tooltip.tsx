import React from "react";
import { Fade, Grow, Tooltip as MUI_Tooltip, Zoom } from "@mui/material";
import {
  ITooltipProps,
  TooltipPosition,
  TooltipTransitionType,
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
  const getTransition = (transition: TooltipTransitionType) => {
    switch (transition) {
      case TooltipTransitionType.Fade:
        return Fade;
      case TooltipTransitionType.Grow:
        return Grow;
      case TooltipTransitionType.Zoom:
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
      open={open}
      slots={{
        transition: transition ? getTransition(transition) : Grow,
      }}
    >
      {children}
    </MUI_Tooltip>
  );
};
