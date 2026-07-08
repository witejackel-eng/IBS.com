// ---------------------------------------------------------------------------
// Service Page Data — concise editorial content for each service detail page.
// Every claim traces back to services.ts, partners.ts, segments.ts, or
// company.ts. No invented client names, statistics, or dates.
// ---------------------------------------------------------------------------

export interface ServicePageData {
  slug: string;

  // HERO
  heroHeadline: string;
  heroSubheadline: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;

  // SOLUTIONS
  solutions: {
    title: string;
    description: string;
    benefits: string[];
    typicalDeployment: string;
    oemBrands: string[];
    image?: string;
  }[];

  // INDUSTRIES
  industries: {
    segmentSlug: string;
    title: string;
    description: string;
  }[];

  // FAQ
  faqs: {
    question: string;
    answer: string;
  }[];

  // CTA
  ctaHeadline: string;
  ctaDescription: string;
  ctaButtonText: string;
}

// ===========================================================================
// 1. VOICE COMMUNICATION
// ===========================================================================
const voiceCommunication: ServicePageData = {
  slug: "voice-communication",

  heroHeadline: "One Voice Across Every Desk",
  heroSubheadline:
    "Unified Communications — instant messaging, video conferencing, IP telephony, email, and SMS on a single platform, from ten users to ten thousand.",
  heroPrimaryCta: "Plan Your Voice System",
  heroSecondaryCta: "View Capabilities",

  solutions: [
    {
      title: "IP-PBX / Key Telephone Systems",
      description:
        "IP phone platforms scaling from ten-user offices to tens of thousands of extensions — with call routing, conferencing, voicemail, and remote-site support built in.",
      benefits: [
        "One dial plan and voicemail system across every location",
        "Seamless remote extensions for distributed teams",
        "Platform matched to existing hardware, not forced rip-and-replace",
      ],
      typicalDeployment: "Mid-to-large offices consolidating legacy phone systems onto IP.",
      oemBrands: ["Alcatel-Lucent", "Cisco"],
      image: "/images/services/solutions/voice-communication-ippbx.jpg",
    },
    {
      title: "SIP Phones & Unified Endpoints",
      description:
        "VoIP handsets combining calling, chat, and web tools over the same network — integrated with your existing UC platform.",
      benefits: [
        "Unified calling, messaging, and presence on one device",
        "Consistent experience at the desk or on a laptop",
        "Fewer separate devices on the desktop",
      ],
      typicalDeployment: "Offices standardizing on SIP trunks and moving away from analog phones.",
      oemBrands: ["Alcatel-Lucent", "Cisco"],
      image: "/images/services/solutions/voice-communication-sip-phones.jpg",
    },
  ],

  industries: [
    {
      segmentSlug: "enterprises",
      title: "Enterprises",
      description:
        "One IP-PBX platform that scales with the organization, integrating voice with CRM and directory services.",
    },
    {
      segmentSlug: "hotels",
      title: "Hotels & Hospitals",
      description:
        "Voice systems serving both staff operations and guest/patient-facing roles with configured call routing.",
    },
    {
      segmentSlug: "government",
      title: "Government",
      description:
        "Secure call routing, recorded lines where mandated, and documented configurations for audit readiness.",
    },
    {
      segmentSlug: "soho",
      title: "SOHO",
      description:
        "Enterprise-grade IP-PBX and SIP systems sized for a smaller footprint and budget.",
    },
  ],

  faqs: [
    {
      question: "What is the difference between IP-PBX and a traditional PBX?",
      answer:
        "A traditional PBX uses analog or digital circuits on dedicated phone lines. IP-PBX routes calls as data packets over your IP network — supporting remote extensions, CRM integration, and scaling via software licenses rather than physical line cards.",
    },
    {
      question: "Do we need to replace all existing phones?",
      answer:
        "Not necessarily. Our audit identifies which handsets and cabling can be reused. SIP-capable phones are often re-provisioned onto the new platform. We only replace what's genuinely end-of-life.",
    },
    {
      question: "How does SIP trunking reduce calling costs?",
      answer:
        "SIP trunks carry voice over your data connection, eliminating separate ISDN line rentals. You pay for capacity rather than per-line hardware and can scale concurrent calls based on actual demand.",
    },
    {
      question: "Can remote workers use the office phone system?",
      answer:
        "Yes. IP-PBX supports remote extensions via softphone or SIP handset at home. The caller sees the office number, calls route through the same hunt groups and voicemail.",
    },
  ],

  ctaHeadline: "Planning a Voice System Upgrade?",
  ctaDescription:
    "We'll audit what you have and design what you actually need.",
  ctaButtonText: "Talk to an IBS Engineer",
};

