import { apiClient } from "@/shared/api/axiosInstance";
import type {
  LoginRequest,
  LoginResponse,
} from "@/features/auth/login/api/type";
import type { ApiError } from "@/features/auth/login/api/type";

export const authApi = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    try {
      const response = await apiClient.post<LoginResponse>(
        "/auth/login",
        credentials,
      );
      return response.data;
    } catch (error: any) {
      throw {
        message: error.response?.data?.message || "Login failed",
        statusCode: error.response?.status || 500,
      } as ApiError;
    }
  },
};
