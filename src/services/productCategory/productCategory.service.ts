import { ItemRequest, ItemResponse, ListResponse } from "src/http/http.model";
import { httpService } from "src/http/http.service";
import {
  processItemResponse,
  processListResponse,
} from "src/http/processResponses";
import {
  CreateProductCategoryRequest,
  ProductCategoryItem,
  SavedProductCategory,
} from "./productCategory.model";

class ProductCategoryService {
  public async getAllProductCategoryService() {
    const _baseUrl = httpService.getBaseUrl();
    const url = `${_baseUrl}/productCategory/getAllCategory`;
    const response = await httpService.Get<ListResponse<ProductCategoryItem>>(
      url
    );
    return processListResponse(response);
  }
  public async createNewProductCategory(name: string) {
    const _baseUrl = httpService.getBaseUrl();
    const url = `${_baseUrl}/productCategory/createCategory`;
    const body: ItemRequest<CreateProductCategoryRequest> = {
      item: {
        name: name,
      },
    };
    const response = await httpService.Post<
      ItemResponse<SavedProductCategory>,
      ItemRequest<CreateProductCategoryRequest>
    >(url, body);
    return processItemResponse(response);
  }
}
export const productCategoryService = new ProductCategoryService();