// ===========================================================================
// 2. AUDIO VIDEO & BOARDROOM SOLUTIONS
// ===========================================================================
const audioVideoBoardroomSolutions: ServicePageData = {
  slug: "audio-video-boardroom-solutions",

  heroHeadline: "Meeting Rooms That Just Work",
  heroSubheadline:
    "Audio and video conferencing, video walls, public address systems, and room booking — installed so meetings run without troubleshooting.",
  heroPrimaryCta: "Plan Your AV System",
  heroSecondaryCta: "View Capabilities",

  solutions: [
    {
      title: "Audio Conferencing",
      description:
        "Conferencing audio engineered for the room's actual acoustics — ceiling or tabletop mics, DSP processing, and speaker placement for clear intelligibility.",
      benefits: [
        "DSP-tuned audio compensating for room acoustics",
        "Mic and speaker placement designed around seating",
        "24/7 support for mission-critical conferencing spaces",
      ],
      typicalDeployment: "Boardrooms, huddle rooms, and training spaces with routine remote participation.",
      oemBrands: ["Biamp", "Shure", "QSC", "Poly"],
      image: "/images/services/solutions/av-audio-conferencing.jpg",
    },
    {
      title: "Video Conferencing",
      description:
        "Video calling with screen sharing, recording, and chat — integrated with the platform your team already uses.",
      benefits: [
        "Camera and display sized to room dimensions and participant count",
        "Native integration with existing conferencing platforms",
        "One-touch meeting start",
      ],
      typicalDeployment: "Enterprise boardrooms and huddle rooms standardizing on one video platform.",
      oemBrands: ["Poly", "Cisco", "Logitech", "AVer", "Zoom"],
      image: "/images/services/solutions/av-video-conferencing.jpg",
    },
    {
      title: "Classroom & Training Room Solutions",
      description:
        "Displays, audio, and connectivity for any device — designed to be operated by presenters, not AV engineers.",
      benefits: [
        "Universal connectivity for any laptop, tablet, or phone",
        "Lighting and acoustics for in-person and remote learners",
        "Room-booking integration with automatic AV power management",
      ],
      typicalDeployment: "Corporate training centers, educational institutions, and multi-purpose rooms.",
      oemBrands: ["Epson", "Samsung", "LG", "Panasonic", "Kramer"],
      image: "/images/services/solutions/av-training-room.jpg",
    },
    {
      title: "Video Walls",
      description:
        "Multi-panel video walls for auditoriums, command centers, and event spaces — legible from every seat.",
      benefits: [
        "Display configurations sized for viewing distance and content",
        "Bezel compensation and multi-source content routing",
        "Scalable architecture for multi-zone layouts",
      ],
      typicalDeployment: "Auditoriums, lobby displays, command centers, and large-format event spaces.",
      oemBrands: ["Samsung", "LG", "Barco", "Extron"],
      image: "/images/services/solutions/av-video-wall.jpg",
    },
    {
      title: "Public Address System",
      description:
        "Microphones, amplifiers, and loudspeakers engineered for the venue's dimensions — even coverage without feedback.",
      benefits: [
        "Even sound coverage without dead zones",
        "Speaker sizing based on room volume and usage",
        "Handles both events and emergency announcements",
      ],
      typicalDeployment: "Hotel banquet halls, auditoriums, places of worship, and public assembly spaces.",
      oemBrands: ["QSC", "Biamp", "Shure", "Harman"],
      image: "/images/services/solutions/av-pa-system.jpg",
    },
    {
      title: "Room Booking System",
      description:
        "Calendar-integrated scheduling with real-time availability displays, automated AV power management, and double-booking prevention.",
      benefits: [
        "Real-time availability visible from the hallway",
        "Automated AV power tied to booking start and end times",
        "Integration with existing calendar platforms",
      ],
      typicalDeployment: "Multi-room offices, co-working spaces, and hotels with conferencing facilities.",
      oemBrands: ["Crestron", "Extron"],
      image: "/images/services/solutions/av-room-booking.jpg",
    },
  ],

  industries: [
    {
      segmentSlug: "enterprises",
      title: "Enterprises",
      description:
        "Boardroom AV designed around the organization's standardized conferencing platform with single-touch operation.",
    },
    {
      segmentSlug: "hotels",
      title: "Hotels & Hospitals",
      description:
        "AV for scheduled events, walk-in requirements, banquet halls, conference rooms, and lobby displays.",
    },
    {
      segmentSlug: "government",
      title: "Government",
      description:
        "AV supporting formal meeting protocols — clear recording, reliable remote audio, and consistent session operation.",
    },
  ],

  faqs: [
    {
      question: "Can we keep using our existing displays and projectors?",
      answer:
        "Often yes. We evaluate which equipment can be retained and integrated. Only genuinely limiting equipment is recommended for replacement.",
    },
    {
      question: "What is DSP tuning and why does it matter?",
      answer:
        "DSP tuning adjusts equalization, echo cancellation, and noise reduction to match the room's actual acoustics. Without it, remote participants hear the room instead of the speaker.",
    },
    {
      question: "Do you install video walls?",
      answer:
        "Yes. We handle panel selection, video processing, mounting, and bezel compensation — scaling to virtually any size with multi-zone content support.",
    },
    {
      question: "How does room booking integrate with our calendar?",
      answer:
        "Panels connect directly to Microsoft 365, Google Workspace, or your existing platform — showing real-time availability and tying AV power to booking times.",
    },
  ],

  ctaHeadline: "Planning a Boardroom or Auditorium Upgrade?",
  ctaDescription:
    "We'll design the AV system around how your rooms are actually used.",
  ctaButtonText: "Talk to an IBS Engineer",
};

