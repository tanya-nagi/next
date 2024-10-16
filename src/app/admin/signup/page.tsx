"use client";

import { useState } from "react";
import { Input, PasswordInput, FilledBtn } from "@components/admin";
import { Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { toast } from "react-toastify";
import { useAuthServices } from "@services/auth";
import Image from "next/image";

interface FormFields {
  fullName: string;
  email: string;
  password: string;
}

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]/;

type Error = {
  fullName?: string;
  email?: string;
  password?: string;
  message?: string;
};

const initialFormState: FormFields = {
  fullName: "",
  email: "",
  password: "",
};

export default function Signup() {
  const [errors, setErrors] = useState<Error>({
    fullName: "",
    email: "",
    message: "",
    password: "",
  });
  const { signup, isLoading } = useAuthServices();

  const signupHandler = async (values: FormFields) => {
    await signup(values, {
      onSuccess: () => {
        toast.success("Email verification link has been send.");
      },
      onError: (error) => {
        setErrors(error);
      },
    });
  };

  const validator = (
    values: FormFields,
    actions: FormikHelpers<FormFields>
  ) => {
    const newErrors: any = {};
    if (!values.email) {
      newErrors.email = "Email Is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      newErrors.email = "Invalid Email Address.";
    }
    if (values.fullName === "") {
      newErrors.fullName = "Full name is required.";
    }
    if (values.password === "") {
      newErrors.password = "Password is required.";
    } else if (values.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    } else if (!passwordRegex.test(values.password)) {
      newErrors.password = `New password must contain one uppercase character, one lowercase character, 
      one special character and one numeric`;
    }

    setErrors(newErrors);

    if (Object.keys(errors).length === 0) {
      signupHandler(values);
    }
  };
  return (
    <div className="bg-[#F9FBFD] min-h-screen flex items-center justify-center">
      <div className="w-full blade-top-padding blade-bottom-padding flex flex-col justify-center items-center gap-4">
        <div className="shadow-lg rounded-md p-10 max-w-lg px-6 w-full">
          <div className="flex items-end w-full justify-between">
            <div className="h-6">
              <Image
                className="w-full h-full object-contain"
                src="/assets/aak-logo.svg"
                width="0"
                height="0"
                alt="AAK logo"
              />
            </div>
            <h5 className="font-extrabold">Sign Up</h5>
          </div>
          <Formik
            initialValues={initialFormState}
            onSubmit={(values, actions) => validator(values, actions)}
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
                    <Input
                      placeholder="Enter Full Name"
                      className="w-full"
                      name="fullName"
                      label="Full Name"
                      setValue={(e) => {
                        setErrors({ ...errors, fullName: "" });
                        handleChange(e);
                      }}
                      value={values.fullName}
                      error={errors?.fullName ?? null}
                    />
                    <Input
                      placeholder="Enter Email"
                      type="email"
                      className="w-full"
                      label="Email"
                      name="email"
                      setValue={(e) => {
                        setErrors({ ...errors, email: "" });
                        handleChange(e);
                      }}
                      value={values.email}
                      error={errors?.email ?? null}
                    />
                    <label
                      className="flex flex-col gap-1 text-base font-bold"
                      htmlFor="password"
                    >
                      Password:
                      <PasswordInput
                        password={values.password}
                        name="password"
                        setPassword={(e) => {
                          setErrors({ ...errors, password: "" });
                          handleChange(e);
                        }}
                        isError={errors?.password ? true : false}
                      />
                      {errors?.password && (
                        <small
                          className="text-red text-opacity-70 text-base font-normal flex 
                        flex-nowrap items-center gap-1 "
                        >
                          {errors.password}
                        </small>
                      )}
                      {errors?.message && errors.message.length > 0 && (
                        <small
                          className=" text-red text-base text-opacity-70 font-normal flex flex-nowrap 
                        items-center gap-1 "
                        >
                          {errors.message}
                        </small>
                      )}
                    </label>

                    <div className="mt-12 grid w-full">
                      <FilledBtn
                        text="Create Account"
                        isDisabled={isLoading}
                        type="submit"
                        isLoading={isLoading}
                        isGrayscale={false}
                      />
                    </div>
                    <span className="mt-6 text-center font-lg font-normal">
                      Already have an acount?{" "}
                      <Link
                        className="cursor-pointer text-blue"
                        href="/admin/signin"
                      >
                        Signin
                      </Link>
                    </span>
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
