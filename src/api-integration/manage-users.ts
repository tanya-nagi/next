import { ApiClient } from "./ApiClient";
import { AddUserBody, DeleteUserBody } from "@/types/admin/api/manage-users";

const api = new ApiClient()

export const addUser = async (body: AddUserBody) => await api.post("manage-users", body)

export const deleteUser = async (body: DeleteUserBody) => await api.delete("manage-users", body)

export const getUsers = async () => await api.get("manage-users")