// ===========================================================================
// 3. IT NETWORK & INFRASTRUCTURE
// ===========================================================================
const itInfrastructure: ServicePageData = {
  slug: "it-infrastructure",

  heroHeadline: "Infrastructure That Doesn't Drift",
  heroSubheadline:
    "Storage, servers, routers, firewalls, cabling, and power backup — installed, configured, and supported as your network grows.",
  heroPrimaryCta: "Plan Your Network",
  heroSecondaryCta: "View Capabilities",

  solutions: [
    {
      title: "Data Center",
      description:
        "Storage, servers, routers, and firewalls with cooling and battery backup — designed for actual compute requirements with growth headroom.",
      benefits: [
        "Integrated compute, storage, networking, and power in one plan",
        "Cooling and power redundancy for the site's load profile",
        "Complete documentation for long-term maintainability",
      ],
      typicalDeployment: "On-premises server rooms and network closets for offices managing their own infrastructure.",
      oemBrands: ["Dell", "Synology", "Cisco", "HP Aruba"],
      image: "/images/services/solutions/it-data-center.jpg",
    },
    {
      title: "Firewall",
      description:
        "Traffic monitoring and access rules sized with throughput headroom — configured for your traffic patterns, not a generic template.",
      benefits: [
        "Throughput sized for actual peak traffic",
        "Rules configured for your traffic patterns and risk profile",
        "Ongoing firmware and signature updates through AMC",
      ],
      typicalDeployment: "Office internet gateways and inter-VLAN security for networks with sensitive data.",
      oemBrands: ["Fortinet", "Sophos", "Cisco"],
      image: "/images/services/solutions/it-firewall.jpg",
    },
    {
      title: "Network Rack",
      description:
        "Racks with growth headroom, cable management, and ventilation — because a full rack on day one needs a forklift upgrade in twelve months.",
      benefits: [
        "Capacity sized for projected growth",
        "Cable management that stays navigable as equipment is added",
        "Integrated power distribution and ventilation",
      ],
      typicalDeployment: "Server rooms, network closets, and IDF/MDF installations.",
      oemBrands: ["APW", "APC"],
      image: "/images/services/solutions/it-network-rack.jpg",
    },
    {
      title: "Structured Cabling",
      description:
        "Cabling laid out so the network stays traceable — fiber runs for longer distances, every run documented from patch panel to outlet.",
      benefits: [
        "Complete cabling documentation",
        "Fiber backbone for inter-floor and inter-building connectivity",
        "Cable paths planned for future expansion",
      ],
      typicalDeployment: "New office fit-outs, floor expansions, and cabling refreshes in aging buildings.",
      oemBrands: ["CommScope", "Systimax", "D-Link", "Netgear"],
      image: "/images/services/solutions/it-structured-cabling.jpg",
    },
    {
      title: "Wi-Fi",
      description:
        "Access points placed based on RF survey data, not guesswork — with SSID segmentation and QoS for staff, guests, and IoT.",
      benefits: [
        "Placement based on on-site RF survey",
        "Segmented SSIDs for staff, guests, and IoT devices",
        "Mesh coverage where a single AP won't reach",
      ],
      typicalDeployment: "Open-plan offices, multi-floor buildings, hotels, and warehouses.",
      oemBrands: ["Ruckus", "HP Aruba", "D-Link", "Netgear"],
      image: "/images/services/solutions/it-wifi.jpg",
    },
    {
      title: "Online UPS",
      description:
        "Zero-transfer-time battery backup — runtime sized for actual load and local power reliability, with battery load-testing in AMC.",
      benefits: [
        "Continuous inverter operation — zero transfer time",
        "Runtime matched to actual load and outage patterns",
        "Scheduled battery load testing through AMC",
      ],
      typicalDeployment: "Server rooms and network closets where power loss means data loss or service interruption.",
      oemBrands: ["APC", "Vertiv", "Eaton"],
      image: "/images/services/solutions/it-online-ups.jpg",
    },
  ],

  industries: [
    {
      segmentSlug: "enterprises",
      title: "Enterprises",
      description:
        "Network topology, structured cabling, and power backup designed for the next five years of growth.",
    },
    {
      segmentSlug: "hotels",
      title: "Hotels & Hospitals",
      description:
        "Wi-Fi covering every room and common area, with guest/operational traffic segmentation.",
    },
    {
      segmentSlug: "government",
      title: "Government",
      description:
        "Hardened infrastructure with strict access controls, VLAN segmentation, and audit-ready documentation.",
    },
    {
      segmentSlug: "residential",
      title: "Residential",
      description:
        "Dependable Wi-Fi, structured cabling for media rooms and home offices.",
    },
    {
      segmentSlug: "soho",
      title: "SOHO",
      description:
        "Enterprise-grade firewall, Wi-Fi, and cabling scaled to a smaller footprint.",
    },
  ],

  faqs: [
    {
      question: "What is the difference between an online UPS and a standby UPS?",
      answer:
        "Online UPS continuously powers equipment through its inverter — zero transfer time during an outage. Standby UPS only switches to battery when it detects one, causing a brief interruption. We specify online UPS for all critical infrastructure.",
    },
    {
      question: "How do you determine Wi-Fi access point placement?",
      answer:
        "We conduct an on-site RF survey measuring signal propagation, interference, and coverage gaps — accounting for walls, furniture, and device density. APs are placed based on survey data, not floor plans.",
    },
    {
      question: "Do we need to re-cable, or can existing cabling be reused?",
      answer:
        "We test existing runs for signal integrity and label accuracy. Runs that meet current standards are reused; degraded or underspecified runs are replaced.",
    },
    {
      question: "What does a firewall actually do?",
      answer:
        "It sits between your network and the internet, enforcing rules about what traffic passes. We configure rules based on your actual traffic patterns and size hardware with throughput headroom.",
    },
  ],

  ctaHeadline: "Planning a Network Upgrade or New Office Fit-Out?",
  ctaDescription:
    "We'll survey what you have and design infrastructure for the next five years.",
  ctaButtonText: "Talk to an IBS Engineer",
};

