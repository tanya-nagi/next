import PasswordReset from "@/components/admin/passwordResetForm";
import { Suspense } from "react";

export default function VerifyOTP() {
  return (
    <div>
      <Suspense>
        <PasswordReset />
      </Suspense>
    </div>
  );
}
