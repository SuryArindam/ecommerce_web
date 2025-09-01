import React from "react";
import { Tooltip } from "../../../tooltip/tooltip";
import { useAppStore } from "../../../../appStore/app.store";
import AddIcon from "../../../../assets/icons/addButton.svg?react";

export const AddProductCategory: React.FC = () => {
  const { adminDashboardTheme } = useAppStore();

  const localIconContainer = `iconContainer ${
    adminDashboardTheme === "light" ? "lightThemeBorder" : "darkThemeBorder"
  }`;

  return (
    <div className="mb-5">
      <Tooltip title="Add Product category">
        <div className={localIconContainer}>
          <AddIcon className="icons" />
        </div>
      </Tooltip>
    </div>
  );
};
