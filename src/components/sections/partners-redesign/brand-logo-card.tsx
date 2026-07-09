"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { brandLogoMap } from "@/lib/content/brand-logo-map";

/* ================================================================== */
/*  Per-brand optical sizing                                             */
/*  Each entry: [maxWidth %, maxHeight %] — both relative to the       */
/*  logo container (the padded area inside the card).                   */
/*  Values are tuned so every logo is readable, centered, and has       */
/*  consistent visual weight with its neighbours.                       */
/* ================================================================== */

/** [maxWidth%, maxHeight%] per brand. Percentages of the padded container. */
const LOGO_SIZING: Record<string, [number, number]> = {
  /* --- Audio / Video Integration --- */
  Poly:          [40, 52],
  Cisco:         [42, 54],
  Logitech:      [62, 42],
  AVer:          [52, 48],
  Epson:         [42, 52],
  Zoom:          [42, 52],
  Barco:         [52, 46],
  Biamp:         [52, 46],
  Extron:        [52, 46],
  Crestron:      [62, 40],
  Samsung:       [42, 52],
  LG:            [42, 52],
  Panasonic:     [42, 52],
  Draper:        [52, 46],
  Harman:        [62, 40],
  Kramer:        [52, 46],
  Shure:         [52, 46],
  QSC:           [52, 46],

  /* --- Communication & IT --- */
  "Alcatel-Lucent": [80, 48],
  Sophos:        [60, 48],
  Matrix:        [78, 52],
  CommScope:     [72, 44],
  Systimax:      [70, 42],
  Dell:          [42, 54],
  "HP Aruba":    [58, 46],
  Ruckus:        [62, 42],
  "D-Link":      [62, 42],
  Netgear:       [42, 52],
  APC:           [56, 46],
  Vertiv:        [56, 46],
  Eaton:         [56, 46],
  Fortinet:      [42, 52],
  Synology:      [42, 52],
  APW:           [56, 46],

  /* --- Security --- */
  Hikvision:     [62, 42],
  Dahua:         [52, 46],
  Axis:          [52, 48],
  eSSL:          [52, 46],
  Cooper:        [52, 46],
  Honeywell:     [68, 40],
  HID:           [52, 46],
  Notifier:      [52, 46],
  Morley:        [52, 46],
  Pelco:         [52, 46],
  Edwards:       [52, 46],
};

/** Fallback sizing for any brand not explicitly listed. */
const DEFAULT_SIZING: [number, number] = [52, 48];

function getLogoSizing(name: string): [number, number] {
  return LOGO_SIZING[name] ?? DEFAULT_SIZING;
}

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
  const [maxW, maxH] = getLogoSizing(name);

  const handleImgError = useCallback(() => {
    setImgError(true);
  }, []);

  /* Build inline style — per-brand optical sizing with aspect-ratio preservation */
  const logoStyle: React.CSSProperties = {
    maxWidth: `${maxW}%`,
    maxHeight: `${maxH}%`,
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
              /* Scale fallback text proportionally to logo sizing */
              maxW >= 65 ? "text-xs sm:text-sm" : maxW <= 45 ? "text-base sm:text-lg" : "text-sm sm:text-base"
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