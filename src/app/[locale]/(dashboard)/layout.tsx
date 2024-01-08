import React from "react";
import { UserButton } from "@clerk/nextjs";

import { Logo, ThemeSwitcher } from "@/components";
import LocaleSwitcher from "@/components/LocaleSwitcher";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col max-h-screen min-w-full min-h-screen bg-background">
      <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
        <Logo />
        <div className="flex items-center gap-4">
          <LocaleSwitcher />
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
      <main className="flex flex-grow w-full">{children}</main>
    </div>
  );
}

export default Layout;
