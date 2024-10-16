import { NextRequest, NextResponse } from "next/server";
import { Response } from "@app/http/utils/Response";
import { User } from "../../database/models/User";
import { validation } from "../../http/middlewares/Validation";
import { signinValidation } from "@app/http/validations/AuthValidation";
import { validationResult } from "express-validator";
import { setTokenCookie, simplifyError } from "@/app/helpers";
import bcrypt from "bcrypt";
import { connectDB } from "@/app/database";

export async function POST(req: NextRequest) {
  return await connectDB()
    .then(async () => {
      return await req
        .json()
        .then(async (value) => {
          const validatedData = validation(signinValidation, validationResult);
          try {
            await validatedData({ body: value }, NextResponse);
          } catch (errorsResponse: any) {
            const errors = simplifyError(errorsResponse.errors);
            return Response.error("Invalid data", 400, errors);
          }

          const user = await User.findOne({ email: value.email });

          if (!user || !user.password) {
            return Response.error(
              "Account doesn't exist with this email address.",
              400
            );
          }

          if (!bcrypt.compareSync(value.password, user.password)) {
            return Response.error("Email or password is invalid", 400);
          }

          await setTokenCookie(user.id);

          return Response.success(
            user.getDetails(),
            "User has been logged in successfully",
            200
          );
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
