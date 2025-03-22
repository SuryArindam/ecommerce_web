import React from "react";
import { ITextBox, TextboxVariant } from "./textBox.model";
import { TextField } from "@mui/material";
export const TextBox: React.FC<ITextBox> = ({
  id,
  name,
  onChange,
  value,
  isError,
  errorText,
  className,
  label,
  variant,
}) => {
  return (
    <TextField
      name={name}
      id={id}
      value={value}
      className={className}
      required={true}
      error={isError}
      helperText={isError ? errorText : ""}
      label={label}
      variant={variant ?? TextboxVariant.Outlined}
      onChange={onChange}
      fullWidth
    />
  );
};
