import React, { useMemo } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";
import { AgGrid } from "../../../sharedComponents/agGrid/agGrid";
import { useQuery } from "@tanstack/react-query";
import { productCategoryService } from "../../../services/productCategory/productCategory.service";
import { StatusCell } from "./statusCell";

export const ProductCategory: React.FC = () => {
  ModuleRegistry.registerModules([AllCommunityModule]);

  const { data: productCategoryResponse } = useQuery({
    queryKey: ["getAllProductCategoryService"],
    queryFn: productCategoryService.getAllProductCategoryService,
  });

  const rowData = useMemo(() => {
    return productCategoryResponse || [];
  }, [productCategoryResponse]);

  const columnDef: ColDef[] = [
    { field: "name", filter: true, flex: 2, headerName: "Product Category" },
    {
      field: "status",
      filter: true,
      flex: 1,
      headerName: "Status",
      cellRenderer: StatusCell,
    },
    { field: "createdOn", filter: true, flex: 2, headerName: "Created On" },
    { field: "updatedOn", filter: true, flex: 2, headerName: "Updated On" },
  ];

  return (
    <div className="container">
      <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
        <AgGrid rowData={rowData} columnDefs={columnDef} />
      </div>
    </div>
  );
};
