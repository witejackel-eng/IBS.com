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
      "Unified Communications (UC) integrates real-time and non-real-time communication — instant messaging, video conferencing, IP telephony, email, and SMS — into one seamless experience.",
    intro:
      "Our UC solutions streamline communication across channels and devices with a cohesive interface that lifts efficiency. Scalable and adaptable, they integrate with existing systems so businesses of any size can stay ahead of an evolving technology landscape.",
    icon: "phone-call",
    capabilities: [
      {
        title: "IP-PBX / KTS",
        description:
          "IP-based platforms tailored to businesses of every size — from small-scale TDM switches for 10 users to fully IP platforms supporting up to 100,000 users. Features include cost-saving call routing, advanced conferencing, voicemail integration, and seamless remote-site functionality.",
      },
      {
        title: "SIP Phones",
        description:
          "VoIP phones that integrate traditional telephony with online chat, email, and web-based services over an IP network — combining cutting-edge technology, superior ergonomics, and sleek design for efficient business communication.",
      },
    ],
  },
  {
    slug: "audio-video-boardroom-solutions",
    navLabel: "Audio Video & Boardroom Solutions",
    title: "Audio Video & Boardroom Solutions",
    tagline: "AV Integration",
    summary:
      "Audio and video conferencing systems, classroom technology, video walls, public address systems, and room booking — engineered for seamless internal and external collaboration.",
    intro:
      "From boardrooms to classrooms to auditoriums, our AV integration is built for clarity, reliability, and round-the-clock support.",
    image: "/images/services/av-integration.jpg",
    capabilities: [
      {
        title: "Audio Conferencing",
        description:
          "Advanced technology and 24/7 support for training, presentations, team discussions, and customer interactions — with clear, precise sound for every communication need.",
      },
      {
        title: "Video Conferencing",
        description:
          "Seamless connectivity between employees, clients, and customers regardless of location, with screen sharing, recording, and chat for uninterrupted communication.",
      },
      {
        title: "Class Room Solutions",
        description:
          "Clear visual displays, high-quality audio, and seamless connectivity across phones, laptops, and tablets — plus optimized lighting, acoustics, and furniture for an immersive learning space.",
      },
      {
        title: "Video Walls",
        description:
          "High-resolution multi-monitor video wall solutions for large-scale enterprises, supporting concurrent speakers with optimal visual clarity for virtual events and meetings.",
      },
      {
        title: "Public Address System",
        description:
          "A complete range of microphones, amplifiers, loudspeakers, and supporting technology for clear, powerful sound reinforcement in any venue.",
      },
      {
        title: "Room Booking System",
        description:
          "Calendar-integrated scheduling and occupancy management with real-time availability and automated AV control, optimizing resource use across meeting spaces.",
      },
    ],
  },
  {
    slug: "it-infrastructure",
    navLabel: "IT Network & Infrastructure",
    title: "IT Network & Infrastructure",
    tagline: "Data Center & Networking",
    summary:
      "A complete range of components for building and operating modern networks and data centers — storage, servers, routers, firewalls, cabling, Wi-Fi, and power backup.",
    intro:
      "From initial installation and configuration through ongoing technical support, we deliver a reliable, scalable foundation for network performance and secure operations.",
    image: "/images/services/it-infrastructure.jpg",
    capabilities: [
      {
        title: "Data Center",
        description:
          "Storage systems, servers, routers, and firewalls with end-to-end installation, configuration, and ongoing support — plus cooling systems and battery backups for secure, efficient operation.",
      },
      {
        title: "Firewall",
        description:
          "Monitoring and controlling incoming and outgoing traffic, blocking unauthorized data packets and safeguarding against malicious threats while optimizing network performance.",
      },
      {
        title: "Network Rack",
        description:
          "Premium network racks designed to organize, secure, and protect critical hardware components as infrastructure demands grow.",
      },
      {
        title: "Structured Cabling",
        description:
          "Tailored structured cabling for organized, accessible network systems, including durable fiber optic solutions for long-distance communication and high-quality data networking.",
      },
      {
        title: "Wi-Fi",
        description:
          "Premier Wi-Fi hardware for computers, laptops, printers, scanners, and smartphones, supported by structured cabling and fully meshed network topologies for reliable connectivity.",
      },
      {
        title: "Online UPS",
        description:
          "Continuous, conditioned power that keeps batteries connected to the inverter — protecting critical systems from disruption and ensuring consistent operation during outages.",
      },
    ],
  },
  {
    slug: "security-solutions",
    navLabel: "Security Solutions",
    title: "Security Solutions",
    tagline: "Surveillance & Access",
    summary:
      "CCTV, access control and biometric systems, fire alarm systems, and home automation — a comprehensive security framework for people, assets, and property.",
    intro:
      "As a dedicated security solutions provider, we design systems that deliver continuous monitoring and reliable protection for private and public spaces alike.",
    image: "/images/services/security-solutions.jpg",
    capabilities: [
      {
        title: "CCTV",
        description:
          "Advanced closed-circuit television systems offering continuous monitoring for both private and public spaces, safeguarding people and assets.",
      },
      {
        title: "Access Control & Biometric Solutions",
        description:
          "Systems that ensure only authorized individuals gain entry, with efficient visitor screening and biometric fingerprint solutions for accurate time and attendance tracking.",
      },
      {
        title: "Fire Alarm System",
        description:
          "Smoke detectors and alarm systems that provide early warning through horns or bells, ensuring timely evacuation and minimizing damage and risk.",
      },
      {
        title: "Home Automation",
        description:
          "Advanced security systems, smart thermostats, lighting controls, and entertainment setups integrated into a safer, more comfortable, more convenient home.",
      },
    ],
  },
  {
    slug: "call-center-solutions",
    navLabel: "Call Center Solutions",
    title: "Call Center Solutions",
    tagline: "Customer Engagement",
    summary:
      "Premium headsets, GSM/PRI gateways, CRM and dialer platforms, and voice logging — built to optimize contact center operations and customer engagement.",
    intro:
      "Our solutions cover the full stack of a modern contact center, from the agent's headset to predictive dialing and compliance-grade call recording.",
    icon: "headset",
    capabilities: [
      {
        title: "Call Center Headset",
        description:
          "Premium headsets designed for comfort and performance, with noise reduction and soft ear padding to enhance communication and employee well-being.",
      },
      {
        title: "GSM / PRI Gateway",
        description:
          "GSM gateways enable seamless, cost-effective communication between digital, analog, IP, and GSM networks; PRI gateways connect ISDN and IP networks for smooth VoIP migration.",
      },
      {
        title: "CRM / Dialer Solution",
        description:
          "Integrated CRM and predictive dialer technology that automate dialing, surface a full view of customer data, and drive faster resolutions, higher lead conversion, and stronger sales performance.",
      },
      {
        title: "Voice Logger & Auto Dialer",
        description:
          "Multi-channel call recording and compliance (analog, PRI, VoIP) paired with automated outbound dialing (predictive, progressive, preview, manual), CRM integration, IVR, SMS outreach, and performance dashboards.",
      },
    ],
  },
  {
    slug: "software-licenses",
    navLabel: "Software Licenses",
    title: "Software Licenses",
    tagline: "Licensing & Compliance",
    summary:
      "Genuine software licenses for the applications businesses run on — Zoom, Webex, Microsoft Office 365, Adobe, ERP, and security software.",
    intro:
      "Licensed software keeps organizations compliant and current on features, updates, and security protocols — maintaining a secure, efficient operating environment.",
    image: "/images/services/software-licenses.jpg",
    capabilities: [
      {
        title: "Collaboration & Productivity",
        description:
          "Licenses for Zoom, Webex, Microsoft Office, and Windows / Microsoft 365 to keep teams connected and productive.",
      },
      {
        title: "Creative & Enterprise Applications",
        description:
          "Access to the latest Adobe applications and enterprise resource planning (ERP) software.",
      },
      {
        title: "Security Software",
        description:
          "Licensed antivirus and endpoint protection software to keep systems compliant and secure.",
      },
    ],
  },
];

export const amcService = {
  slug: "annual-maintenance-service",
  navLabel: "Annual Maintenance Service",
  title: "Annual Maintenance Service",
  tagline: "AMC & Support",
  summary:
    "Specialized Annual Maintenance Contract (AMC) services that keep mission-critical systems operating at peak performance, backed by certified technicians and industry-standard SLAs.",
  intro:
    "Structured service protocols and industry-standard SLAs ensure reliability, responsiveness, and compliance across diverse technical infrastructures.",
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
        "Comprehensive maintenance of AV setups in conference rooms, classrooms, and auditoriums",
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
      description: "Custom-built based on site size, system complexity, and risk profile.",
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
      description: "Structured service logs, checklists, and health summaries.",
    },
  ],
} as const;
