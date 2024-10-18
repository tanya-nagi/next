"use client";

import React, { useEffect, useRef, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

// import emailjs from '@emailjs/browser'

import { number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormProps = {
  isPurposeField?: boolean;
  formTitle?: string;
};

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required.")
    .max(30, "Name can not be more than 30 characters."),
  email: z
    .string()
    .email("Invalid email address.")
    .min(1, "Email is required."),
  phone: z
    .number()
    .min(10, "Please Enter valid contact number.")
    .max(12, "Maximum digits allowed is 12."),
  company: z.string().min(2, "Company is required."),
  weAre: z.string().min(1, 'Please select "We Are"'),
  message: z.string(),
});

export type FormFieldSchema = z.infer<typeof formSchema>;

export default function ContactForm({ formTitle = "" }: FormProps) {
  const [isLoading, setLoading] = useState(false);

  const formRef = useRef<any>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFieldSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormFieldSchema> = async (data) => {
    setLoading(true);
    try {
      // this is connected with client's email. uncomment the code only in production.
      //   emailjs
      //     .sendForm(
      //       'service_q18i4pc',
      //       'template_dj61ejg',
      //       formRef.current,
      //       '_lu9sv7Uji6IgL1EQ',
      //     )
      //     .then(
      //       () => {
      //         reset()
      //         toast('Form submitted succesfully!')
      //       },
      //       () => {
      //         toast('Could not submit the form')
      //       },
      //     )
      //     .finally(() => setLoading(false))
      console.log("contact form submitted");
    } catch {
      setLoading(false);

      toast.error("Failed to submit the form.");
    }
  };

  return (
    <section className="w-full">
      <ToastContainer
        position="bottom-center"
        theme="dark"
        toastClassName="bg-blueDark shadow-none "
        className="text-sm !px-5 font-medium bg-blueDark rounded-xl"
        progressClassName="bg-blueShade h-[1px]"
      />
      <div>
        <form
          noValidate
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className=" mx-auto w-full grid 2xl:gap-9 xl:gap-4 gap-4"
        >
          <div className="relative mt-2">
            <label className="text-white font-worksansLight">Name*</label>
            <input
              className={`sg-translate text-white placeholder:text-opacity-50 placeholder:font-worksansLight font-worksansLight   focus-visible:border-opacity-100 border-white ${
                errors.name ? "" : "border-white"
              } border-opacity-40 placeholder:sg-translate transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2  w-full  text-base  lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none`}
              id="name"
              placeholder="John Doe"
              {...register("name")}
            />
            {errors.email && (
              <span className="absolute sg-translate top-full left-0 text-rose-500 font-semibold  2xl:text-sm text-[12px]">
                {errors.name?.message}
              </span>
            )}
          </div>

          <div className="relative mt-2">
            <label className="text-white font-worksansLight">Email*</label>

            <input
              className={`text-white  placeholder:text-opacity-50 placeholder:font-worksansLight font-worksansLight   focus-visible:border-opacity-100 border-white ${
                errors.email ? "" : "border-white"
              } border-opacity-40  transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2  w-full  text-base  lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none`}
              id="email"
              type="email"
              inputMode="email"
              placeholder="mail@dummy.com"
              {...register("email")}
            />
            {errors.email && (
              <span className="absolute top-full left-0 text-rose-500 font-semibold  2xl:text-sm text-[12px]">
                {errors.email?.message}
              </span>
            )}
          </div>
          <div className="relative mt-2">
            <label className="text-white font-worksansLight">Phone*</label>

            <input
              className={`text-white  placeholder:text-opacity-50 placeholder:font-worksansLight font-worksansLight   focus-visible:border-opacity-100 border-white ${
                errors.phone ? "" : "border-white"
              } border-opacity-40  transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2  w-full  text-base  lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none`}
              id="phone"
              type="phone"
              placeholder="+1234567890"
              {...register("phone")}
            />
            {errors.phone && (
              <span className="absolute top-full left-0 text-rose-500 font-semibold  2xl:text-sm text-[12px]">
                {errors.email?.message}
              </span>
            )}
          </div>
          <div className="relative mt-2">
            <label className="text-white font-worksansLight">We are*</label>

            <input
              className={`text-white placeholder:text-opacity-50 placeholder:font-worksansLight font-worksansLight   focus-visible:border-opacity-100 border-white ${
                errors.weAre ? "" : "border-white"
              } border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2  w-full  text-base  lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none`}
              type="text"
              id="weAre"
              inputMode="text"
              placeholder="Select option"
              {...register("weAre")}
            />

            {errors.weAre && (
              <span className="absolute top-full left-0 text-rose-500 font-semibold  2xl:text-sm text-[12px]">
                {errors.weAre?.message}
              </span>
            )}
          </div>

          <div>
            <textarea
              rows={3}
              id="message"
              className={`text-white placeholder:text-opacity-50 placeholder:font-worksansLight font-worksansLight   focus-visible:border-opacity-100 border-white ${
                errors.email ? "border-white" : "border-white"
              } border-opacity-40  transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2  w-full  text-base  lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none`}
              placeholder="Message"
              {...register("message")}
            />
          </div>
          <div className="flex justify-center md:grid relative  place-content-center md:place-content-start">
            <button
              disabled={isLoading}
              type="submit"
              className="flex justify-center gap-1 w-full disabled:opacity-70 disabled:cursor-not-allowed relative outline-none !bg-transparent rounded-full transition-all duration-700 ease-in-out hover:text-black focus:text-black hover:!bg-white focus:!bg-white text-white stroke-dark hover:stroke-white font-semibold !hover:bg-white hover:border-transparent border border-white lg:text-base text-sm  px-8 md:px-12 py-3"
            >
              {isLoading ? "Loading..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
