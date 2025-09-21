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

export interface ItemRequest<T> {
  item: T;
}

export interface ListRequest<T> {
  items: T[];
}