// ===========================================================================
// 4. SECURITY SOLUTIONS
// ===========================================================================
const securitySolutions: ServicePageData = {
  slug: "security-solutions",

  heroHeadline: "Security That's Actually Usable",
  heroSubheadline:
    "CCTV, access control, fire alarm systems, and home automation — designed as an integrated system that works when something happens.",
  heroPrimaryCta: "Plan Your Security System",
  heroSecondaryCta: "View Capabilities",

  solutions: [
    {
      title: "CCTV Surveillance",
      description:
        "Camera systems with placement designed for meaningful coverage and NVR storage sized for actual retention requirements.",
      benefits: [
        "Camera placement for coverage and evidence quality",
        "NVR storage matched to retention requirements",
        "Remote monitoring support for off-site access",
      ],
      typicalDeployment: "Commercial offices, hospitality, residential complexes, and government facilities.",
      oemBrands: ["Hikvision", "Dahua", "Axis", "Pelco"],
      image: "/images/services/solutions/security-access-control.jpg",
    },
    {
      title: "Access Control & Biometric Solutions",
      description:
        "Entry systems with visitor screening and biometric attendance — integrated so one badge opens doors, logs hours, and maintains an audit trail.",
      benefits: [
        "Integrated access, attendance, and visitor management",
        "Biometric accuracy eliminating buddy-punching",
        "Event logging for operational insight",
      ],
      typicalDeployment: "Office entrances, server rooms, restricted areas requiring identity-verified entry.",
      oemBrands: ["eSSL", "HID", "Cooper", "Honeywell"],
      image: "/images/services/solutions/security-cctv.jpg",
    },
    {
      title: "Fire Alarm System",
      description:
        "Smoke detectors and alarms with panel selection matched to building size, zone mapping for actual floor layout, and access control integration for automatic evacuation.",
      benefits: [
        "Panel selection: conventional for small sites, addressable for complex facilities",
        "Fire alarm and access control integration for automatic door release",
        "Maintenance aligned with BIS fire safety norms",
      ],
      typicalDeployment: "Commercial buildings, hotels, hospitals, and government facilities.",
      oemBrands: ["Honeywell", "Morley", "Notifier", "Edwards"],
      image: "/images/services/solutions/security-fire-alarm.jpg",
    },
    {
      title: "Home Automation",
      description:
        "Security, thermostats, lighting, and entertainment controlled from a single app — so the system gets used rather than bypassed.",
      benefits: [
        "Single-app control for security, climate, lighting, and entertainment",
        "Access control handling domestic staff schedules automatically",
        "Security scenes tying cameras, lighting, and locks together",
      ],
      typicalDeployment: "Modern residences and luxury apartments where security and convenience coexist.",
      oemBrands: ["Hikvision", "Honeywell"],
      image: "/images/services/solutions/security-home-automation.jpg",
    },
  ],

  industries: [
    {
      segmentSlug: "enterprises",
      title: "Enterprises",
      description:
        "Perimeter, parking, server room, and access point coverage — with access control integrated into attendance and visitor management.",
    },
    {
      segmentSlug: "hotels",
      title: "Hotels & Hospitals",
      description:
        "Surveillance in common areas and perimeters, access control for guest floors, and fire alarm integration with evacuation protocols.",
    },
    {
      segmentSlug: "government",
      title: "Government",
      description:
        "Surveillance with retention aligned to regulatory norms, role-based access control, and documented test schedules.",
    },
    {
      segmentSlug: "residential",
      title: "Residential",
      description:
        "Careful camera placement, access control for domestic staff, and home automation tying security to lighting and climate.",
    },
  ],

  faqs: [
    {
      question: "How long should CCTV footage be retained?",
      answer:
        "It depends on the site's requirements. Commercial offices typically need 15–30 days. Government and regulated facilities may need longer. We size NVR storage for the actual retention requirement, not the default package.",
    },
    {
      question: "Can access control integrate with our existing HR system?",
      answer:
        "Yes. We configure biometric and card-based access control to feed attendance data into your HR or payroll system, eliminating manual tracking.",
    },
    {
      question: "How is the fire alarm system maintained?",
      answer:
        "Scheduled servicing aligned with BIS norms — detector inspection, alarm verification, battery testing, panel functionality checks, and zone mapping verification. Every visit is documented for audit readiness.",
    },
    {
      question: "Can home automation and security work together?",
      answer:
        "Yes. We design systems where a single app controls surveillance, access, lighting, climate, and entertainment — with automated scenes that tie them together.",
    },
  ],

  ctaHeadline: "Planning a Security System?",
  ctaDescription:
    "We'll assess your site's risks and design an integrated system that works when it matters.",
  ctaButtonText: "Talk to an IBS Engineer",
};

