import type { Metadata } from "next";

import { HeroSection } from "@/components/sections/who-we-serve/hero-section";
import { IndustrySelector } from "@/components/sections/who-we-serve/industry-selector";
import { TrustBarSection } from "@/components/sections/who-we-serve/trust-bar-section";
import { IntroSection } from "@/components/sections/who-we-serve/intro-section";
import { IndustryShowcase } from "@/components/sections/who-we-serve/industry-showcase";
import { FeaturedProject } from "@/components/sections/who-we-serve/featured-project";
import { ProcessSection } from "@/components/sections/who-we-serve/process-section";
import { WhyIbsSection } from "@/components/sections/who-we-serve/why-ibs-section";
import { PageCtaSection } from "@/components/sections/who-we-serve/page-cta-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { CollectionPageJsonLd } from "@/components/seo/collection-page-jsonld";
import { segments, projectScenarios } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries & Spaces We Serve",
  description:
    "Enterprises, hotels, hospitals, government facilities, and residential spaces — IBS delivers technology solutions sized to fit each segment.",
  alternates: { canonical: "/who-we-serve" },
};

/**
 * Layout rhythm:
 *  Hero
 *  Industry Selector
 *  Trust Statistics
 *  Introduction
 *  Enterprise Showcase  ← index 0
 *  Hotels Showcase      ← index 1
 *  Featured Project 1   (after 2 industries)
 *  Government Showcase  ← index 2
 *  Residential Showcase ← index 3
 *  Featured Project 2   (after 2 industries)
 *  SOHO Showcase        ← index 4
 *  Deployment Process
 *  Why IBS
 *  CTA
 *  (Footer — handled by layout)
 */

export default function WhoWeServePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Serve", path: "/who-we-serve" },
        ]}
      />
      <CollectionPageJsonLd
        name="Who We Serve"
        path="/who-we-serve"
        description="Enterprises, hotels, hospitals, government facilities, and residential spaces — IBS delivers technology solutions sized to fit each segment."
      />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Industry Selector */}
      <IndustrySelector />

      {/* 3. Trust Statistics */}
      <TrustBarSection />

      {/* 4. Introduction */}
      <IntroSection />

      {/* 5. Enterprise Showcase */}
      <IndustryShowcase segment={segments[0]} reversed={false} index={0} />

      {/* 6. Hotels Showcase */}
      <IndustryShowcase segment={segments[1]} reversed={true} index={1} />

      {/* 7. Featured Project 1 — Enterprise HQ */}
      <FeaturedProject
        project={projectScenarios[0]}
        image="/images/segments/enterprises.jpg"
        index={0}
      />

      {/* 8. Government Showcase */}
      <IndustryShowcase segment={segments[2]} reversed={false} index={2} />

      {/* 9. Residential Showcase */}
      <IndustryShowcase segment={segments[3]} reversed={true} index={3} />

      {/* 10. Featured Project 2 — Hospitality */}
      <FeaturedProject
        project={projectScenarios[1]}
        image="/images/segments/hotels.jpg"
        reversed
        index={1}
      />

      {/* 11. SOHO Showcase */}
      <IndustryShowcase segment={segments[4]} reversed={false} index={4} />

      {/* 12. Deployment Process */}
      <ProcessSection />

      {/* 13. Why IBS */}
      <WhyIbsSection />

      {/* 14. CTA */}
      <PageCtaSection />
    </>
  );
}