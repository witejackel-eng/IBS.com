"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Flame,
  Headset,
  Network,
  PhoneCall,
  Video,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";
import { EASE_OUT_EXPO, DURATION } from "@/lib/motion";
import { company, services, partners, segments } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Five Disciplines section for the About page.
 *
 * Bento-style asymmetric grid (7/5, 5/7, 12 on lg) replacing the previous
 * 6-up box grid. Each card maps to a real service route so the card is a
 * genuine link (keyboard-focusable), not a decorative div. Hover state
 * lifts the card, scales the icon, slides the arrow, and grows the orange
 * accent line — the Linear/Vercel/Stripe card pattern.
 */

interface Discipline {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  /** Bento col span on lg (out of 12). */
  lgSpan: 7 | 5 | 12;
  /** Bento col span on md (out of 2). */
  mdSpan: 1 | 2;
}

// Maps each About-page discipline to its corresponding service route so the
// card is a real link, not a decorative box. The descriptions are preserved
// verbatim from company.about.categories (sourced from ibsinfra.com).
const disciplines: Discipline[] = [
  {
    number: "01",
    title: company.about.categories[0].title,
    description: company.about.categories[0].description,
    icon: PhoneCall,
    href: "/services/voice-communication",
    lgSpan: 7,
    mdSpan: 1,
  },
  {
    number: "02",
    title: company.about.categories[1].title,
    description: company.about.categories[1].description,
    icon: Video,
    href: "/services/audio-video-boardroom-solutions",
    lgSpan: 5,
    mdSpan: 1,
  },
  {
    number: "03",
    title: company.about.categories[2].title,
    description: company.about.categories[2].description,
    icon: Network,
    href: "/services/it-infrastructure",
    lgSpan: 5,
    mdSpan: 1,
  },
  {
    number: "04",
    title: company.about.categories[3].title,
    description: company.about.categories[3].description,
    icon: Flame,
    href: "/services/security-solutions",
    lgSpan: 7,
    mdSpan: 1,
  },
  {
    number: "05",
    title: company.about.categories[4].title,
    description: company.about.categories[4].description,
    icon: Headset,
    href: "/services/call-center-solutions",
    lgSpan: 12,
    mdSpan: 2,
  },
];

// Metrics row — all figures are real and validated (same source as the hero
// stats). "5" is the discipline count shown on this very section; the rest
// reinforce trust signals already established on the page.
const metrics: { value: string; label: string }[] = [
  { value: "5", label: "Integrated disciplines" },
  { value: `${services.length}`, label: "Solution areas" },
  { value: `${partners.length}+`, label: "OEM partners" },
  { value: `${segments.length}`, label: "Industries served" },
];

// Entrance variants — cards fade up with a stagger. Reduced-motion users
// get an instant, no-offset reveal.
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.reveal, ease: EASE_OUT_EXPO },
  },
};

const reducedCardVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

const metricVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
};

