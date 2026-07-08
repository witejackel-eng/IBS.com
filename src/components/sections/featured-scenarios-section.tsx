import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealItem, RevealGroup } from "@/components/motion/reveal";
import { IllustrativeBadge } from "@/components/shared/illustrative-badge";
import { projectScenarios, services, amcService } from "@/lib/content";

function serviceLabel(slug: string) {
  return [...services, amcService].find((s) => s.slug === slug)?.navLabel ?? slug;
}

export function FeaturedScenariosSection() {
  return (
    <Section bg="grid" className="bg-background">
      <Container>
        <SectionHeading
          eyebrow="How engagements come together"
          title="What an integrated deployment looks like"
          description="ibsinfra.com doesn't publish case studies yet, so these are illustrative delivery scenarios built from our real service capabilities — not completed client projects."
          className="mb-16"
        />

        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {projectScenarios.map((project) => (
            <RevealItem key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                data-cursor-hover
                className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-deep-blue/30"
              >
                <IllustrativeBadge />
                <div>
                  <span className="text-xs font-semibold tracking-[0.1em] text-deep-blue uppercase">{project.tagline}</span>
                  <h3 className="mt-2 text-lg font-semibold text-charcoal font-heading">{project.role}</h3>
                </div>
                <p className="flex-1 text-sm text-steel">{project.overview}</p>
                <div className="flex flex-wrap gap-2 border-t border-border pt-4">
                  {project.relevantServiceSlugs.map((slug) => (
                    <span key={slug} className="rounded-full border border-border px-3 py-1 text-xs text-steel">
                      {serviceLabel(slug)}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-charcoal">
                  View scenario
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
