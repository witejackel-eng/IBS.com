import type { Service } from "./types";

/**
 * Copy is rewritten for clarity and hierarchy but every claim traces back to
 * the corresponding page on ibsinfra.com. No capability, spec, or feature is
 * invented.
 */
export const services: Service[] = [
  {
    slug: "voice-communication",
    navLabel: "Voice Communication",
    title: "Voice Communication",
    tagline: "Unified Communication",
    summary:
      "Unified Communications (UC) brings instant messaging, video conferencing, IP telephony, email, and SMS into one system, so teams aren't switching between separate tools.",
    intro:
      "We set up UC across a business's existing channels and devices, and connect it to the systems already in place. The same platform works whether a site has ten people or ten thousand.",
    icon: "phone-call",
    image: "/images/services/voice-communication.jpg",
    capabilities: [
      {
        title: "IP-PBX / KTS",
        description:
          "IP-based phone platforms sized to the business — from small TDM switches for 10 users up to fully IP platforms supporting 100,000 users, with call routing, conferencing, voicemail, and support for remote sites.",
      },
      {
        title: "SIP Phones",
        description:
          "VoIP handsets that combine traditional calling with chat, email, and web-based tools over the same IP network.",
      },
    ],
  },
  {
    slug: "audio-video-boardroom-solutions",
    navLabel: "Audio Video & Boardroom Solutions",
    title: "Audio Video & Boardroom Solutions",
    tagline: "AV Integration",
    summary:
      "Audio and video conferencing, classroom technology, video walls, public address systems, and room booking — set up so meetings and presentations run without extra troubleshooting.",
    intro:
      "From boardrooms to classrooms to auditoriums, we install AV systems that are straightforward to operate and backed by support when something needs attention.",
    image: "/images/services/av-integration.jpg",
    capabilities: [
      {
        title: "Audio Conferencing",
        description:
          "Conferencing audio for training sessions, presentations, and team calls, with 24/7 support if something goes wrong mid-meeting.",
      },
      {
        title: "Video Conferencing",
        description:
          "Video calling between offices, clients, and remote staff, with screen sharing, recording, and chat built in.",
      },
      {
        title: "Class Room Solutions",
        description:
          "Displays, audio, and device connectivity for phones, laptops, and tablets, along with lighting, acoustics, and furniture suited to how the room is taught in.",
      },
      {
        title: "Video Walls",
        description:
          "Multi-monitor video wall installations for larger sites, built to handle concurrent speakers and stay legible for virtual events and meetings.",
      },
      {
        title: "Public Address System",
        description:
          "Microphones, amplifiers, and loudspeakers sized to the venue, for announcements and events that need to be heard clearly throughout the space.",
      },
      {
        title: "Room Booking System",
        description:
          "Calendar-integrated room scheduling with real-time availability and automated AV control, so double-bookings and idle rooms are easier to catch.",
      },
    ],
  },
  {
    slug: "it-infrastructure",
    navLabel: "IT Network & Infrastructure",
    title: "IT Network & Infrastructure",
    tagline: "Data Center & Networking",
    summary:
      "Storage, servers, routers, firewalls, cabling, Wi-Fi, and power backup — the components a network and data center actually run on.",
    intro:
      "We install, configure, and support the infrastructure a network depends on, and stay involved after go-live for troubleshooting and upgrades as the setup grows.",
    image: "/images/services/it-infrastructure.jpg",
    capabilities: [
      {
        title: "Data Center",
        description:
          "Storage, servers, routers, and firewalls, installed and configured with cooling and battery backup, plus ongoing support once the site is live.",
      },
      {
        title: "Firewall",
        description:
          "Traffic monitoring and access rules that block unauthorized data and known threats without slowing the network down.",
      },
      {
        title: "Network Rack",
        description:
          "Racks built to organize and protect network hardware as a site adds more equipment over time.",
      },
      {
        title: "Structured Cabling",
        description:
          "Cabling laid out so the network stays easy to trace and maintain, including fiber runs for longer distances and higher throughput.",
      },
      {
        title: "Wi-Fi",
        description:
          "Wireless access points for computers, laptops, printers, scanners, and phones, tied into structured cabling and mesh coverage where a single access point won't reach.",
      },
      {
        title: "Online UPS",
        description:
          "Battery-backed power that stays continuously connected to the inverter, so critical systems keep running through an outage instead of blinking off and restarting.",
      },
    ],
  },
  {
    slug: "security-solutions",
    navLabel: "Security Solutions",
    title: "Security Solutions",
    tagline: "Surveillance & Access",
    summary:
      "CCTV, access control and biometric systems, fire alarm systems, and home automation, covering people, assets, and property under one installation.",
    intro:
      "We design surveillance and access systems for both commercial and residential sites, with monitoring that keeps running after the cameras go up.",
    image: "/images/services/security-solutions.jpg",
    capabilities: [
      {
        title: "CCTV",
        description:
          "Camera systems for continuous monitoring across private and public areas of a site.",
      },
      {
        title: "Access Control & Biometric Solutions",
        description:
          "Entry systems that check identity before letting someone in, with visitor screening and biometric fingerprint scanning for accurate attendance records.",
      },
      {
        title: "Fire Alarm System",
        description:
          "Smoke detectors and alarms that sound early enough to evacuate a building before damage spreads.",
      },
      {
        title: "Home Automation",
        description:
          "Security systems, thermostats, lighting, and entertainment tied into one setup that's simpler to control day to day.",
      },
    ],
  },
  {
    slug: "call-center-solutions",
    navLabel: "Call Center Solutions",
    title: "Call Center Solutions",
    tagline: "Customer Engagement",
    summary:
      "Headsets, GSM/PRI gateways, CRM and dialer platforms, and voice logging — the equipment a contact center runs its shifts on.",
    intro:
      "We cover the full stack of a contact center, from the agent's headset to predictive dialing and call recording for compliance.",
    icon: "headset",
    image: "/images/services/call-center-solutions.jpg",
    capabilities: [
      {
        title: "Call Center Headset",
        description:
          "Headsets built for full-shift comfort, with noise reduction and cushioned ear pads for agents on back-to-back calls.",
      },
      {
        title: "GSM / PRI Gateway",
        description:
          "GSM gateways connect digital, analog, IP, and GSM networks for cost-effective calling; PRI gateways bridge ISDN and IP networks for a cleaner move to VoIP.",
      },
      {
        title: "CRM / Dialer Solution",
        description:
          "CRM and predictive dialer software that automates dialing and surfaces customer history on the agent's screen, aimed at fewer dropped leads and faster resolutions.",
      },
      {
        title: "Voice Logger & Auto Dialer",
        description:
          "Call recording across analog, PRI, and VoIP lines, paired with automated outbound dialing (predictive, progressive, preview, or manual), CRM integration, IVR, SMS outreach, and performance dashboards.",
      },
    ],
  },
  {
    slug: "software-licenses",
    navLabel: "Software Licenses",
    title: "Software Licenses",
    tagline: "Licensing & Compliance",
    summary:
      "Genuine software licenses for the applications businesses already run on — Zoom, Webex, Microsoft Office 365, Adobe, ERP, and security software.",
    intro:
      "Licensed software means fewer compliance headaches and no gap in updates or security patches.",
    image: "/images/services/software-licenses.jpg",
    capabilities: [
      {
        title: "Collaboration & Productivity",
        description:
          "Licenses for Zoom, Webex, Microsoft Office, and Windows / Microsoft 365.",
      },
      {
        title: "Creative & Enterprise Applications",
        description:
          "Access to current Adobe applications and enterprise resource planning (ERP) software.",
      },
      {
        title: "Security Software",
        description:
          "Licensed antivirus and endpoint protection to keep systems patched and compliant.",
      },
    ],
  },
];

