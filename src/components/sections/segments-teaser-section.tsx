import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealItem, RevealGroup } from "@/components/motion/reveal";
import { segmentIllustrationMap } from "@/components/illustrations/segments";
import { blurMap } from "@/lib/image-blur-map";
import { segments } from "@/lib/content";

export function SegmentsTeaserSection() {
  return (
    <Section className="bg-secondary/30">
      <Container>
        <SectionHeading
          eyebrow="Industries we serve"
          title="Built for how each space actually operates"
          description="From enterprise offices to hotel banquets to a spare bedroom office — the same disciplined delivery, sized to fit."
          className="mb-16"
        />

        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {segments.map((segment) => {
            const Illustration = segmentIllustrationMap[segment.slug];
            return (
              <RevealItem key={segment.slug}>
                <Link
                  href="/who-we-serve"
                  data-cursor-hover
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-deep-blue/30"
                >
                  <div className="relative h-32 w-full overflow-hidden bg-muted">
                    <Image
                      src={`/images/segments/${segment.slug}.jpg`}
                      alt={segment.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      placeholder="blur"
                      blurDataURL={blurMap[`/images/segments/${segment.slug}.jpg`]}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                    {Illustration && (
                      <span className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-lg bg-card/90 backdrop-blur-sm">
                        <Illustration className="h-6 w-6" />
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-lg font-semibold text-charcoal font-heading">{segment.title}</h3>
                    <p className="flex-1 text-sm text-steel">{segment.summary}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-deep-blue">
                      Details
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}
