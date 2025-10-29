import { useState } from "react";
import { changePasswordApi } from "../api/changePasswordApi";

export const useChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const forgotPassword = async (email: string) => {
    setIsLoading(true);
    try {
      const response = await changePasswordApi.forgotPassword(email);
      if (!response) throw new Error("Failed to send reset link");
      return response;
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    forgotPassword,
  };
};
