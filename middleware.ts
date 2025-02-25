import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/bookings(.*)",
  "/checkout(.*)",
  "/favorites(.*)",
  "/profile(.*)",
  "/rentals(.*)",
  "/reviews(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  // Check if the route is protected
  if (isProtectedRoute(req)) {
    const session = await auth();
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
