import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Consistent outer treatment for a full-size illustration panel (service
 * detail pages, segment cards, process steps). Individual illustrations stay
 * unwrapped <svg> so they can also be used small/inline (capability bullets,
 * step markers) without this frame.
 */
export function IllustrationFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex items-center justify-center overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-deep-blue/8 via-transparent to-transparent bg-engineering-grid",
        className
      )}
    >
      {children}
    </div>
  );
}
