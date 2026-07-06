import type { Metadata, Viewport } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { OrganizationJsonLd } from "@/components/seo/organization-jsonld";
import { WebsiteJsonLd } from "@/components/seo/website-jsonld";
import { company } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsinfra.com";
const titleDefault = `${company.legalName} — ${company.positioning}`;

/** Grounded in company.ts's own service-category names and coverage area -- nothing invented. */
const keywords = [
  company.legalName,
  company.positioning,
  ...company.about.categories.map((c) => c.title),
  "IT system integrator",
  "annual maintenance contract",
  ...company.serviceAreas,
];

// Search Console / Bing Webmaster verification: set these env vars once the site is verified
// with each service, rather than hard-coding a placeholder token.
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleDefault,
    template: `%s — ${company.legalName}`,
  },
  description: company.summary,
  keywords,
  authors: [{ name: company.legalName, url: siteUrl }],
  creator: company.legalName,
  publisher: company.legalName,
  applicationName: "IBS Infra",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: company.legalName,
    title: titleDefault,
    description: company.summary,
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: company.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
  ...((googleSiteVerification || bingSiteVerification) && {
    verification: {
      ...(googleSiteVerification && { google: googleSiteVerification }),
      ...(bingSiteVerification && { other: { "msvalidate.01": bingSiteVerification } }),
    },
  }),
};

export const viewport: Viewport = {
  themeColor: "#FBFAF7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
