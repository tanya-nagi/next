import { NextRequest, NextResponse } from "next/server";
import { Response } from "@app/http/utils/Response";
import { User } from "@app/database/models/User";
import { validation } from "@app/http/middlewares/Validation";
import { VerifyEmailValidation } from "@app/http/validations/AuthValidation";
import { validationResult } from "express-validator";
import { simplifyError } from "@/app/helpers";
import { connectDB } from "@/app/database";

export async function POST(req: NextRequest) {
  return await connectDB()
    .then(async () => {
      return req
        .json()
        .then(async (value) => {
          const validatedData = validation(
            VerifyEmailValidation,
            validationResult
          );
          try {
            await validatedData({ body: value }, NextResponse);
          } catch (errorResponse: any) {
            const errors = simplifyError(errorResponse.errors);
            return Response.error("Invalid data", 400, errors);
          }
          const user = await User.findOne({ _id: value.userId });

          if (!user) {
            return Response.error("Invalid user", 400);
          }

          await User.updateOne(
            { _id: value.userId },
            { isEmailVerified: true }
          );

          return Response.success(true, "Email is verified", 200);
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
