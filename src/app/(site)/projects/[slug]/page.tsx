import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { IllustrativeBadge } from "@/components/shared/illustrative-badge";
import { CtaSection } from "@/components/sections/cta-section";
import { projectScenarios, services, amcService } from "@/lib/content";

function serviceLabel(slug: string) {
  return [...services, amcService].find((s) => s.slug === slug)?.navLabel ?? slug;
}

export function generateStaticParams() {
  return projectScenarios.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectScenarios.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.role} (Illustrative Scenario)`,
    description: project.overview,
    robots: { index: false, follow: true },
  };
}

export default async function ProjectScenarioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectScenarios.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Section className="pt-40 pb-0">
        <Container className="max-w-3xl">
          <Reveal direction="up">
            <IllustrativeBadge className="mb-6" />
          </Reveal>
          <span className="mb-4 block text-xs font-semibold tracking-[0.14em] text-deep-blue uppercase">
            {project.tagline}
          </span>
          <SplitText
            as="h1"
            text={project.role}
            className="text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance"
          />
          <Reveal direction="up" delay={0.2}>
            <p className="mt-8 text-lg text-steel">{project.overview}</p>
          </Reveal>
          <Reveal direction="up" delay={0.25}>
            <div className="mt-6 flex items-center gap-2 text-sm text-steel">
              <MapPin className="h-4 w-4 text-deep-blue" />
              {project.location}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <RevealGroup className="grid grid-cols-1 gap-8 sm:grid-cols-3" stagger={0.08}>
            <RevealItem>
              <h2 className="text-sm font-semibold tracking-[0.1em] text-deep-blue uppercase">Challenge</h2>
              <p className="mt-3 text-sm text-steel">{project.challenge}</p>
            </RevealItem>
            <RevealItem>
              <h2 className="text-sm font-semibold tracking-[0.1em] text-deep-blue uppercase">Solution</h2>
              <p className="mt-3 text-sm text-steel">{project.solution}</p>
            </RevealItem>
            <RevealItem>
              <h2 className="text-sm font-semibold tracking-[0.1em] text-deep-blue uppercase">Outcome</h2>
              <p className="mt-3 text-sm text-steel">{project.outcome}</p>
            </RevealItem>
          </RevealGroup>
        </Container>
      </Section>

      <Section bg="grid">
        <Container className="max-w-3xl">
          <Reveal direction="up">
            <h2 className="mb-6 text-sm font-semibold tracking-[0.1em] text-deep-blue uppercase">
              Technical highlights
            </h2>
          </Reveal>
          <RevealGroup className="flex flex-col gap-3" stagger={0.06}>
            {project.technicalHighlights.map((item) => (
              <RevealItem key={item}>
                <div className="rounded-2xl border border-border bg-card p-4 text-sm text-charcoal">{item}</div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal direction="up" delay={0.2} className="mt-10 flex flex-wrap items-center gap-3">
            <span className="text-sm text-steel">Relevant services:</span>
            {project.relevantServiceSlugs.map((s) => (
              <ButtonLink
                key={s}
                href={`/services/${s}`}
                variant="outline"
                className="gap-2 rounded-full border-border"
                data-cursor-hover
              >
                {serviceLabel(s)} <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            ))}
          </Reveal>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
