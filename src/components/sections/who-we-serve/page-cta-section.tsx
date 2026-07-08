"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/shared/button-link";
import { company } from "@/lib/content";

export function PageCtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-charcoal py-14 sm:py-20 md:py-24 lg:py-32"
    >
      {/* Subtle pattern */}
      <div className="pointer-events-none absolute inset-0 bg-engineering-grid-dark opacity-[0.06]" />
      {/* Orange glow */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-deep-blue/10 blur-[120px]"
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl font-heading font-semibold leading-snug tracking-tight text-warm-white lg:text-4xl"
          >
            Planning a new office?
            <br />
            Building a hotel?
            <br />
            <span className="text-deep-blue-light">Upgrading security?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-warm-white/60"
          >
            Let&apos;s design the right infrastructure for your environment.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <ButtonLink
              href="/contact"
              variant="cta"
              size="xl"
              data-cursor-hover
            >
              Talk to an Engineer <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              href="/contact"
              variant="outline"
              size="xl"
              className="border-warm-white/15 bg-transparent text-warm-white hover:border-warm-white/30 hover:bg-warm-white/5 hover:text-warm-white"
              data-cursor-hover
            >
              Book a Consultation
            </ButtonLink>
          </motion.div>

          {/* Contact info in card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-16 flex max-w-md flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-xl border border-warm-white/10 bg-warm-white/[0.04] px-6 py-4 text-sm text-warm-white/60"
          >
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> {company.contact.phones.join(" / ")}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> {company.contact.email}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Dwarka, New Delhi
            </span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}