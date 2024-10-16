import { connectDB } from "@/app/database";
import { Response } from "@/app/http/utils/Response";
import { cookies } from "next/headers";

export async function PUT() {
  return await connectDB()
    .then(async () => {
      try {
        await cookies().delete("token");
        return Response.success(
          true,
          "User has been logged out successfully",
          200
        );
      } catch (error) {
        return Response.error("Error while logging out.", 400);
      }
    })
    .catch((error) => {
      return Response.error(
        `Something went wrong. Please try again! ${error}`,
        400
      );
    });
}
