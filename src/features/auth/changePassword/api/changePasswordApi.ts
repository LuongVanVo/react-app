import { AuthEndpoint, fetchFactory } from "@/shared/api";
import type { ForgotPasswordRequest, ForgotPasswordResponse } from "./type";

export const changePasswordApi = {
  forgotPassword: (email: string): Promise<ForgotPasswordResponse> => {
    return fetchFactory.post<ForgotPasswordResponse>(
      AuthEndpoint.FORGOT_PASSWORD,
      { email },
    );
  },
};
