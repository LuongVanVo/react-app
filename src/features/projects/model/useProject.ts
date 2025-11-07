import type { ApiError } from "@/features/auth/login/api/type";
import { projectApi } from "../api/projectApi";

export const useProject = () => {
  const getAllProjectsOfUser = async () => {
    try {
      const response = await projectApi.getAllProjectsOfUser();
      if (!response) throw new Error("Failed to get all projects of user");
      return response;
    } catch (err) {
      const apiError = err as ApiError;
      alert(apiError.message);
      return [];
    }
  };

  return {
    getAllProjectsOfUser,
  };
};
