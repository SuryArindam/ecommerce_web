import { create } from "zustand";
import { IAppStoreAction, IAppStoreState } from "./app.store.model";

export const useAppStore = create<IAppStoreState & IAppStoreAction>((set) => ({
  adminDashboardTheme: "light",
  spinner: false,
  setAdminDashboardTheme: (adminDashboardTheme: "light" | "dark") =>
    set({ adminDashboardTheme }),
  showSpinner: (spinner: boolean) => set({ spinner }),
}));
