import React from "react";
import { FilledBtn } from "./buttons";
import Image from "next/image";

interface Props {
  data: any;
  imageURL: string;
  onNavigate: () => void;
  onDelete: (id: string) => void | null;
}

export default function Card({ data, imageURL, onNavigate, onDelete }: Props) {
  const { title, subtitle, id } = data;
  return (
    <div className="flex flex-col bg-white border border-solid border-gray-400 border-opacity-40 items-start overflow-hidden rounded-md max-w-lg">
      <div className="min-h-[200px] max-h-[200px] w-full bg-gray">
        <Image
          alt="thumbnail"
          className="object-cover w-full h-full"
          width="0"
          height="0"
          loader={() => imageURL}
          src={imageURL}
        />
      </div>

      <div className="flex flex-col justify-between w-full p-4 gap-6">
        <div className="">
          <h6 className="font-semibold text-xl line-clamp-2 capitalize">
            {title.slice(0, 60)}
          </h6>
          <h6 className="opacity-60 font-normal text-sm leading-snug mt-2 capitalize">
            {subtitle.slice(0, 100)}
          </h6>
        </div>

        <div className="self-end w-full flex justify-between flex-nowrap items-center gap-3">
          <FilledBtn
            callback={onNavigate}
            isGrayscale={false}
            text="Edit News Feed"
          />

          <span
            onClick={() => onDelete(id)}
            className="stroke-red rounded-full opacity-60 hover:bg-red hover:bg-opacity-5 p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="inherit"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
