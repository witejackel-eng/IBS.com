"use client";

import { motion, useReducedMotion } from "framer-motion";

export function QualityHeroIllustration() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full aspect-square max-w-md">
      <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
        {/* Background grid dots */}
        {Array.from({ length: 64 }).map((_, i) => {
          const x = 25 + (i % 8) * 50;
          const y = 25 + Math.floor(i / 8) * 50;
          return <circle key={i} cx={x} cy={y} r="1" className="fill-border" />;
        })}

        {/* Central monitoring dashboard */}
        <rect x="130" y="130" width="140" height="100" rx="12" className="fill-card stroke-border" strokeWidth="1.5" />
        <rect x="145" y="145" width="50" height="8" rx="2" className="fill-deep-blue" opacity="0.8" />
        <rect x="205" y="145" width="50" height="8" rx="2" className="fill-border" />
        <rect x="145" y="162" width="30" height="8" rx="2" className="fill-deep-blue" opacity="0.5" />
        <rect x="185" y="162" width="70" height="8" rx="2" className="fill-border" />
        <rect x="145" y="179" width="60" height="8" rx="2" className="fill-deep-blue" opacity="0.3" />
        <rect x="215" y="179" width="40" height="8" rx="2" className="fill-border" />
        <rect x="145" y="200" width="110" height="16" rx="4" className="fill-secondary" />

        {/* Status indicators - pulse animation */}
        <motion.circle
          cx="155" cy="208"
          r="3" className="fill-deep-blue"
          animate={!prefersReducedMotion ? { opacity: [0.4, 1, 0.4] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="175" cy="208"
          r="3" className="fill-deep-blue"
          animate={!prefersReducedMotion ? { opacity: [0.4, 1, 0.4] } : {}}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.circle
          cx="195" cy="208"
          r="3" className="fill-deep-blue"
          animate={!prefersReducedMotion ? { opacity: [0.4, 1, 0.4] } : {}}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        />
        <motion.circle
          cx="215" cy="208"
          r="3" className="fill-deep-blue"
          animate={!prefersReducedMotion ? { opacity: [0.4, 1, 0.4] } : {}}
          transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
        />

        {/* Connected systems around dashboard */}
        {/* Voice - top left */}
        <line x1="155" y1="130" x2="80" y2="70" className="stroke-border" strokeWidth="1" strokeDasharray="4 4" />
        <rect x="48" y="48" width="64" height="44" rx="10" className="fill-card stroke-border" strokeWidth="1" />
        <text x="80" y="66" textAnchor="middle" fontSize="7" fontWeight="600" className="fill-charcoal" style={{ fontFamily: "var(--font-heading)" }}>Voice</text>
        <text x="80" y="80" textAnchor="middle" fontSize="6" className="fill-deep-blue">Active</text>
        <motion.circle cx="100" cy="58" r="3" className="fill-deep-blue"
          animate={!prefersReducedMotion ? { opacity: [0.3, 1, 0.3] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* AV - top right */}
        <line x1="245" y1="130" x2="320" y2="70" className="stroke-border" strokeWidth="1" strokeDasharray="4 4" />
        <rect x="288" y="48" width="64" height="44" rx="10" className="fill-card stroke-border" strokeWidth="1" />
        <text x="320" y="66" textAnchor="middle" fontSize="7" fontWeight="600" className="fill-charcoal" style={{ fontFamily: "var(--font-heading)" }}>AV</text>
        <text x="320" y="80" textAnchor="middle" fontSize="6" className="fill-deep-blue">Active</text>
        <motion.circle cx="340" cy="58" r="3" className="fill-deep-blue"
          animate={!prefersReducedMotion ? { opacity: [0.3, 1, 0.3] } : {}}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
        />

        {/* Security - bottom left */}
        <line x1="155" y1="230" x2="80" y2="300" className="stroke-border" strokeWidth="1" strokeDasharray="4 4" />
        <rect x="48" y="280" width="64" height="44" rx="10" className="fill-card stroke-border" strokeWidth="1" />
        <text x="80" y="298" textAnchor="middle" fontSize="7" fontWeight="600" className="fill-charcoal" style={{ fontFamily: "var(--font-heading)" }}>Security</text>
        <text x="80" y="312" textAnchor="middle" fontSize="6" className="fill-deep-blue">Active</text>
        <motion.circle cx="100" cy="290" r="3" className="fill-deep-blue"
          animate={!prefersReducedMotion ? { opacity: [0.3, 1, 0.3] } : {}}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
        />

        {/* Fire Alarm - bottom right */}
        <line x1="245" y1="230" x2="320" y2="300" className="stroke-border" strokeWidth="1" strokeDasharray="4 4" />
        <rect x="288" y="280" width="64" height="44" rx="10" className="fill-card stroke-border" strokeWidth="1" />
        <text x="320" y="298" textAnchor="middle" fontSize="7" fontWeight="600" className="fill-charcoal" style={{ fontFamily: "var(--font-heading)" }}>Fire Alarm</text>
        <text x="320" y="312" textAnchor="middle" fontSize="6" className="fill-deep-blue">Active</text>
        <motion.circle cx="340" cy="290" r="3" className="fill-deep-blue"
          animate={!prefersReducedMotion ? { opacity: [0.3, 1, 0.3] } : {}}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1.2 }}
        />

        {/* Network - bottom center */}
        <line x1="200" y1="230" x2="200" y2="340" className="stroke-border" strokeWidth="1" strokeDasharray="4 4" />
        <rect x="168" y="340" width="64" height="44" rx="10" className="fill-card stroke-border" strokeWidth="1" />
        <text x="200" y="358" textAnchor="middle" fontSize="7" fontWeight="600" className="fill-charcoal" style={{ fontFamily: "var(--font-heading)" }}>Network</text>
        <text x="200" y="372" textAnchor="middle" fontSize="6" className="fill-deep-blue">Active</text>

        {/* Title on dashboard */}
        <text x="200" y="135" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-charcoal" style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.08em" }}>SYSTEM STATUS</text>
      </svg>
    </div>
  );
}