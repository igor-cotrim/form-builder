import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "pt"] as const;

export const pathnames = {
  "/": "/",
  "/forms": {
    en: "/forms",
    pt: "/forms",
  },
  "/builder": {
    en: "/builder",
    pt: "/builder",
  },
  "/submit": {
    en: "/submit",
    pt: "/submit",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
