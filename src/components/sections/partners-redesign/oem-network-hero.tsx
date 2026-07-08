"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

/* ================================================================== */
/*  Brand nodes positioned around the center IBS hub                  */
/* ================================================================== */

const HERO_BRANDS = [
  "Cisco", "Poly", "Axis", "Logitech", "Honeywell",
  "Bosch", "Hikvision", "Samsung", "LG", "Biamp",
  "Crestron", "Shure", "Extron", "APC", "Fortinet",
  "Ruckus", "Sophos", "Eaton", "Schneider Electric",
];

function polarToCart(cx: number, cy: number, angle: number, r: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

/* ================================================================== */
/*  OemNetworkHero                                                    */
/* ================================================================== */

export function OemNetworkHero() {
  const prefersReducedMotion = useReducedMotion();
  const ease = EASE_OUT_EXPO as [number, number, number, number];

  const CX = 300;
  const CY = 220;
  const RADIUS = 160;

  const positions = HERO_BRANDS.map((name, i) => {
    const angle = (i / HERO_BRANDS.length) * Math.PI * 2 - Math.PI / 2;
    const pos = polarToCart(CX, CY, angle, RADIUS);
    return { name, ...pos };
  });

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <svg
        viewBox="0 0 600 440"
        className="w-full h-auto"
        fill="none"
        aria-hidden="true"
      >
        {/* ── Dot-grid background ── */}
        <defs>
          <pattern id="hero-dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.6" className="fill-border" />
          </pattern>
        </defs>
        <rect width="600" height="440" fill="url(#hero-dot-grid)" />

        {/* ── Connection lines: brand nodes → center ── */}
        {positions.map((pos, i) => (
          <motion.line
            key={pos.name}
            x1={CX}
            y1={CY}
            x2={pos.x}
            y2={pos.y}
            className="stroke-steel"
            strokeWidth="0.6"
            strokeOpacity="0.2"
            strokeLinecap="round"
            initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0 }}
            whileInView={prefersReducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              delay: prefersReducedMotion ? 0 : i * 0.04,
              ease,
            }}
          />
        ))}

        {/* ── Orbit ring (dashed) ── */}
        <motion.circle
          cx={CX}
          cy={CY}
          r={RADIUS}
          className="stroke-border"
          strokeWidth="0.8"
          strokeDasharray="4 8"
          initial={prefersReducedMotion ? undefined : { pathLength: 0 }}
          whileInView={prefersReducedMotion ? undefined : { pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.2, ease }}
        />

        {/* ── Center IBS node ── */}
        <motion.g
          initial={prefersReducedMotion ? undefined : { scale: 0 }}
          whileInView={prefersReducedMotion ? undefined : { scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease }}
        >
          <rect
            x={CX - 34}
            y={CY - 22}
            width="68"
            height="44"
            rx="14"
            className="fill-deep-blue"
          />
          <text
            x={CX}
            y={CY + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="13"
            fontWeight="700"
            className="fill-warm-white"
            style={{ fontFamily: "var(--font-heading)" }}
            letterSpacing="0.1em"
          >
            IBS
          </text>
        </motion.g>

        {/* ── Pulse ring on center ── */}
        {!prefersReducedMotion && (
          <motion.circle
            cx={CX}
            cy={CY}
            className="fill-none stroke-deep-blue"
            strokeWidth="0.6"
            r="22"
            animate={{ r: [22, 48, 22], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* ── Brand endpoint nodes ── */}
        {positions.map((pos, i) => {
          const labelY = pos.y < CY ? pos.y - 18 : pos.y + 22;
          return (
            <motion.g
              key={pos.name}
              initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.5 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.4,
                delay: prefersReducedMotion ? 0 : 0.3 + i * 0.05,
                ease,
              }}
            >
              <circle
                cx={pos.x}
                cy={pos.y}
                r="4"
                className="fill-card stroke-steel"
                strokeWidth="0.8"
              />
              <text
                x={pos.x}
                y={labelY}
                textAnchor="middle"
                className="fill-steel"
                fontSize="6.5"
                fontWeight="600"
                style={{ fontFamily: "var(--font-heading)" }}
                letterSpacing="0.03em"
              >
                {pos.name}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}