import type { ProjectScenario } from "./types";

/**
 * ibsinfra.com publishes no project case studies, client names, or project
 * statistics -- so these are generic, illustrative delivery scenarios built
 * only from real, already-sourced service capabilities (see services.ts),
 * not completed client engagements. Every field avoids inventing a client
 * name, a number, or a specific outcome metric. `illustrative: true` on every
 * entry drives a visible "Illustrative scenario" badge everywhere these
 * render -- this must never be treated as a footnote.
 */
export const projectScenarios: ProjectScenario[] = [
  {
    slug: "enterprise-hq-unified-communication",
    illustrative: true,
    role: "Enterprise Headquarters",
    tagline: "Unified Communication & Network Refresh",
    overview:
      "A representative scope for a multi-floor enterprise office consolidating voice, data, and boardroom systems under one integrator.",
    challenge:
      "Disconnected phone systems, aging network hardware, and boardrooms that couldn't reliably host video calls across multiple floors.",
    solution:
      "An IP-PBX platform for unified voice, structured cabling and firewall-secured network infrastructure, and boardroom AV built around video conferencing.",
    outcome:
      "A single point of contact for voice, network, and boardroom technology instead of separate vendors for each system.",
    technicalHighlights: [
      "IP-PBX with remote-site call routing",
      "Structured cabling and firewall-secured LAN",
      "Boardroom video conferencing integration",
    ],
    location: "Delhi NCR",
    relevantServiceSlugs: ["voice-communication", "it-infrastructure", "audio-video-boardroom-solutions"],
  },
  {
    slug: "hospitality-av-security-integration",
    illustrative: true,
    role: "Hospitality Property",
    tagline: "Banquet AV & Property-Wide Security",
    overview:
      "A representative scope for a hotel property upgrading guest-facing AV and back-of-house security in the same engagement.",
    challenge:
      "Banquet and conferencing spaces without reliable AV, alongside gaps in property-wide surveillance and access control.",
    solution:
      "Audio/video systems sized for banquets and conferencing, paired with CCTV coverage and access control across guest and staff areas.",
    outcome:
      "Guest-facing spaces ready for events and conferencing, with continuous monitoring across the property.",
    technicalHighlights: [
      "Banquet and conference room AV",
      "IP CCTV with NVR integration",
      "Access control across guest and staff zones",
    ],
    location: "Delhi NCR",
    relevantServiceSlugs: ["audio-video-boardroom-solutions", "security-solutions"],
  },
  {
    slug: "contact-center-modernization",
    illustrative: true,
    role: "Corporate Contact Center",
    tagline: "Call Center Platform Modernization",
    overview:
      "A representative scope for a contact center replacing aging headset and dialer hardware with an integrated platform.",
    challenge:
      "Legacy headsets and a dialer setup that made it hard to see call volume or agent performance in one place.",
    solution:
      "New headsets, a CRM-integrated dialer platform, and voice logging for compliance and performance visibility.",
    outcome:
      "Call handling, customer data, and compliance recording brought into one integrated workflow.",
    technicalHighlights: [
      "CRM-integrated predictive dialer",
      "Multi-channel voice logging",
      "Headset fleet refresh",
    ],
    location: "Delhi NCR",
    relevantServiceSlugs: ["call-center-solutions"],
  },
];
