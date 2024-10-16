"use client";

import Link from "next/link";
import { ArrowIcon } from "@components/admin/icons";
import { useEffect, useReducer, useState } from "react";
import { NewsFeedForm, Error } from "@components/admin/newsFeedForm";
import { updateNewsFeed } from "@api-integration/news-feed";
import { toast } from "react-toastify";
import { useNewsFeed } from "@hooks/NewsFeed";
import { useNewsFeedsServices } from "@services/newsFeeds";

type FormFields = {
  title: string | null;
  subtitle: string | null;
  coverImage: File | null;
  publishedAt: string | null;
  content: string | null;
};

type Action = {
  payload: {
    key: string;
    value?: any;
  };
};

const initialState = {
  title: null,
  subtitle: null,
  content: null,
  coverImage: null,
  publishedAt: null,
};

const reducer = (state: FormFields, action: Action) => {
  if (action.payload.key === "reset") {
    return { ...initialState };
  }
  return { ...state, [action.payload.key]: action.payload.value };
};

export default function UpdateNewsFeed() {
  const [values, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState<Error>({});
  const { selectedNewsFeed, setSelectedNewsFeed } = useNewsFeed();
  const { updateNewsFeed, isLoading } = useNewsFeedsServices();

  useEffect(() => {
    return () => {
      setSelectedNewsFeed(null);
    };
  }, []);

  const onUpdateNewsFeed = async () => {
    const formData = new FormData();
    if (values.coverImage) {
      formData.append("image", values.coverImage);
    }
    Object.keys(values).forEach((value: string) => {
      const key: keyof FormFields = value as keyof FormFields;
      if (key !== "coverImage" && values[key] && values[key]?.length !== 0) {
        formData.append(key, values[key] as string);
      }
    });

    if (selectedNewsFeed) {
      await updateNewsFeed(formData, selectedNewsFeed._id, {
        onSuccess: (updatedNewsFeed) => {
          dispatch({ payload: { key: "reset" } });
          setSelectedNewsFeed(updatedNewsFeed);
          toast.success("News feed has been updated successfully");
        },
        onError: (errors) => {
          setErrors(errors);
          if (errors?.message) {
            toast.error(errors?.message);
          }
        },
      });
    }
  };

  const validator = () => {
    const newError: Error = {};

    if (values.coverImage && values.coverImage.size > 2 * 1024 * 1024) {
      newError.coverImage = "File size exceeds the max limit of 2 MB";
    }

    setErrors(newError);

    if (Object.keys(newError).length === 0) {
      dispatch({ payload: { key: "publishedAt", value: "2023-12-10" } });
      onUpdateNewsFeed();
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
          <span className="text-2xl font-semibold">Update News Feed</span>
        </h5>
      </div>
      <NewsFeedForm
        isSubmitting={isLoading}
        formType="Update"
        errors={errors}
        onSubmit={validator}
        onChangeHandler={onChangeHandler}
        newsFeed={values}
        selectedNewsFeed={selectedNewsFeed}
      />
    </div>
  );
}
