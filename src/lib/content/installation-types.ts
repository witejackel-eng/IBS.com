/**
 * Installation environment categories.
 *
 * These are NOT client case studies or project statistics — they describe the
 * types of environments where structured cabling, AV, security, and IT
 * systems are commonly deployed and the engineering considerations specific
 * to each.
 */

export interface InstallationType {
  environment: string;
  /** Lucide icon name — mapped to a React component in the consuming section. */
  icon: string;
  /** Systems typically installed in this environment. */
  systems: string[];
  /** Engineering / deployment considerations unique to the environment. */
  considerations: string[];
}

export const installationTypes: InstallationType[] = [
  {
    environment: "Corporate Offices",
    icon: "Building2",
    systems: [
      "Network Cabling",
      "Boardroom AV",
      "IP Phones",
      "Access Control",
      "CCTV",
    ],
    considerations: [
      "Multi-floor cable routing through existing riser shafts and false ceilings",
      "Segregated VLANs for voice, data, and guest traffic on shared infrastructure",
      "Boardroom AV integration with room-booking and calendar systems",
    ],
  },
  {
    environment: "Schools & Universities",
    icon: "GraduationCap",
    systems: [
      "Campus Networking",
      "PA Systems",
      "Classroom Displays",
      "CCTV",
    ],
    considerations: [
      "High-density Wi-Fi supporting simultaneous device connections across lecture halls",
      "Public-address zoning for campus-wide announcements and emergency alerts",
      "Outdoor-rated cabling and enclosures for inter-building links",
    ],
  },
  {
    environment: "Hospitals",
    icon: "HeartPulse",
    systems: [
      "Nurse Call Systems",
      "IP Surveillance",
      "Access Control",
      "Public Address",
    ],
    considerations: [
      "Redundant power and networking paths for life-safety-critical systems",
      "Strict infection-control and clean-room cable installation standards",
      "Integration with existing building management and patient-monitoring systems",
    ],
  },
  {
    environment: "Hotels",
    icon: "BedDouble",
    systems: [
      "Guest Wi-Fi",
      "IPTV",
      "Banquet AV",
      "Door Access",
      "CCTV",
    ],
    considerations: [
      "Per-room IPTV and Wi-Fi delivery over a single structured cabling backbone",
      "Scalable banquet AV that reconfigures for varying event layouts and sizes",
      "Discreet CCTV placement balancing guest privacy with property security",
    ],
  },
  {
    environment: "Factories & Warehouses",
    icon: "Factory",
    systems: [
      "Industrial Networking",
      "Fire Alarm",
      "CCTV",
      "Access Control",
    ],
    considerations: [
      "Industrial-grade cabling and enclosures rated for temperature, dust, and vibration",
      "Long cable runs spanning large floor areas with PoE power-budget planning",
      "Fire-alarm integration compliant with factory safety regulations",
    ],
  },
  {
    environment: "Government Buildings",
    icon: "Landmark",
    systems: [
      "Compliance-Grade Surveillance",
      "Council Chamber AV",
      "Secure Networking",
    ],
    considerations: [
      "Retention and resolution requirements mandated by government surveillance policies",
      "Secure, segmented network infrastructure with restricted inter-department access",
      "AV systems designed for formal proceedings with recording and live-streaming capability",
    ],
  },
  {
    environment: "Residential Complexes",
    icon: "Home",
    systems: [
      "Home Automation",
      "CCTV",
      "Wi-Fi",
      "Video Door Phones",
    ],
    considerations: [
      "Multi-unit distribution of network and video feeds from a central MDF/IDF",
      "Low-voltage cabling coordinated with civil finishing timelines",
      "User-friendly interfaces for non-technical residents",
    ],
  },
];