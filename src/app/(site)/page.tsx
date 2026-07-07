import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { HeroSection, defaultHeroContent, type HeroContent } from "@/components/sections/hero-section";
import { WhoWeAreSection } from "@/components/sections/who-we-are-section";
import { ServicesGridSection } from "@/components/sections/services-grid-section";
import { getContentOverride } from "@/lib/content-overrides";

const SegmentsTeaserSection = dynamic(
  () => import("@/components/sections/segments-teaser-section").then((m) => ({ default: m.SegmentsTeaserSection }))
);
const EngineeringProcessSection = dynamic(
  () => import("@/components/sections/engineering-process-section").then((m) => ({ default: m.EngineeringProcessSection }))
);
const PartnerMarqueeSection = dynamic(
  () => import("@/components/sections/partner-marquee-section").then((m) => ({ default: m.PartnerMarqueeSection }))
);
const WhyIbsSection = dynamic(
  () => import("@/components/sections/why-ibs-section").then((m) => ({ default: m.WhyIbsSection }))
);
const CtaSection = dynamic(
  () => import("@/components/sections/cta-section").then((m) => ({ default: m.CtaSection }))
);

export const metadata: Metadata = {
  title: "Network & Security Integration",
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default async function Home() {
  const hero = await getContentOverride<HeroContent>("home.hero", defaultHeroContent);

  return (
    <>
      <HeroSection headline={hero.headline} subcopy={hero.subcopy} />
      <WhoWeAreSection />
      <ServicesGridSection />
      <SegmentsTeaserSection />
      <EngineeringProcessSection />
      <PartnerMarqueeSection />
      <WhyIbsSection />
      <CtaSection />
    </>
  );
}