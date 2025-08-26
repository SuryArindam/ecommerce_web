import { useMemo } from "react";
import {
  ProductCategoryItem,
  ProductCategoryStatus,
} from "../../../services/productCategory/productCategory.model";
import { Chip, ChipOwnProps } from "@mui/material";

interface IStatusCellProps {
  data: ProductCategoryItem;
}

interface IChipData {
  name: string;
  color: ChipOwnProps["color"];
}

export const StatusCell: React.FC<IStatusCellProps> = ({ data }) => {
  const { isDeleted, status } = data;

  const chipData: IChipData = useMemo(() => {
    if (isDeleted) {
      return { name: "Deleted", color: "error" };
    } else {
      if (status === ProductCategoryStatus.Active) {
        return { name: "Active", color: "success" };
      } else if (status === ProductCategoryStatus.Inactive) {
        return { name: "Inactive", color: "default" };
      } else {
        return { name: "No status", color: "primary" };
      }
    }
  }, [status, isDeleted]);

  return (
    <div>
      <Chip label={chipData.name} color={chipData.color} />
    </div>
  );
};
