"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import type { Service } from "@/lib/content";
import { blurMap } from "@/lib/image-blur-map";

interface ServiceShowcaseProps {
  service: Service;
  index: number;
}

export function ServiceShowcase({ service, index }: ServiceShowcaseProps) {
  const isReversed = index % 2 === 1;
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`grid grid-cols-1 gap-8 md:gap-12 items-center md:grid-cols-2 lg:gap-20 ${isReversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
      {/* Image */}
      <motion.div
        className="relative overflow-hidden rounded-3xl aspect-[4/3] bg-muted"
        initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: EASE_OUT_EXPO as [number, number, number, number] }}
      >
        {service.image && (
          <Image
            src={service.image}
            alt={`${service.title}: ${service.summary.split(".")[0]}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
            placeholder={blurMap[service.image] ? "blur" : "empty"}
            blurDataURL={blurMap[service.image]}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <span className="inline-block rounded-full bg-card/90 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-deep-blue uppercase">
            {service.tagline}
          </span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: 0.1, ease: EASE_OUT_EXPO as [number, number, number, number] }}
      >
        <span className="text-[10px] font-semibold tracking-[0.14em] text-deep-blue uppercase">
          {service.tagline}
        </span>
        <h3 className="mt-3 text-display-3 font-semibold tracking-tight text-charcoal font-heading text-balance">
          {service.title}
        </h3>
        <p className="mt-5 text-steel leading-relaxed">
          {service.summary}
        </p>

        {/* Capability pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {service.capabilities.slice(0, 3).map((cap) => (
            <span
              key={cap.title}
              className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-steel"
            >
              {cap.title}
            </span>
          ))}
        </div>

        <motion.a
          href={`/services/${service.slug}`}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-charcoal group"
          whileHover={!prefersReducedMotion ? { x: 4 } : {}}
          transition={{ duration: 0.2 }}
        >
          Explore service
          <svg width="16" height="16" viewBox="0 0 16 16" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
}