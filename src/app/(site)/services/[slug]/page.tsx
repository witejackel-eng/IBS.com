import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { ServiceJsonLd } from "@/components/seo/service-jsonld";
import { FaqJsonLd } from "@/components/seo/faq-jsonld";
import { services } from "@/lib/content";
import { servicePageDataMap } from "@/lib/content/service-page-data";
import {
  HeroSection,
  SolutionsSection,
  IndustriesSection,
  EngineeringProcessSection,
  FaqSection,
  PremiumCtaSection,
} from "@/components/sections/service-page";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

const serviceMetaTitles: Record<string, string> = {
  "voice-communication": "Unified Voice Communication",
  "audio-video-boardroom-solutions": "AV & Boardroom Integration",
  "it-infrastructure": "IT Network & Infrastructure",
  "security-solutions": "Security & Surveillance Systems",
  "call-center-solutions": "Call Center Solutions",
  "software-licenses": "Software Licensing & Compliance",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: serviceMetaTitles[service.slug] ?? service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { url: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const data = servicePageDataMap[service.slug];
  if (!data) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />
      <ServiceJsonLd service={service} />

      {/* 1. Hero */}
      <HeroSection service={service} data={data} />

      {/* 2. Solutions We Deliver */}
      <SolutionsSection data={data} serviceImage={service.image} />

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