import React, { useMemo } from "react";
import { AgGrid } from "src/sharedComponents/agGrid/agGrid";
import { productCategoryService } from "src/services/productCategory/productCategory.service";
import { useQuery } from "@tanstack/react-query";
import { ColDef } from "ag-grid-community";
import { StatusCell } from "./statusCell";
import { CreateOrUpdateDate } from "./createOrUpdateDate";
import { MoreMenu } from "./moreMenu/moreMenu";

export const ProductCategoryList: React.FC = () => {
  const { data: productCategoryResponse } = useQuery({
    queryKey: ["getAllProductCategoryService"],
    queryFn: productCategoryService.getAllProductCategoryService,
  });

  const rowData = useMemo(() => {
    return productCategoryResponse || [];
  }, [productCategoryResponse]);

  const columnDef: ColDef[] = [
    {
      field: "name",
      //filter: true,
      flex: 2,
      headerName: "Product Category",
      cellClass: "d-flex align-items-center border border-2 border-end-0",
    },
    {
      field: "status",
      //filter: true,
      flex: 1,
      headerName: "Status",
      cellRenderer: StatusCell,
      cellClass:
        "d-flex align-items-center justify-content-center border border-2 border-end-0",
    },
    {
      field: "createdOn",
      //filter: "agDateColumnFilter",
      flex: 2,
      cellDataType: "date",
      cellRenderer: CreateOrUpdateDate,
      cellRendererParams: { dateToFormat: "create" },
      headerName: "Created On",
      cellClass:
        "d-flex align-items-center justify-content-center border border-2 border-end-0",
    },
    {
      field: "updatedOn",
      //filter: "agDateColumnFilter",
      flex: 2,
      cellDataType: "date",
      cellRenderer: CreateOrUpdateDate,
      cellRendererParams: { dateToFormat: "update" },
      headerName: "Updated On",
      cellClass:
        "d-flex align-items-center justify-content-center border border-2 border-end-0",
    },
    {
      field: "",
      flex: 0.5,
      cellClass: "border border-2 border-start-0 border-end-0",
      cellRenderer: MoreMenu,
    },
  ];
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGrid rowData={rowData} columnDefs={columnDef} />
    </div>
  );
};
