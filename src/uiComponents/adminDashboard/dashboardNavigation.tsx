import React, { useEffect } from "react";
import { Menu, Sidebar, SubMenu } from "react-pro-sidebar";
import { DashboardNavigationMenuItem } from "./dashboardNavigationMenuItem";
import { AppConstants } from "src/AppConstants";
import HamburgerIcon from "src/assets/icons/hamburger.svg?react";
import classes from "./dashboardNavigation.module.css";
import "./dashboardNavigation.css";
import { useAppStore } from "src/appStore/app.store";
import "src/App.css";
import { Tooltip } from "src/uiComponents/tooltip/tooltip";
import { TooltipPosition } from "src/uiComponents/tooltip/tooltip.model";
import { useDashboardNavigationStore } from "./store/dashboardNavigation.store";

export const DashboardNavigation: React.FC = () => {
  const { adminDashboardTheme } = useAppStore();
  const { collapsed, setCollapsed, resetDashboardNavigationStore } =
    useDashboardNavigationStore();

  const lightTheme = "lightThemeBorder lightThemeBackground";
  const darkTheme = "darkThemeBorder darkThemeBackground";

  const themedClass = adminDashboardTheme === "light" ? lightTheme : darkTheme;
  const localHamburgerContainer = `${
    collapsed ? classes.translateButton : ""
  } ${themedClass} ${classes.hamburgerIconContainer} my-3`;
  const localSidebarClass =
    adminDashboardTheme === "light"
      ? `lightThemeBorder lightThemeText`
      : `darkThemeBorder darkThemeText`;

  useEffect(() => {
    return () => {
      resetDashboardNavigationStore();
    };
  }, []);
  return (
    <div className={classes.sidebarContainer}>
      {/* {show && (
        <button onClick={() => setCollapsed((collapsed) => !collapsed)}>
          Collapse it
        </button>
      )} */}
      <Tooltip title="Menu" direction={TooltipPosition.Right}>
        <div
          className={localHamburgerContainer}
          onClick={() => setCollapsed(!collapsed)}
        >
          <HamburgerIcon
            className={`${
              adminDashboardTheme === "dark" ? classes.hamburgerIconInvert : ""
            } ${classes.hamburgerIcon}`}
          />
        </div>
      </Tooltip>
      <div>
        <Sidebar
          className={`${classes.sidebarNav} ${localSidebarClass}`}
          backgroundColor={adminDashboardTheme === "light" ? "#fff" : "#000"}
          breakPoint="all"
          // collapsed={collapsed}
          // onBreakPoint={setCollapsed}
          onBackdropClick={() => setCollapsed(false)}
          toggled={collapsed}
        >
          <Menu>
            <SubMenu label="Dashboard">
              <DashboardNavigationMenuItem
                path={AppConstants.adminDashboardHomeUrl}
                menuText="Home"
              />
              <DashboardNavigationMenuItem
                path={AppConstants.adminDashboardUserManagementUrl}
                menuText="User Management"
              />
            </SubMenu>
            <SubMenu label="Product Management">
              <DashboardNavigationMenuItem
                path={AppConstants.adminDashboardProductManagementUrl}
                menuText="Product Category"
              />
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
};
