import React, { useMemo } from "react";
import { ProductCategoryItem } from "../../../services/productCategory/productCategory.model";

interface ICreateOrUpdateDateProps {
  data: ProductCategoryItem;
  dateToFormat: string;
}
export const CreateOrUpdateDate: React.FC<ICreateOrUpdateDateProps> = ({
  data,
  dateToFormat,
}) => {
  const dateToDisplay = useMemo(() => {
    switch (dateToFormat) {
      case "create": {
        const incomingDate = new Date(data.createdOn);
        return `${incomingDate.getDate()}/${incomingDate.getMonth()}/${incomingDate.getFullYear()}`;
      }
      case "update": {
        if (data.updatedOn === null) {
          return "--";
        }
        const incomingDate = new Date(data.updatedOn);
        return `${incomingDate.getDate()}/${incomingDate.getMonth()}/${incomingDate.getFullYear()}`;
      }
    }
  }, [data, dateToFormat]);

  return <>{dateToDisplay?.toString()}</>;
};
