// app/client-shell.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/lib/auth";
import MainNav from "@/components/site/main-nav";
import ThemeToggle from "@/components/theme-toggle";

export function ClientShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="dylup-theme">
      <AuthProvider>
        <header
          className="
            sticky top-0 z-[2000] w-full border-b
            bg-background/95
            supports-[backdrop-filter]:bg-background/70 backdrop-blur
            transition-colors
          "
        >
          <div className="container mx-auto flex h-14 items-center justify-between px-4 gap-4">
            <Link href="/" className="flex items-center gap-2">
              {/* Logo FIXE — ne dépend plus du thème */}
              <Image
                src="/brand/logo-lockup-light.png" // ou remplace par /brand/logo-lockup-static.png si tu as une version neutre
                alt="Dylup"
                width={132}
                height={28}
                className="h-7 w-auto"
                priority
              />
            </Link>

            <MainNav />

            <div className="flex items-center gap-2 shrink-0">
              <ThemeToggle />
              <Link
                href="/auth/signin"
                className="text-sm px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/auth/signup"
                className="text-sm px-3 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Start free trial
              </Link>
            </div>
          </div>
        </header>

        <main className="min-h-dvh">{children}</main>
      </AuthProvider>
    </ThemeProvider>
  );
}
