import type { Metadata } from "next";

import { HeroSection, defaultHeroContent, type HeroContent } from "@/components/sections/hero-section";
import { WhoWeAreSection } from "@/components/sections/who-we-are-section";
import { PartnerMarqueeSection } from "@/components/sections/partner-marquee-section";
import { ServicesGridSection } from "@/components/sections/services-grid-section";
import { SegmentsTeaserSection } from "@/components/sections/segments-teaser-section";
import { FeaturedScenariosSection } from "@/components/sections/featured-scenarios-section";
import { EngineeringProcessSection } from "@/components/sections/engineering-process-section";
import { WhyIbsSection } from "@/components/sections/why-ibs-section";
import { CtaSection } from "@/components/sections/cta-section";
import { getContentOverride } from "@/lib/content-overrides";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default async function Home() {
  const hero = await getContentOverride<HeroContent>("home.hero", defaultHeroContent);

  return (
    <>
      <HeroSection headline={hero.headline} subcopy={hero.subcopy} />
      <WhoWeAreSection />
      <WhyIbsSection />
      <ServicesGridSection />
      <SegmentsTeaserSection />
      <FeaturedScenariosSection />
      <EngineeringProcessSection />
      <PartnerMarqueeSection />
      <CtaSection />
    </>
  );
}
