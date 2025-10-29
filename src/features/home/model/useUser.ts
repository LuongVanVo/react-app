import type { ApiError } from "@/features/auth/login/api/type";
import { userApi } from "../api/userApi";
import Cookies from "js-cookie";

export const useUser = () => {
  const getAllUsers = async () => {
    try {
      const response = await userApi.getAllUsers();
      if (!response) throw new Error("Failed to get all users");
      return response;
    } catch (err) {
      const apiError = err as ApiError;
      alert(apiError.message);
      return [];
    }
  };

  return {
    getAllUsers,
  };
};
