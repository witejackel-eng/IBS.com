import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealItem, RevealGroup } from "@/components/motion/reveal";
import { segments } from "@/lib/content";

export function SegmentsTeaserSection() {
  return (
    <Section className="bg-secondary/30">
      <Container>
        <SectionHeading
          eyebrow="Who we serve"
          title="Built for how each space actually operates"
          description="From enterprise offices to hotel banquets to a spare bedroom office — the same disciplined delivery, sized to fit."
          className="mb-16"
        />

        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {segments.map((segment) => (
            <RevealItem key={segment.slug}>
              <Link
                href="/who-we-serve"
                data-cursor-hover
                className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-deep-blue/30"
              >
                <h3 className="text-lg font-semibold text-charcoal font-heading">{segment.title}</h3>
                <p className="flex-1 text-sm text-steel">{segment.summary}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-deep-blue">
                  Details
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
