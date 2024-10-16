import { ApiClient } from "./ApiClient";

const api = new ApiClient()

export const getProfile = async () => await api.get(`users/profile`)
