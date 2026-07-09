"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { brandLogoMap } from "@/lib/content/brand-logo-map";

/* ================================================================== */
/*  Logo shape classification                                           */
/*  Determines how each logo is sized within its card.                  */
/* ================================================================== */

type LogoShape = "wide" | "standard" | "square";

/**
 * Wide wordmarks — horizontal logos that need more width than height.
 * These are brands whose primary identity is a wide text mark or
 * whose SVG viewBox has a ratio wider than ~2.5:1.
 */
const WIDE_LOGOS: ReadonlySet<string> = new Set([
  "Alcatel-Lucent",
  "CommScope",
  "Systimax",
  "D-Link",
  "Ruckus",
  "Logitech",
  "Honeywell",
  "Crestron",
  "Hikvision",
  "Harman",
  "Matrix",
]);

/**
 * Square / near-square logos — icon marks or compact logos
 * (viewBox roughly 1:1 like 24×24).
 */
const SQUARE_LOGOS: ReadonlySet<string> = new Set([
  "Cisco",
  "Dell",
  "Fortinet",
  "LG",
  "Poly",
  "Zoom",
  "Epson",
  "Netgear",
  "Samsung",
  "Panasonic",
  "Synology",
]);

function classifyShape(name: string): LogoShape {
  if (WIDE_LOGOS.has(name)) return "wide";
  if (SQUARE_LOGOS.has(name)) return "square";
  return "standard";
}

/**
 * Per-brand optical max-height overrides (px).
 * Fine-tune individual brands that feel too large or too small
 * within their shape category. `null` = let the shape class handle it.
 */
const OPTICAL_MAX_H: Record<string, number | null> = {
  "Alcatel-Lucent": 38,
  Cisco: 50,
  Samsung: 48,
  Honeywell: 36,
  CommScope: 36,
  Systimax: 34,
  Logitech: 34,
  Crestron: 34,
  Hikvision: 36,
  Panasonic: 48,
  Harman: 34,
  Matrix: 36,
  Ruckus: 34,
  "D-Link": 34,
  Synology: 48,
  Netgear: 48,
  Axis: 46,
  Poly: 46,
  Dell: 50,
  Fortinet: 48,
  Shure: 44,
  QSC: 44,
  HID: 44,
  APC: 36,
  APW: 36,
  LG: 46,
  eSSL: 40,
  Zoom: 46,
  Barco: 40,
  Biamp: 40,
  Extron: 40,
  Kramer: 40,
  Draper: 40,
  Morley: 40,
  Pelco: 40,
  Edwards: 40,
  Cooper: 40,
  Notifier: 40,
  Vertiv: 40,
  Eaton: 40,
  Sophos: 40,
  "HP Aruba": 40,
  AVer: 40,
  Dahua: 40,
};

/* ================================================================== */
/*  BrandLogoCard                                                      */
/* ================================================================== */

interface BrandLogoCardProps {
  name: string;
  index: number;
  dimmed?: boolean;
}

/** Per-brand alt-text overrides. Defaults to `${name} logo`. */
const ALT_OVERRIDES: Record<string, string> = {
  Matrix: "Matrix Comsec logo",
};

export function BrandLogoCard({ name, index, dimmed }: BrandLogoCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const [imgError, setImgError] = useState(false);
  const logoSrc = brandLogoMap[name];
  const shape = classifyShape(name);
  const opticalMaxH = OPTICAL_MAX_H[name] ?? null;

  const handleImgError = useCallback(() => {
    setImgError(true);
  }, []);

  /* Build inline style for shape-adaptive + optical sizing */
  const logoStyle: React.CSSProperties = {
    maxWidth: shape === "wide" ? "70%" : shape === "square" ? "46%" : "58%",
    maxHeight: opticalMaxH ? `${opticalMaxH}px` : shape === "wide" ? "38%" : shape === "square" ? "46%" : "48%",
    objectFit: "contain",
    width: "auto",
    height: "auto",
  };

  return (
    <motion.div
      className={cn(
        /* Fixed card aspect ratio — identical for every brand */
        "group relative flex items-center justify-center rounded-[18px] border border-border bg-card",
        "aspect-[4/3] w-full",
        "transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
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
      {/* Logo container — generous padding, perfectly centered */}
      <div className="flex w-full h-full items-center justify-center p-4 sm:p-5 lg:p-6">
        {logoSrc && !imgError ? (
          <Image
            src={logoSrc}
            alt={ALT_OVERRIDES[name] ?? `${name} logo`}
            width={300}
            height={100}
            onError={handleImgError}
            style={logoStyle}
            className={cn(
              "transition-transform duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
              "group-hover:scale-105"
            )}
          />
        ) : (
          /* Fallback: company name when logo unavailable or fails to load */
          <span
            className={cn(
              "font-bold text-charcoal transition-colors duration-300 group-hover:text-tangerine-600",
              "select-none text-center leading-tight px-2",
              /* Scale fallback text by shape */
              shape === "wide" ? "text-xs sm:text-sm" : shape === "square" ? "text-base sm:text-lg" : "text-sm sm:text-base"
            )}
          >
            {name}
          </span>
        )}
      </div>
    </motion.div>
  );
}

/** Get brand color — exported for use by the partner-logo-wall hover highlighting. */
export function getBrandColor(name: string): string {
  return "#1A1A1A";
}