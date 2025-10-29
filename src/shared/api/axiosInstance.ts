import axios from "axios";
import { AuthEndpoint } from "./endpoints";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let failedRequests: { resolve: () => void; reject: (err: any) => void }[] = [];

const processQueue = (error: any) => {
  failedRequests.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve();
  });
  failedRequests = [];
};

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (!error.response || error.response.status !== 401) {
      return Promise.reject(error);
    }

    // Nếu refresh Token hết hạn thì logout
    if (originalRequest.url?.includes(AuthEndpoint.RENEW_TOKEN)) {
      window.location.href = "/";
      return Promise.reject(error);
    }

    if (originalRequest._retry) {
      window.location.href = "/";
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedRequests.push({
          resolve: () => {
            resolve(apiClient(originalRequest));
          },
          reject,
        });
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}${AuthEndpoint.RENEW_TOKEN}`,
        {},
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        },
      );
      processQueue(null);

      return apiClient(originalRequest);
    } catch (err: any) {
      processQueue(err);

      window.location.href = "/";
      return Promise.reject(err);
    } finally {
      isRefreshing = false;
    }
  },
);
