import { company } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsinfra.com";

export function ContactPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}/contact#contactpage`,
    name: "Contact",
    url: `${siteUrl}/contact`,
    // Reference (not re-embed) the Organization. Previously this block
    // emitted a malformed PostalAddress — `streetAddress` was set to the
    // full concatenated address string from company.contact.address and
    // `addressLocality`/`postalCode` were omitted entirely. Routing via
    // @id delegates all address/telephone/email fields to the canonical
    // Organization entity, which has the correctly decomposed address.
    about: { "@id": `${siteUrl}/#organization` },
    description: `Reach ${company.legalName} at ${company.contact.phones[0]} or ${company.contact.email}.`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
