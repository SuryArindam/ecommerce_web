import React from "react";
import { DialogBox } from "src/sharedComponents/dialog/dialog";
import { IButton } from "src/sharedComponents/button/button.model";

interface IAddEditProductCategoryDialogProps {
  onHide: () => void;
  mode: "add" | "edit";
}

export const AddEditProductCategoryDialog: React.FC<
  IAddEditProductCategoryDialogProps
> = ({ onHide }) => {
  const button: IButton[] = [
    {
      children: "Add",
      onClick: () => void 0,
    },
  ];
  return (
    <DialogBox onHide={onHide} buttons={button}>
      <div>Will be added</div>
    </DialogBox>
  );
};
