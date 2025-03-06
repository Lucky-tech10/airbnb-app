import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// const isProtectedRoute = createRouteMatcher([
//   "/bookings(.*)",
//   "/checkout(.*)",
//   "/favorites(.*)",
//   "/reservations(.*)",
//   "/profile(.*)",
//   "/rentals(.*)",
//   "/reviews(.*)",
// ]);

const isPublicRoute = createRouteMatcher(["/", "/properties(.*)"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const session = await auth();
  // console.log(session.userId);

  // Check if it is an Admin route
  const isAdminUser = session.userId === process.env.ADMIN_USER_ID;
  if (isAdminRoute(req) && !isAdminUser) {
    return NextResponse.redirect(new URL("/", req.url));
    // return session.redirectToSignIn({ returnBackUrl: req.url });
  }

  // Check if the route is protected
  if (!isPublicRoute(req)) {
    // Redirect unauthenticated users to the sign-in page
    if (!session.userId) {
      return session.redirectToSignIn({ returnBackUrl: req.url });
    }
  }
  // Allow unrestricted access to the home page (`/`) or other non-protected routes
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
