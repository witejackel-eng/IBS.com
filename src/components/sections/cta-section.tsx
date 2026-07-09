import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/shared/magnetic";
import { ButtonLink } from "@/components/shared/button-link";
import { company } from "@/lib/content";

export function CtaSection() {
  return (
    <Section bg="blueprint" className="bg-background pt-20 pb-24 lg:pt-24 lg:pb-32">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <Reveal direction="up" delay={0.05}>
            <h2 className="max-w-3xl text-display-2 font-heading font-semibold tracking-tight leading-[1.1] text-charcoal text-balance">
              Let&apos;s talk about what your space needs.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p className="max-w-xl text-lg text-steel">
              Tell us what you&apos;re trying to solve — Voice, AV, Network, Security, or all of it — and we&apos;ll get back to you with a plan.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.25}>
            <Magnetic>
              <ButtonLink
                href="/contact"
                variant="cta"
                size="xl"
                data-cursor-hover
              >
                Talk to us <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </Magnetic>
          </Reveal>

          <Reveal direction="up" delay={0.35}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-xl border border-border bg-card/80 px-6 py-4 text-sm text-steel">
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> {company.contact.phones.join(" / ")}
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> {company.contact.email}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> PAN India
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}