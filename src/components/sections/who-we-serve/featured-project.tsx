"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { serviceLabel } from "./industry-showcase";
import { blurMap } from "@/lib/image-blur-map";

interface FeaturedProjectProps {
  project: {
    role: string;
    tagline: string;
    overview: string;
    technicalHighlights: string[];
    relevantServiceSlugs: string[];
  };
  image?: string;
  reversed?: boolean;
  index: number;
}

export function FeaturedProject({ project, image, reversed, index }: FeaturedProjectProps) {
  return (
    <section className={`bg-muted/30 py-24 lg:py-32 ${index % 2 === 1 ? "bg-background" : ""}`}>
      <Container>
        <div className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 ${reversed ? "lg:[direction:rtl]" : ""}`}>
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:[direction:ltr]"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card">
              <Image
                src={image ?? "/images/segments/enterprises.jpg"}
                alt={project.role}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="photo-grade object-cover"
                placeholder="blur"
                blurDataURL={blurMap[image ?? "/images/segments/enterprises.jpg"]}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
              {/* Badge */}
              <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-charcoal/60 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-warm-white/90 backdrop-blur-sm">
                Illustrative Scenario
              </span>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:[direction:ltr]"
          >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-deep-blue">
              Featured Deployment
            </span>
            <h3 className="text-2xl font-heading font-semibold tracking-tight text-charcoal lg:text-3xl">
              {project.role}
            </h3>
            <p className="mt-2 text-base font-medium text-steel/70">{project.tagline}</p>
            <p className="mt-6 text-base leading-relaxed text-steel">{project.overview}</p>

            {/* Tech highlights */}
            <ul className="mt-6 space-y-2.5">
              {project.technicalHighlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-steel">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-deep-blue" />
                  {h}
                </li>
              ))}
            </ul>

            {/* Service tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {project.relevantServiceSlugs.map((slug) => (
                <span
                  key={slug}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-steel transition-colors hover:border-deep-blue/30 hover:text-charcoal"
                >
                  {serviceLabel(slug)}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}