// ===========================================================================
// 5. CALL CENTER SOLUTIONS
// ===========================================================================
const callCenterSolutions: ServicePageData = {
  slug: "call-center-solutions",

  heroHeadline: "Call Centers That Measure Up",
  heroSubheadline:
    "Headsets, GSM/PRI gateways, CRM-integrated dialers, and voice logging — the full contact center stack, supported by one team.",
  heroPrimaryCta: "Plan Your Contact Center",
  heroSecondaryCta: "View Capabilities",

  solutions: [
    {
      title: "Agent Headsets",
      description:
        "Full-shift comfort, noise reduction, and platform compatibility — verified across the audio chain from caller to recording.",
      benefits: [
        "Full-shift comfort for extended wear",
        "Noise reduction for open-floor environments",
        "Audio chain verified from caller to recording system",
      ],
      typicalDeployment: "Any contact center where agents wear headsets for full shifts.",
      oemBrands: ["Jabra", "Sennheiser"],
      image: "/images/services/solutions/callcenter-headsets.jpg",
    },
    {
      title: "GSM & PRI Gateways",
      description:
        "Connectivity sized against actual call-volume data — peak concurrency, answer-seizure ratios, and campaign patterns.",
      benefits: [
        "Capacity matched to real call-volume data",
        "Cost-optimized mix of GSM and PRI based on call profile",
        "Failover configuration for uninterrupted operations",
      ],
      typicalDeployment: "Outbound sales teams and blended inbound/outbound contact centers.",
      oemBrands: ["Alcatel-Lucent", "Cisco", "D-Link"],
      image: "/images/services/solutions/callcenter-gateways.jpg",
    },
    {
      title: "CRM-Integrated Dialer",
      description:
        "Predictive dialing with customer history surfacing on connect — automated dialing modes matched to campaign type.",
      benefits: [
        "Customer history on screen at call connect",
        "Automated dialing in predictive, progressive, preview, or manual mode",
        "Performance dashboards in real time",
      ],
      typicalDeployment: "Sales and support contact centers needing CRM integration and campaign automation.",
      oemBrands: [],
      image: "/images/services/solutions/callcenter-crm-dialer.jpg",
    },
    {
      title: "Voice Logger & Auto Dialer",
      description:
        "Call recording across analog, PRI, and VoIP lines — paired with automated outbound dialing and performance dashboards.",
      benefits: [
        "Universal recording across all line types in one system",
        "Dialing modes matched to campaign type and compliance",
        "Performance dashboards surfacing bottlenecks in real time",
      ],
      typicalDeployment: "Regulated contact centers and outbound sales teams requiring compliance recording.",
      oemBrands: [],
      image: "/images/services/solutions/callcenter-voice-logger.jpg",
    },
  ],

  industries: [
    {
      segmentSlug: "enterprises",
      title: "Enterprises",
      description:
        "Full-stack integration — headsets, connectivity, dialer, CRM, and recording — with one escalation path.",
    },
    {
      segmentSlug: "hotels",
      title: "Hotels & Hospitals",
      description:
        "Call routing for reservations, guest inquiries, patient scheduling, and service requests across multiple locations.",
    },
    {
      segmentSlug: "soho",
      title: "SOHO",
      description:
        "Enterprise-grade dialer and recording capabilities scaled to smaller agent counts.",
    },
  ],

  faqs: [
    {
      question: "What is the difference between predictive and progressive dialing?",
      answer:
        "Predictive dialing calls multiple numbers simultaneously, maximizing agent talk time but risking abandoned calls. Progressive dialing calls one number per available agent — no abandoned calls, but lower utilization. We configure the mode based on campaign type and compliance requirements.",
    },
    {
      question: "Do we need a GSM gateway if we have ISDN lines?",
      answer:
        "GSM gateways are most cost-effective for outbound calls to mobiles. If your traffic is primarily inbound or to landlines, existing ISDN may be better. We analyze actual call patterns to recommend the right mix.",
    },
    {
      question: "Can the dialer integrate with our existing CRM?",
      answer:
        "Yes. The platforms we deploy support API connections and screen-pop protocols compatible with common CRM systems. Customer records surface automatically when a call connects.",
    },
  ],

  ctaHeadline: "Planning a Contact Center Upgrade?",
  ctaDescription:
    "We'll design the full stack — headsets, connectivity, dialer, and recording — as one integrated system.",
  ctaButtonText: "Talk to an IBS Engineer",
};

