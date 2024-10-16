import { Fragment, ReactNode } from "react";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import {
  LoadingIndicator,
  ImageContainer,
  FilledBtn,
  UploadAndSelect,
  OutlineBtn,
} from "@components/admin";
import Input from "./input";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { baseURL } from "@api-integration/ApiClient";
import { useImagesServices } from "@services/images";
import { useImages } from "@hooks/Images";
import { useMembersServices } from "@services/members";

type ConfirmationModalProps = {
  children?: ReactNode;
  callback: (ans: boolean) => void;
  heading: string;
  title?: string;
  isLoading?: boolean;
};

type DetailsModalProps = {
  modalData: any;
  close: any;
  isOpen: boolean;
  children: ReactNode;
};

type AddMemberModalProps = {
  setModal: (ans: boolean) => void;
};

type ImageModalProps = {
  close: any;
  isOpen: boolean;
  children: ReactNode;
  resolver: (arg: string) => Promise<void>;
};

export function ConfirmationModal({
  callback,
  heading,
  title,
  isLoading,
}: ConfirmationModalProps) {
  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog className="relative z-10" onClose={() => callback(false)}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 ">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className="w-full min-h-[280px] relative bg-white place-content-between flex flex-col justify-between 
              rounded-2xl max-w-xl p-8"
              >
                <div className="grid gap-2 pb-10">
                  <h5 className="text-[24px] font-semibold">{heading}</h5>
                  {title && (
                    <h6 className="w-10/12 mt-2 leading-7 text-base font-normal">
                      {title}
                    </h6>
                  )}
                </div>
                <div className="w-full">
                  <div className="flex justify-end gap-4">
                    <button
                      onClick={() => callback(false)}
                      className="hover:bg-gray-200   px-3 py-2 min-w-[100px] border border-opacity-40 
                      border-gray-400 rounded-md font-normal"
                    >
                      Cancel
                    </button>
                    <button
                      disabled={isLoading}
                      onClick={() => callback(true)}
                      className={`bg-black hover:bg-blue text-white min-w-[100px] flex items-center justify-center 
                        px-3 py-2 border border-black hover:border-blue rounded-md font-normal
                    disabled:bg-opacity-25 disabled:border-opacity-5 disabled:cursor-not-allowed
                    ${
                      isLoading
                        ? "bg-blue border-blue"
                        : "bg-black border-black"
                    }
                    `}
                    >
                      {isLoading ? (
                        <LoadingIndicator indicatorStyle="!w-6 !h-6" />
                      ) : (
                        "Confirm"
                      )}
                    </button>
                  </div>
                </div>

                <div className="grid place-content-end absolute top-8 right-8">
                  <button
                    className="hover:bg-lightGray rounded-full grid place-content-center stroke-black"
                    onClick={() => callback(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="md:w-8 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export function DetailModal({ close, isOpen, children }: DetailsModalProps) {
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog className="relative z-10" onClose={close}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 ">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {children}
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export function AddMemberModal({ setModal }: AddMemberModalProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<{ email?: string; message?: string }>();
  const { isLoading, addUser } = useMembersServices();

  const submitHandler = async () => {
    await addUser(
      { email: email },
      {
        onSuccess: () => {
          setModal(false);
          toast.success("Member has been added successfully");
        },
        onError: (error) => {
          setError(error);
        },
      }
    );
  };

  const validator = () => {
    const newErrors: { email?: string } = {};
    if (!email) {
      newErrors.email = "Email Is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = "Invalid Email Address.";
    }

    if (Object.keys(newErrors).length === 0) {
      submitHandler();
    } else {
      setError(newErrors);
    }
  };

  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog className="relative z-10" onClose={() => setModal(false)}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 ">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="w-full relative bg-white  rounded-2xl max-w-md p-8 grid">
                <div className="grid mt-8 pb-10">
                  <Input
                    name="email"
                    value={email}
                    error={error?.email ?? ""}
                    label="Email"
                    className="w-full"
                    placeholder="Enter email"
                    setValue={(e) => {
                      setError({ ...error, email: "" });
                      setEmail(e.target.value);
                    }}
                  />
                  {error?.message ? (
                    <small className=" text-red text-opacity-70 text-base dark:text-danger font-normal flex flex-nowrap items-center gap-1 ">
                      {error.message}
                    </small>
                  ) : null}
                </div>
                <div className="flex gap-4">
                  <button
                    disabled={isLoading}
                    onClick={() => validator()}
                    className={`bg-black hover:bg-blue text-white flex items-center justify-center px-3 py-2 
                  border w-full border-black hover:border-blue text-red-600 rounded-md 
                  disabled:bg-opacity-25 disabled:border-opacity-5 disabled:cursor-not-allowed
                  ${isLoading ? "bg-blue border-blue" : "bg-black border-black"}
                  `}
                  >
                    {isLoading ? (
                      <LoadingIndicator indicatorStyle="!w-6 !h-6" />
                    ) : (
                      "Add Admin"
                    )}
                  </button>
                </div>

                <div className="grid place-content-end absolute top-8 right-8">
                  <button
                    className="hover:bg-lightGray rounded-full grid place-content-center stroke-black"
                    onClick={() => setModal(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 22 22"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="md:w-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export function ImageModal({
  close,
  isOpen,
  children,
  resolver,
}: ImageModalProps) {
  const [option, setOption] = useState<"select" | "upload">("select");
  const { images } = useImages();
  const { isFetching, fetchImages } = useImagesServices();

  useEffect(() => {
    fetchImages({
      onError: (error) => {
        toast.error(error);
      },
    });
  }, [isOpen]);

  return (
    <div>
      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10" onClose={close}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex justify-center items-center h-full ">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="bg-white rounded-xl relative w-[300px]  p-4 md:w-[768px] ">
                  <button onClick={close} className="absolute top-7 right-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="flex flex-nowrap gap-4 w-full p-3">
                    <FilledBtn
                      callback={() => setOption("select")}
                      text="select"
                      isGrayscale={false}
                    />
                    <OutlineBtn
                      text="Upload"
                      isGrayscale={false}
                      callback={() => setOption("upload")}
                    />
                  </div>
                  <div className="p-4">
                    {option === "select" ? (
                      <ImageContainer
                        images={images}
                        isFetching={isFetching}
                        onSelect={(url) =>
                          resolver(`${baseURL}server-assets/${url}`)
                        }
                      />
                    ) : (
                      <UploadAndSelect resolver={resolver} />
                    )}
                  </div>
                </div>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
