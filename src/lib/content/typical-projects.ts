export interface TypicalProject {
  environment: string;
  systems: string[];
  considerations: string;
  icon: string;
}

/**
 * Categories of installations IBS delivers — not named case studies,
 * but real environment types with typical systems and engineering
 * considerations drawn from services.ts and segments.ts.
 */
export const typicalProjects: TypicalProject[] = [
  {
    environment: "Corporate Offices",
    systems: [
      "IP-PBX",
      "Boardroom AV",
      "Structured Cabling",
      "Wi-Fi",
      "CCTV",
      "Access Control",
    ],
    considerations:
      "Multi-floor cabling coordination, VLAN design for voice and data separation, and room-booking integration with existing calendar platforms.",
    icon: "Building2",
  },
  {
    environment: "Hotels",
    systems: [
      "Property Wi-Fi",
      "Banquet AV",
      "CCTV",
      "Fire Alarm",
      "PA System",
    ],
    considerations:
      "Guest-network isolation, PMS integration for IP phones, and AV systems designed for event managers rather than AV engineers.",
    icon: "Hotel",
  },
  {
    environment: "Hospitals & Healthcare",
    systems: [
      "Nurse-Call Integration",
      "CCTV",
      "Access Control",
      "Public Address",
      "Network Infrastructure",
    ],
    considerations:
      "Reliable coverage across wards and operating theatres, fire-alarm integration with evacuation protocols, and UPS-backed critical systems.",
    icon: "HeartPulse",
  },
  {
    environment: "Schools & Universities",
    systems: [
      "Classroom AV",
      "Campus Wi-Fi",
      "PA System",
      "CCTV",
      "Server Room",
    ],
    considerations:
      "Equipment that survives daily use by non-technical staff, centralized management across buildings, and budget-appropriate specifications.",
    icon: "GraduationCap",
  },
  {
    environment: "Government Buildings",
    systems: [
      "CCTV",
      "Access Control",
      "Fire Alarm",
      "Network Infrastructure",
      "Council-Chamber AV",
    ],
    considerations:
      "STQC-aligned surveillance, secure perimeters with audit trails, and procurement-compliant equipment from authorized channels.",
    icon: "Landmark",
  },
  {
    environment: "Factories & Warehouses",
    systems: [
      "Industrial Wi-Fi",
      "CCTV",
      "Access Control",
      "Fire Alarm",
      "Network Rack",
    ],
    considerations:
      "Ruggedized access points for high-ceiling environments, temperature-controlled server enclosures, and IP-rated cameras for dust-prone areas.",
    icon: "Factory",
  },
  {
    environment: "Residential Complexes",
    systems: [
      "CCTV",
      "Access Control",
      "Home Automation",
      "Wi-Fi",
      "Intercom",
    ],
    considerations:
      "Perimeter and lobby surveillance, visitor management integrated with intercom, and centralized Wi-Fi covering individual units and common areas.",
    icon: "Home",
  },
  {
    environment: "Contact Centers",
    systems: [
      "IP-PBX",
      "Headsets",
      "CRM Dialer",
      "Voice Logger",
      "GSM/PRI Gateway",
    ],
    considerations:
      "Agent-position cabling with power and data, call-recording compliance, and dialer sizing based on actual call-volume data.",
    icon: "Headset",
  },
];