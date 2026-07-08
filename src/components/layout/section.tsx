import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "none" | "grid" | "blueprint" | "ambient";
};

export function Section({ children, className, id, bg = "none" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-14 sm:py-20 md:py-20 lg:py-32",
        bg === "grid" && "bg-engineering-grid",
        bg === "blueprint" && "bg-blueprint-lines",
        bg === "ambient" && "bg-ambient-glow",
        className
      )}
    >
      {children}
    </section>
  );
}
