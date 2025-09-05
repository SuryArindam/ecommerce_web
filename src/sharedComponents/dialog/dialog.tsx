import React, { useMemo } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IButton } from "../button/button.model";
import classes from "./dialog.module.css";
import { Button } from "../button/button";

interface IDialogBoxProps {
  header?: string;
  onHide: () => void;
  buttons: IButton[];
  children?: React.ReactNode;
}

export const DialogBox: React.FC<IDialogBoxProps> = ({
  onHide,
  buttons,
  children,
  header,
}) => {
  const buttonsToRender = useMemo(() => {
    return (
      <>
        {(buttons || []).map((button, index) => {
          return (
            <Button
              onClick={button.onClick}
              key={index}
              className={button.className}
              color={button.color}
              fullWidth={button.fullWidth}
              id={button.id}
              icon={button.icon}
              name={button.name}
              size={button.size}
              variant={button.variant}
            >
              {button.children}
            </Button>
          );
        })}
      </>
    );
  }, [buttons]);

  return (
    <Dialog
      open={true}
      onClose={onHide}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{header}</DialogTitle>
      <div className="w-100 px-3">
        <div className={classes.dialogHeader}></div>
      </div>
      <DialogContent>{children}</DialogContent>
      <DialogActions>{buttonsToRender}</DialogActions>
    </Dialog>
  );
};
