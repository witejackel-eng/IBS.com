import { company } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsinfra.com";

export function ServiceJsonLd({
  name,
  summary,
  slug,
}: {
  name: string;
  summary: string;
  slug: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description: summary,
    url: `${siteUrl}/services/${slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: company.legalName,
      url: siteUrl,
      telephone: company.contact.phones[0],
    },
    areaServed: company.serviceAreas,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
