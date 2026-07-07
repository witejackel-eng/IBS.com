"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { EASE_OUT_EXPO, DURATION } from "@/lib/motion";
import { amcService } from "@/lib/content";

const categoryIcons: Record<string, React.ReactNode> = {
  "Communication Technologies": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M5 13.5v-2a7 7 0 0 1 14 0v2" />
      <rect x="3.5" y="13.5" width="3.5" height="5" rx="1" />
      <rect x="17" y="13.5" width="3.5" height="5" rx="1" />
      <path d="M19 18.5v.5a3 3 0 0 1-3 3h-2" />
    </svg>
  ),
  "Audio/Video Solutions": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8m-4-4v4" />
    </svg>
  ),
  "Fire Alarm Systems": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 2c-1.5 4-4 6-4 10a4 4 0 0 0 8 0c0-4-2.5-6-4-10z" />
      <path d="M12 18v4" />
    </svg>
  ),
  "CCTV Surveillance Systems": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7z" />
      <circle cx="12" cy="10" r="3" />
      <path d="M12 17v5" />
    </svg>
  ),
  "Access Control Systems": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="5.5" y="11" width="13" height="9.5" rx="1.5" />
      <path d="M8.5 11V8a3.5 3.5 0 0 1 7 0v3" />
      <circle cx="12" cy="15.5" r="1.3" />
    </svg>
  ),
};

export function AmcCoverageSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = amcService.categories;
  const active = categories[activeIndex];
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section bg="grid">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left — Explanation */}
        <Reveal direction="left">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
            AMC Coverage
          </span>
          <h2 className="mt-4 text-display-3 font-semibold tracking-tight text-charcoal text-balance">
            Five categories of infrastructure, one service team
          </h2>
          <p className="mt-6 text-steel leading-relaxed">
            Every AMC engagement covers the full spectrum of systems we install — from voice platforms
            and boardroom AV to fire alarm panels and access controllers. The same engineering team
            that built the system maintains it, so nothing gets lost in a vendor handoff.
          </p>
          <p className="mt-4 text-steel leading-relaxed">
            Each category has its own maintenance cadence: quarterly for communication and AV,
            half-yearly for fire alarm panels, annual for UPS battery load tests. The schedule is
            built around OEM recommendations and your site&apos;s own risk profile.
          </p>
        </Reveal>

        {/* Right — Interactive list */}
        <Reveal direction="right" delay={0.15}>
          <div className="space-y-3">
            {categories.map((cat, i) => (
              <motion.button
                key={cat.title}
                className={`group relative flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                  activeIndex === i
                    ? "border-deep-blue/40 bg-card shadow-[0_12px_32px_-12px_rgba(234,88,12,0.2)]"
                    : "border-border bg-card/50 hover:border-deep-blue/20"
                }`}
                onClick={() => setActiveIndex(i)}
                onMouseEnter={() => setActiveIndex(i)}
                whileTap={prefersReducedMotion ? {} : { scale: 0.985 }}
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                    activeIndex === i
                      ? "bg-deep-blue/10 text-deep-blue"
                      : "bg-muted text-steel group-hover:text-charcoal"
                  }`}
                >
                  {categoryIcons[cat.title] || (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <circle cx="12" cy="12" r="8.5" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold transition-colors duration-300 ${activeIndex === i ? "text-charcoal" : "text-charcoal"}`}>
                    {cat.title}
                  </p>
                </div>
                <motion.svg
                  animate={{ rotate: activeIndex === i ? 90 : 0 }}
                  transition={{ duration: DURATION.base }}
                  className="h-4 w-4 shrink-0 text-steel"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </motion.svg>
              </motion.button>
            ))}
          </div>

          {/* Active category details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: DURATION.base, ease: EASE_OUT_EXPO }}
              className="mt-6 rounded-2xl border border-border bg-card p-6"
            >
              <ul className="space-y-3">
                {active.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-steel">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-deep-blue/10 text-deep-blue">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </Container>
    </Section>
  );
}