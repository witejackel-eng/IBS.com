"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

const partnerNames = ["Cisco", "Poly", "Axis", "Honeywell", "eSSL", "Logitech", "Crestron"];

export function PartnerEcosystemHero() {
  const prefersReducedMotion = useReducedMotion();

  // Positions around a center point in a 400x400 viewBox
  const radius = 150;
  const cx = 200;
  const cy = 200;
  const positions = partnerNames.map((name, i) => {
    const angle = (i / partnerNames.length) * Math.PI * 2 - Math.PI / 2;
    return {
      name,
      x: cx + Math.cos(angle) * radius,
      y: cy + Math.sin(angle) * radius,
    };
  });

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
        {/* Orbit ring */}
        <circle cx={cx} cy={cy} r={radius} stroke="var(--border)" strokeWidth="1" strokeDasharray="4 6" />

        {/* Connection lines to center */}
        {positions.map((pos, i) => (
          <motion.line
            key={pos.name}
            x1={cx} y1={cy} x2={pos.x} y2={pos.y}
            stroke="var(--border)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              delay: prefersReducedMotion ? 0 : i * 0.08,
            }}
          />
        ))}

        {/* Center IBS node */}
        <motion.g
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: EASE_OUT_EXPO as [number, number, number, number] }}
        >
          <rect x={cx - 30} y={cy - 20} width="60" height="40" rx="12" fill="var(--deep-blue)" />
          <text x={cx} y={cy + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="white" fontFamily="var(--font-heading)">IBS</text>
        </motion.g>

        {/* Partner nodes */}
        {positions.map((pos, i) => (
          <motion.g
            key={pos.name}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : 0.4 + i * 0.1,
            }}
          >
            <rect
              x={pos.x - 36} y={pos.y - 14}
              width="72" height="28"
              rx="8"
              fill="var(--card)"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x={pos.x} y={pos.y + 3}
              textAnchor="middle"
              fontSize="8"
              fontWeight="600"
              fill="var(--charcoal)"
              fontFamily="var(--font-heading)"
            >
              {pos.name}
            </text>
          </motion.g>
        ))}

        {/* Animated pulse on center */}
        <motion.circle
          cx={cx} cy={cy}
          r="8"
          fill="var(--deep-blue)"
          opacity="0.15"
          animate={!prefersReducedMotion ? { r: [8, 20, 8], opacity: [0.15, 0, 0.15] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}