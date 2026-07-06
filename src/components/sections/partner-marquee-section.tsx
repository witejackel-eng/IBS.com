import { Marquee } from "@/components/shared/marquee";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { partners } from "@/lib/content";

export function PartnerMarqueeSection() {
  return (
    <section className="relative border-y border-border bg-secondary/40 bg-engineering-grid py-14">
      <Container>
        <Reveal direction="up" amount={0.6}>
          <p className="mb-8 text-center text-xs font-semibold tracking-[0.18em] text-graphite uppercase">
            Genuine products from {partners.length}+ OEM brands we work with directly
          </p>
        </Reveal>
      </Container>
      <Marquee>
        {partners.map((p, i) => (
          <span
            key={`${p.slug}-${i}`}
            className="shrink-0 cursor-pointer text-base font-semibold tracking-wide whitespace-nowrap text-tangerine-500 transition-[color,transform,filter,opacity] duration-300 hover:-translate-y-0.5 hover:text-tangerine-600 hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.25)] sm:text-xl lg:text-2xl font-heading"
          >
            {p.name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
