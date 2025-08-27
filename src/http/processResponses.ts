import { AxiosResponse } from "axios";
import { ItemResponse, ListResponse } from "./http.model";
import { EcomException } from "./errorHandler";

export const processItemResponse = <T>(
  response: AxiosResponse<ItemResponse<T>>
) => {
  if (response.data.systemException === null) {
    return response.data.item;
  } else {
    throw new EcomException(response.data.message, response.data.statusCode);
  }
};
export const processListResponse = <T>(
  response: AxiosResponse<ListResponse<T>>
) => {
  if (response.data.systemException === null) {
    return response.data.items;
  } else {
    throw new EcomException(response.data.message, response.data.statusCode);
  }
};
