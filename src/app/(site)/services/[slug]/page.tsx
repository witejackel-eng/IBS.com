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
  FaqSection,
  PremiumCtaSection,
  RelatedServicesSection,
} from "@/components/sections/service-page";
import { TypicalProjectsSection } from "@/components/sections/typical-projects-section";

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

const serviceMetaKeywords: Record<string, string[]> = {
  "voice-communication": [
    "IP-PBX",
    "SIP trunk",
    "unified communications",
    "VoIP",
    "IP telephony",
    "voice integration",
    "Alcatel-Lucent",
    "NEC",
    "Cisco",
    "business phone system",
    "enterprise communication",
    "SIP phones",
  ],
  "audio-video-boardroom-solutions": [
    "AV integration",
    "video conferencing",
    "audio conferencing",
    "boardroom AV",
    "video wall",
    "public address system",
    "room booking",
    "classroom technology",
    "Kramer",
    "Crestron",
    "Extron",
  ],
  "it-infrastructure": [
    "data center",
    "firewall",
    "network rack",
    "structured cabling",
    "Wi-Fi",
    "online UPS",
    "IT networking",
    "server room",
    "Fortinet",
    "Cisco",
    "D-Link",
    "HP Aruba",
  ],
  "security-solutions": [
    "CCTV",
    "access control",
    "biometric",
    "fire alarm",
    "home automation",
    "surveillance",
    "Hikvision",
    "Dahua",
    "Axis",
    "security integration",
    "intrusion detection",
  ],
  "call-center-solutions": [
    "call center",
    "contact center",
    "CRM dialer",
    "voice logger",
    "GSM gateway",
    "PRI gateway",
    "predictive dialer",
    "headset",
    "call recording",
    "customer engagement",
  ],
  "software-licenses": [
    "software licensing",
    "Microsoft 365",
    "Zoom",
    "Webex",
    "Adobe",
    "ERP licenses",
    "genuine software",
    "license compliance",
    "antivirus",
    "endpoint protection",
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  const title = serviceMetaTitles[service.slug] ?? service.title;
  const description = service.summary;
  const keywords = serviceMetaKeywords[service.slug];
  return {
    title,
    description,
    keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      url: `/services/${service.slug}`,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
    },
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
      <RelatedServicesSection currentSlug={service.slug} />

      {/* 7. CTA */}
      <PremiumCtaSection data={data} />
    </>
  );
}