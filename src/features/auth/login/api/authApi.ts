import { AuthEndpoint, fetchFactory } from "@/shared/api";
import type {
  LoginRequest,
  LoginResponse,
} from "@/features/auth/login/api/type";
import type {
  RegisterRequest,
  RegisterResponse,
} from "@/features/auth/login/api/type";
import type {
  VerifyOTPRequest,
  VerifyOTPResponse,
} from "@/features/auth/login/api/type";

export const authApi = {
  login: (credentials: LoginRequest): Promise<LoginResponse> => {
    return fetchFactory.post<LoginResponse>(AuthEndpoint.LOGIN, credentials);
  },

  register: (credentials: RegisterRequest): Promise<RegisterResponse> => {
    return fetchFactory.post<RegisterResponse>(
      AuthEndpoint.REGISTER,
      credentials,
    );
  },

  verifyOTP: (credentials: VerifyOTPRequest): Promise<VerifyOTPResponse> => {
    return fetchFactory.post<VerifyOTPResponse>(
      AuthEndpoint.VERIFY_EMAIL,
      credentials,
    );
  },
};
