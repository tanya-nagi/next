import { useState } from "react";
import {
  addNewsFeed as addNewsFeedAPI,
  updateNewsFeed as updateNewsFeedAPI,
  deleteNewsFeed as deleteNewsFeedAPI,
  getNewsFeed,
} from "@api-integration/news-feed";
import { HandleMethod } from "@/types/admin/api/auth";
import { useNewsFeed } from "@hooks/NewsFeed";

export const useNewsFeedsServices = () => {
  const [isLoading, setLoading] = useState(false);
  const [isFetching, setFetching] = useState(false);
  const { setNewsFeeds } = useNewsFeed();

  const fetchNewsFeed = async ({ onSuccess }: HandleMethod) => {
    setFetching(true);
    await getNewsFeed()
      .then((res) => {
        if (res.status && res.data) {
          setNewsFeeds(res.data);
          onSuccess?.(res.data);
        }
      })
      .finally(() => setFetching(false));
  };

  const addNewsFeed = async (
    values: FormData,
    { onSuccess, onError }: HandleMethod
  ) => {
    setLoading(true);
    await addNewsFeedAPI(values)
      .then(async (res) => {
        if (res.status && res.data) {
          await fetchNewsFeed({});
          onSuccess?.(res.data);
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

  const deleteNewsFeed = async (
    values: { newsFeedId: string },
    { onSuccess, onError }: HandleMethod
  ) => {
    setLoading(true);
    await deleteNewsFeedAPI({ newsFeedId: values.newsFeedId })
      .then(async (res) => {
        if (res.status && res.data) {
          await fetchNewsFeed({});
          onSuccess?.(res.data);
        } else {
          onError?.(res.message);
        }
      })
      .catch((error) => {
        onError?.(error);
      })
      .finally(() => setLoading(false));
  };

  const updateNewsFeed = async (
    values: FormData,
    newsFeedId: string,
    { onSuccess, onError }: HandleMethod
  ) => {
    setLoading(true);

    await updateNewsFeedAPI(values, newsFeedId)
      .then(async (res) => {
        if (res.status && res.data) {
          await fetchNewsFeed({});
          onSuccess?.(res.data);
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

  return {
    isLoading,
    isFetching,
    fetchNewsFeed,
    updateNewsFeed,
    deleteNewsFeed,
    addNewsFeed,
  };
};
