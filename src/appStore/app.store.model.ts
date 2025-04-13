export interface IAppStoreState {
  adminDashboardTheme: "dark" | "light";
}
export interface IAppStoreAction {
  setAdminDashboardTheme: (theme: "dark" | "light") => void;
}
