import { services, amcService } from "./services";

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      ...services.map((s) => ({
        label: s.navLabel,
        href: `/services/${s.slug}`,
        tagline: s.tagline,
        slug: s.slug,
      })),
      {
        label: amcService.navLabel,
        href: `/services/${amcService.slug}`,
        tagline: amcService.tagline,
        slug: amcService.slug,
      },
    ],
  },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Partners", href: "/partners" },
  { label: "Quality & Support", href: "/quality" },
  { label: "Contact", href: "/contact" },
] as const;

/** Groups the Services mega menu into categories for the nav only -- purely an IA grouping, not a factual claim. */
export const serviceCategories = [
  {
    title: "Communication",
    slugs: ["voice-communication", "audio-video-boardroom-solutions", "call-center-solutions"],
  },
  {
    title: "Infrastructure",
    slugs: ["it-infrastructure"],
  },
  {
    title: "Security",
    slugs: ["security-solutions"],
  },
  {
    title: "Support",
    slugs: ["software-licenses", "annual-maintenance-service"],
  },
] as const;
