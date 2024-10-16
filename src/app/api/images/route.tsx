import { connectDB } from "@/app/database";
import { Image } from "@/app/database/models/Image";
import {
  deleteFiles,
  imageExtensions,
  simplifyError,
  uploadFiles,
  validateFiles,
} from "@app/helpers";
import { validation } from "@app/http/middlewares/Validation";
import { Response } from "@app/http/utils/Response";
import { DeleteImageValidation } from "@app/http/validations/ImageValidation";
import { validationResult } from "express-validator";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  return await connectDB()
    .then(async () => {
      return req
        .formData()
        .then(async (value) => {
          try {
            await validateFiles(value, "images", 1, 5, imageExtensions);
          } catch (errorResponse: any) {
            const errors = simplifyError(errorResponse.errors);
            return Response.error("Invalid file", 400, errors);
          }

          try {
            const uploadedFiles: any = await uploadFiles(
              value,
              "images",
              "images"
            );

            const images = await Image.insertMany(uploadedFiles);

            return Response.success(
              images,
              "All images have been uploaded successfully",
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

export async function DELETE(req: NextRequest) {
  return await connectDB()
    .then(async () => {
      return req
        .json()
        .then(async (value) => {
          const validatedData = validation(
            DeleteImageValidation,
            validationResult
          );
          try {
            await validatedData({ body: value }, NextResponse);
          } catch (errorResponse: any) {
            const errors = simplifyError(errorResponse.errors);
            return Response.error("Invalid data", 400, errors);
          }

          try {
            const images = await Image.find({ _id: value.imageId }).select({
              url: 1,
              _id: 0,
            });
            await Image.deleteMany({ _id: value.imageId });
            images.forEach((image) => {
              deleteFiles(image.url);
            });
            return Response.success(
              true,
              "All images have been deleted successfully",
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
      const images = await Image.find();

      if (!images) {
        return Response.error("Something went wrong. Please try again!", 500);
      }

      return Response.success(
        images,
        "All images have been fetched successfully",
        200
      );
    })
    .catch(() => {
      return Response.error("Something went wrong. Please try again!", 500);
    });
}
