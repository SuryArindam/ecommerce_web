import React from "react";
import { ToastContainer } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import { useAppStore } from "src/appStore/app.store";

export const SnackBar: React.FC = () => {
  const { snackBar, openSnackBar } = useAppStore();

  const onHideToast = () => {
    openSnackBar(null);
  };

  if (!snackBar) {
    return null;
  }

  const { message, severity } = snackBar;

  return (
    <ToastContainer position="bottom-center" className="p-3">
      <Toast
        className="d-inline-block m-1"
        bg={severity}
        onClose={onHideToast}
        animation={true}
        autohide={true}
        show={true}
      >
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
