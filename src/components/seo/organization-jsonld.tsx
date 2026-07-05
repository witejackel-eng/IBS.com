import { company } from "@/lib/content";

export function OrganizationJsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ibsinfra.com";

  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.legalName,
    description: company.summary,
    url: siteUrl,
    telephone: company.contact.phones,
    email: company.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 94, 3rd Floor, Block - B, Pocket - 10, Sector - 13, Dwarka",
      addressLocality: "New Delhi",
      postalCode: "110075",
      addressCountry: "IN",
    },
    areaServed: company.serviceAreas,
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
