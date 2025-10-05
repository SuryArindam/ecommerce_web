import { ProductCategoryItem } from "src/services/productCategory/productCategory.model";

export interface IProductCategoryStoreState {
  currentProductCategory: ProductCategoryItem;
}

export interface IProductCategoryStoreAction {
  setCurrentProductCategory: (
    currentProductCategory: ProductCategoryItem
  ) => void;
  resetStore: () => void;
}
