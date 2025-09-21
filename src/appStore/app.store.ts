import { create } from "zustand";
import { IAppStoreAction, IAppStoreState } from "./app.store.model";
import { ISnackBarProps } from "src/sharedComponents/snackBar/snackBar.model";
import { IDashboardTheme } from "src/App.model";

export const useAppStore = create<IAppStoreState & IAppStoreAction>((set) => ({
  adminDashboardTheme: IDashboardTheme.light,
  showSpinner: false,
  snackBar: null,
  setAdminDashboardTheme: (adminDashboardTheme: IDashboardTheme) =>
    set({ adminDashboardTheme }),
  setShowSpinner: (showSpinner: boolean) => set({ showSpinner }),
  openSnackBar: (snackBar: ISnackBarProps) => set({ snackBar }),
}));
