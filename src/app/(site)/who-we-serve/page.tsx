import type { Metadata } from "next";

import { HeroSection } from "@/components/sections/who-we-serve/hero-section";
import { IndustrySelector } from "@/components/sections/who-we-serve/industry-selector";
import { IndustryShowcase } from "@/components/sections/who-we-serve/industry-showcase";
import { PageCtaSection } from "@/components/sections/who-we-serve/page-cta-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { CollectionPageJsonLd } from "@/components/seo/collection-page-jsonld";
import { segments } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries & Spaces We Serve",
  description:
    "Enterprises, hotels, hospitals, government facilities, and residential spaces — IBS delivers technology solutions sized to fit each segment.",
  alternates: { canonical: "/who-we-serve" },
};

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

      {/* 2. Industry Cards */}
      <IndustrySelector />

      {/* 3. All five industry showcases */}
      {segments.map((segment, i) => (
        <IndustryShowcase
          key={segment.slug}
          segment={segment}
          reversed={i % 2 === 1}
          index={i}
        />
      ))}

      {/* 4. CTA */}
      <PageCtaSection />
    </>
  );
}