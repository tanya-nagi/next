import VerifyOTPForm from "@/components/admin/verifyOTPForm";
import { Suspense } from "react";

export default function VerifyOTP() {
  return (
    <div>
      <Suspense>
        <VerifyOTPForm />
      </Suspense>
    </div>
  );
}
