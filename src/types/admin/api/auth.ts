
export type SignupBody = {
    fullName: string
    email: string
    password: string
}

export type SigninBody = {
    email: string
    password: string
}

export type VerifyEmailBody = {
    userId: string
}

export type VerifyOTPBody = {
    otp: string
    email: string
    type: string
}

export type ResetPasswordBody = {
    email: string,
    newPassword: string,
    confirmedPassword: string
};
  
export type ResetPasswordSendOTPBody = {
    email: string;
};

export type HandleMethod = {
    onSuccess?: (data?: any) => void
    onError?: (error: any) => void
}