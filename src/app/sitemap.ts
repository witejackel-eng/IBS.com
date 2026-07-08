import type { MetadataRoute } from "next";
import { statSync } from "fs";
import { resolve } from "path";

import { services, amcService } from "@/lib/content";

// "/credits" is intentionally excluded -- it's marked `robots: { index: false }` on its own page,
// and a sitemap should only list indexable URLs (Search Console flags the mismatch otherwise).
const staticRoutes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1, file: "src/app/(site)/page.tsx" },
  { path: "/services", changeFrequency: "weekly" as const, priority: 0.9, file: "src/app/(site)/services/page.tsx" },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.7, file: "src/app/(site)/about/page.tsx" },
  { path: "/who-we-serve", changeFrequency: "monthly" as const, priority: 0.7, file: "src/app/(site)/who-we-serve/page.tsx" },
  { path: "/partners", changeFrequency: "monthly" as const, priority: 0.7, file: "src/app/(site)/partners/page.tsx" },
  { path: "/quality", changeFrequency: "monthly" as const, priority: 0.7, file: "src/app/(site)/quality/page.tsx" },
  { path: "/careers", changeFrequency: "monthly" as const, priority: 0.7, file: "src/app/(site)/careers/page.tsx" },
  { path: "/contact", changeFrequency: "yearly" as const, priority: 0.6, file: "src/app/(site)/contact/page.tsx" },
];

/** Resolve the actual file modification date for a source file.
 *  Falls back to the current date if the file can't be stat'd (build-time safety). */
function fileMtime(relativePath: string): Date {
  try {
    const abs = resolve(process.cwd(), relativePath);
    return statSync(abs).mtime;
  } catch {
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsinfra.com";

  const serviceSlugs = [...services.map((s) => s.slug), amcService.slug];

  const serviceRoutes = serviceSlugs.map((slug) => {
    const isAmc = slug === amcService.slug;
    const file = isAmc
      ? "src/app/(site)/services/annual-maintenance-service/page.tsx"
      : `src/app/(site)/services/${slug}/page.tsx`;
    return {
      path: `/services/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      file,
    };
  });

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${base}${route.path}`,
    lastModified: fileMtime(route.file),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}