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
  iconPosition?: "end" | "start";
  isRequired?: boolean;
}
