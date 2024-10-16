import { NextRequest, NextResponse } from "next/server";
import {
  authenticateAPIRoutes,
  authenticateAdminPages,
} from "./app/http/middlewares/Authentication";
import { publicRoutes } from "./app/helpers";

export function middleware(req: NextRequest) {
  if (
    !publicRoutes.includes(req.nextUrl.pathname) &&
    req.nextUrl.pathname.startsWith("/api")
  ) {
    return authenticateAPIRoutes(req);
  }

  if (req.nextUrl.pathname.startsWith("/admin")) {
    return authenticateAdminPages(req);
  }
  if (
    !req.nextUrl.pathname.startsWith("/admin") &&
    !req.nextUrl.pathname.startsWith("/api")
  ) {
    const headers = new Headers(req.headers);
    headers.set("X-Layout", "main");

    return NextResponse.next({
      request: {
        headers: headers,
      },
    });
  }
}
