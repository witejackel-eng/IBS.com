import { company } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsinfra.com";

export function AboutPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteUrl}/about#aboutpage`,
    name: "About",
    url: `${siteUrl}/about`,
    // Reference (not re-embed) the Organization emitted by OrganizationJsonLd.
    mainEntity: { "@id": `${siteUrl}/#organization` },
    // Brief description helps Google match the page to relevant queries.
    description: company.about.intro,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
