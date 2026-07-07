/**
 * Lightweight, self-contained SVG wordmarks for the OEM partner brands
 * listed on the Partners page. Each logo is a small inline SVG (no external
 * requests, no asset files to manage) drawn in the brand's distinctive
 * typographic style — same approach used by press pages and tech partner
 * grids across the industry.
 *
 * These are simplified tributes to each brand's wordmark, not pixel-perfect
 * reproductions. The goal is recognizability at a glance, not trademark
 * reproduction.
 */

import type { CSSProperties } from "react";

interface BrandStyle {
  /** Display label — defaults to the partner name. */
  label?: string;
  /** Font family for the wordmark. */
  fontFamily?: string;
  /** Font weight (numeric for SVG). */
  fontWeight?: number | string;
  /** Letter spacing in em units. */
  letterSpacing?: string;
  /** Text transform — uppercase / lowercase / none. */
  textTransform?: "uppercase" | "lowercase" | "none";
  /** Brand accent color, used for the wordmark or part of it. */
  color: string;
  /** Optional secondary color for two-tone brands. */
  secondaryColor?: string;
  /** Optional short tagline / descriptor shown under the wordmark. */
  tagline?: string;
  /** Render the brand name in italic. */
  italic?: boolean;
}

/**
 * Curated style for each partner brand. Where a brand has a well-known
 * distinctive wordmark (e.g. Cisco's stripes, Poly's lowercase, Epson's
 * uppercase tracking), we lean into it.
 */
