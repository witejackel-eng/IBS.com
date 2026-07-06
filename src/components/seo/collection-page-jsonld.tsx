const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsinfra.com";

/** Generic CollectionPage schema for listing pages (services index, who-we-serve, partners).
 * `items` is optional -- only pass it when each listed entity has its own real page to link to. */
export function CollectionPageJsonLd({
  name,
  path,
  description,
  items,
}: {
  name: string;
  path: string;
  description: string;
  items?: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    url: `${siteUrl}${path}`,
    description,
    ...(items && {
      mainEntity: {
        "@type": "ItemList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          url: `${siteUrl}${item.path}`,
        })),
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
