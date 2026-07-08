"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { FaqItem } from "@/components/shared/faq-item";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";
import type { ServicePageData } from "@/lib/content/service-page-data";

interface FaqSectionProps {
  data: ServicePageData;
}

export function FaqSection({ data }: FaqSectionProps) {
  const [query, setQuery] = useState("");
  const prefersReducedMotion = useReducedMotion();

  const filteredFaqs = useMemo(() => {
    if (!query.trim()) return data.faqs;
    const lower = query.toLowerCase();
    return data.faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(lower) ||
        faq.answer.toLowerCase().includes(lower),
    );
  }, [query, data.faqs]);

  return (
    <section className="bg-background py-14 sm:py-20 md:py-24 lg:py-32">
      <Container className="max-w-3xl">
        <Reveal direction="up" delay={0.05}>
          <span className="text-xs font-semibold tracking-[0.1em] text-deep-blue uppercase">
            FAQ
          </span>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <h2 className="mt-3 text-display-3 font-heading font-semibold tracking-tight text-charcoal text-balance">
            Common questions about this service
          </h2>
        </Reveal>

        {/* Search / filter input */}
        <Reveal direction="up" delay={0.15}>
          <div className="relative mt-8">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-steel" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions…"
              aria-label="Filter frequently asked questions"
              className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 text-sm text-charcoal placeholder:text-steel focus:outline-none focus:ring-2 focus:ring-deep-blue/30 focus:border-deep-blue transition-colors"
            />
          </div>
        </Reveal>

        {/* FAQ items with AnimatePresence */}
        <div className="mt-8 flex flex-col gap-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredFaqs.map((faq) => (
              <motion.div
                key={faq.question}
                layout={prefersReducedMotion ? false : true}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : DURATION.base,
                  ease: EASE_OUT_EXPO,
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                }}
              >
                <FaqItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredFaqs.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-8 text-center text-sm text-steel"
            >
              No questions match &ldquo;{query}&rdquo;
            </motion.p>
          )}
        </div>
      </Container>
    </section>
  );
}