import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { LogoutButton } from "@/components/admin/logout-button";

// Defense-in-depth alongside the /admin disallow in robots.ts -- this segment's own metadata
// applies to every nested admin route (login, content, leads) unless a child overrides it.
export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-secondary/30">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6">
            <span className="font-semibold text-charcoal font-heading">IBS Admin</span>
            <nav className="flex items-center gap-4 text-sm text-steel">
              <Link href="/admin/leads" className="hover:text-charcoal">
                Leads
              </Link>
              <Link href="/admin/content" className="hover:text-charcoal">
                Site Content
              </Link>
            </nav>
          </div>
          <LogoutButton />
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </div>
  );
}
