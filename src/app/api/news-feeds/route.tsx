import { NextRequest } from "next/server";
import { NewsFeed } from "@app/database/models/NewsFeed";
import {
  uploadFiles,
  validateFiles,
  imageExtensions,
  simplifyError,
  deleteFiles,
} from "@app/helpers";
import { Response } from "@app/http/utils/Response";
import { validation } from "@app/http/middlewares/Validation";
import {
  AddNewsFeedValidation,
  DeleteNewsFeedValidation,
} from "@app/http/validations/NewsFeedValidation";
import { validationResult } from "express-validator";
import { Image } from "@/types/admin/api/image";
import { connectDB } from "@/app/database";

export async function POST(req: NextRequest) {
  return await connectDB()
    .then(async () => {
      return await req
        .formData()
        .then(async (value) => {
          const validatedData = validation(
            AddNewsFeedValidation,
            validationResult
          );
          const body = {
            title: value.get("title"),
            subtitle: value.get("subtitle"),
            content: value.get("content"),
            publishedAt: value.get("publishedAt"),
          };

          try {
            await validatedData({ body: body }, NextRequest);
          } catch (errorResponse: any) {
            const errors = simplifyError(errorResponse.errors);
            return Response.error("Invalid data", 400, errors);
          }

          try {
            await validateFiles(value, "image", 1, 2, imageExtensions);
          } catch (error: any) {
            return Response.error("Invalid data", 400, error);
          }

          try {
            const uploadedFiles: Omit<Image, "_id">[] = await uploadFiles(
              value,
              "image",
              "images"
            );
            const newsFeed = await new NewsFeed({
              ...body,
              coverImage: uploadedFiles[0].url,
            }).save();

            return Response.success(
              newsFeed,
              "News feed has been uploaded successfully",
              201
            );
          } catch (error) {
            return Response.error(
              `Something went wrong. Please try again! ${error}`,
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

export async function DELETE(req: NextRequest) {
  return await connectDB()
    .then(async () => {
      return await req
        .json()
        .then(async (value) => {
          const validatedData = validation(
            DeleteNewsFeedValidation,
            validationResult
          );

          try {
            await validatedData({ body: value }, NextRequest);
          } catch (errorResponse: any) {
            const errors = simplifyError(errorResponse);
            return Response.error("Invalid data", 400, errors);
          }

          const newsFeed = await NewsFeed.findOne({ _id: value.newsFeedId });

          if (!newsFeed) {
            return Response.error(
              "Something went wrong. Please try again!",
              500
            );
          }

          try {
            await NewsFeed.deleteOne({ _id: value.newsFeedId });
            await deleteFiles(newsFeed.coverImage);

            return Response.success(
              true,
              "News feed has been deleted successfully",
              200
            );
          } catch (error) {
            return Response.error(
              `Something went wrong. Please try again! ${error}`,
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
      const newsFeeds = await NewsFeed.find();

      if (!newsFeeds) {
        return Response.error("Error while fetching news feeds", 400);
      }
      return Response.success(
        newsFeeds,
        "All news feeds has been fetched successfully",
        200
      );
    })
    .catch(() => {
      return Response.error("Something went wrong. Please try again!", 500);
    });
}
