"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

/* ================================================================== */
/*  Brand configuration for hero visualization                         */
/* ================================================================== */

interface HeroBrand {
  name: string;
  color: string;
  ring: "inner" | "outer";
}

/** 13 brands across 2 orbital rings — all verified against partners.ts */
const HERO_BRANDS: HeroBrand[] = [
  // Inner ring (5 brands, closest to IBS)
  { name: "Cisco", color: "#049FD9", ring: "inner" },
  { name: "Poly", color: "#6E3FA0", ring: "inner" },
  { name: "Samsung", color: "#1428A0", ring: "inner" },
  { name: "Hikvision", color: "#E2231A", ring: "inner" },
  { name: "Fortinet", color: "#EE3124", ring: "inner" },
  // Outer ring (8 brands, wider orbit)
  { name: "Axis", color: "#4B5563", ring: "outer" },
  { name: "Logitech", color: "#009AD6", ring: "outer" },
  { name: "LG", color: "#A50034", ring: "outer" },
  { name: "Honeywell", color: "#E4002B", ring: "outer" },
  { name: "APC", color: "#6B7280", ring: "outer" },
  { name: "Crestron", color: "#1F2937", ring: "outer" },
  { name: "Dell", color: "#007DB8", ring: "outer" },
  { name: "Zoom", color: "#2D8CFF", ring: "outer" },
];

