import { apiClient } from "@/shared/api/axiosInstance";
import type {
  LoginRequest,
  LoginResponse,
} from "@/features/auth/login/api/type";
import type {
  RegisterRequest,
  RegisterResponse,
} from "@/features/auth/login/api/type";
import type {
  ApiError,
  VerifyOTPRequest,
  VerifyOTPResponse,
} from "@/features/auth/login/api/type";

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

  register: async (credentials: RegisterRequest): Promise<RegisterResponse> => {
    try {
      const response = await apiClient.post<RegisterResponse>(
        "/auth/register",
        credentials,
      );
      return response.data;
    } catch (error: any) {
      throw {
        message: error.response?.data?.message || "Register failed",
        statusCode: error.response?.status || 500,
      } as ApiError;
    }
  },

  verifyOTP: async (
    credentials: VerifyOTPRequest,
  ): Promise<VerifyOTPResponse> => {
    try {
      const response = await apiClient.post<VerifyOTPResponse>(
        "/auth/verify-email",
        credentials,
      );
      return response.data;
    } catch (err: any) {
      throw {
        message: err.response?.data?.message || "Verify OTP failed",
        statusCode: err.response?.status || 500,
      } as ApiError;
    }
  },
};
