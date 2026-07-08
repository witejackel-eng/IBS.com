"use client";

import type { LucideIcon } from "lucide-react";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  BedDouble,
  Factory,
  Landmark,
  Home,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  RevealGroup,
  RevealItem,
} from "@/components/motion/reveal";
import { installationTypes } from "@/lib/content/installation-types";

/* ---------------------------------------------------------------------------
 * Icon map — bridges the string name in the data file to a real component.
 * --------------------------------------------------------------------------- */
const iconMap: Record<string, LucideIcon> = {
  Building2,
  GraduationCap,
  HeartPulse,
  BedDouble,
  Factory,
  Landmark,
  Home,
};

/* ---------------------------------------------------------------------------
 * Section
 * --------------------------------------------------------------------------- */

export function InstallationTypesSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Typical Projects"
          title="Installed across every environment"
          description="The systems we deploy share a common engineering discipline, but each environment brings its own constraints and priorities."
          align="center"
        />

        <RevealGroup
          className="mt-10 sm:mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          stagger={0.07}
        >
          {installationTypes.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <RevealItem key={item.environment}>
                <article className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-deep-blue/25">
                  {/* Icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-deep-blue/8 text-deep-blue">
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>

                  {/* Environment name */}
                  <h3 className="text-base font-semibold leading-snug text-charcoal">
                    {item.environment}
                  </h3>

                  {/* Systems as pill badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.systems.map((sys) => (
                      <span
                        key={sys}
                        className="inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-steel"
                      >
                        {sys}
                      </span>
                    ))}
                  </div>

                  {/* Considerations */}
                  <ul className="mt-auto flex flex-col gap-1.5 pt-2">
                    {item.considerations.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2 text-xs leading-relaxed text-steel"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-deep-blue/40" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}