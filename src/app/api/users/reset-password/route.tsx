import { NextRequest } from "next/server";
import { Response } from "@app/http/utils/Response";
import { validationResult } from "express-validator";
import { validation } from "@/app/http/middlewares/Validation";
import { ChangePasswordValidation } from "@/app/http/validations/AuthValidation";
import { simplifyError } from "@/app/helpers";
import { User } from "@/app/database/models/User";
import { OTP } from "@/app/database/models/OTP";
import bcrypt from "bcrypt";
import { connectDB } from "@/app/database";

export async function POST(req: NextRequest) {
  return await connectDB()
    .then(async () => {
      return await req
        .json()
        .then(async (value) => {
          const validatedData = validation(
            ChangePasswordValidation,
            validationResult
          );

          try {
            await validatedData({ body: value }, NextRequest);
          } catch (errorResponse: any) {
            const errors = simplifyError(errorResponse.errors);
            return Response.error("Invalid data", 400, errors);
          }

          const user = await User.findOne({ email: value.email });

          if (!user) {
            return Response.error("Invalid user", 400);
          }

          if (value.newPassword !== value.confirmedPassword) {
            return Response.error(
              "New password does not match with confirm password.",
              400
            );
          }
          const userOTP = await OTP.findOne({
            userId: user._id,
            type: "reset_password",
          });

          if (userOTP && userOTP.isVerified) {
            const salt = bcrypt.genSaltSync(12);
            const hashedPassword = bcrypt.hashSync(value.newPassword, salt);
            await User.updateOne(
              { email: user.email },
              { password: hashedPassword }
            );
            await OTP.updateOne(
              { userId: user._id, type: "reset_password" },
              { isVerified: false }
            );

            return Response.success(
              true,
              "Password has been updated successfully",
              200
            );
          } else {
            return Response.error("OTP is not verified", 400);
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
