import { useState } from "react";
import {
  getUsers,
  addUser as addUserAPI,
  deleteUser as deleteUserAPI,
} from "@api-integration/manage-users";
import { HandleMethod } from "@/types/admin/api/auth";
import { AddUserBody, DeleteUserBody } from "@/types/admin/api/manage-users";
import { useMember } from "@hooks/Member";

export const useMembersServices = () => {
  const [isLoading, setLoading] = useState(false);
  const [isFetching, setFetching] = useState(false);
  const { setMembers } = useMember();

  const fetchUsers = async ({ onSuccess }: HandleMethod) => {
    setFetching(true);
    await getUsers()
      .then((res) => {
        if (res.status && res.data) {
          setMembers(res.data);
          onSuccess?.(res.data);
        }
      })
      .catch(() => {})
      .finally(() => setFetching(false));
  };

  const addUser = async (
    values: AddUserBody,
    { onSuccess, onError }: HandleMethod
  ) => {
    setLoading(true);
    await addUserAPI(values)
      .then(async (res) => {
        if (res.status && res.data) {
          await fetchUsers({});
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

  const deleteUser = async (
    values: DeleteUserBody,
    { onSuccess, onError }: HandleMethod
  ) => {
    setLoading(true);
    await deleteUserAPI(values)
      .then(async (res) => {
        if (res.status && res.data) {
          await fetchUsers({});
          onSuccess?.(res.data);
        } else {
          if (res.data) {
            onError?.(res.data);
          } else {
            onError?.(res.message);
          }
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
    addUser,
    deleteUser,
    fetchUsers,
  };
};
