"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  { label: "Assessment", desc: "Evaluate existing systems against BIS/STQC norms" },
  { label: "Documentation", desc: "Complete audit trail and compliance records" },
  { label: "Audit", desc: "Third-party verification and testing" },
  { label: "Health Report", desc: "System-wide health summaries and findings" },
  { label: "Compliance", desc: "Regulatory standards met and maintained" },
];

export function ComplianceFlow() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div>
        <h3 className="text-display-3 font-semibold tracking-tight text-charcoal text-balance">
          Built around BIS and STQC standards.
        </h3>
        <p className="mt-6 text-steel leading-relaxed">
          Fire alarm systems in Delhi NCR need to meet BIS norms. Surveillance and access
          control setups that touch employee data fall under STQC-aligned practices where
          applicable. We align the maintenance schedule with those requirements so compliance
          is built into every service visit — not bolted on as a separate exercise.
        </p>
        <p className="mt-4 text-steel leading-relaxed">
          Because we install the systems in the first place, the AMC is not a third-party
          vendor guessing at someone else&apos;s wiring. It is the same engineering team, with
          the original as-built documentation, maintaining compliance from day one.
        </p>
      </div>

      {/* Animated compliance flow */}
      <div className="relative">
        <svg viewBox="0 0 400 360" className="w-full" fill="none">
          {/* Connecting path */}
          <motion.path
            d="M80 60 L200 60 L200 120 L320 120 L320 180 L200 180 L200 240 L80 240 L80 300"
            className="stroke-deep-blue"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 2, ease: "easeInOut" }}
          />

          {/* Step nodes */}
          {steps.map((step, i) => {
            const positions = [
              { x: 80, y: 60 },
              { x: 200, y: 120 },
              { x: 320, y: 180 },
              { x: 200, y: 240 },
              { x: 80, y: 300 },
            ];
            const pos = positions[i];
            const isLast = i === steps.length - 1;
            return (
              <motion.g
                key={step.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  delay: prefersReducedMotion ? 0 : 0.3 + i * 0.15,
                }}
              >
                <rect
                  x={pos.x - 40} y={pos.y - 20}
                  width="80" height="40"
                  rx="10"
                  className={isLast ? "fill-card stroke-deep-blue" : "fill-card stroke-border"}
                  strokeWidth={isLast ? "1.5" : "1"}
                />
                {isLast && (
                  <rect
                    x={pos.x - 40} y={pos.y - 20}
                    width="80" height="40"
                    rx="10"
                    className="fill-deep-blue"
                    fillOpacity="0.08"
                  />
                )}
                <text
                  x={pos.x} y={pos.y + 1}
                  textAnchor="middle"
                  fontSize="8"
                  fontWeight="600"
                  className={isLast ? "fill-deep-blue" : "fill-charcoal"}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.label}
                </text>
                {/* Checkmark on last step */}
                {isLast && (
                  <g>
                    <circle cx={pos.x + 28} cy={pos.y - 10} r="6" className="fill-deep-blue" />
                    <path d={`M${pos.x + 24} ${pos.y - 10} L${pos.x + 27} ${pos.y - 7} L${pos.x + 32} ${pos.y - 13}`} stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                )}
              </motion.g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}