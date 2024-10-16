import { ReactNode, createContext, useContext, useState } from "react";

export const passwordResetContext = createContext({
  isOTPSent: false,
  setIsOTPSent: (val: boolean) => {},
  isOTPVerified: false,
  setIsOTPVerified: (val: boolean) => {},
});

export function PasswordResetContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isOTPVerified, setIsOTPVerified] = useState(false);

  return (
    <passwordResetContext.Provider
      value={{
        isOTPSent: isOTPSent,
        setIsOTPSent: (val: boolean) => setIsOTPSent(val),
        isOTPVerified: isOTPVerified,
        setIsOTPVerified: (value: boolean) => setIsOTPVerified(value),
      }}
    >
      {children}
    </passwordResetContext.Provider>
  );
}

export const usePasswordReset = () => {
  const { isOTPSent, setIsOTPSent, isOTPVerified, setIsOTPVerified } =
    useContext(passwordResetContext);

  return {
    isOTPSent,
    setIsOTPSent,
    isOTPVerified,
    setIsOTPVerified,
  };
};
