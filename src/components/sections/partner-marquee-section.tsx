import { Marquee } from "@/components/shared/marquee";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { partners } from "@/lib/content";

export function PartnerMarqueeSection() {
  return (
    <section className="relative border-y border-border bg-secondary/40 py-14">
      <Container>
        <Reveal direction="up" amount={0.6}>
          <p className="mb-8 text-center text-xs font-semibold tracking-[0.14em] text-steel uppercase">
            Genuine products from {partners.length}+ trusted global OEM brands
          </p>
        </Reveal>
      </Container>
      <Marquee>
        {partners.map((p, i) => (
          <span
            key={`${p.slug}-${i}`}
            className="shrink-0 whitespace-nowrap text-lg font-semibold tracking-tight text-steel/50 transition-colors duration-300 hover:text-charcoal font-heading"
          >
            {p.name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
