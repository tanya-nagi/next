import MDEditor, {
  ICommand,
  TextAreaTextApi,
  TextState,
  commands,
} from "@uiw/react-md-editor";
import React, { useState, useCallback, useRef } from "react";
import { FilledBtn, Textarea, ImageModal } from "@/components/admin";
import DatePickerComponent from "@/components/admin/datePicker";
import { NewsFeed } from "@/types/admin/api/news-feed";
import Image from "next/image";

type Props = {
  newsFeed: {
    title: string | null;
    subtitle: string | null;
    content: string | null;
    coverImage: null | File;
    publishedAt: string | null;
  };
  selectedNewsFeed?: NewsFeed | null;
  onChangeHandler: (key: string, value: any) => void;
  onSubmit: () => void;
  formType: "Add" | "Update";
  isSubmitting: boolean;
  errors: Error;
};

export type Error = {
  title?: string;
  subtitle?: string;
  content?: string;
  coverImage?: string;
  publishedAt?: string;
  message?: string;
};

export function NewsFeedForm({
  newsFeed,
  selectedNewsFeed,
  errors,
  onChangeHandler,
  onSubmit,
  isSubmitting,
  formType,
}: Props) {
  const [isImgModal, setImgModal] = useState(false);

  let stateRef = useRef<TextState | null>(null);
  let apiRef = useRef<TextAreaTextApi | null>(null);

  const handleModal = useCallback(async (val: string): Promise<void> => {
    return new Promise<string>((resolve, reject) => {
      resolve(val);
    })
      .then((val) => {
        return val;
      })
      .then((val) => {
        let modifyText = `![Image](${val})\n`;
        apiRef.current?.replaceSelection(modifyText);
      })
      .then(() => {
        setImgModal(false);
      });
  }, []);

  const imgSelector: ICommand = {
    name: "title3",
    keyCommand: "title3",
    buttonProps: { "aria-label": "Insert title3" },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    ),
    execute: (state: TextState, api: TextAreaTextApi) => {
      stateRef.current = state;
      apiRef.current = api;
      setImgModal(true);
    },
  };

  return (
    <>
      <section
        id="panel"
        className="mt-9 p-10 bg-white border border-gray-400 border-opacity-40 rounded-md min-h-screen grid gap-6"
      >
        <Textarea
          placeholder="Enter Title"
          value={
            newsFeed.title == null && selectedNewsFeed?.title
              ? selectedNewsFeed.title
              : newsFeed.title
          }
          setValue={(e) => onChangeHandler(e.target.name, e.target.value)}
          rows={3}
          className="w-full max-w-3xl"
          error={errors?.title ?? ""}
          name="title"
          label="Title:"
        />

        <Textarea
          value={
            newsFeed.subtitle == null && selectedNewsFeed?.subtitle
              ? selectedNewsFeed.subtitle
              : newsFeed.subtitle
          }
          setValue={(e) => onChangeHandler(e.target.name, e.target.value)}
          name="subtitle"
          placeholder="Enter Subtitle"
          className="w-full max-w-3xl"
          error={errors?.subtitle ?? ""}
          label="Subtitle (should be less than 30 words):"
          rows={6}
        />

        <div>
          <DatePickerComponent
            error={errors?.publishedAt ?? ""}
            value={
              newsFeed.publishedAt == null && selectedNewsFeed?.publishedAt
                ? selectedNewsFeed.publishedAt
                : (newsFeed.publishedAt as string)
            }
            onSetValue={(value) => onChangeHandler("publishedAt", value)}
          />
        </div>

        <label
          htmlFor="authorProfile"
          className="grid gap-1 w-full max-w-3xl text-base font-semibold"
        >
          Cover Image:
          <input
            type="file"
            placeholder="No file chosen (Recommended Dimensions: 800x600 Max fil size: 2MB Upload)"
            className={`${
              errors?.coverImage
                ? "border-red border-opacity-50"
                : "border-gray-400 border-opacity-40"
            } relative m-0 block w-full tracking-wide focus:outline-none min-w-0 flex-auto rounded-sm 
                bg-clip-padding px-3 py-2 border text-base font-normal transition 
                duration-300 ease-in-out file:-mx-3 file:-my-12 file:overflow-hidden file:rounded-none file:border-0 
                file:border-solid file:border-inherit file:px-3 file:py-2 mt-1 file:transition file:duration-150 
                file:ease-in-out file:[margin-inline-end:0.75rem] file:  focus:border-primary cursor-pointer 
                focus:shadow-te-primary file:bg-neutral-200"
            accept="image/png, image/jpeg, image/jpg`}
            onChange={(e) =>
              onChangeHandler("coverImage", e?.target?.files?.[0])
            }
          />
          {errors?.coverImage && (
            <p className="text-red text-opacity-70 mt-1 font-normal flex flex-nowrap items-center gap-1 text-base">
              {errors?.coverImage}
            </p>
          )}
        </label>
        {newsFeed.coverImage || selectedNewsFeed?.coverImage ? (
          <div className="h-80 w-80 oveflow-hidden bg-white border-1 border-gray border-opacity-60 rounded-xl mt-1">
            <Image
              width="0"
              height="0"
              loader={() => `${selectedNewsFeed?.coverImage}`}
              src={
                newsFeed.coverImage
                  ? URL.createObjectURL(newsFeed.coverImage as Blob)
                  : `${selectedNewsFeed?.coverImage}`
              }
              alt="Preview"
              className="h-full w-full object-center object-cover p-2"
            />
          </div>
        ) : null}

        <div className="grid w-11/12 gap-1 text-base font-semibold">
          <MDEditor
            data-color-mode="light"
            height={600}
            className="mt-5 editor rounded-md"
            commands={[
              commands.title1,
              commands.title2,
              commands.title3,
              commands.title4,
              commands.link,
              commands.strikethrough,
              commands.unorderedListCommand,
              commands.orderedListCommand,
              commands.divider,
              commands.hr,
              imgSelector,
            ]}
            value={
              newsFeed.content == null && selectedNewsFeed?.content
                ? selectedNewsFeed.content
                : (newsFeed.content as string)
            }
            onChange={(val) => onChangeHandler("content", val ?? "")}
          />
          {errors?.content && (
            <p className="text-red text-opacity-70 mt-1 font-normal flex flex-nowrap items-center gap-1 text-base">
              {errors.content}
            </p>
          )}
        </div>

        <div className="grid mt-10 w-5/12 mx-auto">
          <FilledBtn
            text={formType === "Add" ? "Upload News Feed" : "Update News Feed"}
            isDisabled={isSubmitting}
            type="submit"
            isLoading={isSubmitting}
            isGrayscale={false}
            callback={onSubmit}
          />
        </div>
      </section>

      <ImageModal
        close={() => setImgModal(false)}
        isOpen={isImgModal}
        resolver={handleModal}
      >
        <h1>children</h1>
      </ImageModal>
    </>
  );
}