export const amcService: Service & {
  categories: readonly { title: string; items: readonly string[] }[];
  whyUs: readonly { title: string; description: string }[];
} = {
  slug: "annual-maintenance-service",
  navLabel: "Annual Maintenance Service",
  title: "Annual Maintenance Service",
  tagline: "AMC & Support",
  summary:
    "Annual Maintenance Contracts that keep the systems we install running the way they're supposed to, backed by certified technicians and clear service-level agreements.",
  intro:
    "A structured service schedule and defined SLAs mean support doesn't depend on remembering to call someone — problems get caught and logged before they become downtime.",
  image: "/images/services/annual-maintenance-service.jpg",
  /**
   * Top-level capabilities surfaced for SEO/JSON-LD and any consumer that
   * treats this entry as a generic `Service`. Mirrors the more detailed
   * `categories` below so both views stay in sync.
   */
  capabilities: [
    {
      title: "Communication Technologies",
      description:
        "Maintenance of voice platforms — SIP, analog, and hybrid configurations — including firmware updates, call-flow optimization, and troubleshooting.",
    },
    {
      title: "Audio/Video Solutions",
      description:
        "Servicing of AV setups in conference rooms, classrooms, and auditoriums, with DSP and mixer calibration, cable checks, and video conferencing support.",
    },
    {
      title: "Fire Alarm Systems",
      description:
        "Servicing of conventional and addressable panels, smoke detector cleaning, alarm verification, battery checks, and fire safety compliance support.",
    },
    {
      title: "CCTV Surveillance Systems",
      description:
        "Maintenance of IP and analog cameras with NVR/DVR integration, lens cleaning, angle verification, and storage health checks.",
    },
    {
      title: "Access Control Systems",
      description:
        "Inspection of biometric, RFID, and keypad modules, with configuration updates, event log monitoring, and visitor management integration support.",
    },
  ],
  categories: [
    {
      title: "Communication Technologies",
      items: [
        "Centralized voice communication with SIP, analog, and hybrid configurations",
        "Scheduled firmware updates and call flow optimization",
        "Troubleshooting for connectivity, call drops, and user provisioning issues",
      ],
    },
    {
      title: "Audio/Video Solutions",
      items: [
        "Maintenance of AV setups in conference rooms, classrooms, and auditoriums",
        "DSP and mixer calibration, cable integrity checks, and system refreshes",
        "Support for video conferencing platforms and touch panel interfaces",
      ],
    },
    {
      title: "Fire Alarm Systems",
      items: [
        "Servicing of conventional and addressable panels (e.g. Morley DXc1/DXc2)",
        "Periodic smoke detector cleaning, alarm verification, and battery checks",
        "Audit support for fire safety compliance and documentation",
      ],
    },
    {
      title: "CCTV Surveillance Systems",
      items: [
        "Maintenance of IP and analog cameras with NVR/DVR integration",
        "Lens cleaning, angle verification, and remote monitoring support",
        "Health checks for storage redundancy and recording consistency",
      ],
    },
    {
      title: "Access Control Systems",
      items: [
        "Inspection of biometric, RFID, and keypad modules",
        "Configuration updates, event log monitoring, and door controller diagnostics",
        "Integration support with visitor management and fire evacuation workflows",
      ],
    },
  ],
  whyUs: [
    {
      title: "Tailored AMC Packages",
      description: "Built around site size, system complexity, and risk profile.",
    },
    {
      title: "Rapid Response Team",
      description: "Trained personnel with a defined escalation matrix.",
    },
    {
      title: "Compliance Ready",
      description: "Maintenance aligned with BIS, STQC, and other regulatory norms.",
    },
    {
      title: "Preventive & Emergency Support",
      description: "Scheduled servicing with on-call fault resolution.",
    },
    {
      title: "Documentation & Reporting",
      description: "Service logs, checklists, and health summaries after every visit.",
    },
  ],
} as const;
