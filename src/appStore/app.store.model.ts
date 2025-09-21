import { IDashboardTheme } from "src/App.model";
import { ISnackBarProps } from "src/sharedComponents/snackBar/snackBar.model";

export interface IAppStoreState {
  adminDashboardTheme: IDashboardTheme;
  showSpinner: boolean;
  snackBar: ISnackBarProps;
}
export interface IAppStoreAction {
  setAdminDashboardTheme: (theme: "dark" | "light") => void;
  setShowSpinner: (showSpinner: boolean) => void;
  openSnackBar: (snackBar: ISnackBarProps) => void;
}
