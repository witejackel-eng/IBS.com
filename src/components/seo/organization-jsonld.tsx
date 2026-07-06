import { company } from "@/lib/content";

export function OrganizationJsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsinfra.com";

  const data = {
    "@context": "https://schema.org",
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
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 94, 3rd Floor, Block - B, Pocket - 10, Sector - 13, Dwarka",
      addressLocality: "New Delhi",
      postalCode: "110075",
      addressCountry: "IN",
    },
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
