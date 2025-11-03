export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  message: string;
}

export interface VerifyOTPRequest {
  email: string;
  code: string;
}

export interface VerifyOTPResponse {
  message: string;
}

export interface ChangePasswordRequest {
  email: string;
  newPassword: string;
  confirmPassword: string;
  code: string;
}

export interface ChangePasswordResponse {
  message: string;
}
