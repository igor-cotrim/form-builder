import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Inter } from "next/font/google";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

import { locales } from "@/config";
import { DesignerContextProvider } from "@/contexts";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FormBuilder",
  description: "Create forms and share them with your friends!",
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <ClerkProvider>
      <html lang={locale}>
        <body className={inter.className}>
          <NextTopLoader />
          <DesignerContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </DesignerContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
