import type { NextConfig } from "next";

// Next.js statically optimizes most routes on this site, so a nonce-based
// script CSP (which requires a per-request response) would force everything
// to dynamic rendering. 'unsafe-inline' on script/style is a deliberate
// trade-off for a marketing site with no user-generated script content --
// every other directive is locked to 'self'.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  // raw.githack.com serves the HDRI environment map the WebGL hero's
  // <Environment preset="city" /> fetches at runtime (@react-three/drei
  // ships no bundled preset assets) -- without it, the hero falls back to
  // flat lighting with no reflections.
  "connect-src 'self' https://vitals.vercel-insights.com https://vitals.vercel-analytics.com https://raw.githack.com https://wa.me",
  // Allow the Google Maps embed used on /contact (ViewOnMap component).
  // Without an explicit frame-src, the browser falls back to default-src
  // 'self' and blocks the maps.google.com iframe with a "This content is
  // blocked" error. Both maps.google.com (legacy embed endpoint) and
  // www.google.com (newer embed + search URL) are needed because Google
  // can serve either host depending on the request.
  "frame-src 'self' https://maps.google.com https://www.google.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/quality-support",
        destination: "/quality",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
