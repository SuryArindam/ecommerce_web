export enum ProductCategoryStatus {
  Active = 1,
  Inactive = 2,
}

export interface ProductCategoryItem {
  categoryId: string;
  name: string;
  status: ProductCategoryStatus;
  isDeleted: boolean;
  createdOn: string;
  updatedOn: string;
}
