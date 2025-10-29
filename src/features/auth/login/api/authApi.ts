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
    return fetchFactory.post<LoginResponse>(AuthEndpoint.LOGIN, credentials, {
      withCredentials: true,
    });
  },

  register: (credentials: RegisterRequest): Promise<RegisterResponse> => {
    return fetchFactory.post<RegisterResponse>(
      AuthEndpoint.REGISTER,
      credentials,
      {
        withCredentials: true,
      },
    );
  },

  verifyOTP: (credentials: VerifyOTPRequest): Promise<VerifyOTPResponse> => {
    return fetchFactory.post<VerifyOTPResponse>(
      AuthEndpoint.VERIFY_EMAIL,
      credentials,
      {
        withCredentials: true,
      },
    );
  },

  logout: (): Promise<void> => {
    return fetchFactory.post<void>(
      AuthEndpoint.LOGOUT,
      {},
      {
        withCredentials: true,
      },
    );
  },

  checkAuth: async (): Promise<boolean> => {
    const response = await fetchFactory.get<boolean>(AuthEndpoint.CHECK_AUTH, {
      withCredentials: true,
    });
    return response;
  },
};
