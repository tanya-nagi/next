import { validation } from "@app/http/middlewares/Validation";
import { Response } from "@app/http/utils/Response";
import { VerifyOTPValidation } from "@app/http/validations/AuthValidation";
import { validationResult } from "express-validator";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@app/database/models/User";
import { OTP } from "@app/database/models/OTP";
import bcrypt from "bcrypt";
import { simplifyError } from "@/app/helpers";
import { connectDB } from "@/app/database";

export async function POST(req: NextRequest) {
  return await connectDB()
    .then(async () => {
      return await req
        .json()
        .then(async (value) => {
          const validatedData = validation(
            VerifyOTPValidation,
            validationResult
          );
          try {
            await validatedData({ body: value }, NextResponse);
          } catch (errorResponse: any) {
            const errors = simplifyError(errorResponse.errors);
            return Response.error("Invalid data", 400, errors);
          }

          const user = await User.findOne({ email: value.email });

          if (!user) {
            return Response.error("Email is invalid", 400);
          }

          const userOTP = await OTP.findOne({
            userId: user._id,
            type: value.type,
          });

          if (userOTP && bcrypt.compareSync(value.otp, userOTP.otp)) {
            const OTPUpdationTime = new Date(userOTP.updatedAt);
            const currentTime = new Date();
            let diff =
              (currentTime.getTime() - OTPUpdationTime.getTime()) / 1000;
            diff /= 60;

            if (Math.abs(Math.round(diff)) >= 10) {
              return Response.error("OTP validity has expired", 400);
            }
            await OTP.updateOne(
              { userId: user._id, type: value.type },
              { isVerified: true }
            );
            return Response.success(true, "OTP is valid", 200);
          } else {
            return Response.error("OTP is incorrect", 400);
          }
        })
        .catch((error) => {
          return Response.error(
            `Something went wrong. Please try again! ${error}`,
            500
          );
        });
    })
    .catch((error) => {
      return Response.error(
        `Something went wrong. Please try again! ${error}`,
        500
      );
    });
}