// ===========================================================================
// 6. SOFTWARE LICENSES
// ===========================================================================
const softwareLicenses: ServicePageData = {
  slug: "software-licenses",

  heroHeadline: "Licensed, Compliant, Under Control",
  heroSubheadline:
    "Genuine software licenses for Zoom, Microsoft 365, Adobe, Webex, and security software — sourced through authorized channels and documented for audit readiness.",
  heroPrimaryCta: "Audit Your Licenses",
  heroSecondaryCta: "View Capabilities",

  solutions: [
    {
      title: "Collaboration & Productivity",
      description:
        "Zoom, Webex, Microsoft 365, and Windows licenses — audited, consolidated, and sourced through authorized channels.",
      benefits: [
        "Genuine licenses with valid support entitlements",
        "Consolidated tenant management — one admin view",
        "Renewal calendar preventing lapses and surprises",
      ],
      typicalDeployment: "Organizations standardizing their collaboration stack or cleaning up license sprawl.",
      oemBrands: ["Zoom", "Microsoft"],
      image: "/images/services/solutions/software-collaboration.jpg",
    },
    {
      title: "Creative & Enterprise Applications",
      description:
        "Adobe applications and ERP software — managed from procurement through assignment to renewal.",
      benefits: [
        "Current Adobe applications with up-to-date features and security",
        "User assignment management reclaiming seats from departed employees",
        "ERP licensing through authorized vendor channels",
      ],
      typicalDeployment: "Design teams needing current creative tools and operations running ERP software.",
      oemBrands: ["Adobe"],
      image: "/images/services/solutions/software-creative-apps.jpg",
    },
    {
      title: "Security Software",
      description:
        "Antivirus and endpoint protection — renewal managed so security software never lapses and features match requirements.",
      benefits: [
        "Continuous update access keeping protection current",
        "Feature licensing matched to security requirements",
        "Compliance-ready documentation",
      ],
      typicalDeployment: "Any organization where endpoint protection is required for operational or regulatory compliance.",
      oemBrands: [],
      image: "/images/services/solutions/software-security.jpg",
    },
  ],

  industries: [
    {
      segmentSlug: "enterprises",
      title: "Enterprises",
      description:
        "Where license sprawl accumulates fastest — multiple departments, independent purchases, no central tracking. We audit, consolidate, and manage the full lifecycle.",
    },
    {
      segmentSlug: "hotels",
      title: "Hotels & Hospitals",
      description:
        "Multiple software platforms — property management, POS, guest services — each with licensing requirements managed in one portfolio.",
    },
    {
      segmentSlug: "government",
      title: "Government",
      description:
        "Genuine licensing and documented proof of purchase — non-negotiable for procurement and compliance requirements.",
    },
    {
      segmentSlug: "soho",
      title: "SOHO",
      description:
        "Right-sized licenses, proper tenant setup, and managed renewals for lean IT teams.",
    },
  ],

  faqs: [
    {
      question: "Can you maintain systems that IBS didn't install?",
      answer:
        "Yes, with an initial assessment. If the system was installed to a reasonable standard and is OEM-compatible, we can build an AMC around it. If there are gaps, we recommend remediation first.",
    },
    {
      question: "Is it more cost-effective to have an AMC or pay for repairs as needed?",
      answer:
        "For organizations with multiple technology systems, AMC is almost always more cost-effective. Scheduled maintenance catches issues early when the fix is small — versus waiting for a disruptive, expensive failure.",
    },
  ],

  ctaHeadline: "Need to Get Your Licensing Under Control?",
  ctaDescription:
    "We'll audit what you have, consolidate what's scattered, and build a renewal calendar.",
  ctaButtonText: "Talk to an IBS Engineer",
};

