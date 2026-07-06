import { company } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsinfra.com";

export function ContactPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact",
    url: `${siteUrl}/contact`,
    about: {
      "@type": "LocalBusiness",
      name: company.legalName,
      telephone: company.contact.phones,
      email: company.contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.contact.address,
        addressCountry: "IN",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
