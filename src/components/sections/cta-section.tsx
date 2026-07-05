import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/shared/magnetic";
import { ButtonLink } from "@/components/shared/button-link";
import { company } from "@/lib/content";

export function CtaSection() {
  return (
    <Section bg="blueprint" className="bg-background">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <SplitText
            as="h2"
            text="Let's talk about what your space needs."
            className="max-w-3xl text-display-2 font-semibold tracking-tight text-charcoal text-balance"
          />
          <Reveal direction="up" delay={0.15}>
            <p className="max-w-xl text-lg text-steel">
              Tell us what you&apos;re trying to solve — voice, AV, network, security, or all of it — and we&apos;ll get back to you with a plan.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.25}>
            <Magnetic>
              <ButtonLink
                href="/contact"
                size="lg"
                className="h-12 rounded-full bg-deep-blue px-8 text-base text-warm-white hover:bg-deep-blue-light"
                data-cursor-hover
              >
                Talk to us <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </Magnetic>
          </Reveal>

          <Reveal direction="up" delay={0.35}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-steel">
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> {company.contact.phones.join(" / ")}
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> {company.contact.email}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Dwarka, New Delhi
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
