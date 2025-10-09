import { useState } from "react";
import { authApi } from "@/features/auth/login/api/authApi";
import type {
  ApiError,
  LoginRequest,
  VerifyOTPRequest,
} from "@/features/auth/login/api/type";
import type { RegisterRequest } from "@/features/auth/login/api/type";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const navigate = useNavigate();

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

  const register = async (credentials: RegisterRequest) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authApi.register(credentials);
      localStorage.setItem("registerEmail", credentials.email);
      navigate("/inputCode");
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

  const verifyOTP = async (credentials: VerifyOTPRequest) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authApi.verifyOTP(credentials);
      navigate("/");
      return response;
    } catch (err: any) {
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
    register,
    verifyOTP,
  };
};
