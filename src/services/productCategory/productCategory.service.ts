import { ListResponse } from "../../http/http.model";
import { httpService } from "../../http/http.service";
import { processListResponse } from "../../http/processResponses";
import { ProductCategoryItem } from "./productCategory.model";

class ProductCategoryService {
  public async getAllProductCategoryService() {
    const _baseUrl = httpService.getBaseUrl();
    const url = `${_baseUrl}/productCategory/getAll`;
    const response = await httpService.Get<ListResponse<ProductCategoryItem>>(
      url
    );
    return processListResponse(response);
  }
}
export const productCategoryService = new ProductCategoryService();
