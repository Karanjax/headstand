import { withAuth } from "next-auth/middleware";
import { pagesOptions } from "./app/api/auth/[...nextauth]/pages-options";
import { NextResponse, NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow public access to API route
  if (pathname.startsWith("/api/instructor")) {
    return NextResponse.next(); // Skip authentication
  }

  // Apply authentication for all other routes
  return withAuth(req, {
    pages: {
      ...pagesOptions,
    },
  });
}

export const config = {
  matcher: ["/:path*"], // Protect all routes except `/api/instructor`
};
