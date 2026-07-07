import type { Segment } from "./types";

/**
 * "Who We Serve" replaces a generic Industries section. The four segments
 * below are the exact clientele named on ibsinfra.com/about-us-insight.php —
 * no additional verticals or invented case studies are added.
 */
export const segments: Segment[] = [
  {
    slug: "enterprises",
    title: "Small, Medium & Large Enterprises",
    summary:
      "Organizations of every size that need unified communication, structured network infrastructure, and boardroom systems working together on one site.",
    needs: [
      "Unified communication and IP telephony across offices",
      "Data center, structured cabling, and network security",
      "Boardroom and conferencing systems for daily collaboration",
    ],
    relevantServiceSlugs: [
      "voice-communication",
      "it-infrastructure",
      "audio-video-boardroom-solutions",
      "security-solutions",
    ],
    imageAlt:
      "Modern enterprise office interior with collaboration spaces and network infrastructure",
  },
  {
    slug: "hotels",
    title: "Hotels",
    summary:
      "Hospitality properties that depend on reliable guest-facing and back-of-house technology — from banquet AV to property-wide security.",
    needs: [
      "Audio/video systems for banquets, conferencing, and events",
      "Property-wide CCTV, access control, and fire safety",
      "Reliable network and Wi-Fi coverage for guests and staff",
    ],
    relevantServiceSlugs: [
      "audio-video-boardroom-solutions",
      "security-solutions",
      "it-infrastructure",
    ],
    imageAlt:
      "Hotel lobby interior with guest reception desk and adjoining event spaces",
  },
  {
    slug: "residential",
    title: "Residential Spaces",
    summary:
      "Homes that want security, automation, and reliable connectivity without added complexity.",
    needs: [
      "Home automation for lighting, entertainment, and climate",
      "CCTV and access control for everyday peace of mind",
      "Dependable in-home Wi-Fi and networking",
    ],
    relevantServiceSlugs: ["security-solutions", "it-infrastructure"],
    imageAlt:
      "Modern living room with smart TV, ambient lighting, and integrated home automation",
  },
  {
    slug: "soho",
    title: "Small Office / Home Office (SOHO)",
    summary:
      "Lean teams that need enterprise-grade communication and security tools sized for a smaller footprint.",
    needs: [
      "Right-sized IP-PBX and SIP phone systems",
      "Essential network, Wi-Fi, and firewall protection",
      "Licensed productivity and collaboration software",
    ],
    relevantServiceSlugs: [
      "voice-communication",
      "it-infrastructure",
      "software-licenses",
    ],
    imageAlt:
      "Compact home office desk setup with a laptop, IP phone, and network router",
  },
];
