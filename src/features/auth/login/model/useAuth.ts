import { useState } from "react";
import { authApi } from "@/features/auth/login/api/authApi";
import type { ApiError, LoginRequest } from "@/features/auth/login/api/type";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const login = async (credentials: LoginRequest) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authApi.login(credentials);
      cookieStore.set("accessToken", response.accessToken);
      cookieStore.set("refreshToken", response.refreshToken);
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
