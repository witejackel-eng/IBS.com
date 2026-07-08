"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { segments } from "@/lib/content";
import { segmentIllustrationMap } from "@/components/illustrations/segments";

const ITEMS = segments.map((s) => ({
  slug: s.slug,
  label: s.shortTitle ?? s.title,
  Illustration: segmentIllustrationMap[s.slug],
}));

export function IndustrySelector() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [isStuck, setIsStuck] = useState(false);

  /* Scroll spy: highlight based on which industry section is in view */
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setIsStuck(rect.top <= 80);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  return (
    <section className="bg-background pb-4 pt-4 lg:pb-6 lg:pt-6">
      <Container>
        <div
          ref={containerRef}
          className={`rounded-2xl border border-border bg-card/80 px-4 py-4 backdrop-blur-sm transition-shadow duration-300 ${
            isStuck ? "shadow-lg shadow-charcoal/[0.04]" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {ITEMS.map((item) => (
              <motion.button
                key={item.slug}
                onClick={() => setActive(active === item.slug ? null : item.slug)}
                onMouseEnter={() => setActive(item.slug)}
                onMouseLeave={() => setActive(null)}
                className={`group relative flex items-center gap-2.5 rounded-xl border px-3.5 py-3 sm:px-5 sm:py-3.5 text-sm font-medium transition-all duration-300 ${
                  active === item.slug
                    ? "border-deep-blue/40 bg-deep-blue/[0.06] text-charcoal shadow-sm"
                    : "border-border bg-background text-steel hover:border-deep-blue/20 hover:bg-muted/50 hover:text-charcoal"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Icon */}
                <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-card transition-colors duration-300 group-hover:border-deep-blue/30 group-hover:bg-deep-blue/[0.04]">
                  {item.Illustration && (
                    <item.Illustration className="h-5 w-5 text-steel transition-colors duration-300 group-hover:text-deep-blue" />
                  )}
                </span>
                {item.label}
                <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-60" />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}