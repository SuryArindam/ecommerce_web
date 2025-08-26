import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { useAppStore } from "../appStore/app.store";

const { setShowSpinner } = useAppStore.getState();

export const requestInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  setShowSpinner(true);
  return config;
};

export const requestErrorInterceptor = (
  error: AxiosError
): Promise<AxiosError> => {
  setShowSpinner(false);
  return Promise.reject(error);
};

export const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
  setShowSpinner(false);
  return response;
};

export const responseErrorInterceptor = (
  error: AxiosError
): Promise<AxiosError> => {
  setShowSpinner(false);
  return Promise.reject(error);
};
