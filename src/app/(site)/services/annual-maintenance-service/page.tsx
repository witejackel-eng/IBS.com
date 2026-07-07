import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { ServiceJsonLd } from "@/components/seo/service-jsonld";
import { FaqJsonLd } from "@/components/seo/faq-jsonld";
import { amcService } from "@/lib/content";
import { servicePageDataMap } from "@/lib/content/service-page-data";
import {
  HeroSection,
  TrustMetricsSection,
  BusinessChallengeSection,
  EngineeringApproachSection,
  TechnologyEcosystemSection,
  SolutionsSection,
  FeaturedDeploymentSection,
  IndustriesSection,
  EngineeringProcessSection,
  OemPartnersSection,
  WhyChooseIbsSection,
  FaqSection,
  RelatedServicesSection,
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

      {/* 2. Trust Metrics */}
      <TrustMetricsSection />

      {/* 3. Business Challenge */}
      <BusinessChallengeSection data={data} />

      {/* 4. IBS Engineering Approach */}
      <EngineeringApproachSection data={data} />

      {/* 5. Technology Ecosystem */}
      <TechnologyEcosystemSection data={data} serviceSlug={amcService.slug} />

      {/* 6. Solutions We Deliver */}
      <SolutionsSection data={data} serviceImage={amcService.image} />

      {/* 7. Featured Deployment */}
      <FeaturedDeploymentSection data={data} serviceImage={amcService.image} />

      {/* 8. Industries Served */}
      <IndustriesSection data={data} />

      {/* 9. Engineering Process */}
      <EngineeringProcessSection />

      {/* 10. OEM Partners */}
      <OemPartnersSection data={data} />

      {/* 11. Why Choose IBS */}
      <WhyChooseIbsSection data={data} />

      {/* 12. FAQ */}
      <FaqSection data={data} />
      <FaqJsonLd
        faqs={data.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      {/* 13. Related Services Ecosystem */}
      <RelatedServicesSection currentSlug={amcService.slug} />

      {/* 14. Premium CTA */}
      <PremiumCtaSection data={data} />
    </>
  );
}