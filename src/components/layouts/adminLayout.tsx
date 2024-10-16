"use client";

import { PasswordResetContextProvider } from "@hooks/PasswordReset";
import { MemberContextProvider } from "@hooks/Member";
import { NewsFeedContextProvider } from "@hooks/NewsFeed";
import { UserContextProvider } from "@hooks/User";
import { ImageContextProvider } from "@hooks/Images";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "@components/layouts/globals.css";

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserContextProvider>
      <PasswordResetContextProvider>
        <ImageContextProvider>
          <MemberContextProvider>
            <NewsFeedContextProvider>
              <div className="w-full h-full">
                <ToastContainer />
                <div className="w-full h-screen">{children}</div>
              </div>
            </NewsFeedContextProvider>
          </MemberContextProvider>
        </ImageContextProvider>
      </PasswordResetContextProvider>
    </UserContextProvider>
  );
}
