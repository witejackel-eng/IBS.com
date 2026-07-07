"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Calendar, Handshake, Headset } from "lucide-react";

import { Container } from "@/components/layout/container";
import { useCountUp } from "./use-count-up";

const STATS = [
  { icon: Building2, value: 500, suffix: "+", label: "Projects Delivered" },
  { icon: Calendar, value: 15, suffix: "+", label: "Years Experience" },
  { icon: Handshake, value: 40, suffix: "+", label: "Technology Partners" },
  { icon: Headset, value: 24, suffix: "/7", label: "Support" },
] as const;

function StatCard({ stat, index }: { stat: (typeof STATS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const display = useCountUp(stat.value, inView, { suffix: stat.suffix, duration: 2000 + index * 200 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-3 text-center"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card">
        <stat.icon className="h-5 w-5 text-deep-blue" />
      </span>
      <span className="text-3xl font-heading font-semibold tracking-tight text-charcoal lg:text-4xl">
        {display}
      </span>
      <span className="text-sm tracking-wide text-steel">{stat.label}</span>
    </motion.div>
  );
}

export function TrustBarSection() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <Container>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-12 lg:grid-cols-4 lg:gap-8">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}