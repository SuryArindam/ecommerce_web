import EditIcon from "src/assets/icons/edit.svg?react";
import classes from "./moreMenu.module.css";

export const MoreMenu: React.FC = () => {
  return (
    <div className="h-100 d-flex align-items-center">
      <EditIcon className={classes.moreMenuIcon} />
    </div>
  );
};
