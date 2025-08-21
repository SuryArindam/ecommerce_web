import { create } from "zustand";
import {
  DashboardNavigationStoreAction,
  DashboardNavigationStoreState,
} from "./dashboardNavigation.store.model";

export const useDashboardNavigationStore = create<
  DashboardNavigationStoreState & DashboardNavigationStoreAction
>((set) => ({
  collapsed: false,
  setCollapsed: (collapsed: boolean) => set({ collapsed }),
  resetDashboardNavigationStore: () => set({ collapsed: false }),
}));
