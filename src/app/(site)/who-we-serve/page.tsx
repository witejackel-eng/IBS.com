import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import { CapabilityCheckIcon } from "@/components/illustrations/icons";
import { segmentIllustrationMap } from "@/components/illustrations/segments";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { CollectionPageJsonLd } from "@/components/seo/collection-page-jsonld";
import { blurMap } from "@/lib/image-blur-map";
import { segments, services, amcService } from "@/lib/content";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Enterprises, hotels, residential spaces, and small offices -- IBS delivers technology solutions sized to fit each segment.",
  alternates: { canonical: "/who-we-serve" },
};

function serviceLabel(slug: string) {
  return [...services, amcService].find((s) => s.slug === slug)?.navLabel ?? slug;
}

export default function WhoWeServePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Who We Serve", path: "/who-we-serve" }]} />
      <CollectionPageJsonLd
        name="Who We Serve"
        path="/who-we-serve"
        description="Enterprises, hotels, residential spaces, and small offices -- IBS delivers technology solutions sized to fit each segment."
      />
      <Section bg="ambient" className="bg-background pt-40 pb-20">
        <Container>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
            Who We Serve
          </span>
          <SplitText
            as="h1"
            text="Sized to fit every space we work in."
            className="max-w-3xl text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance"
          />
          <Reveal direction="up" delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-steel">{"Comprehensive solutions under one roof for a diverse clientele."}</p>
          </Reveal>
        </Container>
      </Section>

      <Section bg="grid">
        <Container>
          <h2 className="sr-only">Segments we serve</h2>
          <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-2" stagger={0.08}>
            {segments.map((segment) => {
              const Illustration = segmentIllustrationMap[segment.slug];
              return (
              <RevealItem key={segment.slug}>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
                  <div className="relative h-40 w-full overflow-hidden bg-muted">
                    <Image
                      src={`/images/segments/${segment.slug}.jpg`}
                      alt={segment.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="photo-grade object-cover"
                      placeholder="blur"
                      blurDataURL={blurMap[`/images/segments/${segment.slug}.jpg`]}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                    {Illustration && (
                      <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-lg bg-card/90 backdrop-blur-sm">
                        <Illustration className="h-7 w-7" />
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-6 p-8">
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal font-heading">{segment.title}</h3>
                    <p className="mt-3 text-sm text-steel">{segment.summary}</p>
                  </div>

                  <div>
                  <h4 className="mb-2.5 text-xs font-semibold tracking-[0.1em] text-steel uppercase">Example applications</h4>
                  <ul className="flex flex-col gap-2.5">
                    {segment.needs.map((need) => (
                      <li key={need} className="flex items-start gap-2.5 text-sm text-steel">
                        <CapabilityCheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-deep-blue" />
                        <span>{need}</span>
                      </li>
                    ))}
                  </ul>
                  </div>

                  <div
                    role="group"
                    aria-label={`Related services for ${segment.title}`}
                    className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5"
                  >
                    {segment.relevantServiceSlugs.map((slug) => (
                      <Link
                        key={slug}
                        href={`/services/${slug}`}
                        className="rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-steel transition-colors hover:border-deep-blue/30 hover:text-charcoal"
                      >
                        {serviceLabel(slug)}
                      </Link>
                    ))}
                  </div>
                  </div>
                </article>
              </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
