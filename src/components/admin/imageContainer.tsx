import React, { useState } from "react";
import { baseURL } from "@api-integration/ApiClient";
import { toast } from "react-toastify";
import {
  ConfirmationModal,
  LoadingIndicator,
  EmptyContainer,
} from "@components/admin";
import { useImagesServices } from "@services/images";
import { Image as ImageType } from "@/types/admin/api/image";
import Image from "next/image";

export default function ImageContainer({
  images,
  onSelect,
  isFetching,
}: {
  images: ImageType[] | null;
  onSelect: (url: string) => void;
  isFetching: boolean;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showWarningModal, setSetShowWarningModal] = useState<boolean>(false);
  const { deleteImages, isLoading } = useImagesServices();

  const clickHandler = (imageId: string) => {
    setSelectedImage(imageId);
    setSetShowWarningModal(true);
  };

  const deleteHandler = async (decision: boolean) => {
    if (decision) {
      await deleteImages(
        { imageId: [selectedImage ?? ""] },
        {
          onSuccess: () => {
            toast.success("Image has been deleted successfully");
          },
          onError: (error) => {
            toast.error(error);
          },
        }
      );
    }
    setSetShowWarningModal(false);
  };
  return (
    <>
      <div className="w-full h-[300px] px-4 gap-4 overflow-auto bg-white flex flex-wrap">
        {!isFetching && (images == null || images?.length === 0) ? (
          <EmptyContainer
            className="h-[200px]"
            message={images == null ? "Network error" : "No data found"}
          />
        ) : isFetching ? (
          <div className="flex w-full items-center justify-center">
            <LoadingIndicator />
          </div>
        ) : (
          images?.map((image) => (
            <span
              key={image._id}
              className="w-52 cursor-pointer group relative h-52 border rounded-md p-2 border-slate-200 bg-slate-100"
            >
              <button
                disabled={isLoading}
                onClick={() => clickHandler(image._id)}
                className="bg-white stroke-red absolute -right-[12px] -top-[12px] p-3 rounded-full shadow-md"
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
              </button>
              <span onClick={() => onSelect(image.url)}>
                <Image
                  src={image.url}
                  loader={() => image.url}
                  className="w-full h-full object-cover rounded-md border-none outline-none"
                  alt="images to upload"
                  width="0"
                  height="0"
                />
              </span>
            </span>
          ))
        )}
      </div>

      {showWarningModal && (
        <ConfirmationModal
          heading="Are you sure you want to delete this image?"
          title="Deleting this image can cause blogs content which use this image."
          callback={deleteHandler}
        />
      )}
    </>
  );
}
