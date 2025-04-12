import React, { useState } from "react";
import { Menu, Sidebar, SubMenu } from "react-pro-sidebar";
import { DashboardNavigationMenuItem } from "./dashboardNavigationMenuItem";
import { AppConstants } from "../../AppConstants";
import HamburgerIcon from "../../assets/icons/hamburger.svg?react";
import classes from "./dashboardNavigation.module.css";
import "./dashboardNavigation.css";

export const DashboardNavigation: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={classes.sidebarContainer}>
      {/* {show && (
        <button onClick={() => setCollapsed((collapsed) => !collapsed)}>
          Collapse it
        </button>
      )} */}
      <div
        className={`${collapsed ? classes.translateButton : ""} ${
          classes.hamburgerIconContainer
        }`}
        onClick={() => setCollapsed((collapsed) => !collapsed)}
      >
        <HamburgerIcon className={classes.hamburgerIcon} />
      </div>
      <div>
        <Sidebar
          className={`border border-primary ${classes.sidebarNav}`}
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
