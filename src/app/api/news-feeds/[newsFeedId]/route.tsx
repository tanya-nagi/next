import { NewsFeed } from "@app/database/models/NewsFeed";
import {
  deleteFiles,
  imageExtensions,
  simplifyError,
  uploadFiles,
  validateFiles,
} from "@app/helpers";
import { validation } from "@app/http/middlewares/Validation";
import { Response } from "@app/http/utils/Response";
import { UpdateNewsFeedValidation } from "@app/http/validations/NewsFeedValidation";
import { validationResult } from "express-validator";
import { NextRequest, NextResponse } from "next/server";
import { UpdateNewsFeedBody } from "@/types/admin/api/news-feed";
import { Image } from "@/types/admin/api/image";
import { connectDB } from "@/app/database";

export async function POST(req: NextRequest, { params }: { params: any }) {
  const { newsFeedId } = params;
  return await connectDB()
    .then(async () => {
      return await req
        .formData()
        .then(async (value) => {
          const validatedData = validation(
            UpdateNewsFeedValidation,
            validationResult
          );
          const body: UpdateNewsFeedBody = {
            title: value.get("title"),
            subtitle: value.get("subtitle"),
            content: value.get("content"),
            publishedAt: value.get("publishedAt"),
          };

          try {
            await validatedData({ body: body }, NextResponse);
          } catch (errorResponse: any) {
            const errors = simplifyError(errorResponse.errors);
            return Response.error("Invalid data", 400, errors);
          }

          if (value.getAll("image").length > 0) {
            try {
              await validateFiles(value, "image", 1, 2, imageExtensions);
            } catch (error) {
              return Response.error("Invalid data", 400, error);
            }
          }

          const newsFeed = await NewsFeed.findOne({ _id: newsFeedId });

          if (value.getAll("image").length > 0) {
            try {
              const uploadedFiles: Omit<Image, "_id">[] = await uploadFiles(
                value,
                "image",
                "images"
              );
              await deleteFiles(newsFeed.coverImage);
              newsFeed.coverImage = uploadedFiles[0].url;
            } catch (error) {
              return Response.error(
                `Something went wrong. Please try again! ${error}`,
                500
              );
            }
          }

          Object.keys(body).forEach((value) => {
            const key: keyof UpdateNewsFeedBody =
              value as keyof UpdateNewsFeedBody;
            if (body[key] !== null) {
              newsFeed[key] = body[key];
            }
          });

          await newsFeed.save();

          return Response.success(
            newsFeed,
            "News feed has been updated successfully",
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
