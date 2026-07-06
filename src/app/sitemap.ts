import type { MetadataRoute } from "next";

import { services, amcService } from "@/lib/content";

// "/credits" is intentionally excluded -- it's marked `robots: { index: false }` on its own page,
// and a sitemap should only list indexable URLs (Search Console flags the mismatch otherwise).
const staticRoutes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/services", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/who-we-serve", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/partners", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/quality", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly" as const, priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsinfra.com";
  const now = new Date();

  const serviceRoutes = [...services.map((s) => s.slug), amcService.slug].map((slug) => ({
    path: `/services/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${base}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