const brandStyles: Record<string, BrandStyle> = {
  // AV Integration
  Poly: { label: "poly", color: "#1A1A1A", fontWeight: 700, letterSpacing: "-0.02em", textTransform: "lowercase" },
  Cisco: {
    label: "CISCO",
    color: "#1BA0D7",
    fontWeight: 600,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    tagline: "Systems",
  },
  Logitech: { label: "logitech", color: "#00B8FC", fontWeight: 700, letterSpacing: "-0.01em", textTransform: "lowercase" },
  AVer: { label: "AVer", color: "#2E8B57", fontWeight: 700, letterSpacing: "0" },
  Epson: { label: "EPSON", color: "#1A1A1A", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" },
  Zoom: { label: "Zoom", color: "#2D8CFF", fontWeight: 700, letterSpacing: "-0.02em" },
  Barco: { label: "BARCO", color: "#00B9F1", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" },
  Biamp: { label: "BIAMP", color: "#E2231A", fontWeight: 700, letterSpacing: "0.02em", textTransform: "uppercase" },
  Extron: { label: "extron", color: "#1A1A1A", fontWeight: 700, letterSpacing: "0.08em", textTransform: "lowercase" },
  Crestron: { label: "Crestron", color: "#1A1A1A", fontWeight: 700, letterSpacing: "-0.01em" },
  Samsung: { label: "SAMSUNG", color: "#1428A0", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" },
  LG: { label: "LG", color: "#A50034", fontWeight: 700, letterSpacing: "0", tagline: "Life's Good" },
  Panasonic: { label: "Panasonic", color: "#005AAA", fontWeight: 700, letterSpacing: "-0.01em" },
  Draper: { label: "DRAPER", color: "#1A1A1A", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" },
  Harman: { label: "HARMAN", color: "#1A1A1A", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", tagline: "a Samsung company" },
  Kramer: { label: "KRAMER", color: "#E2231A", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" },
  Shure: { label: "SHURE", color: "#1A1A1A", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" },
  QSC: { label: "QSC", color: "#E2231A", fontWeight: 800, letterSpacing: "0.04em" },

  // Communication & IT
  "Alcatel-Lucent": {
    label: "alcatel-lucent",
    color: "#005AA4",
    fontWeight: 700,
    letterSpacing: "-0.01em",
    textTransform: "lowercase",
  },
  Sophos: { label: "SOPHOS", color: "#2259A7", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" },
  Matrix: { label: "MATRIX", color: "#E2231A", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", tagline: "Comsec" },
  CommScope: { label: "Commscope", color: "#1A1A1A", fontWeight: 700, letterSpacing: "-0.01em" },
  Systimax: { label: "SYSTIMAX", color: "#1A1A1A", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" },
  Dell: { label: "DELL", color: "#007DB8", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" },
  "HP Aruba": { label: "Aruba", color: "#FF8300", fontWeight: 700, letterSpacing: "-0.01em", tagline: "a Hewlett Packard Enterprise" },
  Ruckus: { label: "RUCKUS", color: "#E4002B", fontWeight: 700, letterSpacing: "0.02em", textTransform: "uppercase" },
  "D-Link": { label: "D-Link", color: "#00A0E2", fontWeight: 700, letterSpacing: "-0.01em" },
  Netgear: { label: "NETGEAR", color: "#1A1A1A", fontWeight: 700, letterSpacing: "0.02em", textTransform: "uppercase" },
  APC: { label: "APC", color: "#1A1A1A", fontWeight: 700, letterSpacing: "0.06em", tagline: "by Schneider Electric" },
  Vertiv: { label: "VERTIV", color: "#1A1A1A", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" },
  Eaton: { label: "EATON", color: "#1A1A1A", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" },
  Fortinet: { label: "FORTINET", color: "#E2231A", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" },
  Synology: { label: "Synology", color: "#1A1A1A", fontWeight: 700, letterSpacing: "-0.01em" },
  APW: { label: "APW", color: "#1A1A1A", fontWeight: 700, letterSpacing: "0.08em", tagline: "President" },

  // Security
  Hikvision: { label: "HIKVISION", color: "#E2231A", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" },
  Dahua: { label: "dahua", color: "#E2231A", fontWeight: 700, letterSpacing: "0.04em", textTransform: "lowercase" },
  Axis: { label: "axis", color: "#1A1A1A", fontWeight: 700, letterSpacing: "0.02em", textTransform: "lowercase", tagline: "Communications" },
  eSSL: { label: "eSSL", color: "#1A1A1A", fontWeight: 700, letterSpacing: "0", tagline: "Security" },
  Cooper: { label: "COOPER", color: "#1A1A1A", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" },
  Honeywell: { label: "Honeywell", color: "#E4002B", fontWeight: 700, letterSpacing: "-0.01em" },
  HID: { label: "HID", color: "#1A1A1A", fontWeight: 700, letterSpacing: "0.08em", tagline: "Global" },
  Notifier: { label: "NOTIFIER", color: "#E2231A", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" },
  Morley: { label: "MORLEY", color: "#1A1A1A", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", tagline: "by Honeywell" },
  Pelco: { label: "PELCO", color: "#1A1A1A", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" },
  Edwards: { label: "EDWARDS", color: "#1A1A1A", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" },
};

interface PartnerLogoProps {
  name: string;
  className?: string;
  /** Inline style overrides — useful for sizing. */
  style?: CSSProperties;
}

/**
 * Renders a single partner brand as an inline SVG wordmark. The card
 * itself (border, background, padding) is owned by the caller — this
 * component just draws the wordmark, centered.
 */
export function PartnerLogo({ name, className, style }: PartnerLogoProps) {
  const config = brandStyles[name];
  const label = config?.label ?? name;
  const color = config?.color ?? "#1A1A1A";
  const fontWeight = config?.fontWeight ?? 700;
  const letterSpacing = config?.letterSpacing ?? "0";
  const textTransform = config?.textTransform ?? "none";
  const italic = config?.italic ?? false;
  const tagline = config?.tagline;

  // SVG text rendering — predictable sizing, scales crisply.
  // viewBox is 240x90; callers control the rendered size via className/style.
  return (
    <svg
      viewBox="0 0 240 90"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      role="img"
      aria-label={`${name} logo`}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Primary wordmark — vertically centered with a slight upward bias
          so the tagline (if present) sits beneath it without overlap. */}
      <text
        x="120"
        y={tagline ? 38 : 48}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontWeight={fontWeight}
        fontStyle={italic ? "italic" : "normal"}
        letterSpacing={letterSpacing}
        fontSize={label.length > 8 ? 28 : label.length > 6 ? 34 : 42}
        fill={color}
        style={{ textTransform }}
      >
        {label}
      </text>
      {tagline && (
        <text
          x="120"
          y="62"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
          fontWeight={400}
          letterSpacing="0.06em"
          fontSize="11"
          fill="#6B7280"
        >
          {tagline}
        </text>
      )}
    </svg>
  );
}
