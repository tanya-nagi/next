"use client";

import { PasswordInput, FilledBtn, FormHeader } from "@/components/admin";
import { Formik, FormikHelpers } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import { usePasswordReset } from "@hooks/PasswordReset";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useAuthServices } from "@/services/auth";
import { ToastContainer } from "react-toastify";

interface FormFields {
  newPassword: string;
  confirmPassword: string;
}

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]/;

type Error = {
  newPassword?: string;
  confirmPassword?: string;
  message?: string;
};

const initialFormState: FormFields = {
  newPassword: "",
  confirmPassword: "",
};

export default function PasswordResetForm() {
  const { isOTPVerified, setIsOTPVerified } = usePasswordReset();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [errors, setErrors] = useState<Error>();
  const { isLoading, resetPassword } = useAuthServices();

  const email = useMemo(() => searchParams.get("email"), [searchParams]);

  const submitHandler = async (
    values: FormFields,
    actions: FormikHelpers<FormFields>
  ) => {
    const data = {
      newPassword: values.newPassword,
      confirmedPassword: values.confirmPassword,
      email: email ?? "",
    };

    await resetPassword(data, {
      onSuccess: () => {
        actions.resetForm();
        toast.success("Password has been updated", {
          position: "top-right",
        });
      },
      onError: (error) => {
        setErrors(error);
        if (error.message) {
          setErrors(error);
        }
      },
    });
  };

  const validator = (
    values: FormFields,
    actions: FormikHelpers<FormFields>
  ) => {
    const errors: any = {};

    if (values.newPassword === "") {
      errors.newPassword = "Please enter password.";
    } else if (!passwordRegex.test(values.newPassword)) {
      errors.newPassword = `New password must contain one uppercase character, one lowercase character,
      one special character and one numeric`;
    }

    if (values.confirmPassword === "") {
      errors.confirmPassword = "Please confirm password.";
    } else if (!passwordRegex.test(values.confirmPassword)) {
      errors.confirmPassword = `Confirm password must contain one uppercase character, one lowercase character, 
      one special character and one numeric`;
    }
    if (
      values.confirmPassword !== "" &&
      values.confirmPassword !== values.newPassword
    ) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      submitHandler(values, actions);
    }
  };

  useEffect(() => {
    return () => {
      setIsOTPVerified(false);
    };
  }, [isOTPVerified]);

  if (!isOTPVerified) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h4 className="text-lg">Page Not Found</h4>
      </div>
    );
  }

  return (
    <div className="bg-transparent bg-opacity-10 min-h-screen flex items-center justify-center">
      <ToastContainer />
      <Formik
        initialValues={initialFormState}
        onSubmit={(values: FormFields, actions) => validator(values, actions)}
        validateOnChange={false}
      >
        {({
          values,
          handleChange,
          handleSubmit,
        }: {
          values: FormFields;
          handleChange: any;
          handleSubmit: any;
        }) => (
          <div
            className="bg-white w-full border border-gray border-opacity-40 max-w-xl rounded-sm pb-8 pt-5 lg:pb-12 px-3 
          shadow-sm"
          >
            <FormHeader
              title="Change Your Password"
              onClickBack={() => router.push("/admin/members")}
            />
            <form
              onSubmit={handleSubmit}
              noValidate
              className="md:w-10/12 mt-8 mx-auto"
            >
              <div className="w-full grid mb-4">
                <span className="text-base font-semibold mb-1">
                  New Password
                </span>
                <PasswordInput
                  name="newPassword"
                  password={values.newPassword}
                  setPassword={(e) => {
                    setErrors({ ...errors, newPassword: "" });
                    handleChange(e);
                  }}
                  isError={errors?.newPassword ? true : false}
                />
                {errors?.newPassword && (
                  <small
                    className="text-red text-opacity-70 font-normal flex flex-nowrap items-center 
                  gap-1 text-base"
                  >
                    {errors?.newPassword}
                  </small>
                )}
              </div>
              <div className="w-full grid">
                <span className="text-base font-semibold mb-1 mt-3">
                  Confirm Password
                </span>
                <PasswordInput
                  name="confirmPassword"
                  password={values.confirmPassword}
                  setPassword={(e) => {
                    setErrors({ ...errors, confirmPassword: "" });
                    handleChange(e);
                  }}
                  isError={errors?.confirmPassword ? true : false}
                />

                {errors?.confirmPassword && (
                  <small className="text-red text-opacity-70 font-normal flex flex-nowrap items-center gap-1 text-base">
                    {errors.confirmPassword}
                  </small>
                )}
                {errors?.message && (
                  <small className="text-red text-opacity-70 font-semibold flex flex-nowrap items-center gap-1 text-base">
                    {errors.message}
                  </small>
                )}
              </div>

              <div className="w-full grid mt-12">
                <FilledBtn
                  text="Change Password"
                  type="submit"
                  isDisabled={isLoading}
                  isLoading={isLoading}
                  isGrayscale={false}
                />
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
}
