"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import { Container } from "@/components/layout/container";
import { BuildingIllustration, type SegmentSlug } from "./building-illustration";
import { segments } from "@/lib/content";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredBuilding, setHoveredBuilding] = useState<SegmentSlug | null>(null);

  const hoveredSegment = segments.find((s) => s.slug === hoveredBuilding);

  return (
    <section
      ref={ref}
      className="relative bg-background pt-36 pb-24 lg:pt-44 lg:pb-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-ambient-glow" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: headline + copy */}
          <div>
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
              className="max-w-xl text-[clamp(2.25rem,5vw,4rem)] font-heading font-semibold leading-[1.08] tracking-tight text-charcoal"
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
              className="mt-8 max-w-md text-lg leading-relaxed text-steel"
            >
              Every environment has different communication, networking, AV and
              security requirements. We design systems around how people
              actually work.
            </motion.p>

            {/* Hovered building info */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={hoveredSegment ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-steel/80">
                {hoveredSegment?.summary}
              </p>
            </motion.div>
          </div>

          {/* Right: building illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
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