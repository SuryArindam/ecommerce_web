export interface IAppStoreState {
  adminDashboardTheme: "dark" | "light";
  spinner: boolean;
}
export interface IAppStoreAction {
  setAdminDashboardTheme: (theme: "dark" | "light") => void;
  showSpinner: (spinner: boolean) => void;
}
