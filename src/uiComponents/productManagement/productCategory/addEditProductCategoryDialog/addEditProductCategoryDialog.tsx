import React from "react";
import { DialogBox } from "src/sharedComponents/dialog/dialog";
import { IButton } from "src/sharedComponents/button/button.model";
import { useForm } from "react-hook-form";
import { TextBoxFormInput } from "src/sharedComponents/textBox/textBox.formInput";
import { useMutation } from "@tanstack/react-query";
import { productCategoryService } from "src/services/productCategory/productCategory.service";
import { useAppStore } from "src/appStore/app.store";
import { Color } from "src/App.model";
import { queryClient } from "src/App.helper";
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
  const { openSnackBar } = useAppStore();
  const { control, handleSubmit } = useForm<IDialogForm>({
    defaultValues: {
      name: "",
    },
  });

  const { mutate: addProductCategory } = useMutation({
    mutationKey: ["createNewProductCategory"],
    mutationFn: (name: string) =>
      productCategoryService.createNewProductCategory(name),
    onSuccess: () => {
      openSnackBar({
        severity: Color.Success,
        message: "New product category has been created.",
      });
      queryClient.invalidateQueries({
        queryKey: ["getAllProductCategoryService"],
      });
      onHide();
    },
    onError: (e) => {
      openSnackBar({
        severity: Color.Danger,
        message: `Exception is occured- ${e}`,
      });
    },
  });
  const onSubmitForm = async (formData: IDialogForm) => {
    await addProductCategory(formData.name);
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
