import { apiClient } from "./axiosInstance";
import type { AxiosRequestConfig } from "axios";

export interface ApiError {
  message: string;
  statusCode: number;
}

export interface BackendResponse<T> {
  message?: string;
  metadata?: T;
  statusCode?: number;
  reasonStatusCode?: string;
}
// Fetch factory
export const fetchFactory = {
  // GET
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response = await apiClient.get<T>(url, config);
      return response.data;
    } catch (error: any) {
      throw {
        message:
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch data",
        statusCode: error.response?.status || 500,
      } as ApiError;
    }
  },

  // POST
  post: async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    try {
      const response = await apiClient.post<BackendResponse<T>>(
        url,
        data,
        config,
      );
      return response.data.metadata || (response.data as unknown as T);
    } catch (error: any) {
      throw {
        message:
          error.response?.data?.message ||
          error.message ||
          "Failed to post data",
        statusCode: error.response?.status || 500,
      } as ApiError;
    }
  },

  // PUT
  put: async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    try {
      const response = await apiClient.put<T>(url, data, config);
      return response.data;
    } catch (error: any) {
      throw {
        message:
          error.response?.data?.message ||
          error.message ||
          "Failed to put data",
        statusCode: error.response?.status || 500,
      } as ApiError;
    }
  },

  // DELETE
  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response = await apiClient.delete<T>(url, config);
      return response.data;
    } catch (error: any) {
      throw {
        message:
          error.response?.data?.message ||
          error.message ||
          "Failed to delete data",
        statusCode: error.response?.status || 500,
      } as ApiError;
    }
  },

  // PATCH
  patch: async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    try {
      const response = await apiClient.patch<T>(url, data, config);
      return response.data;
    } catch (error: any) {
      throw {
        message:
          error.response?.data?.message ||
          error.message ||
          "Failed to patch data",
        statusCode: error.response?.status || 500,
      } as ApiError;
    }
  },
};
