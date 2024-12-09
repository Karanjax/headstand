import { withAuth } from "next-auth/middleware";
import { pagesOptions } from "./app/api/auth/[...nextauth]/pages-options";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;

    // Allow public access to API route
    if (pathname.startsWith("/api/instructor")) {
      return NextResponse.next();
    }
  },
  {
    pages: {
      ...pagesOptions,
    },
  }
);

export const config = {
  matcher: ["/:path*"], // Protect all routes except API exclusions
};
