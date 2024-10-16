import { User } from "@app/database/models/User";
import { validation } from "@app/http/middlewares/Validation";
import { Response } from "@app/http/utils/Response";
import { NextRequest, NextResponse } from "next/server";
import {
  addUserValidation,
  deleteUserValidation,
} from "@app/http/validations/ManageUserValidation";
import { validationResult } from "express-validator";
import { Mailer } from "@/app/http/utils/Mailer";
import { simplifyError } from "@/app/helpers";
import { connectDB } from "@/app/database";

export async function POST(req: NextRequest) {
  return await connectDB()
    .then(async () => {
      const currentUser = await User.findById(req.headers.get("currentuserid"));

      if (!currentUser || currentUser.role !== "super_admin") {
        return Response.error("You don't have access to this resources", 400);
      }
      return await req
        .json()
        .then(async (value) => {
          const validatedData = validation(addUserValidation, validationResult);

          try {
            await validatedData({ body: value }, NextResponse);
          } catch (errorResponse: any) {
            const errors = simplifyError(errorResponse.errors);
            return Response.error("Invalid data", 400, errors);
          }

          const user = await new User({
            email: value.email,
            role: "admin",
          }).save();
          await Mailer.send(
            user.email,
            "Welcome to the AAK Dashboard",
            "Invitation.html",
            {
              senderEmail: currentUser.email,
              link: `${
                process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
                  ? "http://localhost:3000/"
                  : process.env.NEXT_PUBLIC_FRONTEND_URL
              }admin/signup`,
            }
          );
          return Response.success(
            user,
            "User has been added and invitation has been send successfully",
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

export async function DELETE(req: NextRequest) {
  return await connectDB()
    .then(async () => {
      const currentUser = await User.findById(req.headers.get("currentuserid"));

      if (!currentUser || currentUser.role !== "super_admin") {
        return Response.error("You don't have access to this resources", 400);
      }
      return await req
        .json()
        .then(async (value) => {
          const validatedData = validation(
            deleteUserValidation,
            validationResult
          );
          try {
            await validatedData({ body: value }, NextResponse);
          } catch (errorResponse: any) {
            const errors = simplifyError(errorResponse.errors);
            return Response.error("Invalid data", 400, errors);
          }

          try {
            await User.findByIdAndDelete(value.userId);
            return Response.success(
              true,
              "User has been removed successfully",
              200
            );
          } catch (error) {
            return Response.error(
              "Something went wrong. Please try again!",
              500
            );
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

export async function GET() {
  return await connectDB()
    .then(async () => {
      const users = await User.find();

      if (!users) {
        return Response.error("Error while fetching users", 400);
      }
      return Response.success(
        users,
        "All users has been fetched successfully",
        200
      );
    })
    .catch(() => {
      return Response.error("Something went wrong. Please try again!", 500);
    });
}
