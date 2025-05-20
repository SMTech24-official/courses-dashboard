/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

export function middleware(request: NextRequest) {
  const homeRoute = `${request.nextUrl.origin}/login`;
  const adminRoutes = [
    "/",
    "/dashboard",
    "/dashboard/content",
    "/dashboard/users",
    "/dashboard/profile",
    "/dashboard/profileEdit",
  ];

  const token = request.cookies.get("token")?.value;
  const currentPath = request.nextUrl.pathname;

  if (!token) {
    return NextResponse.redirect(new URL(homeRoute, request.url));
  }

  let userInfo: any = null;
  try {
    userInfo = jwtDecode(token);
  } catch (err) {
    console.error("Invalid token:", err);
    return NextResponse.redirect(new URL(homeRoute, request.url));
  }

  // Check role
  if (
    userInfo?.role !== "SUPER_ADMIN" &&
    adminRoutes.some((route) => currentPath.startsWith(route))
  ) {
    return NextResponse.redirect(new URL(homeRoute, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/dashboard/content",
    "/dashboard/users",
    "/dashboard/profile",
    "/dashboard/profileEdit",
  ],
};
