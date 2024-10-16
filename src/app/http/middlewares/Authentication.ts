import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyJWTToken, adminUnauthenticatedPages } from "@app/helpers";
import { Response } from "../utils/Response";
import { JWTPayload, JWTVerifyResult } from "jose";

export const authenticateAPIRoutes = async (req: NextRequest) => {
  const cookie = cookies().get("token");
  const token = cookie?.value;

  if (!token) {
    return Response.error("Unauthenticated", 401);
  }

  try {
    const verifiedToken: JWTVerifyResult<JWTPayload> = await verifyJWTToken(token);
    const currentUserId = verifiedToken.payload.id;

    const headers = new Headers(req.headers)
    headers.set("currentUserId", currentUserId as string)
 
    return NextResponse.next({
    request: {
      headers: headers
    }
 })
  } catch (error: any) {
    if (error.code === "ERR_JWT_EXPIRED") {
      return Response.error("Token is expired", 401);
    } else if (
      error.code === "ERR_JWS_INVALID" ||
      error.code === "ERR_JWT_INVALID" ||
      error.code === "ERR_JWS_SIGNATURE_VERIFICATION_FAILED" ||
      error.code === "ERR_JWT_CLAIM_VALIDATION_FAILED"
    ) {
      return Response.error("Invalid Token", 401);
    } else {
      return Response.error("Internal Server Error", 500);
    }
  }
};

export const authenticateAdminPages = async (req: NextRequest) => {
  const cookie = cookies().get("token");
  const token = cookie?.value; 
  const isUnauthenticatedPage = adminUnauthenticatedPages.includes(req.nextUrl.pathname);
  const headers = new Headers(req.headers);
  headers.set("X-Layout", "admin");
  

  if(req.nextUrl.pathname.startsWith('/admin/email/verify')) {
    return NextResponse.next({
      request: {
        headers: headers
      }
    })
  }

  else if (!token && (!isUnauthenticatedPage || req.nextUrl.pathname === '/admin')) {
    const response = NextResponse.redirect(new URL("/admin/signin", req.nextUrl.origin));
     response.headers.set("X-Layout", "admin");
     return response
  }

  else if (token && (isUnauthenticatedPage || req.nextUrl.pathname === '/admin')) {
    const response = NextResponse.redirect(new URL("/admin/news-feed", req.nextUrl.origin));
    response.headers.set("X-Layout", "admin")
    return response
  }

  else if (token && !isUnauthenticatedPage) {
    try {
      await verifyJWTToken(token);
      return NextResponse.next({
        request: {
          headers: headers
        }
      })
    } catch (error) {
      const response = NextResponse.redirect(
        new URL("/admin/signin", req.nextUrl.origin)
      )
      response.headers.set("X-Layout", "admin")
      return response
    }
  }
  else {
    return NextResponse.next({
      request: {
        headers: headers
      }
    })
  }
};
