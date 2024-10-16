import { ApiClient } from "./ApiClient";

const api = new ApiClient();

export const addImages = async (body: FormData) =>
  await api.post("images", body, {}, "formData");

export const deleteImages = async (body: { imageId: string[] }) =>
  await api.delete("images", body);

export const getImages = async () => await api.get("images");
