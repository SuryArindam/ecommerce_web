import React, { useEffect } from "react";
import { DashboardNavigation } from "../dashboardNavigation";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppConstants } from "../../../AppConstants";
import classes from "./dashboardLayout.module.css";
import NotificationIcon from "../../../assets/icons/notification.svg?react";
import LightThemeIcon from "../../../assets/icons/lightTheme.svg?react";
import DarkThemeIcon from "../../../assets/icons/darkTheme.svg?react";
import ProfileIcon from "../../../assets/icons/account.svg?react";

import "../../../App.css";
import { useAppStore } from "../../../appStore/app.store";

export const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { adminDashboardTheme, setAdminDashboardTheme } = useAppStore();

  const changeTheme = () => {
    if (adminDashboardTheme === "light") {
      setAdminDashboardTheme("dark");
    } else {
      setAdminDashboardTheme("light");
    }
  };

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

  return (
    <div className="d-flex">
      <div className={`${classes.sidenavContainer} col-md-2`}>
        <DashboardNavigation />
      </div>
      <div className="col-md-10">
        <div className={`${classes.menuAndOutletContainer} px-5 py-4`}>
          <div className="d-flex justify-content-end">
            <div className="d-flex col-md-6 justify-content-end">
              <div className={classes.iconContainer} onClick={changeTheme}>
                {adminDashboardTheme === "light" ? (
                  <DarkThemeIcon className="icons" />
                ) : (
                  <LightThemeIcon className="icons" />
                )}
              </div>
              <div className={classes.iconContainer}>
                <NotificationIcon className="icons" />
              </div>
              <div className={classes.iconContainer}>
                <ProfileIcon className="icons" />
              </div>
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