// ===========================================================================
// 7. ANNUAL MAINTENANCE SERVICE
// ===========================================================================
const annualMaintenanceService: ServicePageData = {
  slug: "annual-maintenance-service",

  heroHeadline: "Your Systems Deserve More Than Hope",
  heroSubheadline:
    "Scheduled preventive maintenance, emergency response, and compliance-aligned servicing — for every system IBS installed.",
  heroPrimaryCta: "Discuss an AMC Plan",
  heroSecondaryCta: "View Capabilities",

  solutions: [
    {
      title: "Preventive Maintenance",
      description:
        "Scheduled servicing based on system type and risk profile — firmware updates, calibration, cleaning, and health checks before problems become outages.",
      benefits: [
        "Service calendar tailored to your system mix",
        "OEM-aligned maintenance intervals",
        "Issues caught before they become disruptions",
      ],
      typicalDeployment: "Any organization with IBS-installed systems needing ongoing reliability.",
      oemBrands: [],
      image: "/images/services/solutions/amc-preventive.jpg",
    },
    {
      title: "Emergency Response",
      description:
        "Defined escalation matrix with target response times — the right technician dispatched based on system type and severity.",
      benefits: [
        "Escalation matrix routing issues to the right technician",
        "Target response times based on severity",
        "Documented fault and resolution records",
      ],
      typicalDeployment: "Mission-critical environments where downtime directly affects operations.",
      oemBrands: [],
      image: "/images/services/solutions/amc-emergency.jpg",
    },
    {
      title: "Compliance & Documentation",
      description:
        "Service logs, checklists, and health summaries after every visit — building a maintenance history for audit readiness.",
      benefits: [
        "Service logs and checklists after every visit",
        "BIS and STQC-aligned maintenance where applicable",
        "Audit-ready documentation always compiled",
      ],
      typicalDeployment: "Government facilities, hospitals, and regulated industries requiring documented maintenance.",
      oemBrands: [],
      image: "/images/services/solutions/amc-compliance.jpg",
    },
  ],

  industries: [
    {
      segmentSlug: "enterprises",
      title: "Enterprises",
      description:
        "Multiple technology systems maintained by the same team that installed them — with original documentation on hand.",
    },
    {
      segmentSlug: "hotels",
      title: "Hotels & Hospitals",
      description:
        "24/7 operational reality with emergency response protocols, fire alarm maintenance, and AV servicing for event spaces.",
    },
    {
      segmentSlug: "government",
      title: "Government",
      description:
        "Service logs and health summaries formatted for audit readiness, with maintenance aligned to BIS and STQC norms.",
    },
    {
      segmentSlug: "residential",
      title: "Residential",
      description:
        "Surveillance, access control, and automation maintained with scheduled visits and emergency response.",
    },
  ],

  faqs: [
    {
      question: "What does an Annual Maintenance Contract actually cover?",
      answer:
        "Ongoing servicing, maintenance, and emergency support for installed systems — scheduled preventive visits, firmware updates, calibration checks, and emergency response with a defined escalation matrix. Scope, frequency, and response times are documented in the contract.",
    },
    {
      question: "How is the maintenance schedule determined?",
      answer:
        "Three inputs: the asset inventory, OEM-recommended service intervals, and the site's risk profile. Communication and AV get quarterly visits. Fire alarm panels get half-yearly servicing. UPS battery load tests are annual.",
    },
    {
      question: "What happens if something breaks between scheduled visits?",
      answer:
        "Every AMC includes an emergency response protocol with a defined escalation matrix and target response time. Issues are routed to the appropriate technician based on system type and severity.",
    },
    {
      question: "What's included in a fire alarm maintenance visit?",
      answer:
        "Visual inspection of all detectors and call points, smoke detector cleaning, alarm and sounder testing, battery and backup power testing, panel functionality checks, zone mapping verification, and event log review — all documented in the service log.",
    },
  ],

  ctaHeadline: "Your Systems Deserve More Than Hope",
  ctaDescription:
    "We'll inventory your assets, build a service calendar, and keep every system performing as designed.",
  ctaButtonText: "Discuss an AMC Plan",
};

// ===========================================================================
// EXPORT MAP
// ===========================================================================
export const servicePageDataMap: Record<string, ServicePageData> = {
  "voice-communication": voiceCommunication,
  "audio-video-boardroom-solutions": audioVideoBoardroomSolutions,
  "it-infrastructure": itInfrastructure,
  "security-solutions": securitySolutions,
  "call-center-solutions": callCenterSolutions,
  "software-licenses": softwareLicenses,
  "annual-maintenance-service": annualMaintenanceService,
};