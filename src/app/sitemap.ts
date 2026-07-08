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
  { path: "/careers", changeFrequency: "weekly" as const, priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly" as const, priority: 0.6 },
];

// Approximate content-modification dates for each route.
// These should be updated when meaningful content changes are made.
// Using ISO date strings that pypdf/date-fns can parse.
const lastModifiedDates: Record<string, string> = {
  "": "2026-07-08",
  "/services": "2026-07-08",
  "/about": "2026-06-15",
  "/who-we-serve": "2026-06-20",
  "/partners": "2026-07-01",
  "/quality": "2026-06-10",
  "/careers": "2026-07-05",
  "/contact": "2026-05-20",
  "/services/voice-communication": "2026-07-08",
  "/services/audio-video-boardroom-solutions": "2026-07-08",
  "/services/it-infrastructure": "2026-07-08",
  "/services/security-solutions": "2026-07-08",
  "/services/call-center-solutions": "2026-07-08",
  "/services/software-licenses": "2026-07-08",
  "/services/annual-maintenance-service": "2026-07-08",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsinfra.com";

  const serviceRoutes = [...services.map((s) => s.slug), amcService.slug].map((slug) => ({
    path: `/services/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${base}${route.path}`,
    lastModified: new Date(lastModifiedDates[route.path] ?? "2026-07-08"),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}