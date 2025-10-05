import EditIcon from "src/assets/icons/edit.svg?react";
import classes from "./moreMenu.module.css";
import { useState } from "react";
import { AddEditProductCategoryDialog } from "../../addEditProductCategoryDialog/addEditProductCategoryDialog";
import { ProductCategoryItem } from "src/services/productCategory/productCategory.model";
import { useProductCategoryStore } from "../store/productCategory.store";

interface IMoreMenuProps {
  data: ProductCategoryItem;
}

export const MoreMenu: React.FC<IMoreMenuProps> = ({ data }) => {
  const { setCurrentProductCategory } = useProductCategoryStore();

  const [showDialog, setShowDialog] = useState<boolean>(false);

  const onEdit = () => {
    setCurrentProductCategory(data);
    setShowDialog(true);
  };

  return (
    <>
      <div className="h-100 d-flex align-items-center">
        <EditIcon className={classes.moreMenuIcon} onClick={onEdit} />
      </div>
      {showDialog && (
        <AddEditProductCategoryDialog
          mode="edit"
          onHide={() => setShowDialog(false)}
        />
      )}
    </>
  );
};
