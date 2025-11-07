import type { ApiError } from "@/features/auth/login/api/type";
import { userApi } from "../api/userApi";

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

  const getUserById = async () => {
    try {
      const response = await userApi.getUserById();
      if (!response) throw new Error("Failed to get user by id");
      return response;
    } catch (err) {
      const apiError = err as ApiError;
      alert(apiError.message);
      return null;
    }
  };

  return {
    getAllUsers,
    getUserById,
  };
};
