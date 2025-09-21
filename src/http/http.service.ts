import axiosInstance from "./axiosInstance";

class HttpService {
  public getBaseUrl() {
    return import.meta.env.VITE_API_URL;
  }
  public Get<T>(url: string) {
    return axiosInstance.get<T>(url);
  }
  public Post<T, U>(url: string, body: U) {
    return axiosInstance.post<T>(url, body);
  }
  public Put<T, U>(url: string, body: U) {
    return axiosInstance.put<T>(url, body);
  }
  public Delete<T>(url: string) {
    return axiosInstance.delete<T>(url);
  }
}
export const httpService = new HttpService();
