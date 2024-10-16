"use client";

import { useState } from "react";
import { Input, FilledBtn, FormHeader } from "@/components/admin";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { usePasswordReset } from "@hooks/PasswordReset";
import { useAuthServices } from "@services/auth";

interface FormFields {
  email: string;
}

type Error = {
  email?: string;
  message?: string;
};

const initialFormState: FormFields = {
  email: "",
};

export default function VerifyEmail() {
  const router = useRouter();
  const { setIsOTPSent } = usePasswordReset();
  const { sendResetPasswordOTP, isLoading } = useAuthServices();
  const [errors, setErrors] = useState<Error>({
    email: "",
  });

  const sendOTPHandler = async (values: FormFields) => {
    await sendResetPasswordOTP(values, {
      onSuccess: () => {
        setIsOTPSent(true);
        router.push(
          `/admin/password-reset/verify-OTP?source=unauthenticated&email=${encodeURIComponent(
            values.email
          )}`
        );
      },
      onError: (error) => {
        setErrors(error);
      },
    });
  };

  const validator = (values: FormFields) => {
    const newErrors: any = {};
    if (!values.email) {
      newErrors.email = "Email Is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      newErrors.email = "Invalid Email Address.";
    }

    setErrors(newErrors);

    if (Object.keys(errors).length === 0) {
      sendOTPHandler(values);
    }
  };

  return (
    <div className="bg-[#F9FBFD] min-h-screen flex items-center justify-center">
      <div className="w-full blade-top-padding blade-bottom-padding flex flex-col justify-center items-center gap-4">
        <div className="shadow-lg rounded-md p-10 max-w-lg px-6 w-full">
          <FormHeader
            title="Forgot Password?"
            onClickBack={() => router.push("/admin/profile")}
          />
          <span className="font-normal text-lg text-center text-gray-500 block max-w-xs mx-auto">
            Please enter email address associated with your account
          </span>

          <Formik
            initialValues={initialFormState}
            onSubmit={(values, actions) => validator(values)}
            validateOnChange={false}
          >
            {({ values, handleChange, handleSubmit }) => {
              return (
                <div className="w-full pt-6">
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="grid gap-y-8 mx-auto"
                  >
                    <div>
                      <Input
                        placeholder="Enter Email"
                        type="email"
                        className="w-full"
                        label="Email"
                        name="email"
                        setValue={(e) => {
                          setErrors({});
                          handleChange(e);
                        }}
                        value={values.email}
                        error={errors?.email ?? ""}
                      />
                      {errors.message && (
                        <small className="text-red mt-1 font-semibold flex flex-nowrap items-center gap-1 text-base">
                          {errors.message}
                        </small>
                      )}
                    </div>

                    <div className="mt-10 grid w-full">
                      <FilledBtn
                        text="Send OTP"
                        isDisabled={isLoading}
                        type="submit"
                        isLoading={isLoading}
                        isGrayscale={false}
                      />
                    </div>
                  </form>
                </div>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
