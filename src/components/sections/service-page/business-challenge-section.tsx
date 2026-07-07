"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";
import type { ServicePageData } from "@/lib/content/service-page-data";

interface BusinessChallengeSectionProps {
  data: ServicePageData;
}

export function BusinessChallengeSection({ data }: BusinessChallengeSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-muted/20 py-24 lg:py-32" aria-labelledby="challenge-heading">
      <Container className="max-w-4xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.14em] text-deep-blue uppercase">
            The Problem
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            id="challenge-heading"
            className="text-display-3 font-heading font-semibold tracking-tight text-charcoal text-balance mt-4 mb-12"
          >
            {data.challengeTitle}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left column — paragraphs (wider, 7/12) */}
          <div className="lg:col-span-7 space-y-8">
            {data.challengeParagraphs.map((paragraph, i) => (
              <Reveal key={i} delay={0.2 + i * 0.12}>
                <p className="text-lg leading-relaxed text-steel">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Right column — decorative vertical accent bar (5/12) */}
          <div className="hidden lg:flex lg:col-span-5 justify-end items-stretch pl-8">
            <div className="relative w-px self-stretch">
              {/* Static track line */}
              <div className="absolute inset-0 bg-border" />

              {/* Animated drawing line */}
              {!prefersReducedMotion && (
                <motion.div
                  className="absolute top-0 left-0 w-full bg-signal-orange origin-top"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: DURATION.mask,
                    ease: EASE_OUT_EXPO,
                    delay: 0.35,
                  }}
                />
              )}
              {prefersReducedMotion && (
                <div className="absolute inset-0 bg-signal-orange" />
              )}

              {/* Small accent diamond at the top */}
              <motion.div
                className="absolute -top-1.5 -left-[5px] w-2.5 h-2.5 rotate-45 bg-signal-orange"
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReducedMotion ? 0 : DURATION.base,
                  ease: EASE_OUT_EXPO,
                  delay: prefersReducedMotion ? 0 : 0.3,
                }}
              />

              {/* Small accent dot at the bottom */}
              <motion.div
                className="absolute -bottom-1.5 -left-[4px] w-2 h-2 rounded-full bg-deep-blue"
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReducedMotion ? 0 : DURATION.base,
                  ease: EASE_OUT_EXPO,
                  delay: prefersReducedMotion ? 0 : 0.9,
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}