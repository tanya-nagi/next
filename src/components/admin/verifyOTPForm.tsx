"use client";

import React, { useEffect, useMemo } from "react";
import {
  Input,
  FilledBtn,
  LoadingIndicator,
  FormHeader,
} from "@components/admin";
import { Formik } from "formik";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { usePasswordReset } from "@hooks/PasswordReset";
import { ToastContainer, toast } from "react-toastify";
import { useAuthServices } from "@services/auth";

interface FormFields {
  otp: string;
}

type Error = {
  otp?: string;
  email?: string;
  message?: string;
};

const initialFormState = {
  otp: "",
};

export default function VerifyOTPForm() {
  const router = useRouter();
  const { isOTPSent, setIsOTPSent, setIsOTPVerified } = usePasswordReset();
  const searchParams = useSearchParams();
  const { verifyOTP, sendResetPasswordOTP, isLoading } = useAuthServices();
  const [isResendingOTP, setResendingOTP] = useState(false);

  const [errors, setErrors] = useState<Error>({
    otp: "",
    email: "",
    message: "",
  });

  const source = useMemo(() => searchParams.get("source"), [searchParams]);
  const email = useMemo(() => searchParams.get("email"), [searchParams]);

  const handleResendOTP = async () => {
    setResendingOTP(true);

    await sendResetPasswordOTP(
      { email: email ?? "" },
      {
        onSuccess: () => {
          toast.success("OTP send", {
            position: "top-right",
          });
        },
      }
    ).finally(() => setResendingOTP(false));
  };

  const verifyOTPHandler = async (values: FormFields) => {
    const data = {
      otp: values.otp.toString(),
      type: "reset_password",
      email: email ?? "",
    };
    await verifyOTP(data, {
      onSuccess: () => {
        setIsOTPVerified(true);
        if (source === "unauthenticated") {
          router.push(
            `/admin/password-reset?source=${source}&email=${encodeURIComponent(
              data.email
            )}`
          );
        } else {
          router.push(
            `/admin/profile/password-reset?source=${source}&email=${encodeURIComponent(
              data.email
            )}`
          );
        }
      },
      onError: (error) => {
        setErrors(error);
      },
    });
  };

  const validator = (values: FormFields) => {
    const errors: any = {};

    if (values.otp === "") {
      errors.otp = "OTP is required.";
    } else if (values.otp.length < 4) {
      errors.otp = "OTP must be at least 4 characters long.";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      verifyOTPHandler(values);
    }
  };

  useEffect(() => {
    return () => {
      setIsOTPSent(false);
    };
  }, [isOTPSent]);

  if (!isOTPSent) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h4 className="text-lg">Page Not Found</h4>
      </div>
    );
  }

  return (
    <div
      className={`bg-[#F9FBFD] min-h-screen flex items-center justify-center blade-top-padding blade-bottom-padding`}
    >
      <ToastContainer />
      <Formik
        initialValues={initialFormState}
        onSubmit={(values, actions) => validator(values)}
        validateOnChange={false}
      >
        {({ values, handleChange, handleSubmit }) => (
          <div
            className="bg-white relative w-full max-w-xl rounded-sm border border-gray border-opacity-40 pb-4 px-3 
          shadow-sm pt-6"
          >
            <FormHeader title="Enter OTP" onClickBack={() => router.back()} />

            <span className="font-normal text-lg text-center block max-w-xs mx-auto">
              If the email is valid, You must have received an OTP on your
              email.
            </span>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="md:w-10/12 mt-10 mx-auto"
            >
              <div className="w-full grid">
                <Input
                  value={values.otp}
                  label="Enter OTP"
                  setValue={(e) => {
                    setErrors({ ...errors, otp: "" });
                    handleChange(e);
                  }}
                  type="number"
                  name="otp"
                  error={errors?.otp ?? ""}
                  placeholder="Enter OTP"
                />
                {errors?.message && (
                  <small
                    className="text-red text-opacity-70 font-normal flex flex-nowrap items-center 
                  gap-1 text-base"
                  >
                    {errors.message}
                  </small>
                )}
              </div>

              <div className="mt-10 grid">
                <FilledBtn
                  type="submit"
                  isLoading={isLoading}
                  isDisabled={isLoading}
                  text="Verify OTP"
                  isGrayscale={false}
                />
              </div>
              <div className="grid place-content-center py-4">
                <button
                  type="button"
                  disabled={isResendingOTP}
                  onClick={handleResendOTP}
                  className="text-lg disabled:text-gray text-blue underline hover:outline-none focus-visible:bg-lightGray 
                  rounded-md flex items-center gap-x-4 font-regular"
                >
                  Resend OTP
                  {isResendingOTP && (
                    <LoadingIndicator indicatorStyle="!w-5 !h-5 !border-t-red !border-2 !border-t-2" />
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
}
