import React, { useMemo } from "react";

import { IButton } from "../button/button.model";
import { Button } from "../button/button";
import { Modal } from "react-bootstrap";
import { DialogSize } from "./dialog.model";

interface IDialogBoxProps {
  header?: string;
  onHide: () => void;
  buttons: IButton[];
  children?: React.ReactNode;
  centered?: boolean;
  size?: DialogSize;
}

export const DialogBox: React.FC<IDialogBoxProps> = ({
  onHide,
  buttons,
  children,
  header,
  centered,
  size,
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
    <Modal
      show={true}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      centered={centered}
      size={size || "sm"}
    >
      <Modal.Header closeButton>
        <Modal.Title>{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>{buttonsToRender}</Modal.Footer>
    </Modal>
  );
};
