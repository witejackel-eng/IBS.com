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
  EngineeringProcessSection,
  FaqSection,
  PremiumCtaSection,
} from "@/components/sections/service-page";

export const metadata: Metadata = {
  title: amcService.title,
  description: amcService.summary,
  alternates: { canonical: `/services/${amcService.slug}` },
  openGraph: { url: `/services/${amcService.slug}` },
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

      {/* 4. Engineering Process */}
      <EngineeringProcessSection />

      {/* 5. FAQ */}
      {data.faqs.length > 0 && (
        <>
          <FaqSection data={data} />
          <FaqJsonLd
            faqs={data.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
          />
        </>
      )}

      {/* 6. CTA */}
      <PremiumCtaSection data={data} />
    </>
  );
}