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
    body: [
      "Most offices still run voice on a mix of legacy TDM switches, analog lines, and newer SIP trunks, and that mix is rarely planned — it accumulates as the business moves buildings, adds floors, or absorbs another team. We start a voice project by auditing what is already on site, then design an IP-PBX or KTS rollout that reuses the cabling and handsets worth keeping and replaces only what is genuinely end-of-life. The result is one dial plan, one voicemail system, and one set of call-routing rules across every desk, instead of the patchwork most teams have been tolerating.",
      "For sites that have already moved to SIP, the work shifts to integration: connecting the SIP trunk to the existing CRM so inbound calls pop the customer record, configuring hunt groups so the right team picks up, and setting up remote-site extensions so a salesperson working remotely can take an office call on their laptop. We work with Alcatel-Lucent, NEC, and Cisco platforms — the same brands already in use across most of the region's offices — and pick the one that fits the existing hardware rather than forcing a rip-and-replace.",
      "After go-live, voice systems tend to get ignored until something breaks. We fold every voice install into our Annual Maintenance Contract so firmware updates, call-flow tweaks, and capacity reviews happen on a schedule instead of after an outage. That matters more than it sounds: a voicemail box that fills up, a SIP trunk that hits its concurrent-call limit, or a handset firmware bug that drops calls every Tuesday are all things a quarterly health check catches weeks before anyone notices.",
    ],
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
    body: [
      "Boardroom AV fails for predictable reasons: the room was designed around one conferencing platform and the company switched to another, the touchscreen has twenty macro buttons nobody remembers how to use, or the ceiling mics pick up the air-conditioning louder than the speaker. We design around how the room is actually used — which platform the team has standardized on, how many people typically join remotely, whether the room doubles as a training space — and specify DSP tuning, camera placement, and a single-touch start sequence so the first minute of every meeting is not spent guessing which button to press.",
      "For larger spaces — auditoriums, training rooms, banquet halls in hotels — the engineering trade-offs are different. Public address systems have to cover the whole room without feedback, video walls need to stay legible from the back row, and microphones have to handle multiple speakers without someone riding a mixer the entire event. We work with Kramer, Crestron, Extron, Biamp, and Shure for the DSP, control, and mic infrastructure those rooms depend on, and we document every input label and macro so the next engineer who touches the room does not have to reverse-engineer it.",
      "Classroom and training-room installs get a different lens: the equipment has to survive being used by people who are not AV engineers, the connectivity has to handle whatever laptop or tablet a guest walks in with, and the lighting and acoustics have to work for both in-person and remote attendees. We pair the displays and audio with a room-booking system that ties into the calendar the team already uses, so the room itself reports when it is free and the AV powers down automatically when the booking ends.",
    ],
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
      "Storage, servers, routers, firewalls, cabling, and power backup — the components a network and data center actually run on.",
    intro:
      "We install, configure, and support the infrastructure a network depends on, and stay involved after go-live for troubleshooting and upgrades as the setup grows.",
    body: [
      "Network infrastructure is where most offices quietly accumulate technical debt. A firewall bought in 2018, a switch added during a floor expansion in 2021, an access point bolted on when Wi-Fi got spotty in the corner office — none of it was planned together, and the cabling documentation stopped being accurate somewhere around the second move. We start every infrastructure engagement with a site survey and a cabling audit, because every later decision (where to put the new rack, which switch port to patch, whether the existing UPS can handle another server) depends on knowing what is actually in the walls.",
      "For new builds and fit-outs, the work is cleaner: structured cabling laid out before the drywall goes up, a network rack sized for the next five years of growth, fiber runs between buildings or floors planned in advance, and Wi-Fi access points placed based on a coverage survey rather than guesswork. We work with D-Link, Netgear, Cisco, HP Aruba, Ruckus, and Fortinet for switching and routing, APC, Vertiv, and Eaton for power and cooling, and Dell and Synology for storage — and we recommend based on the project's budget and support expectations, not on a single brand relationship.",
      "Firewall and UPS are the two pieces most sites under-spec. A firewall sized for headroom at peak load does not become the bottleneck when the team grows; an online UPS that stays continuously on inverter power keeps a server room running through power fluctuations every monsoon. We document every IP, every VLAN, every patch panel label, and every UPS runtime estimate, and we fold the whole install into an AMC so the firmware stays current and the battery gets tested on a schedule instead of after it fails.",
    ],
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
    body: [
      "Security installations tend to get specified camera-by-camera, with the result that footage is collected but never reviewed, access control logs sit untouched, and fire alarm panels get tested only when the auditor visits. We take the opposite approach: the camera placement, the NVR storage retention, the access control event log, and the fire alarm test schedule are all designed together so the system is actually usable when something happens — not just checked off as installed.",
      "For commercial sites, that usually means Hikvision, Dahua, or Axis cameras covering entrances, parking, and critical aisles, with eSSL or HID readers on the doors that matter and a Honeywell, Morley, or Edwards fire panel tied into the building's evacuation plan. We integrate access control with attendance and visitor management so the same badge that opens the door also logs the working hours, and we make sure the fire alarm and access control talk to each other so doors release automatically on an evacuation signal.",
      "Residential work is a different shape: fewer cameras but more careful placement, home automation tying security to lighting and entertainment so a single app controls the house, and access control that handles domestic staff schedules without the homeowner managing PIN codes. We use the same OEM brands across both segments — the reliability math does not change because the building is a home — but the configuration, retention, and support cadence are sized to how a residence actually runs.",
    ],
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
    body: [
      "A contact center lives or dies on three things: the agent can hear the caller clearly, the dialer keeps talk-time high without dropping leads, and every call is recorded and retrievable when a dispute or compliance question comes up weeks later. We specify all three layers together rather than letting a headset vendor, a dialer vendor, and a recording vendor each point at the other when audio quality drops. The result is fewer tickets about echo or one-way audio, and a single escalation path when something does go wrong mid-shift.",
      "The connectivity layer is where most contact centers bleed money. A GSM gateway sized for the right number of concurrent outbound calls cuts ISDN line costs dramatically; a PRI gateway bridges an existing ISDN setup to a newer IP-PBX without a forklift upgrade. We size both based on actual call-volume data — not the supplier's spec sheet — and we configure the routing rules so the dialer uses the cheapest trunk that still hits the answer-seizure ratio target.",
      "On the software side, the CRM and dialer integration is what separates a contact center from a room full of people on phones. We deploy CRM and predictive-dialer platforms that surface customer history on the agent's screen the moment the call connects, automate dialing in preview, progressive, or predictive mode depending on the campaign, and log every call across analog, PRI, and VoIP lines for compliance. Performance dashboards show drop rates, average handle times, and agent-level talk-time so the operations team can spot a bottleneck before it shows up in the weekly report.",
    ],
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
    body: [
      "Most licensing problems in offices are quiet: a Microsoft 365 tenant where half the users are on Business Basic and the other half are on Business Standard but nobody remembers who approved the split, a Zoom plan that renews automatically at a higher tier than the team needs, or a fleet of Adobe seats assigned to people who left the company a year ago. We start a licensing engagement with an audit — what is actually deployed, what is actually assigned, what is actually being used — and consolidate the tenant so the renewal matches reality.",
      "The collaboration stack is where most of the spend concentrates: Zoom and Webex for video, Microsoft 365 for email and Office, and Adobe for the design and marketing team. We source genuine licenses through authorized channels (not gray-market resellers), so the manufacturer warranty and support entitlements actually apply, and we manage the renewal calendar so a plan does not lapse mid-quarter or auto-renew at the wrong tier. For ERP and security software, we handle the licensing and the vendor relationship so the IT team is not chasing invoices from three different suppliers.",
      "Compliance is the unglamorous reason this matters. A software audit — whether triggered by a vendor, a customer's due diligence, or a regulatory review — turns up unlicensed installs fast, and the penalty math is never favorable. Genuine licensing with documented proof of purchase is the only defense that holds up. We keep the license inventory, the proof-of-purchase records, and the renewal calendar in one place so an audit is a one-hour conversation instead of a six-week fire drill.",
    ],
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
  body: [
    "Most systems integration projects end at handover. The install team packs up, the project closes, and the customer inherits a network rack, a boardroom touchscreen, a CCTV NVR, and a fire alarm panel — with no plan for what happens when any of them drifts out of calibration six months later. Our AMC exists because that gap is where most preventable downtime comes from. A smoke detector that has not been cleaned in a year, a UPS battery that has not been load-tested, a SIP trunk that has not had its firmware updated — these are the things that fail silently and then become outages.",
    "Every AMC engagement starts with a full asset inventory: what was installed, when, what the OEM recommends for maintenance, and what the site's own risk profile looks like. From there we build a scheduled-service calendar — quarterly visits for communication and AV systems, half-yearly for fire alarm panels, annual for UPS battery load tests — and a separate emergency-response protocol with a defined escalation matrix and target response time. Every visit produces a service log, a checklist, and a health summary so there is a paper trail of what was inspected and what was found.",
    "Compliance is built in, not bolted on. Fire alarm systems need to meet BIS norms; surveillance and access control setups that touch employee data fall under STQC-aligned practices where applicable. We align the maintenance schedule with those requirements so the audit does not become a separate exercise. And because we install the systems in the first place, the AMC is not a third-party vendor guessing at someone else's wiring — it is the same engineering team that built the system, with the original as-built documentation on hand.",
  ],
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
