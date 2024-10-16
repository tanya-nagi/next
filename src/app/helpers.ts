import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import crypto from "crypto";
import path from "path";
import { Image as ImageType } from "../types/admin/api/image";
import { put, del } from "@vercel/blob";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);
const expirationTime = process.env.JWT_EXPIRE as string;

export const publicRoutes = ["/api/signup", "/api/signin", "/api/signup/add-super_admin", 
  "/api/users/reset-password/send-OTP", "/api/users/verify-OTP", "/api/users/reset-password", "/api/users/verify-email"];

export const adminUnauthenticatedPages = [
  "/admin/signin",
  "/admin/signup",
  "/admin/password-reset/verify-email",
  "/admin/password-reset",
  "/admin/password-reset/verify-OTP",
];

export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]/;

export const phoneNumberRegex =
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

export const stringRegex = /^[a-zA-Z0-9 .,']+$/;

export const dateRegex = /\d{4}\/(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])*/;

export const imageExtensions = ["image/png", "image/jpg", "image/jpeg"];

export const pdfExtensions = ["application/pdf"];

export const createJWTToken = async (userId: string) => {
  return await new SignJWT({ id: userId })
    .setExpirationTime(expirationTime)
    .setProtectedHeader({ alg: "HS256" })
    .sign(secret);
};

export const verifyJWTToken = async (token: string) => {
  return await jwtVerify(token, secret);
};

export const setTokenCookie = async (userId: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const token = await createJWTToken(userId);

      cookies().set("token", token, {
        httpOnly: true,
        secure: false,
        expires: new Date().setMinutes(new Date().getMinutes() + 480),
        path: "/",
        sameSite: "lax",
      });
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

export const generateRandomOTP = () => {
  const min = 100000;
  const max = 999999;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const simplifyError = (
  errors: { type: string; path: string; msg: string; location: string }[]
) => {
  const formatedErrors: any = {};

  errors.forEach((error: any) => {
    if (!formatedErrors.hasOwnProperty(error.path)) {
      formatedErrors[error.path] = error.msg;
    }
  });
  return formatedErrors;
};

export const validateFiles = (
  value: FormData,
  key: string,
  maximumCount: number,
  maximumSize: number, // pass size in MB
  extensions: string[]
) => {
  return new Promise((resolve, reject) => {
    const files = value.getAll(key) as File[];
    if (!files || files.length === 0) {
      return reject(`Please attach/upload ${key}.`);
    }

    if (files.length > maximumCount) {
      return reject(
        `Maximum ${maximumCount} ${
          maximumCount > 1 ? "files" : "file"
        } can be uploaded once.`
      );
    }

    files.forEach((file) => {
      if (!extensions.includes(file.type)) {
        return reject(`Unsupported media format ${file.type}`);
      }

      if (file.size > maximumSize * 1024 * 1024) {
        return reject(`File size exceeds the max limit of ${maximumSize} MB.`);
      }
    });
    return resolve(true);
  });
};

export const generateFileName = () => {
  return crypto.randomBytes(12).toString("hex");
};

export const uploadFiles: (
  value: FormData,
  key: string,
  mediaType: string
) => Promise<Omit<ImageType, "_id">[]> = (value, key, mediaType) => {
  const files = value.getAll(key) as File[];

  return new Promise((resolve, reject) => {
    const uploadedFiles: Omit<ImageType, "_id">[] = [];
    const fileName = generateFileName();
    const serverAssetsDirPath = process.cwd() + "/server-assets/";

    const uploadPromises = files.map(async (file) => {
      const fileBuffer = await file.arrayBuffer();
      const fileExtension = path.extname(file.name);

      return new Promise(async (fileResolve, fileReject) => {
        await put(fileName, file, {
          access: "public",
        })
          .then((res: any) => {
            uploadedFiles.push({
              url: res.url,
              size: file.size,
              mimeType: file.type,
            });
            return fileResolve(true);
          })
          .catch((error: any) => {
            fileReject(error);
          });
        // fs
        //   .writeFile(
        //     `${serverAssetsDirPath}${mediaType}/${fileName}${fileExtension}`,
        //     Buffer.from(fileBuffer)
        //   )
        //   .then(() => {
        //     uploadedFiles.push({
        //       url: `images/${fileName}${fileExtension}`,
        //       size: file.size,
        //       mimeType: file.type
        //     });
        //     return fileResolve(true);
        //   })
        //   .catch((error) => {
        //     fileReject(error);
        //   });
      });
    });

    return Promise.all(uploadPromises)
      .then(() => {
        return resolve(uploadedFiles);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export const deleteFiles = (fileURL: string) => {
  return new Promise(async (resolve, reject) => {
    await del(fileURL)
      .then(() => {
        return resolve(true);
      })
      .catch((error: any) => {
        return reject(error);
      });
  });
  // const serverAssetsDirPath = process.cwd() + "/public/server-assets/";
  // fs.unlink(`${serverAssetsDirPath}${filePath}`);
};
