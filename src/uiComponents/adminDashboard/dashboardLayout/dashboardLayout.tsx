import React from "react";
import { DashboardNavigation } from "../dashboardNavigation";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppConstants } from "../../../AppConstants";

export const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  if (location.pathname === AppConstants.adminDashboardBaseUrl) {
    navigate(`${location.pathname}${AppConstants.adminDashboardHomeUrl}`);
  }

  return (
    <div className="d-flex">
      <div className="col-md-2">
        <DashboardNavigation />
      </div>
      <div className="col-md-10">
        <Outlet />
      </div>
    </div>
  );
};
