import { ReactNode, useContext, useState, createContext } from "react";
import { User } from "@/types/admin/api/users";

const initailMembers: User[] = [];

const memberContext = createContext({
  members: initailMembers,
  setMembers: (val: User[]) => {},
});

export function MemberContextProvider({ children }: { children: ReactNode }) {
  const [members, setMembers] = useState<User[]>(initailMembers);

  return (
    <memberContext.Provider value={{ members, setMembers }}>
      {children}
    </memberContext.Provider>
  );
}

export const useMember = () => {
  const { members, setMembers } = useContext(memberContext);

  return { members, setMembers };
};
