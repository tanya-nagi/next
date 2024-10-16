import { User } from "@/app/database/models/User";
import { Response } from "@/app/http/utils/Response";
import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { connectDB } from "@/app/database";

export async function POST(req: NextRequest) {
  return await connectDB()
    .then(async () => {
      return await req
        .json()
        .then(async (value) => {
          const salt = bcrypt.genSaltSync(12);
          const hashedPassword = bcrypt.hashSync(value.password, salt);
          const user = await new User({
            fullName: value.fullName,
            email: value.email,
            role: value.role,
            password: hashedPassword,
            isEmailVerified: true,
          }).save();

          return Response.success(
            user,
            "User has been created successfully",
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
