import React from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AddProductCategory } from "./addProductCategory/addProductCategory";
import { ProductCategoryList } from "./productCategoryList/productCategoryList";

export const ProductCategory: React.FC = () => {
  return (
    <div className="container mt-5">
      <AddProductCategory />
      <ProductCategoryList />
    </div>
  );
};
