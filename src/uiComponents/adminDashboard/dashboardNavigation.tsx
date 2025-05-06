import React, { useState } from "react";
import { Menu, Sidebar, SubMenu } from "react-pro-sidebar";
import { DashboardNavigationMenuItem } from "./dashboardNavigationMenuItem";
import { AppConstants } from "../../AppConstants";
import HamburgerIcon from "../../assets/icons/hamburger.svg?react";
import classes from "./dashboardNavigation.module.css";
import "./dashboardNavigation.css";
import { useAppStore } from "../../appStore/app.store";
import "../../App.css";
import { Tooltip } from "../tooltip/tooltip";
import { TooltipPosition } from "../tooltip/tooltip.model";

export const DashboardNavigation: React.FC = () => {
  const { adminDashboardTheme } = useAppStore();

  const [collapsed, setCollapsed] = useState(false);

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
          onClick={() => setCollapsed((collapsed) => !collapsed)}
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
                onClick={() => setCollapsed(false)}
              />
              <DashboardNavigationMenuItem
                path={AppConstants.adminDashboardUserManagementUrl}
                menuText="User Management"
                onClick={() => setCollapsed(false)}
              />
              <DashboardNavigationMenuItem
                path={AppConstants.adminDashboardProductManagementUrl}
                menuText="Product Management"
                onClick={() => setCollapsed(false)}
              />
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
};
