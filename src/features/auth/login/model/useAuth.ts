import { useState } from "react";
import { authApi } from "@/features/auth/login/api/authApi";
import type { ApiError, LoginRequest } from "@/features/auth/login/api/type";
import Cookies from "js-cookie";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const login = async (credentials: LoginRequest) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authApi.login(credentials);
      Cookies.set("accessToken", response.accessToken, {
        expires: 1,
        secure: true,
        sameSite: "strict",
      });
      Cookies.set("refreshToken", response.refreshToken, {
        expires: 7,
        secure: true,
        sameSite: "strict",
      });
      alert("Login successful");
      return response;
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError);
      alert(apiError.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    login,
    error,
  };
};
