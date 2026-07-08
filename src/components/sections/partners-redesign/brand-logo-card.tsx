"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { brandLogoMap } from "@/lib/content/brand-logo-map";

/* ================================================================== */
/*  BrandLogoCard                                                      */
/* ================================================================== */

interface BrandLogoCardProps {
  name: string;
  index: number;
  /** When another category is active, dim this card to 40% opacity. */
  dimmed?: boolean;
}

export function BrandLogoCard({ name, index, dimmed }: BrandLogoCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const logoSrc = brandLogoMap[name];

  return (
    <motion.div
      className={cn(
        "group relative flex flex-col items-center justify-between rounded-2xl border border-border bg-card",
        "p-5 sm:p-6 transition-all duration-300 min-h-[128px] sm:min-h-[136px]",
        "hover:border-deep-blue/60 hover:shadow-[0_8px_28px_-8px_rgba(0,0,0,0.12)]",
        "focus-visible:border-deep-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-blue/20",
        dimmed && "opacity-40 pointer-events-none"
      )}
      role="listitem"
      aria-label={`${name} — OEM technology partner`}
      tabIndex={0}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.5,
        delay: prefersReducedMotion ? 0 : Math.min(index * 0.04, 0.4),
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      whileHover={
        !prefersReducedMotion
          ? { y: -3, transition: { duration: 0.25 } }
          : undefined
      }
    >
      {/* Logo — centered in fixed-height area */}
      <div className="flex flex-1 w-full items-center justify-center px-3">
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt={`${name} logo`}
            width={140}
            height={48}
            className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="text-base sm:text-[17px] font-bold text-steel transition-colors duration-300 group-hover:text-charcoal select-none text-center leading-tight">
            {name}
          </span>
        )}
      </div>

      {/* Brand name label — subtle by default, more visible on hover */}
      <span
        className={cn(
          "mt-3 pt-3 border-t border-border/40 w-full text-center",
          "text-[10px] font-semibold text-steel/40 tracking-[0.1em] uppercase select-none",
          "transition-all duration-300 group-hover:text-steel/70 group-hover:border-border/70"
        )}
      >
        {name}
      </span>
    </motion.div>
  );
}

/** Get brand color — exported for use by the partner-logo-wall hover highlighting. */
export function getBrandColor(name: string): string {
  if (name in brandLogoMap) {
    // Extract color from the SVG file's fill or stroke attributes
    return "#1A1A1A"; // Color is embedded in the SVG
  }
  return "#1A1A1A";
}