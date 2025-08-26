import { create } from "zustand";
import { IAppStoreAction, IAppStoreState } from "./app.store.model";

export const useAppStore = create<IAppStoreState & IAppStoreAction>((set) => ({
  adminDashboardTheme: "light",
  showSpinner: false,
  setAdminDashboardTheme: (adminDashboardTheme: "light" | "dark") =>
    set({ adminDashboardTheme }),
  setShowSpinner: (showSpinner: boolean) => set({ showSpinner }),
}));
