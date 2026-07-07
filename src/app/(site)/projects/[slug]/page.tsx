import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { MaskReveal } from "@/components/motion/mask-reveal";
import { IllustrativeBadge } from "@/components/shared/illustrative-badge";
import { CapabilityCheckIcon } from "@/components/illustrations/icons";
import { serviceIllustrationMap } from "@/components/illustrations/services";
import { CtaSection } from "@/components/sections/cta-section";
import { blurMap } from "@/lib/image-blur-map";
import { cn } from "@/lib/utils";
import { projectScenarios, services, amcService } from "@/lib/content";

function findService(slug: string) {
  return [...services, amcService].find((s) => s.slug === slug);
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

  const relatedServices = project.relevantServiceSlugs.map(findService).filter((s) => !!s);
  const leadService = relatedServices[0];
  const LeadIllustration = leadService ? serviceIllustrationMap[leadService.slug] : undefined;

  return (
    <>
      <Section bg="ambient" className="bg-background pt-40 pb-0">
        <Container className="max-w-4xl">
          <Reveal direction="up">
            <IllustrativeBadge className="mb-6" />
          </Reveal>
          <span className="mb-4 block text-xs font-semibold tracking-[0.14em] text-deep-blue uppercase">
            {project.tagline}
          </span>
          <SplitText
            as="h1"
            text={project.role}
            className="max-w-3xl text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance"
          />
          <Reveal direction="up" delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-steel">{project.overview}</p>
          </Reveal>
          <Reveal direction="up" delay={0.25}>
            <div className="mt-6 flex items-center gap-2 text-sm text-steel">
              <MapPin className="h-4 w-4 text-deep-blue" />
              {project.location}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-16 pb-0">
        <Container className="max-w-5xl">
          <MaskReveal className="rounded-3xl">
            <div className="relative h-72 w-full overflow-hidden rounded-3xl sm:h-[26rem]">
              {leadService?.image ? (
                <Image
                  src={leadService.image}
                  alt={`Representative capability: ${leadService.title}`}
                  fill
                  sizes="(min-width: 1024px) 70vw, 100vw"
                  className="photo-grade object-cover"
                  placeholder={blurMap[leadService.image] ? "blur" : "empty"}
                  blurDataURL={blurMap[leadService.image]}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-deep-blue/15 via-deep-blue/5 to-background bg-engineering-grid">
                  {LeadIllustration && <LeadIllustration className="h-32 w-32" />}
                </div>
              )}
              {leadService?.image && <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />}
              {leadService && (
                <span className="absolute bottom-4 left-4 rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-charcoal backdrop-blur-sm">
                  Representative capability: {leadService.title}
                </span>
              )}
            </div>
          </MaskReveal>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <RevealGroup className="flex flex-col gap-12" stagger={0.1}>
            <RevealItem>
              <h2 className="text-xs font-semibold tracking-[0.14em] text-deep-blue uppercase">Challenge</h2>
              <p className="mt-3 text-xl font-semibold tracking-tight text-charcoal text-balance font-heading">
                {project.challenge}
              </p>
            </RevealItem>
            <RevealItem>
              <h2 className="text-xs font-semibold tracking-[0.14em] text-deep-blue uppercase">Solution</h2>
              <p className="mt-3 text-lg text-steel">{project.solution}</p>
            </RevealItem>
            <RevealItem>
              <h2 className="text-xs font-semibold tracking-[0.14em] text-deep-blue uppercase">Outcome</h2>
              <p className="mt-3 text-lg text-steel">{project.outcome}</p>
            </RevealItem>
          </RevealGroup>
        </Container>
      </Section>

      <Section bg="grid">
        <Container className="max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <Reveal direction="up">
                <h2 className="mb-6 text-sm font-semibold tracking-[0.1em] text-deep-blue uppercase">
                  Technical highlights
                </h2>
              </Reveal>
              <RevealGroup className="flex flex-col gap-3" stagger={0.06}>
                {project.technicalHighlights.map((item) => (
                  <RevealItem key={item}>
                    <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm text-charcoal">
                      <CapabilityCheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-deep-blue" />
                      <span>{item}</span>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            <div>
              <Reveal direction="up">
                <h2 className="mb-6 text-sm font-semibold tracking-[0.1em] text-deep-blue uppercase">
                  Capabilities involved
                </h2>
              </Reveal>
              <RevealGroup
                className={cn("grid gap-4", relatedServices.length === 1 ? "grid-cols-1" : "grid-cols-2")}
                stagger={0.06}
              >
                {relatedServices.map((s) => {
                  const Illustration = serviceIllustrationMap[s.slug];
                  return (
                    <RevealItem key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        data-cursor-hover
                        className={cn(
                          "group relative flex h-32 flex-col justify-end overflow-hidden rounded-2xl border border-border p-4 transition-colors hover:border-deep-blue/30",
                          !s.image && "bg-gradient-to-br from-deep-blue/15 via-deep-blue/5 to-background bg-engineering-grid"
                        )}
                      >
                        {s.image ? (
                          <>
                            <Image
                              src={s.image}
                              alt={`Representative capability: ${s.title}`}
                              fill
                              sizes="240px"
                              className="photo-grade object-cover transition-transform duration-700 group-hover:scale-105"
                              placeholder={blurMap[s.image] ? "blur" : "empty"}
                              blurDataURL={blurMap[s.image]}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                          </>
                        ) : (
                          Illustration && <Illustration className="absolute inset-0 m-auto h-12 w-12 opacity-90" />
                        )}
                        <span className={cn("relative text-sm font-medium", s.image ? "text-warm-white" : "text-charcoal")}>
                          {s.title}
                        </span>
                      </Link>
                    </RevealItem>
                  );
                })}
              </RevealGroup>
            </div>
          </div>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
