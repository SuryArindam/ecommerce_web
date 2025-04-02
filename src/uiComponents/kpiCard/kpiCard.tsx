import React, { useMemo } from "react";
import classes from "./kpiCard.module.css";
import { IconText, IKpiCardProps, KpiIconType } from "./kpiCard.model";
import ClientsIcon from "../../assets/icons/clients.svg?react";
import CartIcon from "../../assets/icons/cart.svg?react";
import RevenueIcon from "../../assets/icons/earning.svg?react";
import "../../App.css";

export const KpiCard: React.FC<IKpiCardProps> = ({
  header,
  icon,
  totalCount,
  className,
  dailyAndMonthlyCount,
}) => {
  const iconTextRender: IconText = useMemo(() => {
    const _iconText: IconText = {
      icon: undefined,
      text: "",
    };
    switch (icon) {
      case KpiIconType.Customers:
        {
          _iconText.icon = <ClientsIcon className={classes.kpiIcons} />;
          _iconText.text = "joined";
        }
        break;
      case KpiIconType.Orders:
        {
          _iconText.icon = <CartIcon className={classes.kpiIcons} />;
          _iconText.text = "orders";
        }
        break;
      case KpiIconType.Revenue:
        {
          _iconText.icon = <RevenueIcon className={classes.kpiIcons} />;
          _iconText.text = "earnings";
        }
        break;
    }
    return _iconText;
  }, []);

  return (
    <div
      className={`${classes.kpiCardContainer} col-md col-sm-12 ${
        className ?? ""
      }`}
    >
      <div className="d-flex justify-content-between">
        <span className={classes.kpiHeader}>{header}</span>
        {iconTextRender.icon}
      </div>
      <div className={`mb-3 ${classes.kpiTotalCount}`}>{totalCount}</div>
      <div className="d-flex justify-content-between border-top pt-2">
        <div>
          <div className={classes.periodText}>Today {iconTextRender.text}</div>
          <div className={classes.periodCount}>
            {dailyAndMonthlyCount?.dailyCount}
          </div>
        </div>
        <div>
          <div className={classes.periodText}>
            Monthly {iconTextRender.text}
          </div>
          <div className={`text-end ${classes.periodCount}`}>
            {dailyAndMonthlyCount?.monthlyCount}
          </div>
        </div>
      </div>
    </div>
  );
};
