import { AuthEndpoint, fetchFactory } from "@/shared/api";
import type {
  ForgotPasswordResponse,
  VerifyOTPRequest,
  VerifyOTPResponse,
  ChangePasswordRequest,
  ChangePasswordResponse,
} from "./type";

export const changePasswordApi = {
  forgotPassword: (email: string): Promise<ForgotPasswordResponse> => {
    return fetchFactory.post<ForgotPasswordResponse>(
      AuthEndpoint.FORGOT_PASSWORD,
      { email },
    );
  },
  verifyOTP: (credentials: VerifyOTPRequest): Promise<VerifyOTPResponse> => {
    return fetchFactory.post<VerifyOTPResponse>(
      AuthEndpoint.VERIFY_OTP,
      credentials,
    );
  },

  changePassword: (
    credentials: ChangePasswordRequest,
  ): Promise<ChangePasswordResponse> => {
    return fetchFactory.post<ChangePasswordResponse>(
      AuthEndpoint.CHANGE_PASSWORD,
      credentials,
    );
  },
};
