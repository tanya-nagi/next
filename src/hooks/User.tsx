import { ReactNode, useContext, useState, createContext } from "react";
import { User } from "@/types/admin/api/users";

const initailUser: User = {
  _id: "",
  fullName: "",
  email: "",
  phoneNumber: "",
  isEmailVerified: false,
  role: "",
};
const userContext = createContext({
  user: initailUser,
  setUser: (val: User) => {},
});

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(initailUser);

  return (
    <userContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </userContext.Provider>
  );
}

export const useUser = () => {
  const { user, setUser } = useContext(userContext);

  return { user, setUser };
};
