import { NextRequest, NextResponse } from "next/server";
import { Response } from "@app/http/utils/Response";
import { User } from "../../database/models/User";
import { validation } from "../../http/middlewares/Validation";
import { signupValidation } from "../../http/validations/AuthValidation";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import { Mailer } from "@/app/http/utils/Mailer";
import { simplifyError } from "@/app/helpers";
import { connectDB } from "@/app/database";

export async function POST(req: NextRequest) {
  return await connectDB()
    .then(async () => {
      return await req
        .json()
        .then(async (value) => {
          const validatedData = validation(signupValidation, validationResult);
          try {
            await validatedData({ body: value }, NextResponse);
          } catch (errorResponse: any) {
            const formatedErrors = simplifyError(errorResponse.errors);
            return Response.error("Invalid data", 400, formatedErrors);
          }

          const user = await User.findOne({ email: value.email });

          if (!user) {
            return Response.error(
              "You don't have an access to this dashboard",
              400
            );
          }
          const salt = bcrypt.genSaltSync(12);
          const hashedPassword = bcrypt.hashSync(value.password, salt);

          const updatedUser = await User.updateOne(
            { _id: user.id },
            {
              fullName: value.fullName,
              password: hashedPassword,
            }
          );

          await Mailer.send(
            user.email,
            "AAK Dashboard Email Verification",
            "EmailVerification.html",
            {
              verificationLink: `${
                process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
                  ? "http://localhost:3000/"
                  : process.env.NEXT_PUBLIC_FRONTEND_URL
              }admin/email/verify/${encodeURIComponent(user.id)}`,
            }
          );

          return Response.success(
            updatedUser,
            "User account has been created successfully",
            201
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
