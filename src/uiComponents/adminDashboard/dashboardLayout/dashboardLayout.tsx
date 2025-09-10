import React, { useEffect } from "react";
import { DashboardNavigation } from "../dashboardNavigation";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppConstants } from "src/AppConstants";
import classes from "./dashboardLayout.module.css";
import NotificationIcon from "src/assets/icons/notification.svg?react";
import LightThemeIcon from "src/assets/icons/lightTheme.svg?react";
import DarkThemeIcon from "src/assets/icons/darkTheme.svg?react";
import ProfileIcon from "src/assets/icons/account.svg?react";

import "src/App.css";
import { useAppStore } from "src/appStore/app.store";
import { Tooltip } from "src/uiComponents/tooltip/tooltip";
import { TooltipTransitionType } from "src/uiComponents/tooltip/tooltip.model";

export const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { adminDashboardTheme, setAdminDashboardTheme } = useAppStore();

  const lightTheme = "lightThemeBackground lightThemeText";
  const darkTheme = "darkThemeBackground darkThemeText";

  const localClassName =
    adminDashboardTheme === "light" ? lightTheme : darkTheme;
  const localIconContainer = `iconContainer ${
    adminDashboardTheme === "light" ? "lightThemeBorder" : "darkThemeBorder"
  }`;

  useEffect(() => {
    if (
      location.pathname.lastIndexOf("/") !==
        AppConstants.adminDashboardBaseUrl.lastIndexOf("/") ||
      location.pathname === AppConstants.adminDashboardBaseUrl
    ) {
      navigate(
        `${AppConstants.adminDashboardBaseUrl}${AppConstants.adminDashboardHomeUrl}`
      );
    }
  }, [location.pathname, navigate]);

  const changeTheme = () => {
    if (adminDashboardTheme === "light") {
      setAdminDashboardTheme("dark");
    } else {
      setAdminDashboardTheme("light");
    }
  };

  return (
    <div className={`${localClassName} d-flex`}>
      <div className={`${classes.sidenavContainer} col-md-2`}>
        <DashboardNavigation />
      </div>
      <div className="col-md-10">
        <div className={`${classes.menuAndOutletContainer}  px-5 py-4`}>
          <div className="d-flex justify-content-end">
            <div className="d-flex col-md-6 justify-content-end">
              <Tooltip
                title={
                  adminDashboardTheme === "light"
                    ? "Change to Dark theme"
                    : "Change to Light theme"
                }
                transition={TooltipTransitionType.Zoom}
              >
                <div className={localIconContainer} onClick={changeTheme}>
                  {adminDashboardTheme === "light" ? (
                    <DarkThemeIcon className="icons" />
                  ) : (
                    <LightThemeIcon className="icons" />
                  )}
                </div>
              </Tooltip>
              <Tooltip
                title="Notifications"
                transition={TooltipTransitionType.Zoom}
              >
                <div className={localIconContainer}>
                  <NotificationIcon className="icons" />
                </div>
              </Tooltip>
              <Tooltip title="Profile" transition={TooltipTransitionType.Zoom}>
                <div className={localIconContainer}>
                  <ProfileIcon className="icons" />
                </div>
              </Tooltip>
            </div>
          </div>
          <div className="col-md-12">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
