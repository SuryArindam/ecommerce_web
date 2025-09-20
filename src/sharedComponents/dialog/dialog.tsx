import React, { useMemo } from "react";

import { IButton } from "../button/button.model";
import { Button } from "../button/button";
import { Modal } from "react-bootstrap";

interface IDialogBoxProps {
  header?: string;
  onHide: () => void;
  buttons: IButton[];
  children?: React.ReactNode;
  centered?: boolean;
  className?: string;
}

export const DialogBox: React.FC<IDialogBoxProps> = ({
  onHide,
  buttons,
  children,
  header,
  centered,
  className,
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
      className={className}
    >
      <Modal.Header closeButton>
        <Modal.Title>{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>{buttonsToRender}</Modal.Footer>
    </Modal>
  );
};
