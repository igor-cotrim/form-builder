import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from "next-intl/middleware";

import { pathnames, locales, localePrefix } from "./config";

const intlMiddleware = createMiddleware({
  defaultLocale: "en",
  locales,
  pathnames,
  localePrefix,
});

export default authMiddleware({
  beforeAuth: (req) => {
    // Execute next-intl middleware before Clerk's auth middleware
    return intlMiddleware(req);
  },

  // Ensure that locale specific sign-in pages are public
  publicRoutes: ["/", "/:locale/sign-in"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
