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
    {
      question: "Can our existing PBX be upgraded, or do we need a full replacement?",
      answer:
        "It depends on the platform and its age. Some legacy PBX systems support add-on SIP cards or migration paths. If the hardware is end-of-life, we plan a phased transition so operations continue while the new system is brought online.",
    },
    {
      question: "How long does a typical IP-PBX installation take?",
      answer:
        "A straightforward system for 50–100 users typically takes two to three weeks from delivery to commissioning, including cabling, configuration, and user training. Larger or multi-site deployments take longer depending on scope.",
    },
    {
      question: "Do you work on projects outside Delhi/NCR?",
      answer:
        "Yes. IBS is based in Dwarka, New Delhi, but handles installation and commissioning at client sites across India. Travel and logistics are factored into project planning.",
    },
    {
      question: "Which brands do you typically recommend for IP telephony?",
      answer:
        "We work with Matrix, Cisco, and Alcatel-Lucent for PBX platforms. Handset recommendations depend on the PBX chosen and the user's work profile — desk-based, mobile, or shared. We recommend based on compatibility and long-term support availability.",
    },
    {
      question: "Can you maintain a phone system installed by another vendor?",
      answer:
        "Yes, after an initial assessment. If the system was installed to a reasonable standard and is OEM-compatible, we can build a maintenance plan around it. If there are gaps in documentation or configuration, we recommend remediation first.",
    },
    {
      question: "Can we add more extensions or lines as the company grows?",
      answer:
        "That is one of the primary advantages of IP-PBX. Extensions are added via software licenses rather than physical hardware. SIP trunks can be scaled by increasing channel capacity with your provider.",
    },
    {
      question: "What happens after the voice system goes live?",
      answer:
        "We fold every voice install into our Annual Maintenance Contract — covering firmware updates, call-flow adjustments, SIP trunk capacity reviews, and quarterly health checks so issues are caught before they cause outages.",
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
    {
      question: "Can our existing AV system be upgraded, or does it need full replacement?",
      answer:
        "We assess each component individually. Cameras, displays, and control systems that still meet requirements are retained. Upgrades are targeted at what's actually limiting performance — mic quality, processing, or connectivity.",
    },
    {
      question: "How long does a typical boardroom AV installation take?",
      answer:
        "A single boardroom typically takes one to two weeks for installation and commissioning, including DSP tuning and control system programming. Multi-room projects are phased to minimize disruption.",
    },
    {
      question: "Do you work on projects outside Delhi/NCR?",
      answer:
        "Yes. IBS handles AV installations at client sites across India. For large or multi-site projects, we plan logistics and staging to keep timelines on track.",
    },
    {
      question: "Which brands do you recommend for conferencing equipment?",
      answer:
        "It depends on the conferencing platform and room requirements. For video, we work with Poly, Cisco, and Logitech. For audio processing, Biamp, Shure, and QSC. Recommendations are driven by the platform you standardize on and the room's acoustics.",
    },
    {
      question: "Can you maintain AV systems installed by another vendor?",
      answer:
        "Yes, after reviewing the existing installation. If the equipment is OEM-supported and the cabling and configuration are sound, we can take over maintenance. Documentation gaps are addressed during the initial assessment.",
    },
    {
      question: "Do you offer AMC for AV and conferencing systems?",
      answer:
        "Yes. Our AMC covers scheduled preventive visits for audio systems, display calibration, firmware updates on conferencing equipment, and emergency response for in-room failures. Frequency and scope are tailored to the equipment and usage.",
    },
    {
      question: "What happens after the AV system is installed?",
      answer:
        "We document every input label, macro, and configuration so future servicing is straightforward. Our AMC then covers DSP and mixer calibration, cable integrity checks, and video conferencing platform support on a scheduled basis.",
    },
    {
      question: "Can the AV system expand if our company grows?",
      answer:
        "Yes. We specify equipment with growth in mind — additional displays, microphones, or rooms can be added to the same control infrastructure. Room booking and AV platforms scale with additional licenses and endpoints.",
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
    {
      question: "Can our existing network infrastructure be upgraded incrementally?",
      answer:
        "In most cases, yes. We assess what's still serviceable — switches, cabling, rack space — and layer in upgrades where they have the most impact. Full replacement is only recommended when the existing infrastructure is end-of-life or fundamentally underspecified.",
    },
    {
      question: "How long does a structured cabling installation take for a new office?",
      answer:
        "It depends on floor area and outlet density. A typical 5,000 sq ft office with 80–100 drops takes roughly two to three weeks including conduit, cable pulling, termination, testing, and documentation. Larger spaces are phased by floor or zone.",
    },
    {
      question: "Do you work on projects outside Delhi/NCR?",
      answer:
        "Yes. IBS handles network infrastructure projects at client sites across India. Staging and pre-configuration are done at our facility to minimize on-site time.",
    },
    {
      question: "How do you handle a multi-floor office cabling project?",
      answer:
        "We plan fiber backbone runs between floors and IDF/MDF placements before cabling begins. Every run is documented from patch panel to outlet, with cable paths designed for future expansion — not just the immediate headcount.",
    },
    {
      question: "Do you offer AMC for IT infrastructure?",
      answer:
        "Yes. We fold IT infrastructure installs into our Annual Maintenance Contract — covering firewall firmware and signature updates, Wi-Fi optimization, UPS battery load testing, and switch health checks on a scheduled basis.",
    },
    {
      question: "Which firewall brands do you work with?",
      answer:
        "We specify firewalls from Fortinet, Sophos, and Cisco based on the site's throughput requirements and security posture. The recommendation follows the project's budget and risk profile, not a single brand relationship.",
    },
    {
      question: "Can you maintain IT infrastructure installed by another vendor?",
      answer:
        "Yes, after an initial audit. We document the existing setup, verify configurations, and flag any issues before starting maintenance. If the installation is incomplete or undocumented, we recommend a remediation pass first.",
    },
    {
      question: "Do you offer AMC for servers, networking, and UPS systems?",
      answer:
        "Yes. Our AMC covers scheduled preventive maintenance, firmware and signature updates for firewalls, UPS battery load testing, Wi-Fi health checks, and emergency response. The scope and frequency are matched to your installed equipment.",
    },
    {
      question: "Can the network be expanded later as the company grows?",
      answer:
        "All infrastructure we deploy includes growth headroom — spare switch ports, rack space, and conduit capacity. Adding users, access points, or new network segments later does not require a forklift upgrade.",
    },
    {
      question: "Do you document the full network after installation?",
      answer:
        "Yes. We document every IP address, VLAN, patch panel label, and UPS runtime estimate. Complete documentation is part of every handover and is kept current through AMC visits.",
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
      oemBrands: ["Dahua", "Axis", "Pelco"],
      image: "/images/services/solutions/security-cctv.jpg",
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
      image: "/images/services/solutions/security-access-control.jpg",
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
    {
      question: "Can our existing CCTV system be upgraded, or do we need to replace it?",
      answer:
        "Cameras that still produce usable footage and are OEM-supported can be retained. We add cameras where coverage is insufficient and upgrade the NVR if storage or channel capacity is the bottleneck. Selective upgrades are common.",
    },
    {
      question: "How long does a typical security system installation take?",
      answer:
        "A standard commercial CCTV and access control deployment for a mid-size office takes two to three weeks. Fire alarm systems take additional time due to zone mapping, panel programming, and regulatory coordination. Timelines are provided after the site survey.",
    },
    {
      question: "Do you work on projects outside Delhi/NCR?",
      answer:
        "Yes. IBS handles security installations at client sites across India. We coordinate logistics and schedule on-site work to minimize disruption.",
    },
    {
      question: "Which camera and access control brands do you recommend?",
      answer:
        "For CCTV, we work with Dahua, Axis, and Hikvision depending on resolution requirements and budget. For access control, eSSL, HID, and Honeywell. Brand selection is driven by the site's requirements, integration needs, and long-term support availability.",
    },
    {
      question: "Can you maintain security systems installed by another vendor?",
      answer:
        "Yes, subject to an initial assessment. We verify camera placement, NVR configuration, access control programming, and fire alarm zone mapping. If the original installation is OEM-compliant, we can take over maintenance directly.",
    },
    {
      question: "Do you offer AMC for security and fire alarm systems?",
      answer:
        "Yes. AMC covers scheduled camera and NVR health checks, access control reader cleaning and calibration, and full fire alarm servicing per BIS norms. Emergency response for faults is included in every contract.",
    },
    {
      question: "Do you install both commercial and residential security systems?",
      answer:
        "Yes. We cover commercial sites with integrated CCTV, access control, and fire alarm, as well as residences with selective camera placement, home automation, and access control sized for domestic use.",
    },
    {
      question: "Can we view CCTV footage remotely?",
      answer:
        "Yes. The camera systems we deploy support remote monitoring so authorized personnel can access live and recorded footage from off-site.",
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
      oemBrands: ["Jabra", "Sennheiser", "Poly"],
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
      question: "Can IBS integrate with our existing CRM or PBX system?",
      answer:
        "Yes. We integrate with existing CRM platforms via API or screen-pop protocols, and connect to IP-PBX systems from Cisco, Alcatel-Lucent, and Matrix. The goal is to avoid a rip-and-replace — we work with what is already deployed and add the pieces that are missing.",
    },
    {
      question: "Do you provide installation, training, and ongoing support across India?",
      answer:
        "Yes. Based in Dwarka, New Delhi, IBS handles installation and commissioning at client sites across India, with training for your team during handover. Post-installation, our AMC covers scheduled maintenance, firmware updates, and on-call troubleshooting so the system stays current.",
    },
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
    {
      question: "Can existing call center equipment be upgraded without replacing everything?",
      answer:
        "Yes. If your PBX, headsets, or gateway hardware are still OEM-supported and meet capacity requirements, they can be retained. We layer in the missing components — dialer software, CRM integration, or voice logging — around what you already have.",
    },
    {
      question: "How long does a typical contact center installation take?",
      answer:
        "A 50-seat setup with dialer, CRM integration, and voice logging typically takes three to four weeks from delivery to full commissioning, including agent training. Larger or multi-site deployments are phased and take longer.",
    },
    {
      question: "Do you offer AMC for call center systems?",
      answer:
        "Yes. AMC covers the full stack — PBX health checks, gateway and SIP trunk monitoring, dialer software updates, voice logger storage verification, and headset replacement logistics. Emergency response is included for any component failure.",
    },
    {
      question: "Can the system expand if we add more agents?",
      answer:
        "Yes. IP-based call center platforms scale through software licenses and additional headsets. We specify the PBX and gateway with headroom so that adding agents does not require hardware replacement.",
    },
    {
      question: "Do you provide training for agents and supervisors?",
      answer:
        "Yes. Training is included during handover — covering headset usage, dialer operation, CRM screen-pop workflows, and voice logger retrieval so your operations team can manage day-to-day tasks independently.",
    },
    {
      question: "Can voice logging work across both analog and VoIP lines?",
      answer:
        "Yes. The voice logging systems we deploy record across analog, PRI, and VoIP lines in one system, so a blended contact center does not need separate recording infrastructure.",
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
      question: "How does IBS verify that licenses are genuine?",
      answer:
        "All licenses are sourced through authorized distribution channels. We provide proof of purchase, subscription credentials, and support entitlement documentation for every license we supply.",
    },
    {
      question: "Can you consolidate licenses purchased from different vendors?",
      answer:
        "Yes. We audit what's currently deployed, identify duplicate or unused seats, and consolidate management under a single admin view where the platform supports it — reducing overhead and catching waste.",
    },
    {
      question: "What happens when a license renewal is approaching?",
      answer:
        "We maintain a renewal calendar for every license in your portfolio. You receive advance notice with cost and options before the renewal date, so nothing lapses unexpectedly.",
    },
    {
      question: "Do you help with license compliance audits?",
      answer:
        "Yes. We reconcile deployed installations against purchased licenses and flag any gaps. The result is a compliance report you can present to management or to software auditors.",
    },
    {
      question: "Can you manage licenses for software we bought before engaging IBS?",
      answer:
        "Yes. We on-board your existing license inventory, verify entitlements, and add them to the renewal calendar. The goal is a single point of management regardless of where the licenses were originally purchased.",
    },
    {
      question: "What software brands can you source licenses for?",
      answer:
        "We source licenses for Zoom, Microsoft 365, Windows, Adobe, Webex, and common endpoint security platforms. If you need something outside this list, we check authorized channel availability.",
    },
    {
      question: "Can you help us right-size our licensing to avoid overpaying?",
      answer:
        "Yes. We map actual usage against what's licensed — identifying underutilized seats, users who left but still have assignments, and features you're paying for but not using. Adjustments are made before the next renewal cycle.",
    },
    {
      question: "Do you offer volume licensing or enterprise agreements?",
      answer:
        "We work with authorized channels that offer volume pricing. If your organization meets the threshold, we structure the purchase through the appropriate enterprise or volume program to reduce per-seat cost.",
    },
    {
      question: "How long does it take to set up new licenses?",
      answer:
        "For cloud-subscription licenses like Microsoft 365 or Zoom, provisioning is typically same-day once the order is placed. Perpetual licenses with physical media or device-based activations take longer depending on the vendor.",
    },
    {
      question: "Can you maintain systems installed by another vendor?",
      answer:
        "Yes, with an initial assessment. If the system was installed to a reasonable standard and is OEM-compatible, we can build an AMC around it. If there are gaps, we recommend remediation first.",
    },
    {
      question: "Can you help us consolidate licenses from multiple vendors?",
      answer:
        "Yes. We start with an audit of what's deployed, assigned, and actually used across the organization, then consolidate into a managed portfolio with a single renewal calendar and one admin view.",
    },
    {
      question: "Do you only sell licenses, or do you also deploy the software?",
      answer:
        "IBS handles the full lifecycle — auditing current deployments, sourcing genuine licenses through authorized channels, managing user assignments, and maintaining the renewal calendar and compliance documentation.",
    },
    {
      question: "What happens if we need to add or remove users mid-contract?",
      answer:
        "We manage the tenant so license additions and removals are handled promptly. For platforms like Microsoft 365 and Zoom, we adjust seat counts and reassign licenses as your team changes — so you're not paying for departed employees.",
    },
    {
      question: "Do you offer volume discounts?",
      answer:
        "We source through authorized channels and work with the licensing programs each vendor offers. For larger deployments, we structure the purchase to align with the vendor's volume pricing tiers.",
    },
    {
      question: "Which collaboration platforms do you work with most?",
      answer:
        "The collaboration stack is where most licensing spend concentrates — Zoom and Webex for video conferencing, and Microsoft 365 for email and Office applications. We source and manage licenses for all three.",
    },
    {
      question: "Can you help with software compliance audits?",
      answer:
        "Yes. We maintain the license inventory, proof-of-purchase records, and renewal calendar in one place. If a vendor audit or regulatory review is triggered, the documentation is ready — turning a potentially disruptive exercise into a straightforward one.",
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
    {
      question: "Can you take over AMC for systems installed by another vendor?",
      answer:
        "Yes, after an initial assessment. We document the existing setup, verify configurations, and identify any gaps. If the installation is OEM-compliant and reasonably documented, we can take over directly. Otherwise, remediation is recommended first.",
    },
    {
      question: "How long does it take to set up a new AMC?",
      answer:
        "A new AMC typically takes one to two weeks to finalize — covering asset inventory, service schedule definition, escalation matrix, and contract documentation. For systems we installed, the setup is faster since documentation already exists.",
    },
    {
      question: "Does AMC cover hardware replacement, or only servicing?",
      answer:
        "Standard AMC covers preventive maintenance, firmware updates, and emergency troubleshooting. Hardware replacement — spares like handsets, hard drives, or access control readers — can be included as part of the contract scope, with terms specified upfront.",
    },
    {
      question: "Can the AMC scope be expanded if we add new systems later?",
      answer:
        "Yes. If you install new systems — whether by IBS or another vendor — they can be added to the existing AMC. We update the asset inventory and adjust the service schedule and pricing accordingly.",
    },
    {
      question: "Do you work outside Delhi/NCR?",
      answer:
        "Yes. IBS provides AMC support at client sites across India from our base in Dwarka, New Delhi.",
    },
    {
      question: "How quickly do you respond to emergency calls?",
      answer:
        "Response times are defined in the contract based on system type and severity, with a documented escalation matrix routing issues to the right technician. The exact target depends on the site's operational requirements and the AMC tier selected.",
    },
    {
      question: "Can an AMC cover multiple locations?",
      answer:
        "Yes. We build AMC packages around the full system inventory across all locations, with a single service calendar and consolidated reporting. Visit frequency is determined by the system mix and risk profile at each site.",
    },
    {
      question: "What brands do you support under AMC?",
      answer:
        "We maintain the same OEM brands we install — Alcatel-Lucent, NEC, and Cisco for voice; Fortinet and Sophos for firewalls; Hikvision, Dahua, and Axis for CCTV; Honeywell, Morley, and Edwards for fire alarm; and Biamp, Crestron, and Shure for AV.",
    },
    {
      question: "What documentation do we receive after each maintenance visit?",
      answer:
        "A service log with date, technician name, systems inspected, actions taken, and observations. For regulated sites, the log is formatted to support audit requirements. Health summaries are provided periodically.",
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