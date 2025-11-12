export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    VERIFY_EMAIL: "/auth/verify-email",
    LOGOUT: "/auth/logout",
    RENEW_TOKEN: "/auth/ refresh",
    CHECK_AUTH: "/auth/check-auth",
    FORGOT_PASSWORD: "/auth/forgot-password",
    VERIFY_OTP: "/auth/verify-otp",
    CHANGE_PASSWORD: "/auth/change-password",
    CHECK_ME: "/users/me",
  },
  HOME: {},
  USER: {
    GET_ALL_USERS: "/users/",
    GET_USER_BY_ID: "/users/id",
  },
  PROJECT: {
    GET_ALL_PROJECTS_OF_WORKSPACE: "/api/workspaces/my-workspaces",
    CREATE_WORKSPACE: "/api/workspaces/",
  },
};

export const AuthEndpoint = API_ENDPOINTS.AUTH;
export const UserEndpoint = API_ENDPOINTS.USER;
export const ProjectEndpoint = API_ENDPOINTS.PROJECT;
