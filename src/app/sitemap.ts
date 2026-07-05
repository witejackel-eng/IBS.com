import type { MetadataRoute } from "next";

import { services, amcService } from "@/lib/content";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/who-we-serve",
  "/partners",
  "/quality",
  "/contact",
  "/credits",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ibsinfra.com";
  const now = new Date();

  const serviceRoutes = [...services.map((s) => s.slug), amcService.slug].map((slug) => `/services/${slug}`);

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
