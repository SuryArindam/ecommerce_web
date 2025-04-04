import { Typography } from "@mui/material";
import React from "react";
import { KpiCard } from "../../kpiCard/kpiCard";
import { KpiIconType } from "../../kpiCard/kpiCard.model";

export const DashboardHome: React.FC = () => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Home
      </Typography>
      <div className="d-flex col-md-12 col-sm-12 justify-content-center w-100">
        <KpiCard
          header="Customers"
          icon={KpiIconType.Customers}
          totalCount={32}
          className="me-3"
          dailyAndMonthlyCount={{ dailyCount: 10, monthlyCount: 25 }}
        />
        <KpiCard
          header="Orders"
          className="me-3"
          icon={KpiIconType.Orders}
          totalCount={15}
          dailyAndMonthlyCount={{ dailyCount: 4, monthlyCount: 10 }}
        />
        <KpiCard
          header="Revenue"
          icon={KpiIconType.Revenue}
          totalCount={2800}
          dailyAndMonthlyCount={{ dailyCount: 400, monthlyCount: 1000 }}
        />
      </div>
    </div>
  );
};
