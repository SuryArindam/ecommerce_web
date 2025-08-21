export interface DashboardNavigationStoreState {
  collapsed: boolean;
}

export interface DashboardNavigationStoreAction {
  setCollapsed: (collapsed: boolean) => void;
  resetDashboardNavigationStore: () => void;
}
