import { company } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsinfra.com";

/**
 * WebSite entity for the whole domain. Deliberately has no `potentialAction`
 * (SearchAction) -- that requires a real on-site search endpoint, which this
 * site doesn't have. Adding one pointed at an external search engine would be
 * structured-data spam, not a genuine sitelinks search box.
 */
export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.legalName,
    url: siteUrl,
    inLanguage: "en-IN",
    publisher: { "@type": "Organization", name: company.legalName },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
