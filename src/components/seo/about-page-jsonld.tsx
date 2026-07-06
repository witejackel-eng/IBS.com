import { company } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsinfra.com";

export function AboutPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About",
    url: `${siteUrl}/about`,
    mainEntity: {
      "@type": ["Organization", "LocalBusiness"],
      name: company.legalName,
      description: company.about.intro,
      url: siteUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
