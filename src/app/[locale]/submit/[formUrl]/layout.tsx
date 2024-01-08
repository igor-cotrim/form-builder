import React from "react";

import { Logo, ThemeSwitcher } from "@/components";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen max-h-screen min-w-full min-h-screen bg-background">
      <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
        <Logo />
        <ThemeSwitcher />
      </nav>
      <main className="flex flex-grow w-full">{children}</main>
    </div>
  );
}

export default Layout;
