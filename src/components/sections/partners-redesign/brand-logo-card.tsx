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

/**
 * [maxWidth%, maxHeight%] per brand — percentages of the padded logo container.
 *
 * Sizing is tuned per-logo based on actual aspect ratio and visual weight:
 *
 *   1:1 square icons  (viewBox 24×24) → moderate W, high H
 *   3:1 wide wordmarks  (viewBox 300×100) → high W (85-95%), moderate H
 *   1.3:1 Matrix PNG (882×677) → balanced W, higher H
 *
 * Math: in a ~1.3:1 container, a 3:1 wordmark's rendered height equals
 * ~0.433 × maxWidth% of container height.  So maxWidth 90% → ~39% H.
 * Square icons at maxWidth 42% → ~54% H (height-constrained).
 */
const LOGO_SIZING: Record<string, [number, number]> = {
  /* ================================================================ */
  /*  AUDIO / VIDEO INTEGRATION                                      */
  /* ================================================================ */

  /* --- Square simple-icons (1:1, viewBox 24×24) --- */
  Cisco:         [42, 54],   // ← REFERENCE — do not change
  Poly:          [42, 54],   // match Cisco
  Epson:         [44, 54],   // slight bump over Cisco
  Zoom:          [44, 54],
  Samsung:       [44, 54],
  LG:            [44, 54],
  Panasonic:     [48, 56],   // taller to compensate for busy icon

  /* --- Wide wordmarks (3:1, viewBox 300×100) --- */
  Logitech:      [90, 52],   // long wordmark — fill width
  AVer:          [85, 52],
  Barco:         [85, 52],
  Biamp:         [85, 52],
  Extron:        [88, 52],   // slightly wider text
  Crestron:      [85, 52],
  Draper:        [85, 52],
  Harman:        [85, 52],
  Kramer:        [88, 52],
  Shure:         [80, 52],   // shorter text
  QSC:           [68, 52],   // very short text, almost icon-like

  /* ================================================================ */
  /*  COMMUNICATION & IT                                             */
  /* ================================================================ */

  /* --- Square simple-icons (1:1, viewBox 24×24) --- */
  Dell:          [42, 54],   // already acceptable
  Fortinet:      [42, 54],
  Netgear:       [48, 56],   // was too small

  /* --- Wide wordmarks (3:1, viewBox 300×100) --- */
  "Alcatel-Lucent": [95, 52], // 4:1 ratio (320×80), widest logo
  Sophos:        [82, 52],
  CommScope:     [90, 52],
  Systimax:      [90, 52],
  "HP Aruba":    [85, 52],
  Ruckus:        [82, 52],
  "D-Link":      [78, 52],
  APC:           [78, 52],
  Vertiv:        [82, 52],
  Eaton:         [82, 52],
  APW:           [68, 52],   // very short text
  Synology:      [48, 56],   // 1:1 simple-icon, was too small

  /* --- Non-standard ratio --- */
  Matrix:        [75, 65],   // PNG 882×677 (≈1.3:1), increase significantly

  /* ================================================================ */
  /*  SECURITY                                                        */
  /* ================================================================ */

  /* --- All wordmarks (3:1, viewBox 300×100) --- */
  Hikvision:     [90, 52],   // long wordmark
  Dahua:         [85, 52],
  Axis:          [82, 52],
  eSSL:          [72, 52],   // short text
  Cooper:        [82, 52],
  Honeywell:     [90, 52],   // long wordmark
  HID:           [68, 52],   // very short text
  Notifier:      [85, 52],
  Morley:        [82, 52],
  Pelco:         [78, 52],
  Edwards:       [85, 52],
};

/** Fallback for unlisted brands — assumes 3:1 wordmark. */
const DEFAULT_SIZING: [number, number] = [85, 52];

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
              maxW >= 85 ? "text-xs sm:text-sm" : maxW <= 50 ? "text-base sm:text-lg" : "text-sm sm:text-base"
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