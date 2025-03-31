import React, { useEffect, useMemo, useState } from "react";
import { AppConstants } from "../../AppConstants";
import { MenuItem } from "react-pro-sidebar";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./dashboardNavigation.module.css";

interface IDashboardNavigationMenuItemProps {
  path: string;
  menuText: string;
}
export const DashboardNavigationMenuItem: React.FC<
  IDashboardNavigationMenuItemProps
> = ({ path, menuText }) => {
  const [active, setActive] = useState<boolean>();

  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname.indexOf(path) >= 0);
  }, [location]);

  const routePath = useMemo(() => {
    return path === "" ? "" : `${AppConstants.adminDashboardBaseUrl}${path}`;
  }, []);

  return (
    <>
      <MenuItem
        className={active ? classes.active : ""}
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
