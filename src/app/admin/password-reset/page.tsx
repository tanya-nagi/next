import PasswordResetForm from "@components/admin/passwordResetForm";
import { Suspense } from "react";

export default function PasswordReset() {
  return (
    <div>
      <Suspense>
        <PasswordResetForm />
      </Suspense>
    </div>
  );
}
