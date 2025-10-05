import { create } from "zustand";
import {
  IProductCategoryStoreAction,
  IProductCategoryStoreState,
} from "./productCategory.store.model";
import { ProductCategoryItem } from "src/services/productCategory/productCategory.model";

export const useProductCategoryStore = create<
  IProductCategoryStoreState & IProductCategoryStoreAction
>((set) => ({
  currentProductCategory: null,
  setCurrentProductCategory: (currentProductCategory: ProductCategoryItem) =>
    set({ currentProductCategory }),
  resetStore: () => set({ currentProductCategory: null }),
}));
