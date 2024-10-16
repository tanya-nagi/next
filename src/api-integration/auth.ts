import { ApiClient } from "./ApiClient";
import {
  SignupBody,
  SigninBody,
  VerifyEmailBody,
  VerifyOTPBody,
  ResetPasswordSendOTPBody,
  ResetPasswordBody,
} from "@/types/admin/api/auth";

const api = new ApiClient();

export const signup = async (body: SignupBody) =>
  await api.post("signup", body);

export const signin = async (body: SigninBody) =>
  await api.post("signin", body);

export const logout = async () => await api.put("logout", {});

export const verifyEmail = async (body: VerifyEmailBody) =>
  await api.post("users/verify-email", body);

export const verifyOTP = async (body: VerifyOTPBody) =>
  await api.post("users/verify-OTP", body);

export const sendResetPasswordOTP = async (body: ResetPasswordSendOTPBody) =>
  await api.post("users/reset-password/send-OTP", body);

export const resetPassword = async (body: ResetPasswordBody) =>
  await api.post("users/reset-password", body);
