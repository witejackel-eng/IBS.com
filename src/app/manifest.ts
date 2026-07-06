import type { MetadataRoute } from "next";

import { company } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.legalName} — ${company.positioning}`,
    short_name: "IBS Infra",
    description: company.summary,
    start_url: "/",
    display: "standalone",
    background_color: "#FBFAF7",
    theme_color: "#FBFAF7",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
