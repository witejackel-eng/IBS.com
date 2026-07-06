"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageSquare } from "lucide-react";

import { company } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Sticky bottom action bar shown only on mobile (below md). Keeps the two
 * highest-value actions — call and contact — one tap away from any scroll
 * position. Respects the iOS safe-area inset so it never sits under the
 * home indicator. Hidden on /contact (redundant) and on admin routes.
 */
export function MobileCallBar() {
  const pathname = usePathname();
  const phone = company.contact.phones[0];
  const phoneHref = `tel:${phone.replace(/\s/g, "")}`;

  // Don't show the bar on the contact page (the form is already in view)
  // or on admin routes (different audience, different goals).
  if (pathname === "/contact" || pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 md:hidden",
        // Background gradient fades the bar in so content scrolling underneath
        // doesn't visually collide with a hard edge.
        "bg-gradient-to-t from-[var(--warm-white)] via-[var(--warm-white)]/95 to-transparent",
        "pb-[env(safe-area-inset-bottom)] pt-3"
      )}
      role="region"
      aria-label="Quick contact"
    >
      <div className="flex gap-2 px-4">
        <a
          href={phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-card py-3 text-sm font-semibold text-charcoal shadow-sm transition-colors active:scale-[0.98]"
          aria-label={`Call ${phone}`}
        >
          <Phone className="h-4 w-4 text-deep-blue" />
          <span className="tabular-nums">Call</span>
        </a>
        <Link
          href="/contact"
          className="flex flex-[1.4] items-center justify-center gap-2 rounded-full bg-[var(--deep-blue)] py-3 text-sm font-semibold text-[var(--warm-white)] shadow-[0_8px_20px_-8px_rgba(234,88,12,0.5)] transition-transform active:scale-[0.98]"
        >
          <MessageSquare className="h-4 w-4" />
          Get in touch
        </Link>
      </div>
    </div>
  );
}
