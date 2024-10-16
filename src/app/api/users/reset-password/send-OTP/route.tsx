import { OTP } from "@app/database/models/OTP";
import { User } from "@app/database/models/User";
import { validation } from "@app/http/middlewares/Validation";
import { Response } from "@app/http/utils/Response";
import { ResetPasswordSendOTPValidation } from "@app/http/validations/AuthValidation";
import { validationResult } from "express-validator";
import { NextRequest, NextResponse } from "next/server";
import { generateRandomOTP, simplifyError } from "@/app/helpers";
import bcrypt from "bcrypt";
import { Mailer } from "../../../../http/utils/Mailer";
import { connectDB } from "@/app/database";

export async function POST(req: NextRequest) {
  return await connectDB()
    .then(async () => {
      return await req
        .json()
        .then(async (value) => {
          const validatedData = validation(
            ResetPasswordSendOTPValidation,
            validationResult
          );

          try {
            await validatedData({ body: value }, NextResponse);
          } catch (errorResponse: any) {
            const errors = simplifyError(errorResponse.errors);
            return Response.error("Invalid data", 400, errors);
          }

          const user = await User.findOne({ email: value.email });

          const userOTP = await OTP.findOne({
            userId: user._id,
            type: "reset_password",
          });
          const otp = generateRandomOTP();
          const salt = bcrypt.genSaltSync(12);
          const hashedOTP = bcrypt.hashSync(otp.toString(), salt);

          if (!userOTP) {
            await new OTP({
              otp: hashedOTP,
              userId: user?._id,
              type: "reset_password",
            }).save();
          } else {
            await OTP.updateOne(
              { userId: user._id, type: "reset_password" },
              { otp: hashedOTP }
            );
          }

          await Mailer.send(
            user.email,
            "AAK Dashboard Password Reset",
            "PasswordReset.html",
            { otp: otp }
          );

          return Response.success(true, "OTP has been send successfully", 200);
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
