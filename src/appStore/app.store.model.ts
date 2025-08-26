export interface IAppStoreState {
  adminDashboardTheme: "dark" | "light";
  showSpinner: boolean;
}
export interface IAppStoreAction {
  setAdminDashboardTheme: (theme: "dark" | "light") => void;
  setShowSpinner: (showSpinner: boolean) => void;
}
