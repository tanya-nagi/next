import { useState } from "react";
import {
  SignupBody,
  HandleMethod,
  SigninBody,
  VerifyEmailBody,
  VerifyOTPBody,
  ResetPasswordBody,
  ResetPasswordSendOTPBody,
} from "../types/admin/api/auth";
import {
  signup as signupAPI,
  signin as signinAPI,
  verifyEmail as verifyEmailAPI,
  resetPassword as resetPasswordAPI,
  sendResetPasswordOTP as sendResetPasswordOTPAPI,
  logout as logoutAPI,
  verifyOTP as verifyOTPAPI,
} from "@api-integration/auth";
import { useUser } from "@hooks/User";

export function useAuthServices() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { setUser } = useUser();

  const signup = async (
    values: SignupBody,
    { onSuccess, onError }: HandleMethod
  ) => {
    setLoading(true);
    await signupAPI(values)
      .then((res) => {
        if (res.status && res.data) {
          onSuccess?.();
        } else {
          if (res.data) {
            onError?.(res.data);
          } else {
            onError?.({ message: res.message });
          }
        }
      })
      .catch((error) => {
        onError?.({ message: error });
      })
      .finally(() => setLoading(false));
  };

  const signin = async (
    values: SigninBody,
    { onSuccess, onError }: HandleMethod
  ) => {
    setLoading(true);
    await signinAPI(values)
      .then((res) => {
        if (res.status && res.data) {
          setUser(res.data);
          onSuccess?.(res.data);
        } else {
          if (res.data) {
            onError?.(res.data);
          } else {
            onError?.({ message: res.message });
          }
        }
      })
      .catch((error) => {
        onError?.({ message: error });
      })
      .finally(() => setLoading(false));
  };

  const verifyEmail = async (
    values: VerifyEmailBody,
    { onSuccess, onError }: HandleMethod
  ) => {
    setLoading(true);
    await verifyEmailAPI(values)
      .then((res) => {
        if (res.status && res.data) {
          onSuccess?.();
        } else {
          if (res.data) {
            onError?.(res.data);
          }
          onError?.({ message: res.message });
        }
      })
      .catch((error) => {
        onError?.({ message: error });
      })
      .finally(() => setLoading(false));
  };

  const sendResetPasswordOTP = async (
    values: ResetPasswordSendOTPBody,
    { onSuccess, onError }: HandleMethod
  ) => {
    setLoading(true);
    await sendResetPasswordOTPAPI(values)
      .then((res) => {
        if (res.status && res.data) {
          onSuccess?.(res.data);
        } else {
          if (res.data) {
            onError?.(res.data);
          }
          onError?.(res.message);
        }
      })
      .catch((error) => {
        onError?.(error);
      })
      .finally(() => setLoading(false));
  };

  const verifyOTP = async (
    values: VerifyOTPBody,
    { onSuccess, onError }: HandleMethod
  ) => {
    setLoading(true);
    await verifyOTPAPI(values)
      .then((res) => {
        if (res.status && res.data) {
          onSuccess?.();
        } else {
          if (res.data) {
            onError?.(res.data);
          } else {
            onError?.({ message: res.message });
          }
        }
      })
      .catch((error) => {
        onError?.({ message: error });
      })
      .finally(() => setLoading(false));
  };

  const resetPassword = async (
    values: ResetPasswordBody,
    { onSuccess, onError }: HandleMethod
  ) => {
    setLoading(true);
    await resetPasswordAPI(values)
      .then((res) => {
        if (res.status && res.data) {
          onSuccess?.(res.data);
        } else {
          if (res.data) {
            onError?.(res.data);
          } else {
            onError?.({ message: res.message });
          }
        }
      })
      .catch((error) => {
        onError?.({ message: error });
      })
      .finally(() => setLoading(false));
  };

  const logout = async ({ onSuccess, onError }: HandleMethod) => {
    setLoading(true);
    await logoutAPI()
      .then((res) => {
        if (res.status && res.data) {
          onSuccess?.(res.data);
        } else {
          onError?.(res.message);
        }
      })
      .catch((error) => {
        onError?.(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    signup,
    signin,
    verifyEmail,
    sendResetPasswordOTP,
    logout,
    resetPassword,
    verifyOTP,
    isLoading,
  };
}
