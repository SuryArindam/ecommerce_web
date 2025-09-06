import React, { useState } from "react";
import { Tooltip } from "../../../tooltip/tooltip";
import { useAppStore } from "../../../../appStore/app.store";
import AddIcon from "../../../../assets/icons/addButton.svg?react";
import { AddEditProductCategoryDialog } from "../addEditProductCategoryDialog/addEditProductCategoryDialog";

export const AddProductCategory: React.FC = () => {
  const { adminDashboardTheme } = useAppStore();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const localIconContainer = `iconContainer ${
    adminDashboardTheme === "light" ? "lightThemeBorder" : "darkThemeBorder"
  }`;

  return (
    <>
      <div className="mb-5">
        <Tooltip title="Add Product category">
          <div
            className={localIconContainer}
            onClick={() => setShowDialog(true)}
          >
            <AddIcon className="icons" />
          </div>
        </Tooltip>
      </div>
      {showDialog && (
        <AddEditProductCategoryDialog
          onHide={() => setShowDialog(false)}
          mode="add"
        />
      )}
    </>
  );
};
