import React, { useMemo, useState } from "react";
import { IconType, ITextBox, TextboxVariant } from "./textBox.model";
import {
  createTheme,
  IconButton,
  InputAdornment,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
// Extend the Palette and PaletteOptions interfaces
declare module "@mui/material/styles" {
  interface Palette {
    customColor?: Palette["primary"];
  }
  interface PaletteOptions {
    customColor?: PaletteOptions["primary"];
  }
}
// Extend the TextField color overrides
declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    customColor: true;
  }
}
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
  placeHolder,
  iconType,
  iconPosition,
  isPasswordField,
  isRequired,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onChangePassordVisibility = () => {
    if (isPasswordField) {
      setShowPassword((showPassword) => !showPassword);
    }
  };

  const textFieldType = useMemo(() => {
    if (isPasswordField) {
      return !showPassword ? "password" : "text";
    }
    return "text";
  }, [showPassword]);

  const theme = createTheme({
    palette: {
      customColor: {
        main: "#053d09", // Your custom color
        contrastText: "#ffffff", // Text color for contrast
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <TextField
        name={name}
        id={id}
        type={textFieldType}
        value={value}
        placeholder={placeHolder}
        className={className}
        required={isRequired ?? false}
        error={isError}
        helperText={isError ? errorText : ""}
        label={label}
        variant={variant ?? TextboxVariant.Outlined}
        onChange={onChange}
        color="customColor"
        InputProps={
          iconType
            ? {
                endAdornment: iconPosition === "end" && (
                  <InputAdornment position="end">
                    <IconButton onClick={onChangePassordVisibility} edge="end">
                      {isPasswordField &&
                        (showPassword ? <VisibilityOff /> : <Visibility />)}
                      {iconType === IconType.UserName && <AccountCircle />}
                    </IconButton>
                  </InputAdornment>
                ),
                startAdornment: iconPosition === "start" && (
                  <InputAdornment position="start">
                    <IconButton
                      onClick={onChangePassordVisibility}
                      edge="start"
                    >
                      {isPasswordField &&
                        (showPassword ? <VisibilityOff /> : <Visibility />)}
                      {iconType === IconType.UserName && <AccountCircle />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : undefined
        }
        fullWidth
      />
    </ThemeProvider>
  );
};
