import React from "react";
import "./agGrid.css";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

interface IAgGridProps extends AgGridReactProps {
  noRowsOverlayTemplate?: React.ReactNode;
}
export const AgGrid: React.FC<IAgGridProps> = ({
  rowData,
  columnDefs,
  noRowsOverlayComponentParams,
  noRowsOverlayComponent,
  onGridReady,
  rowSelection,
}) => {
  ModuleRegistry.registerModules([AllCommunityModule]);

  return (
    <AgGridReact
      rowData={rowData}
      columnDefs={columnDefs}
      noRowsOverlayComponent={noRowsOverlayComponent}
      noRowsOverlayComponentParams={noRowsOverlayComponentParams}
      onGridReady={onGridReady}
      rowSelection={rowSelection}
      rowHeight={50}
    />
  );
};
