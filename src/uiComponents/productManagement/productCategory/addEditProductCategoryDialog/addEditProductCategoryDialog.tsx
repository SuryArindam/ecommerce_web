import React, { useEffect, useMemo } from "react";
import { DialogBox } from "src/sharedComponents/dialog/dialog";
import {
  ButtonVariant,
  IButton,
} from "src/sharedComponents/button/button.model";
import { useForm } from "react-hook-form";
import { TextBoxFormInput } from "src/sharedComponents/textBox/textBox.formInput";
import { useMutation } from "@tanstack/react-query";
import { productCategoryService } from "src/services/productCategory/productCategory.service";
import { useAppStore } from "src/appStore/app.store";
import { Color } from "src/App.model";
import { queryClient } from "src/App.helper";
import { useProductCategoryStore } from "../productCategoryList/store/productCategory.store";
interface IAddEditProductCategoryDialogProps {
  onHide: () => void;
  mode: "add" | "edit";
}

interface IDialogForm {
  name: string;
}

export const AddEditProductCategoryDialog: React.FC<
  IAddEditProductCategoryDialogProps
> = ({ onHide, mode }) => {
  const { openSnackBar } = useAppStore();
  const { currentProductCategory, resetStore } = useProductCategoryStore();

  const { control, handleSubmit, setValue } = useForm<IDialogForm>({
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    if (currentProductCategory) {
      setValue("name", currentProductCategory.name);
    }
  }, [currentProductCategory]);

  const headerText = useMemo(() => {
    return mode === "add"
      ? "Add new Product Category"
      : "Edit Product Category";
  }, [mode]);

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

  const onDialogHide = () => {
    resetStore();
    onHide();
  };

  const button: IButton[] = [
    {
      children: mode === "add" ? "Add new category" : "Save changes",
      onClick: handleSubmit(onSubmitForm),
    },
    {
      children: "Cancel",
      variant: ButtonVariant.Outlined,
      onClick: onDialogHide,
    },
  ];

  return (
    <DialogBox onHide={onDialogHide} buttons={button} header={headerText}>
      <div className="w-100 d-flex justify-content-between">
        <div className="d-flex align-items-center">Category name</div>
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
