import React from "react";
import { Menu, Sidebar, SubMenu } from "react-pro-sidebar";
import { DashboardNavigationMenuItem } from "./dashboardNavigationMenuItem";
import { AppConstants } from "../../AppConstants";

export const DashboardNavigation: React.FC = () => {
  return (
    <Sidebar breakPoint="md">
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
  );
};
