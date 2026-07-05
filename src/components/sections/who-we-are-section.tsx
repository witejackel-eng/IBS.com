import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { MaskReveal } from "@/components/motion/mask-reveal";
import { Reveal } from "@/components/motion/reveal";
import { NetworkNodeIcon } from "@/components/illustrations/icons";
import { blurMap } from "@/lib/image-blur-map";
import { company } from "@/lib/content";

export function WhoWeAreSection() {
  return (
    <Section className="bg-background">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <MaskReveal className="order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl lg:aspect-[3/4]">
            <Image
              src="/images/about/who-we-are.jpg"
              alt="An IBS engineer monitoring infrastructure in a data center"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL={blurMap["/images/about/who-we-are.jpg"]}
            />
          </div>
        </MaskReveal>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <Reveal direction="up" amount={0.6}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
              <NetworkNodeIcon className="h-3.5 w-3.5 text-deep-blue" />
              Who We Are
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-display-3 font-semibold tracking-tight text-charcoal text-balance">
              {company.positioning}
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="max-w-lg text-lg text-steel">{company.about.intro}</p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p className="max-w-lg text-steel">{company.about.partnershipsNote}</p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
