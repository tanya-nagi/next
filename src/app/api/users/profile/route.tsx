import { connectDB } from "@/app/database";
import { User } from "@/app/database/models/User";
import { Response } from "@/app/http/utils/Response";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return await connectDB()
    .then(async () => {
      const id = req.headers.get("currentuserid");

      const user = await User.findById(id);

      if (!user) {
        return Response.error("User doesn't exists", 400);
      }

      return Response.success(
        user,
        "User details has been fetched successfully",
        200
      );
    })
    .catch((error) => {
      return Response.error(
        `Something went wrong. Please try again! ${error}`,
        500
      );
    });
}
