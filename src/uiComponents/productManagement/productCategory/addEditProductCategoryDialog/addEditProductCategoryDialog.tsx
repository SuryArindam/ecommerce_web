import React from "react";
import { DialogBox } from "src/sharedComponents/dialog/dialog";
import { IButton } from "src/sharedComponents/button/button.model";
import { useForm } from "react-hook-form";
import { TextBoxFormInput } from "src/sharedComponents/textBox/textBox.formInput";
interface IAddEditProductCategoryDialogProps {
  onHide: () => void;
  mode: "add" | "edit";
}

interface IDialogForm {
  name: string;
}

export const AddEditProductCategoryDialog: React.FC<
  IAddEditProductCategoryDialogProps
> = ({ onHide }) => {
  const { control, handleSubmit } = useForm<IDialogForm>({
    defaultValues: {
      name: "",
    },
  });

  const onSubmitForm = (formData: IDialogForm) => {
    console.log(formData);
  };

  const button: IButton[] = [
    {
      children: "Add",
      onClick: handleSubmit(onSubmitForm),
    },
  ];
  return (
    <DialogBox onHide={onHide} buttons={button}>
      <div className="w-100 d-flex justify-content-between">
        <div>Enter Product category name</div>
        <div>
          <TextBoxFormInput
            control={control as never}
            label="Product Category name"
            name="name"
            placeHolder="Enter Product Category name"
            rules={{ required: "Required" }}
          />
        </div>
      </div>
    </DialogBox>
  );
};
