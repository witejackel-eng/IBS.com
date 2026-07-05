import { PenLine } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Visible, unmissable marker for content that illustrates a capability but
 * isn't a completed client engagement (see lib/content/projects.ts). Always
 * render this as a first-class element, never a footnote.
 */
export function IllustrativeBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1.5 rounded-full border border-dashed border-steel/40 bg-muted px-3 py-1 text-xs font-medium text-steel",
        className
      )}
    >
      <PenLine className="h-3.5 w-3.5" />
      Illustrative scenario
    </span>
  );
}
