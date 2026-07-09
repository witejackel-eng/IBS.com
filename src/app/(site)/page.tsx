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
  title: "Communication, AV, Network Infrastructure, Security & IT Solutions",
  description:
    "Insight Business Solutions designs, installs, and supports voice communication, AV boardroom integration, IT network infrastructure, security and surveillance, call center, and software licensing systems across India.",
  keywords: [
    "systems integration",
    "IT infrastructure",
    "voice communication",
    "AV solutions",
    "network security",
    "CCTV",
    "call center",
    "software licensing",
    "boardroom AV",
    "IP-PBX",
    "fire safety",
    "India",
    "PAN India",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Communication, AV, Network Infrastructure, Security & IT Solutions — Insight Business Solutions",
    description:
      "Voice, AV, IT networking, security, call center, and software licensing — designed, installed, and supported by certified engineers across India.",
  },
  twitter: {
    title: "Communication, AV, Network & Security Systems — IBS",
    description:
      "Voice, AV, IT networking, security, call center, and software licensing — designed, installed, and supported by certified engineers across India.",
  },
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