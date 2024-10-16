"use client";
import Input from "@components/atoms/input";
import { Formik, FormikHelpers } from "formik";
import "./style.css";
import { ButtonAtom } from "@components/atoms/button";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
  areaOfInterest: "",
};

type FormFields = {
  name: string;
  email: string;
  message: string;
  phoneNumber: string;
  areaOfInterest: string;
};

export default function Form() {
  const submitHandler = () => {};
  const validate = (values: FormFields, actions: FormikHelpers<FormFields>) => {
    console.log("submit", values);
  };

  return (
    <div
      className="w-[86%] lg:w-[580px] xlg:w-[700px] form-container rounded-md py-12 lg:py-20 px-6 sm:px-12 lg:px-[52px] 
    xlg:px-[76px] h-auto bg-blue"
    >
      <Formik
        onSubmit={(values, actions) => validate(values, actions)}
        initialValues={initialValues}
        validateOnChange={false}
      >
        {({ values, handleChange, handleSubmit }) => {
          return (
            <>
              <form
                className="flex flex-col gap-y-6"
                onSubmit={handleSubmit}
                noValidate
              >
                <Input
                  name="name"
                  label="Name*"
                  placeholder="Your full name here"
                  value={values.name}
                  setValue={handleChange}
                />
                <Input
                  name="email"
                  label="Email ID*"
                  placeholder="mail@dummy.com"
                  value={values.email}
                  setValue={handleChange}
                />
                <Input
                  label="Contact Number*"
                  placeholder="+123 456 7890"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  setValue={handleChange}
                />
                <Input
                  label="We are*"
                  placeholder="Choose"
                  name="areaOfInterrest"
                  value={values.areaOfInterest}
                  setValue={handleChange}
                />
                <Input
                  label="Message"
                  placeholder="Message"
                  name="message"
                  value={values.message}
                  setValue={handleChange}
                />
              </form>
              <div className="mt-10">
                <ButtonAtom
                  theme="outline"
                  size="lg"
                  className="px-8 lg:px-10 lg:py-2"
                  onClick={() => null}
                  text="Send"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                    >
                      <path
                        d="M1.31055 1.427L6.31055 6.44098L1.31055 11.4409"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                />
              </div>
            </>
          );
        }}
      </Formik>
    </div>
  );
}
