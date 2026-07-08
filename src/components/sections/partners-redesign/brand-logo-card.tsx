"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { brandLogoMap } from "@/lib/content/brand-logo-map";

/* ================================================================== */
/*  Optical sizing map — per-brand height overrides                    */
/*  Keeps visual weight consistent across different logo proportions.  */
/* ================================================================== */

const LOGO_SIZING: Record<string, { h: number; maxW?: number }> = {
  // Wider logos — allow more width
  Cisco: { h: 52, maxW: 180 },
  Samsung: { h: 44, maxW: 160 },
  "Alcatel-Lucent": { h: 44, maxW: 170 },
  Honeywell: { h: 44, maxW: 160 },
  CommScope: { h: 44, maxW: 160 },
  Systimax: { h: 44, maxW: 150 },
  Logitech: { h: 44, maxW: 160 },
  Crestron: { h: 44, maxW: 160 },
  Hikvision: { h: 44, maxW: 160 },
  Panasonic: { h: 44, maxW: 160 },
  Harman: { h: 44, maxW: 140 },

  // Taller/square logos — slightly taller
  Axis: { h: 50, maxW: 130 },
  Poly: { h: 50, maxW: 140 },
  Dell: { h: 50, maxW: 140 },
  Fortinet: { h: 48, maxW: 140 },
  Shure: { h: 48, maxW: 130 },
  QSC: { h: 48, maxW: 130 },
  HID: { h: 48, maxW: 130 },
  APC: { h: 48, maxW: 130 },
  APW: { h: 48, maxW: 130 },

  // Compact brands
  LG: { h: 50, maxW: 100 },
  eSSL: { h: 48, maxW: 120 },
  Zoom: { h: 48, maxW: 140 },
  Barco: { h: 46, maxW: 130 },
  Biamp: { h: 46, maxW: 130 },
  Extron: { h: 46, maxW: 130 },
  Kramer: { h: 46, maxW: 130 },
  Draper: { h: 46, maxW: 130 },
  Morley: { h: 46, maxW: 130 },
  Pelco: { h: 46, maxW: 130 },
  Edwards: { h: 46, maxW: 130 },
  Cooper: { h: 46, maxW: 130 },
  Notifier: { h: 46, maxW: 140 },
  Ruckus: { h: 46, maxW: 130 },
  Vertiv: { h: 46, maxW: 130 },
  Eaton: { h: 46, maxW: 130 },
  Sophos: { h: 46, maxW: 130 },
  "HP Aruba": { h: 46, maxW: 130 },
  "D-Link": { h: 46, maxW: 130 },
  Synology: { h: 44, maxW: 150 },
  Netgear: { h: 46, maxW: 140 },
  Matrix: { h: 46, maxW: 130 },
  Epson: { h: 46, maxW: 130 },
  AVer: { h: 46, maxW: 130 },
  Dahua: { h: 46, maxW: 130 },
};

const DEFAULT_SIZING = { h: 46, maxW: 140 };

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
  const sizing = LOGO_SIZING[name] ?? DEFAULT_SIZING;

  return (
    <motion.div
      className={cn(
        "group relative flex items-center justify-center rounded-[18px] border border-border bg-card",
        "p-5 sm:p-6 lg:p-7 transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "cursor-pointer select-none",
        "hover:border-tangerine-500 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12),0_0_0_1px_rgba(249,115,22,0.08)]",
        "focus-visible:border-tangerine-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tangerine-500/20",
        dimmed && "opacity-40 pointer-events-none"
      )}
      role="listitem"
      aria-label={`${name} — OEM technology partner`}
      tabIndex={0}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.45,
        delay: prefersReducedMotion ? 0 : Math.min(index * 0.03, 0.3),
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      whileHover={
        !prefersReducedMotion
          ? { y: -7, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }
          : undefined
      }
    >
      {/* Logo — centered, optically sized */}
      <div className="flex w-full items-center justify-center">
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt={`${name} logo`}
            width={sizing.maxW ?? 160}
            height={sizing.h}
            className={cn(
              "h-11 w-auto max-w-[140px] object-contain",
              "transition-transform duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
              "group-hover:scale-105",
              "sm:h-[52px] sm:max-w-[170px]",
              "lg:h-[56px] lg:max-w-[180px]"
            )}
            style={
              {
                "--logo-h": `${sizing.h}px`,
                "--logo-maxw": `${sizing.maxW ?? 140}px`,
              } as React.CSSProperties
            }
          />
        ) : (
          <span className="text-base sm:text-lg font-bold text-charcoal transition-colors duration-300 group-hover:text-tangerine-600 select-none text-center leading-tight">
            {name}
          </span>
        )}
      </div>
    </motion.div>
  );
}

/** Get brand color — exported for use by the partner-logo-wall hover highlighting. */
export function getBrandColor(name: string): string {
  if (name in brandLogoMap) {
    return "#1A1A1A";
  }
  return "#1A1A1A";
}