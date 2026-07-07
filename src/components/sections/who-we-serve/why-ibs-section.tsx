"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Layers,
  Users,
  ShieldCheck,
  Award,
  Wrench,
  Clock,
} from "lucide-react";

import { Container } from "@/components/layout/container";

const DIFFERENTIATORS = [
  { icon: Layers, title: "One partner, five disciplines", description: "Voice, AV, networking, security, and software \u2014 managed under a single contract instead of separate vendors." },
  { icon: Users, title: "Single project team", description: "The engineers who design your system are the same ones who install and maintain it." },
  { icon: Award, title: "Certified engineers", description: "Every technician is trained and certified on the platforms they deploy." },
  { icon: ShieldCheck, title: "Enterprise deployment standards", description: "Documentation, labeling, and testing protocols that scale from a SOHO to a 200-person office." },
  { icon: Wrench, title: "Long-term support", description: "AMC contracts with scheduled visits, firmware updates, and defined SLAs." },
  { icon: Clock, title: "Delhi NCR focus", description: "Fifteen years of project history across Delhi, Noida, Gurgaon, Faridabad, and Dwarka." },
];

export function WhyIbsSection() {
  const ref = useRef<HTMLElement>(null);
  useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="bg-muted/20 py-24 lg:py-32">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-deep-blue" />
            Why IBS
          </span>
          <h2 className="text-2xl font-heading font-semibold tracking-tight text-charcoal lg:text-3xl">
            Engineering-first. Not marketing-first.
          </h2>
          <p className="mt-4 text-base text-steel">
            The reasons clients stay with IBS are operational, not promotional.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIATORS.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-deep-blue/20 hover:shadow-lg hover:shadow-charcoal/[0.04]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background transition-colors duration-300 group-hover:border-deep-blue/30 group-hover:bg-deep-blue/[0.04]">
                <d.icon className="h-5 w-5 text-deep-blue" />
              </span>
              <h3 className="mt-5 text-base font-heading font-semibold text-charcoal">
                {d.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{d.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}