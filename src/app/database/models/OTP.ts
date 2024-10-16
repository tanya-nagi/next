import mongoose from "mongoose";

const OTPSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    },
}, {timestamps: true})


export const OTP = mongoose.models.OTP || mongoose.model("OTP", OTPSchema)