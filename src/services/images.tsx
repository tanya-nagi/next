import { useState } from "react";
import {
  addImages as addImagesAPI,
  deleteImages as deleteImagesAPI,
  getImages,
} from "@api-integration/images";
import { HandleMethod } from "@/types/admin/api/auth";
import { useImages } from "@hooks/Images";

export const useImagesServices = () => {
  const [isLoading, setLoading] = useState(false);
  const [isFetching, setFetching] = useState(false);
  const { setImages } = useImages();

  const fetchImages = async ({ onSuccess }: HandleMethod) => {
    setFetching(true);
    await getImages()
      .then((res) => {
        if (res.status && res.data) {
          setImages(res.data);
          onSuccess?.(res.data);
        }
      })
      .finally(() => setFetching(false));
  };

  const addImages = async (
    values: FormData,
    { onSuccess, onError }: HandleMethod
  ) => {
    setLoading(true);
    await addImagesAPI(values)
      .then(async (res) => {
        if (res.status && res.data) {
          await fetchImages({}).then(() => {
            onSuccess?.(res.data);
          });
        } else {
          if (res.data) {
            onError?.(res.data);
          } else {
            onError?.({ message: res.message });
          }
        }
      })
      .catch((error) => {
        onError?.({ message: error });
      })
      .finally(() => setLoading(false));
  };

  const deleteImages = async (
    values: { imageId: string[] },
    { onSuccess, onError }: HandleMethod
  ) => {
    setLoading(true);
    await deleteImagesAPI({ imageId: values.imageId })
      .then(async (res) => {
        if (res.status && res.data) {
          await fetchImages({}).then(() => {
            onSuccess?.(res.data);
          });
        } else {
          onError?.(res.message);
        }
      })
      .catch((error) => {
        onError?.(error);
      })
      .finally(() => setLoading(false));
  };

  return {
    isLoading,
    isFetching,
    fetchImages,
    deleteImages,
    addImages,
  };
};
