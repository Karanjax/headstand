import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { pagesOptions } from "./app/api/auth/[...nextauth]/pages-options";
import { NextResponse, NextRequest } from "next/server";

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    const { pathname } = req.nextUrl;

    // Allow public access to API route
    if (pathname.includes("/api/instructor")) {
      return NextResponse.next(); // Skip authentication
    }

    // All other routes require authentication
    return NextResponse.redirect(new URL("/login", req.url));
  },
  {
    pages: {
      ...pagesOptions,
    },
  }
);

export const config = {
  matcher: ["/:path*"], // Protect all routes except `/api/instructor`
};
