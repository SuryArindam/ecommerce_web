import React, { useMemo, useState } from "react";
import { IconType, ITextBox, TextboxVariant, theme } from "./textBox.model";
import {
  IconButton,
  InputAdornment,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import classes from "./textBox.module.css";

export const TextBox: React.FC<ITextBox> = ({
  id,
  name,
  onChange,
  onBlur,
  value,
  isError,
  errorText,
  className,
  label,
  variant,
  placeHolder,
  iconType,
  isPasswordField,
  fullWidth,
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

  const iconRenderer = useMemo(() => {
    switch (iconType) {
      case IconType.UserName:
        return <AccountCircle />;
      case IconType.Password:
        return <LockIcon />;
      case IconType.Email:
        return <EmailIcon />;
      case IconType.Phone:
        return <PhoneIcon />;
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.boxModel}>
        <div className={classes.boxIcon}>{iconRenderer}</div>
        <div className={classes.boxText}>
          <TextField
            name={name}
            id={id}
            type={textFieldType}
            value={value}
            placeholder={placeHolder}
            className={className}
            error={isError}
            helperText={isError ? errorText : ""}
            label={label}
            variant={variant ?? TextboxVariant.Outlined}
            onChange={onChange}
            onBlur={onBlur}
            color="customColor"
            InputProps={{
              ...(isPasswordField
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={onChangePassordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : undefined),
            }}
            fullWidth={fullWidth ?? true}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};
