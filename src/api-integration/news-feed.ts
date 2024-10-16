import { ApiClient } from "./ApiClient";

const api = new ApiClient();

export const addNewsFeed = async (body: FormData) =>
  await api.post("news-feeds", body, {}, "formData");

export const updateNewsFeed = async (body: FormData, newsFeedId: string) =>
  await api.post(`news-feeds/${newsFeedId}`, body, {}, "formData");

export const deleteNewsFeed = async (body: { newsFeedId: string }) =>
  await api.delete("news-feeds", body);

export const getNewsFeed = async () => await api.get("news-feeds");
