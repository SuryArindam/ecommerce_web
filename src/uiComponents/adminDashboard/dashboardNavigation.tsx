import React from "react";
import { Menu, Sidebar, SubMenu } from "react-pro-sidebar";
import { DashboardNavigationMenuItem } from "./dashboardNavigationMenuItem";
import { AppConstants } from "../../AppConstants";
import classes from "./dashboardNavigation.module.css";

export const DashboardNavigation: React.FC = () => {
  return (
    <div className={classes.sidebarContainer}>
      <Sidebar className={`border border-primary w-100 ${classes.sidebarNav}`}>
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
            <DashboardNavigationMenuItem
              path={AppConstants.adminDashboardProductManagementUrl}
              menuText="Product Management"
            />
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};
