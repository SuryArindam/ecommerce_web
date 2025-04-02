import React from "react";
import classes from "./kpiCard.module.css";
import { IKpiCard } from "./kpiCard.model";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

export const KpiCard: React.FC<IKpiCard> = ({
  header,
  icon,
  totalCount,
  className,
  dailyAndMonthlyCount,
}) => {
  return (
    <div
      className={`${classes.kpiCardContainer} col-md col-sm-12 ${
        className ?? ""
      }`}
    >
      {header}
    </div>
  );
};
