import { TextBtn } from "@components/admin";
import { User } from "@/types/admin/api/users";
import { ProfileIcon } from "./icons";
import { useRouter } from "next/navigation";
import { usePasswordReset } from "@hooks/PasswordReset";
import { toast } from "react-toastify";
import { useAuthServices } from "@services/auth";

type Props = {
  user: User;
};

export default function UserProfile({ user }: Props) {
  const { setIsOTPSent } = usePasswordReset();
  const { sendResetPasswordOTP, isLoading } = useAuthServices();
  const router = useRouter();

  const onSendOTP = async () => {
    await sendResetPasswordOTP(
      { email: user.email },
      {
        onSuccess: () => {
          setIsOTPSent(true);
          router.push(
            `/admin/profile/password-reset/verify-OTP?source=authenticated&email=${encodeURIComponent(
              user.email
            )}`
          );
        },
        onError: (error) => {
          toast.error(error);
        },
      }
    );
  };
  return (
    <>
      <div className="bg-gray-500 bg-opacity-10 flex items-center justify-center rounded-full w-20 h-20">
        <span className="text-blue w-12 h-12">
          <ProfileIcon />
        </span>
      </div>
      <h6 className="font-medium mt-2 ml-2 text-lg">{user?.fullName}</h6>
      <h6 className="font-normal text-wrap ml-2 text-base   text-opacity-60">
        {user?.email}
      </h6>

      <div className="mt-12">
        <TextBtn
          isLoading={isLoading}
          text="Reset Password"
          callback={onSendOTP}
          isArrow={false}
        />
      </div>
    </>
  );
}
