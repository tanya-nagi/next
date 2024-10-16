"use client";

import Link from "next/link";
import { ArrowIcon } from "@components/admin/icons";
import { useReducer, useState } from "react";
import { NewsFeedForm, Error } from "@components/admin/newsFeedForm";
import { addNewsFeed } from "@api-integration/news-feed";
import { toast } from "react-toastify";
import { useNewsFeedsServices } from "@services/newsFeeds";

type FormFields = {
  title: string;
  subtitle: string;
  coverImage: File | null;
  publishedAt: string;
  content: string;
};

type Action = {
  payload: {
    key: string;
    value?: any;
  };
};

const initialState = {
  title: "",
  subtitle: "",
  content: "",
  coverImage: null,
  publishedAt: "",
};

const reducer = (state: FormFields, action: Action) => {
  if (action.payload.key === "reset") {
    return { ...initialState };
  }
  return { ...state, [action.payload.key]: action.payload.value };
};

export default function AddNewsFeed() {
  const [values, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState<Error>({});
  const { isLoading, addNewsFeed } = useNewsFeedsServices();

  const onAddNewsFeed = async () => {
    const formData = new FormData();
    if (values.coverImage) {
      formData.append("image", values.coverImage);
    }
    Object.keys(values).forEach((value: string) => {
      const key: keyof FormFields = value as keyof FormFields;
      if (key !== "coverImage") {
        formData.append(key, values[key]);
      }
    });

    await addNewsFeed(formData, {
      onSuccess: () => {
        toast.success("News feed has been uploaded successfully");
        dispatch({ payload: { key: "reset" } });
      },
      onError: (errors) => {
        setErrors(errors);
        if (errors?.message) {
          toast.error(errors?.message);
        }
      },
    });
  };

  const validator = () => {
    const newError: Error = {};

    if (values.title === "") {
      newError.title = "Title is required";
    }

    if (values.subtitle === "") {
      newError.subtitle = "Subtitle is required";
    }

    if (values.content === "") {
      newError.content = "Content is required";
    }

    if (!values.coverImage) {
      newError.coverImage = "Please select any image";
    }

    if (values.coverImage && values.coverImage.size > 2 * 1024 * 1024) {
      newError.coverImage = "File size exceeds the max limit of 2 MB";
    }

    if (values.publishedAt === "") {
      newError.publishedAt = "Publish date is required";
    }

    setErrors(newError);

    if (Object.keys(newError).length === 0) {
      onAddNewsFeed();
    }
  };

  const onChangeHandler = (key: string, value: string) => {
    setErrors({ ...errors, [key]: "" });
    dispatch({ payload: { key, value } });
  };

  return (
    <div className="px-10 2xl:px-20 pb-10">
      <div className="mt-12 border-solid border-gray border-opacity-30 flex justify-between items-center">
        <h5 className="text-dark flex items-center">
          <Link
            href="/admin/news-feed"
            className="opacity-40 hover:opacity-80 transition-all mr-2 mt-1"
          >
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
          <span className="text-2xl font-semibold">Add News Feed</span>
        </h5>
      </div>
      <NewsFeedForm
        isSubmitting={isLoading}
        formType="Add"
        errors={errors}
        onSubmit={validator}
        onChangeHandler={onChangeHandler}
        newsFeed={values}
      />
    </div>
  );
}
