import { services, amcService } from "./services";

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      ...services.map((s) => ({ label: s.navLabel, href: `/services/${s.slug}` })),
      { label: amcService.navLabel, href: `/services/${amcService.slug}` },
    ],
  },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Partners", href: "/partners" },
  { label: "Quality & Support", href: "/quality" },
  { label: "Contact", href: "/contact" },
] as const;
