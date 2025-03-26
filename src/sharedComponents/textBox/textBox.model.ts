import { createTheme } from "@mui/material";

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

export const theme = createTheme({
  palette: {
    customColor: {
      main: "#053d09", // Your custom color
      contrastText: "#ffffff", // Text color for contrast
    },
  },
});

export enum TextboxVariant {
  Outlined = "outlined",
  Filled = "filled",
  Standard = "standard",
}
export enum IconType {
  UserName = "userName",
  Password = "password",
}
export interface ITextBox {
  value?: string | null | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  isError?: boolean;
  errorText?: string;
  className?: string;
  placeHolder: string;
  label: string;
  variant?: TextboxVariant;
  isPasswordField?: boolean;
  iconType?: IconType;
  isRequired?: boolean;
}
