import type { Service } from "@/lib/content";
import { company, services } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsinfra.com";

/**
 * ServiceJsonLd outputs schema.org/Service structured data.
 *
 * - With a `service` prop: emits a single Service entity for that service.
 * - Without any prop: emits an Organization with a `hasOfferCatalog`
 *   containing all services listed on the site.
 *
 * In both cases the provider is referenced by @id (rather than re-embedded)
 * so Google can deduplicate the Organization entity across every page that
 * mentions it.
 */
export function ServiceJsonLd({ service }: { service?: Service }) {
  const areaServed = company.serviceAreas.map((area) => ({
    "@type": "City",
    name: area,
  }));

  // Provider is the same Organization emitted by OrganizationJsonLd on every
  // page (see app/layout.tsx). Reference it by @id so we don't redefine the
  // address/telephone/etc. on every Service block.
  const provider = { "@id": `${siteUrl}/#organization` };

  // ── Per-service mode ─────────────────────────────────────────────────
  if (service) {
    const data = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteUrl}/services/${service.slug}#service`,
      name: service.title,
      description: service.summary,
      url: `${siteUrl}/services/${service.slug}`,
      provider,
      areaServed,
      serviceType: service.tagline,
      // No `offers` block: this is a B2B systems integrator, prices are
      // quoted per project after a site visit, not listed. Google's rich
      // result spec requires `offers.price` > 0; emitting one with a fake
      // or zero price would trigger a structured-data warning, and
      // omitting `offers` entirely is the cleaner choice.
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
    "@id": `${siteUrl}/#organization`,
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