function polarToCart(cx: number, cy: number, angleDeg: number, r: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

/* ================================================================== */
/*  BrandPill — renders one brand node in the SVG                      */
/* ================================================================== */

function BrandPill({
  x,
  y,
  name,
  color,
  pillW,
  pillH,
  pillRx,
  fontSize,
  opacity,
}: {
  x: number;
  y: number;
  name: string;
  color: string;
  pillW: number;
  pillH: number;
  pillRx: number;
  fontSize: number;
  opacity: number;
}) {
  return (
    <>
      <rect
        x={x - pillW / 2}
        y={y - pillH / 2}
        width={pillW}
        height={pillH}
        rx={pillRx}
        fill={color}
        opacity={opacity}
      />
      <text
        x={x}
        y={y + 0.5}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={fontSize}
        fontWeight="600"
        fill="white"
        style={{ fontFamily: "var(--font-heading)" }}
        letterSpacing="0.02em"
      >
        {name}
      </text>
    </>
  );
}

/* ================================================================== */
/*  OemNetworkHero                                                     */
/* ================================================================== */

export function OemNetworkHero() {
  const prefersReducedMotion = useReducedMotion();
  const ease = EASE_OUT_EXPO as [number, number, number, number];

  const CX = 300;
  const CY = 240;
  const INNER_R = 90;
  const OUTER_R = 170;

  const innerBrands = HERO_BRANDS.filter((b) => b.ring === "inner");
  const outerBrands = HERO_BRANDS.filter((b) => b.ring === "outer");

  const innerPositions = innerBrands.map((brand, i) => {
    const angle = (i / innerBrands.length) * 360 - 90;
    const pos = polarToCart(CX, CY, angle, INNER_R);
    return { ...brand, ...pos };
  });

  const outerPositions = outerBrands.map((brand, i) => {
    const angle = (i / outerBrands.length) * 360 - 90;
    const pos = polarToCart(CX, CY, angle, OUTER_R);
    return { ...brand, ...pos };
  });

  const allPositions = [...innerPositions, ...outerPositions];

  return (
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl mx-auto">
      <svg
        viewBox="0 0 600 480"
        className="w-full h-auto"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          {/* Dot-grid background pattern */}
          <pattern
            id="hero-dot-grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.5" className="fill-border" />
          </pattern>

          {/* Radial glow behind the network */}
          <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EA580C" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#EA580C" stopOpacity="0" />
          </radialGradient>

          {/* Flowing dash animation for orbit rings */}
          <style>{`
            @keyframes orbit-flow-cw {
              to { stroke-dashoffset: -24; }
            }
            @keyframes orbit-flow-ccw {
              to { stroke-dashoffset: 24; }
            }
            .orbit-ring-inner {
              animation: orbit-flow-cw 10s linear infinite;
            }
            .orbit-ring-outer {
              animation: orbit-flow-ccw 16s linear infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .orbit-ring-inner,
              .orbit-ring-outer {
                animation: none;
              }
            }
          `}</style>
        </defs>

        {/* ── Background ── */}
        <rect width="600" height="480" fill="url(#hero-dot-grid)" />

        {/* ── Radial glow ── */}
        <circle
          cx={CX}
          cy={CY}
          r={OUTER_R + 60}
          fill="url(#hero-glow)"
        />

        {/* ── Decorative faint outer ring ── */}
        <circle
          cx={CX}
          cy={CY}
          r={OUTER_R + 30}
          className="stroke-border"
          strokeWidth="0.4"
          strokeOpacity="0.4"
          strokeDasharray="2 12"
        />

        {/* ── Orbit rings with flowing dash animation ── */}
        <circle
          cx={CX}
          cy={CY}
          r={INNER_R}
          className="orbit-ring-inner stroke-border"
          strokeWidth="0.8"
          strokeDasharray="4 8"
        />
        <circle
          cx={CX}
          cy={CY}
          r={OUTER_R}
          className="orbit-ring-outer stroke-border"
          strokeWidth="0.8"
          strokeDasharray="4 8"
        />

        {/* ── Connection lines: brands → center ── */}
        {allPositions.map((pos, i) => (
          <motion.line
            key={`line-${pos.name}`}
            x1={CX}
            y1={CY}
            x2={pos.x}
            y2={pos.y}
            className="stroke-steel"
            strokeWidth="0.5"
            strokeOpacity="0.15"
            strokeLinecap="round"
            initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0 }}
            whileInView={
              prefersReducedMotion
                ? undefined
                : { pathLength: 1, opacity: 1 }
            }
            viewport={{ once: true }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.9,
              delay: prefersReducedMotion ? 0 : 0.1 + i * 0.04,
              ease,
            }}
          />
        ))}

        {/* ── Center IBS node ── */}
        <motion.g
          initial={prefersReducedMotion ? undefined : { scale: 0 }}
          whileInView={prefersReducedMotion ? undefined : { scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease }}
        >
          {/* Shadow/glow behind IBS */}
          <rect
            x={CX - 34}
            y={CY - 22}
            width="68"
            height="44"
            rx="14"
            fill="oklch(var(--deep-blue) / 0.12)"
          />
          {/* Main IBS pill */}
          <rect
            x={CX - 32}
            y={CY - 20}
            width="64"
            height="40"
            rx="12"
            className="fill-deep-blue"
          />
          <text
            x={CX}
            y={CY + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="14"
            fontWeight="700"
            className="fill-warm-white"
            style={{ fontFamily: "var(--font-heading)" }}
            letterSpacing="0.12em"
          >
            IBS
          </text>
        </motion.g>

        {/* ── Pulse rings on center ── */}
        {!prefersReducedMotion && (
          <>
            <motion.circle
              cx={CX}
              cy={CY}
              className="fill-none stroke-deep-blue"
              strokeWidth="0.6"
              r="20"
              animate={{
                r: [20, 52, 20],
                opacity: [0.25, 0, 0.25],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx={CX}
              cy={CY}
              className="fill-none stroke-deep-blue"
              strokeWidth="0.4"
              r="20"
              animate={{
                r: [20, 42, 20],
                opacity: [0.15, 0, 0.15],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.8,
              }}
            />
          </>
        )}

        {/* ── Brand nodes (all) with entrance + floating animation ── */}
        {allPositions.map((pos, i) => {
          const isInner = pos.ring === "inner";
          const pillW = isInner ? 68 : 78;
          const pillH = isInner ? 26 : 28;
          const pillRx = isInner ? 8 : 9;
          const fontSize = isInner ? 9 : 9.5;
          const pillOpacity = isInner ? 0.92 : 0.88;

          const pill = (
            <BrandPill
              x={pos.x}
              y={pos.y}
              name={pos.name}
              color={pos.color}
              pillW={pillW}
              pillH={pillH}
              pillRx={pillRx}
              fontSize={fontSize}
              opacity={pillOpacity}
            />
          );

          return (
            <motion.g
              key={pos.name}
              initial={
                prefersReducedMotion
                  ? undefined
                  : { opacity: 0, scale: 0.6 }
              }
              whileInView={
                prefersReducedMotion
                  ? undefined
                  : { opacity: 1, scale: 1 }
              }
              viewport={{ once: true }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.5,
                delay: prefersReducedMotion ? 0 : 0.3 + i * 0.05,
                ease,
              }}
            >
              {prefersReducedMotion ? (
                pill
              ) : (
                <motion.g
                  animate={{
                    y: i % 2 === 0 ? [0, -2.5, 0] : [0, 2.5, 0],
                  }}
                  transition={{
                    duration: 3.5 + (i % 7) * 0.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.12,
                  }}
                >
                  {pill}
                </motion.g>
              )}
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}