export enum TextboxVariant {
  Outlined = "outlined",
  Filled = "filled",
  Standard = "standard",
}
export interface ITextBox {
  value?: string | null | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  isError?: boolean;
  errorText?: string;
  className?: string;
  floatLabel?: string;
  label: string;
  variant?: TextboxVariant;
}
