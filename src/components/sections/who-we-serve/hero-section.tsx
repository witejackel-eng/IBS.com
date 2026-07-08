"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import { Container } from "@/components/layout/container";
import { BuildingIllustration, type SegmentSlug } from "./building-illustration";
import { segments } from "@/lib/content";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [hoveredBuilding, setHoveredBuilding] = useState<SegmentSlug | null>(null);

  const hoveredSegment = segments.find((s) => s.slug === hoveredBuilding);

  return (
    <section
      ref={ref}
      className="relative bg-background pt-20 pb-12 sm:pt-24 md:pt-28 md:pb-16 lg:pt-40 lg:pb-28"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-ambient-glow" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Left: headline + copy — 2 cols on lg */}
          <div className="lg:col-span-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-deep-blue" />
              Who We Serve
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md text-[clamp(1.75rem,4vw,3.25rem)] font-heading font-semibold leading-[1.1] tracking-tight text-charcoal"
            >
              Sized to fit
              <br />
              <span className="text-deep-blue">every space</span> we
              <br />
              work in.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-sm text-base leading-relaxed text-steel"
            >
              Every environment has different communication, networking, AV and
              security requirements. We design systems around how people
              actually work.
            </motion.p>

            {/* Hovered building info — appears below copy */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={hoveredSegment ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-steel/80">
                {hoveredSegment?.summary}
              </p>
            </motion.div>
          </div>

          {/* Right: illustration — 3 cols on lg, occupying most of the right half */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <BuildingIllustration onHover={setHoveredBuilding} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}