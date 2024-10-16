"use client";
import { useAuthServices } from "@services/auth";
import { useEffect, useState } from "react";

export const EmailVerified = ({ userId }: any) => {
  const [isEmailVerified, setEmailVerified] = useState<null | boolean>(null);
  const { verifyEmail, isLoading } = useAuthServices();

  const verifyEmailHandler = async () => {
    await verifyEmail(
      { userId: userId },
      {
        onSuccess: () => {
          setEmailVerified(true);
        },
        onError: () => {
          setEmailVerified(false);
        },
      }
    );
  };

  useEffect(() => {
    verifyEmailHandler();
  }, [isEmailVerified]);

  return (
    <div>
      {isLoading && isEmailVerified == null ? (
        <h2>Loading...</h2>
      ) : !isLoading && isEmailVerified == false ? (
        <h2>Something went wrong. Please try again later.</h2>
      ) : (
        <h2>Email verified</h2>
      )}
    </div>
  );
};
