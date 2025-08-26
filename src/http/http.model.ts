export interface ResponseBase {
  message: string;
  statusCode: number;
  systemException: object;
}

export interface ItemResponse<T> extends ResponseBase {
  item: T;
}

export interface ListResponse<T> extends ResponseBase {
  items: T[];
}
