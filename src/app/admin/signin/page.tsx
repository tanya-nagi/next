"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Formik } from "formik";
import { Input, PasswordInput, FilledBtn } from "@components/admin";
import { useAuthServices } from "@services/auth";
import Image from "next/image";

interface FormFields {
  email: string;
  password: string;
}

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]/;

type Error = {
  email?: string;
  password?: string;
  message?: string;
};

const initialFormState: FormFields = {
  email: "",
  password: "",
};

export default function Signin() {
  const router = useRouter();
  const [errors, setErrors] = useState<Error>({
    email: "",
    message: "",
    password: "",
  });
  const { signin, isLoading } = useAuthServices();

  const loginHandler = async (values: FormFields) => {
    await signin(values, {
      onSuccess: () => {
        router.push("/admin/news-feed");
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
    if (values.password === "") {
      newErrors.password = "Password is required.";
    } else if (values.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    } else if (!passwordRegex.test(values.password)) {
      newErrors.password = `Password must contain one uppercase character, one lowercase character, 
      one special character and one numeric`;
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      loginHandler(values);
    }
  };

  const onClickForgotPassword = () => {
    router.push("/admin/password-reset/verify-email");
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
            <h5 className="font-extrabold">Sign In</h5>
          </div>
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
                      error={errors?.email ?? ""}
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
                        <small className="text-red text-opacity-70 text-base dark:text-danger font-normal flex flex-nowrap items-center gap-1 ">
                          {errors.password}
                        </small>
                      )}
                      {errors?.message && errors.message.length > 0 && (
                        <small
                          className=" text-red text-opacity-70 text-base dark:text-danger font-normal flex flex-nowrap 
                        items-center gap-1 "
                        >
                          {errors.message}
                        </small>
                      )}
                      <span
                        onClick={onClickForgotPassword}
                        className="text-left mt-1 cursor-pointer font-normal text-base   text-opacity-50"
                      >
                        Forgot Password?
                      </span>
                    </label>

                    <div className="mt-10 grid w-full">
                      <FilledBtn
                        text="Login"
                        isDisabled={isLoading}
                        type="submit"
                        isLoading={isLoading}
                        isGrayscale={false}
                      />
                    </div>
                    <span className="mt-6 text-center font-lg font-normal">
                      Don&apos;t have an acount?{" "}
                      <Link
                        className="cursor-pointer text-blue"
                        href="/admin/signup"
                      >
                        Signup
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
