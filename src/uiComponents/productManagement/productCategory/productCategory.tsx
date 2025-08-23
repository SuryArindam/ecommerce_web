import React from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";
import { AgGrid } from "../../../sharedComponents/agGrid/agGrid";

export const ProductCategory: React.FC = () => {
  ModuleRegistry.registerModules([AllCommunityModule]);

  const rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
  ];
  const columnDef: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ];

  return (
    <div className="container">
      <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
        <AgGrid
          rowData={rowData}
          columnDefs={columnDef}
          rowSelection={"multiple"}
        />
      </div>
    </div>
  );
};
