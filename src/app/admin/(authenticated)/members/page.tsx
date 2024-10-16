"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  LoadingIndicator,
  ConfirmationModal,
  EmptyContainer,
  ListHeader,
  UserProfile,
  AddMemberModal,
} from "@components/admin";
import { AddProfileIcon } from "@components/admin/icons";
import { toast } from "react-toastify";
import { useUser } from "@hooks/User";
import { User } from "@/types/admin/api/users";
import { useMembersServices } from "@services/members";
import { useMember } from "@hooks/Member";

const Table = ({ data }: { data: User[] }) => {
  const [showWarningModal, setWarningModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string>("");
  const { deleteUser, isLoading } = useMembersServices();
  const { user } = useUser();

  const hasDeleteUserPermission = useMemo(
    () => user.role === "super_admin",
    [user]
  );

  const onDeleteUser = async () => {
    await deleteUser(
      { userId: selectedUser },
      {
        onSuccess: () => {
          toast.success("Member has been deleted successfully");
        },
        onError: () => {
          toast.error("Error while deleting member");
        },
      }
    );
  };

  const handleProfileDelete = (decision: boolean) => {
    if (decision) {
      onDeleteUser();
    }
    setWarningModal(false);
  };

  return (
    <table className="table-auto bg-white shadow-sm border-gray-400 border border-opacity-40 w-full">
      {showWarningModal && (
        <ConfirmationModal
          heading="Are you sure?"
          title={`Do you really want to delete this member? Member will be removed permanently from dashboard.`}
          callback={handleProfileDelete}
        />
      )}

      <thead>
        <tr>
          <th
            className="text-left  w-[200px] font-semibold text-lg   text-opacity-40 border-b 
          border-gray-400 pb-5 pt-10 border-opacity-40 px-6"
          >
            Name
          </th>
          <th
            className="text-left w-[350px] font-semibold text-lg   text-opacity-40 border-b 
          border-gray-400 pb-5 pt-10 border-opacity-40"
          >
            Email
          </th>
          <th
            className="text-left font-semibold text-lg   border-b text-opacity-40 border-gray-400 pb-5 pt-10 
          border-opacity-40"
          >
            Verification Status
          </th>

          {hasDeleteUserPermission ? (
            <th
              className="text-left font-regular text-base   border-b text-opacity-40 border-gray-400 pb-5 pt-10 
                 border-opacity-40"
            >
              Actions
            </th>
          ) : null}
        </tr>
      </thead>
      <tbody>
        {data.map((item: User) => {
          return (
            <tr key={item._id} className="">
              <td className="py-4 text-xl font-normal px-6">{item.fullName}</td>
              <td className="py-4 text-xl font-normal">{item.email}</td>

              <td className="py-4 text-xl font-normal">
                <span
                  className={`${
                    item.isEmailVerified ? "bg-[#10d11047]" : "bg-yellow"
                  } 
                 bg-opacity-70 py-1 px-4 rounded-full  `}
                >
                  {item.isEmailVerified ? "Verified" : "Pending"}
                </span>
              </td>
              <td className="flex flex-nowrap py-2">
                {hasDeleteUserPermission ? (
                  isLoading && item._id === selectedUser ? (
                    <div className="grid place-content-center p-3">
                      <LoadingIndicator indicatorStyle="!w-5 !h-5 !border-t-red !border-2 !border-t-2" />
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setWarningModal(true);
                        setSelectedUser(item._id);
                      }}
                      className="text-lg font-medium stroke-red opacity-60 hover:bg-red hover:bg-opacity-5 
                      rounded-full p-3 grid place-content-center"
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
                  )
                ) : null}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default function UserList() {
  const { user: loggedInUser } = useUser();
  const { fetchUsers, isFetching } = useMembersServices();
  const { members } = useMember();
  const [addMemberModal, setAddMemberModal] = useState(false);

  const hasAddUserPermission = useMemo(
    () => loggedInUser.role === "super_admin",
    [loggedInUser]
  );

  useEffect(() => {
    fetchUsers({});
  }, []);

  const filteredUsers: User[] | null = useMemo(() => {
    if (members && members.length) {
      return members.filter((member) => member.email !== loggedInUser.email);
    }
    return members;
  }, [loggedInUser.email, members]);

  const renderTable = () => {
    if (!isFetching && (filteredUsers == null || filteredUsers?.length === 0)) {
      return (
        <EmptyContainer
          message={filteredUsers == null ? "Network error" : "No data found"}
        />
      );
    }
    if (isFetching) {
      return (
        <div className="flex h-96 items-center justify-center font-regular">
          <LoadingIndicator />
        </div>
      );
    } else {
      return <Table data={filteredUsers ?? []} />;
    }
  };

  return (
    <div>
      <ListHeader
        title="Members"
        hasAddPermission={hasAddUserPermission}
        onNavigate={() => {
          setAddMemberModal(true);
        }}
        addButtonText="Invite Members"
        icon={<AddProfileIcon />}
      />

      <section className="mt-10 px-10 2xl:px-20 flex gap-x-10 rounded-md min-h-screen">
        <div className="w-[75%]">{renderTable()}</div>
        <div className="w-[25%] h-[300px] flex flex-col pt-8 items-center bg-white border-gray border border-opacity-40">
          <UserProfile user={loggedInUser} />
        </div>
      </section>
      {addMemberModal && (
        <AddMemberModal setModal={(val) => setAddMemberModal(val)} />
      )}
    </div>
  );
}
