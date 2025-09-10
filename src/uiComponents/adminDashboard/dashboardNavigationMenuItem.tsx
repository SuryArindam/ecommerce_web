import React, { useEffect, useMemo, useState } from "react";
import { AppConstants } from "src/AppConstants";
import { MenuItem } from "react-pro-sidebar";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./dashboardNavigation.module.css";
import { useAppStore } from "src/appStore/app.store";
import { useDashboardNavigationStore } from "./store/dashboardNavigation.store";

interface IDashboardNavigationMenuItemProps {
  path: string;
  menuText: string;
}
export const DashboardNavigationMenuItem: React.FC<
  IDashboardNavigationMenuItemProps
> = ({ path, menuText }) => {
  const { adminDashboardTheme } = useAppStore();
  const { setCollapsed } = useDashboardNavigationStore();

  const [active, setActive] = useState<boolean>();

  const location = useLocation();

  const lightTheme = "lightThemeBackground lightThemeText";
  const darkTheme = "darkThemeBackground darkThemeText";

  const localClassName =
    adminDashboardTheme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    setActive(location.pathname.indexOf(path) >= 0);
  }, [location]);

  const routePath = useMemo(() => {
    return path === "" ? "" : `${AppConstants.adminDashboardBaseUrl}${path}`;
  }, []);

  const onMenuItemClick = () => {
    setCollapsed(false);
  };
  return (
    <>
      <MenuItem
        className={`${localClassName} ${
          active
            ? adminDashboardTheme === "light"
              ? classes.activeMenuLight
              : classes.activeMenuDark
            : ""
        }`}
        onClick={onMenuItemClick}
        component={
          <NavLink
            to={routePath}
            className={({ isActive }) => {
              console.info(isActive);
              return isActive ? classes.active : "";
            }}
          />
        }
      >
        {menuText}
      </MenuItem>
    </>
  );
};
