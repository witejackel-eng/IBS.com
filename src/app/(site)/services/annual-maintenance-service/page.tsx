import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { ServiceJsonLd } from "@/components/seo/service-jsonld";
import { FaqJsonLd } from "@/components/seo/faq-jsonld";
import { amcService } from "@/lib/content";
import { servicePageDataMap } from "@/lib/content/service-page-data";
import {
  HeroSection,
  SolutionsSection,
  IndustriesSection,
  FaqSection,
  PremiumCtaSection,
  RelatedServicesSection,
} from "@/components/sections/service-page";
import { TypicalProjectsSection } from "@/components/sections/typical-projects-section";

export const metadata: Metadata = {
  title: amcService.title,
  description: amcService.summary,
  keywords: [
    "annual maintenance contract",
    "AMC services",
    "preventive maintenance",
    "SLA support",
    "enterprise AMC",
    "IT maintenance",
    "security system maintenance",
    "BIS compliance",
    "system health check",
    "India",
  ],
  alternates: { canonical: `/services/${amcService.slug}` },
  openGraph: {
    url: `/services/${amcService.slug}`,
    title: amcService.title,
    description: amcService.summary,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: amcService.title,
    description: amcService.summary,
  },
};

export default function AmcPage() {
  const data = servicePageDataMap[amcService.slug];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: amcService.title, path: `/services/${amcService.slug}` },
        ]}
      />
      <ServiceJsonLd service={amcService} />

      {/* 1. Hero */}
      <HeroSection service={amcService} data={data} />

      {/* 2. Solutions We Deliver */}
      <SolutionsSection data={data} serviceImage={amcService.image} />

      {/* 3. Industries Served */}
      <IndustriesSection data={data} />

      {/* 4. Typical Installations */}
      <TypicalProjectsSection />

      {/* 5. FAQ */}
      {data.faqs.length > 0 && (
        <>
          <FaqSection data={data} />
          <FaqJsonLd
            faqs={data.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
          />
        </>
      )}

      {/* 6. Related Services & Internal Links */}
      <RelatedServicesSection currentSlug={amcService.slug} />

      {/* 7. CTA */}
      <PremiumCtaSection data={data} />
    </>
  );
}