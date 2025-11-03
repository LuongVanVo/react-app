export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    VERIFY_EMAIL: "/auth/verify-email",
    LOGOUT: "/auth/logout",
    RENEW_TOKEN: "/auth/renew-token",
    CHECK_AUTH: "/auth/check-auth",
    FORGOT_PASSWORD: "/auth/forgot-password",
    VERIFY_OTP: "/auth/verify-otp",
    CHANGE_PASSWORD: "/auth/change-password",
  },
  HOME: {},
  USER: {
    GET_ALL_USERS: "/users/",
  },
};

export const AuthEndpoint = API_ENDPOINTS.AUTH;
export const UserEndpoint = API_ENDPOINTS.USER;
