import { company } from "@/lib/content";

export function OrganizationJsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsinfra.com";
  // Stable @id so other schemas (Service.provider, AboutPage.mainEntity,
  // ContactPage.about, WebSite.publisher) can reference this same entity
  // instead of re-embedding it. Google uses @id to deduplicate entities
  // across pages and across the site's own JSON-LD blocks.
  const orgId = `${siteUrl}/#organization`;

  const data = {
    "@context": "https://schema.org",
    "@id": orgId,
    // A single entity described with multiple applicable schema.org types --
    // not three separate/duplicate entries for the same business.
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    name: company.legalName,
    legalName: company.legalName,
    description: company.summary,
    url: siteUrl,
    logo: `${siteUrl}/icon`,
    image: `${siteUrl}/opengraph-image`,
    telephone: company.contact.phones,
    email: company.contact.email,
    // B2B systems integrator — projects span small office installs through
    // enterprise rollouts, so "$$" is the right priceRange bucket.
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      "@id": `${siteUrl}/#address`,
      streetAddress: "Plot No. 94, 3rd Floor, Block - B, Pocket - 10, Sector - 13, Dwarka",
      addressLocality: "New Delhi",
      addressRegion: "DL",
      postalCode: "110075",
      addressCountry: "IN",
    },
    // NOTE: `geo` (GeoCoordinates) is intentionally omitted. We don't have
    // survey-verified lat/long for the Dwarka office, and an approximate
    // pin would be worse than none — Google Maps already resolves the
    // PostalAddress correctly. Add geo only when verified coordinates exist.
    areaServed: company.serviceAreas.map((area) => ({ "@type": "City", name: area })),
    sameAs: [company.social.facebook, company.social.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is escaped for </script> to avoid premature
      // tag termination; the data itself is our own static content, not
      // user input, so no further sanitization is needed.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
