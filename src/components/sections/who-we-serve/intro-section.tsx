"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Container } from "@/components/layout/container";

const BLOCKS = [
  {
    text: "We don\u2019t sell products.",
    size: "lg" as const,
  },
  {
    text: "We design technology around how people work.",
    size: "lg" as const,
  },
  {
    text: "Every environment is different. An office requires something completely different from a hospital.",
    size: "md" as const,
  },
  {
    text: "That\u2019s why every deployment begins with understanding the space.",
    size: "md" as const,
  },
];

export function IntroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-background py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl space-y-10">
          {BLOCKS.map((block, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`font-heading leading-snug tracking-tight text-charcoal ${
                block.size === "lg"
                  ? "text-2xl font-semibold lg:text-3xl"
                  : "text-lg text-steel"
              }`}
            >
              {block.text}
            </motion.p>
          ))}
        </div>
      </Container>
    </section>
  );
}