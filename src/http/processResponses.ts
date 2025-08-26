import { AxiosResponse } from "axios";
import { ItemResponse, ListResponse } from "./http.model";

export const processItemResponse = <T>(
  response: AxiosResponse<ItemResponse<T>>
) => {
  if (response.data.systemException === null) {
    return response.data.item;
  }
};
export const processListResponse = <T>(
  response: AxiosResponse<ListResponse<T>>
) => {
  if (response.data.systemException === null) {
    return response.data.items;
  }
};
