import React, { useEffect } from "react";
import { DashboardNavigation } from "../dashboardNavigation";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppConstants } from "../../../AppConstants";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { Color } from "../../../App.model";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import classes from "./dashboardLayout.module.css";
import LightModeIcon from "@mui/icons-material/LightMode";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ModeNightIcon from "@mui/icons-material/ModeNight";

export const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
              <div className={classes.icon}>
                <LightModeIcon fontSize="medium" color={Color.Warning} />
              </div>
              <div className={classes.icon}>
                <NotificationsNoneIcon
                  color={Color.Secondary}
                  fontSize="medium"
                />
              </div>
              <div className={classes.icon}>
                <AssignmentIndIcon color={Color.Primary} fontSize="medium" />
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