export function DisciplinesSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Layered background: very light grid + radial glow + orange accent.
          None of these layers compete with the content — they're all
          subtle enough to read as texture, not pattern. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, color-mix(in oklch, var(--charcoal) 3%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in oklch, var(--charcoal) 3%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(50% 50% at 10% 0%, color-mix(in oklch, var(--deep-blue) 8%, transparent) 0%, transparent 70%),
            radial-gradient(40% 40% at 95% 100%, color-mix(in oklch, var(--signal-orange) 6%, transparent) 0%, transparent 65%)
          `,
        }}
        aria-hidden
      />

      <Container className="relative z-10">
        {/* Heading + description */}
        <div className="mb-16 max-w-3xl">
          <Reveal direction="up" amount={0.6}>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-deep-blue" />
              What we do
            </span>
          </Reveal>
          <SplitText
            as="h2"
            text="Five disciplines, one integrated delivery team"
            className="text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance"
          />
          <Reveal direction="up" delay={0.15} amount={0.6}>
            <p className="mt-6 max-w-2xl text-lg text-steel">
              From the first site visit to years of ongoing maintenance, our engineers cover the
              full technology stack — communication, AV, networking, safety, and contact center —
              under one roof.
            </p>
          </Reveal>
        </div>

        {/* Metrics row */}
        <motion.div
          className="mb-14 grid grid-cols-2 gap-6 border-y border-border py-8 sm:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={prefersReducedMotion ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : metricVariants}
              className="flex flex-col"
            >
              <span className="text-3xl font-semibold tracking-tight text-charcoal font-heading sm:text-4xl">
                {m.value}
              </span>
              <span className="mt-1 text-sm text-steel">{m.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bento grid — asymmetric 12-col on lg, 2-col on md, 1-col on mobile */}
        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {disciplines.map((d) => (
            <DisciplineCard
              key={d.number}
              discipline={d}
              reduced={prefersReducedMotion}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function DisciplineCard({
  discipline,
  reduced,
}: {
  discipline: Discipline;
  reduced: boolean | null;
}) {
  const { number, title, description, icon: Icon, href, lgSpan, mdSpan } = discipline;

  // The full-width card (Call Center) uses a horizontal layout so it doesn't
  // read as an empty void on desktop.
  const isWide = lgSpan === 12;

  return (
    <motion.article
      variants={reduced ? reducedCardVariants : cardVariants}
      className={cn(
        "group relative overflow-hidden rounded-[24px] border border-border bg-card",
        // Very light shadow — just enough to lift the card off the background.
        "shadow-[0_1px_3px_rgba(15,23,42,0.04)]",
        // Bento spans
        mdSpan === 2 && "md:col-span-2",
        lgSpan === 7 && "lg:col-span-7",
        lgSpan === 5 && "lg:col-span-5",
        lgSpan === 12 && "lg:col-span-12"
      )}
      whileHover={reduced ? undefined : { y: -10 }}
      transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
    >
      {/* Top accent line — thin orange bar that grows from 40% to 100% width
          on hover. Always visible (even at rest) so every card reads as
          "discipline" at a glance. */}
      <span
        className="absolute top-0 left-0 z-20 h-[2px] rounded-full bg-gradient-to-r from-deep-blue via-signal-orange to-deep-blue opacity-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full group-hover:opacity-100"
        style={{ width: "40%" }}
        aria-hidden
      />

      {/* Background number — huge, very low opacity. Editorial detail that
          gives each card a sense of place in the sequence. */}
      <span
        className="pointer-events-none absolute -top-4 right-4 select-none font-heading text-[7rem] leading-none font-bold text-charcoal opacity-[0.04] sm:text-[8rem]"
        aria-hidden
      >
        {number}
      </span>

      {/* Soft radial accent that appears on hover — adds warmth without
          competing with the content. */}
      <span
        className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--signal-orange) 12%, transparent) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div
        className={cn(
          "relative z-10 flex h-full flex-col gap-4 p-7 sm:p-8 lg:p-9",
          isWide && "lg:flex-row lg:items-center lg:gap-8 lg:p-10"
        )}
      >
        {/* Icon — scales and rotates slightly on hover */}
        <div className="flex shrink-0 items-start">
          <motion.span
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background text-deep-blue transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-deep-blue/30 group-hover:bg-deep-blue/8 group-hover:text-deep-blue sm:h-14 sm:w-14"
            whileHover={reduced ? undefined : { scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
          </motion.span>
        </div>

        <div className={cn("flex flex-1 flex-col", isWide && "lg:max-w-2xl")}>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold tracking-[0.16em] text-deep-blue/70 uppercase">
              Discipline {number}
            </span>
            <span className="h-px flex-1 bg-border" aria-hidden />
          </div>

          <h3 className="mt-3 text-xl font-semibold tracking-tight text-charcoal font-heading sm:text-2xl">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-steel sm:text-base">
            {description}
          </p>

          {/* Arrow link — the card's single interactive element. The
              `after:absolute after:inset-0` makes the whole card clickable,
              and the focus ring lands on the card edge. */}
          <Link
            href={href}
            className="group/link mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-deep-blue transition-colors hover:text-deep-blue/80 after:absolute after:inset-0 after:rounded-[24px] after:content-[''] focus-visible:after:ring-2 focus-visible:after:ring-deep-blue focus-visible:after:ring-offset-2"
          >
            <span>Explore {title.split(" ")[0].toLowerCase()}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-1.5" />
          </Link>
        </div>
      </div>

      {/* Hover border glow — a subtle orange ring that appears on hover via
          box-shadow. Replaces the need for a gradient border. */}
      <span
        className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
        style={{
          boxShadow:
            "0 0 0 1px color-mix(in oklch, var(--deep-blue) 35%, transparent), 0 20px 44px -16px color-mix(in oklch, var(--deep-blue) 22%, transparent)",
        }}
        aria-hidden
      />
    </motion.article>
  );
}
