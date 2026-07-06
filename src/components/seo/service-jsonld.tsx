import type { Service } from "@/lib/content";
import { company, services } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsinfra.com";

/**
 * ServiceJsonLd outputs schema.org/Service structured data.
 *
 * - With a `service` prop: emits a single Service entity for that service.
 * - Without any prop: emits an Organization with a `hasOfferCatalog`
 *   containing all services listed on the site.
 */
export function ServiceJsonLd({ service }: { service?: Service }) {
  const areaServed = company.serviceAreas.map((area) => ({
    "@type": "City",
    name: area,
  }));

  const provider = {
    "@type": "Organization",
    name: company.legalName,
    url: siteUrl,
    telephone: company.contact.phones[0],
    email: company.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Plot No. 94, 3rd Floor, Block - B, Pocket - 10, Sector - 13, Dwarka",
      addressLocality: "New Delhi",
      postalCode: "110075",
      addressCountry: "IN",
    },
  };

  // ── Per-service mode ─────────────────────────────────────────────────
  if (service) {
    const data = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.summary,
      url: `${siteUrl}/services/${service.slug}`,
      provider,
      areaServed,
      serviceType: service.tagline,
      ...(service.image && {
        image: `${siteUrl}${service.image}`,
      }),
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data).replace(/</g, "\\u003c"),
        }}
      />
    );
  }

  // ── Catalog mode (no prop) ───────────────────────────────────────────
  const catalogItems = services.map((s, index) => ({
    "@type": "Service",
    position: index + 1,
    name: s.title,
    description: s.summary,
    url: `${siteUrl}/services/${s.slug}`,
    serviceType: s.tagline,
    provider,
    areaServed,
  }));

  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    url: siteUrl,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Infrastructure & Communication Services",
      description: company.summary,
      itemListElement: catalogItems,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}