import React from "react";
import { ITextBox } from "./textBox.model";
import {
  Control,
  FieldValues,
  RegisterOptions,
  useController,
} from "react-hook-form";
import { TextBox } from "./textBox";

interface ITextBoxFormInputProps
  extends Omit<
    ITextBox,
    "onChange" | "value" | "onBlur" | "isError" | "errorText"
  > {
  control: Control;
  name: string;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  onChange?: () => void;
}

export const TextBoxFormInput: React.FC<ITextBoxFormInputProps> = ({
  control,
  name,
  rules,
  label,
  className,
  fullWidth,
  iconType,
  id,
  isPasswordField,
  placeHolder,
  variant,
}) => {
  const { field, fieldState, formState } = useController({
    name,
    control,
    defaultValue: "",
    rules,
  });
  return (
    <TextBox
      label={label}
      id={id}
      placeHolder={placeHolder}
      isPasswordField={isPasswordField}
      variant={variant}
      iconType={iconType}
      className={className}
      fullWidth={fullWidth}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      isError={formState.isSubmitted || fieldState.invalid}
      errorText={fieldState.error?.message}
    />
  );
};
