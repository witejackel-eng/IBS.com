// ---------------------------------------------------------------------------
// Service Page Data — premium editorial content for each service detail page.
// Every claim traces back to services.ts, partners.ts, segments.ts, or
// company.ts. No invented client names, statistics, or dates.
// ---------------------------------------------------------------------------

export interface ServicePageData {
  slug: string;

  // 1. HERO
  heroHeadline: string;
  heroSubheadline: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;

  // 2. BUSINESS CHALLENGE
  challengeTitle: string;
  challengeParagraphs: string[];

  // 3. ENGINEERING APPROACH
  approachSteps: {
    title: string;
    description: string;
    icon: string;
  }[];

  // 4. SOLUTIONS WE DELIVER
  solutions: {
    title: string;
    description: string;
    benefits: string[];
    typicalDeployment: string;
    oemBrands: string[];
  }[];

  // 5. FEATURED DEPLOYMENT
  deployment: {
    headline: string;
    clientType: string;
    deploymentSize: string;
    technologies: string[];
    overview: string;
    outcome: string;
    timeline: string;
  };

  // 6. INDUSTRIES
  industries: {
    segmentSlug: string;
    title: string;
    description: string;
  }[];

  // 7. OEM PARTNERS
  oemPartners: {
    name: string;
    expertise: string;
    category: string;
  }[];

  // 8. WHY CHOOSE IBS
  whyIbs: {
    title: string;
    description: string;
  }[];

  // 9. FAQ
  faqs: {
    question: string;
    answer: string;
  }[];

  // 10. PREMIUM CTA
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
    "Unified Communications that bring instant messaging, video conferencing, IP telephony, email, and SMS into a single platform — whether your site has ten people or ten thousand.",
  heroPrimaryCta: "Plan Your Voice System",
  heroSecondaryCta: "View Capabilities",

  challengeTitle: "The Real Cost of a Patchwork Phone System",
  challengeParagraphs: [
    "Most offices still run voice on a mix of legacy TDM switches, analog lines, and newer SIP trunks — and that mix is rarely planned. It accumulates as the business moves buildings, adds floors, or absorbs another team. The result is separate dial plans, disconnected voicemail systems, and call-routing rules that only one person in the office understands. When that person leaves, troubleshooting a missed call becomes a forensic exercise.",
    "For teams that have already migrated to SIP, the problem shifts from hardware to integration. Calls land but the CRM doesn't pop the customer record. Remote workers in one location can't take calls routed to another. Hunt groups were configured for a team structure that changed two reorgs ago. These are not exotic failures — they are the daily friction of a voice system that was installed and then left to drift.",
    "The downstream cost is invisible until it matters: a voicemail box that fills up silently, a SIP trunk that hits its concurrent-call limit during peak hours, or a handset firmware bug that drops calls on a predictable schedule. None of these show up in a quarterly business review. They show up as customer complaints, missed follow-ups, and an IT team that spends more time on voice tickets than any other category.",
  ],

  approachSteps: [
    {
      title: "Voice Infrastructure Audit",
      description:
        "We inventory every handset, trunk, switch, and cable run already on site — including undocumented additions from previous expansions — so the design is built on what actually exists, not what the floor plan says should be there.",
      icon: "clipboard-search",
    },
    {
      title: "Platform & Trunk Design",
      description:
        "We select an IP-PBX or KTS platform sized to the user count and call volume, design the SIP trunk capacity against real concurrency data, and build a single dial plan that covers every desk and remote extension.",
      icon: "git-branch",
    },
    {
      title: "System Engineering",
      description:
        "Configuration of call routing, hunt groups, voicemail, conferencing, and failover rules — documented end to end so the next engineer who touches the system doesn't have to reverse-engineer it.",
      icon: "settings",
    },
    {
      title: "Installation & Cutover",
      description:
        "On-site deployment by certified technicians, reusing cabling and handsets worth keeping and replacing only what is genuinely end-of-life, followed by a managed cutover from legacy to IP.",
      icon: "arrow-right-circle",
    },
    {
      title: "Integration & Verification",
      description:
        "Connecting the voice platform to CRM, directory services, and remote-site extensions, then running full-path call tests across every configured route before handover.",
      icon: "check-circle",
    },
    {
      title: "Ongoing Maintenance",
      description:
        "Folding the voice install into an Annual Maintenance Contract so firmware updates, call-flow reviews, and capacity checks happen on a schedule — not after an outage.",
      icon: "shield-check",
    },
  ],

  solutions: [
    {
      title: "IP-PBX / Key Telephone Systems",
      description:
        "IP-based phone platforms that scale from small TDM switches supporting ten users up to fully IP platforms handling tens of thousands of extensions. Every deployment includes call routing, conferencing, voicemail, and remote-site support — designed around the brand already in use where possible, not forced into a rip-and-replace.",
      benefits: [
        "One dial plan, one voicemail system, and one set of call-routing rules across every location",
        "Seamless remote-extension support for distributed teams",
        "Platform selection based on existing hardware compatibility, not vendor preference",
      ],
      typicalDeployment: "Mid-to-large offices consolidating legacy phone systems onto a single IP platform.",
      oemBrands: ["Alcatel-Lucent", "Cisco"],
    },
    {
      title: "SIP Phones & Unified Endpoints",
      description:
        "VoIP handsets that combine traditional calling with chat, email, and web-based tools over the same IP network. We specify handsets that integrate with the team's existing UC platform so agents aren't switching between a desk phone and a softphone to do their job.",
      benefits: [
        "Unified calling, messaging, and presence on a single device",
        "Consistent user experience whether working from a desk or a laptop",
        "Reduced desktop clutter from fewer separate devices",
      ],
      typicalDeployment: "Offices standardizing on SIP trunks and migrating away from analog desk phones.",
      oemBrands: ["Alcatel-Lucent", "Cisco"],
    },
  ],

  deployment: {
    headline: "Enterprise HQ Unified Communication Refresh",
    clientType: "Enterprise Headquarters",
    deploymentSize: "Multi-floor, hundreds of users",
    technologies: ["IP-PBX", "SIP Trunks", "Remote Extensions", "CRM Integration"],
    overview:
      "A representative scope for a multi-floor enterprise office consolidating disconnected phone systems, aging network hardware, and boardrooms that couldn't reliably host video calls. The engagement covers a single IP-PBX platform for unified voice, structured cabling, firewall-secured network infrastructure, and boardroom AV integration.",
    outcome:
      "A single point of contact for voice, network, and boardroom technology — instead of separate vendors for each system. The same dial plan and voicemail system reach every desk and remote extension across the organization.",
    timeline: "6–10 weeks",
  },

  industries: [
    {
      segmentSlug: "enterprises",
      title: "Enterprises",
      description:
        "For organizations of every size, unified communication means one platform that scales — whether the office has ten desks or ten floors. We design IP-PBX rollouts that reuse existing cabling and handsets where viable, and integrate voice with the CRM and directory services the team already depends on.",
    },
    {
      segmentSlug: "hotels",
      title: "Hotels & Hospitals",
      description:
        "Hospitality and healthcare properties need voice systems that serve both staff operations and guest or patient-facing roles. We configure call routing for reception, housekeeping, and room service alongside internal communication for clinical or back-of-house teams.",
    },
    {
      segmentSlug: "government",
      title: "Government",
      description:
        "Government departments require voice infrastructure that meets compliance and audit requirements while supporting inter-department communication. We design systems with secure call routing, recorded lines where mandated, and documented configurations for audit readiness.",
    },
    {
      segmentSlug: "soho",
      title: "SOHO",
      description:
        "Small offices and home offices need enterprise-grade communication sized for a smaller footprint. We specify right-sized IP-PBX and SIP phone systems that give lean teams the same calling features as a large corporate deployment, without the overhead.",
    },
  ],

  oemPartners: [
    {
      name: "Alcatel-Lucent",
      expertise: "IP-PBX and KTS platforms for enterprise voice, including call routing, voicemail, and multi-site extension support.",
      category: "Communication & IT",
    },
    {
      name: "Cisco",
      expertise: "Unified Communications platforms, SIP phones, and voice-over-IP infrastructure for mid-to-large deployments.",
      category: "Communication & IT",
    },
    {
      name: "D-Link",
      expertise: "Network switching and connectivity that underpins IP telephony deployments.",
      category: "Communication & IT",
    },
    {
      name: "Fortinet",
      expertise: "Firewall and security infrastructure securing voice traffic on converged networks.",
      category: "Communication & IT",
    },
  ],

  whyIbs: [
    {
      title: "We Audit Before We Design",
      description:
        "Every voice engagement starts with a full inventory of existing handsets, trunks, switches, and cabling — so the new system is built on what's actually there, not what the original floor plan says.",
    },
    {
      title: "We Don't Force a Rip-and-Replace",
      description:
        "We pick the platform that fits the existing hardware and brand ecosystem. If Alcatel-Lucent or Cisco is already in use, we extend it — we don't replace it for the sake of a clean slate.",
    },
    {
      title: "One Integrator, One Escalation Path",
      description:
        "From the SIP trunk to the desk phone to the CRM pop-up, everything is specified and supported by one team. When audio quality drops, there's a single point of accountability.",
    },
    {
      title: "Maintenance Built In, Not Bolted On",
      description:
        "Every voice install folds into an Annual Maintenance Contract with scheduled firmware updates, call-flow reviews, and capacity checks — so problems are caught before they become outages.",
    },
  ],

  faqs: [
    {
      question: "What is the difference between IP-PBX and a traditional PBX?",
      answer:
        "A traditional PBX uses analog or digital TDM circuits to route calls over dedicated phone lines. An IP-PBX routes calls as data packets over the same IP network your computers use, which means one network carries both voice and data traffic. The practical difference is flexibility: IP-PBX supports remote extensions, integrates with CRM and messaging platforms, and scales by adding software licenses rather than physical line cards. We help determine which approach — or which hybrid — fits based on what's already installed.",
    },
    {
      question: "Do we need to replace all our existing phones to move to IP?",
      answer:
        "Not necessarily. Part of our audit process is identifying which handsets and cabling can be reused. In many cases, existing SIP-capable phones can be re-provisioned onto the new platform, and structured cabling that's in good condition can carry IP traffic without replacement. We only recommend replacing hardware that is genuinely end-of-life or incompatible with the target platform, which keeps the project scope and cost proportional to the actual need.",
    },
    {
      question: "How does SIP trunking reduce calling costs?",
      answer:
        "SIP trunks carry voice calls over your existing data connection instead of requiring separate ISDN or analog phone lines. That means you pay for capacity rather than per-line hardware, you can scale concurrent calls up or down based on actual demand, and you eliminate the rental cost of physical phone lines from the telecom provider. We size SIP trunk capacity against real call-volume data rather than a supplier's spec sheet, so you're not paying for more concurrent channels than you actually use.",
    },
    {
      question: "Can remote workers use the office phone system from home?",
      answer:
        "Yes. IP-PBX platforms support remote extensions that let a team member take calls routed to their office number on a softphone application or a SIP handset at home. The caller sees the office number, the call routes through the same hunt groups and voicemail, and the experience is identical whether the person is at their desk or working remotely. We configure the remote extension, VPN or secure tunnel, and quality-of-service settings so remote calling works reliably.",
    },
    {
      question: "What happens to our voice system after installation?",
      answer:
        "Without ongoing maintenance, voice systems tend to drift: firmware goes unpatched, call routes stop matching the current team structure, and small issues like voicemail capacity or SIP trunk limits go unnoticed until they cause problems. We fold every voice install into an Annual Maintenance Contract that includes scheduled firmware updates, quarterly health checks, and a defined escalation path for issues — so the system keeps performing the way it did on day one.",
    },
    {
      question: "Which brands do you work with for voice communication?",
      answer:
        "We work with Alcatel-Lucent and Cisco for IP-PBX and unified communications platforms. Our approach is to select the brand that fits the existing hardware and support expectations of the site, rather than pushing a single vendor. If your office already runs on Alcatel-Lucent, we'll extend that ecosystem; if Cisco is the better fit for a greenfield deployment, we'll recommend it. The decision is driven by compatibility, budget, and long-term support requirements.",
    },
    {
      question: "How long does a typical voice system deployment take?",
      answer:
        "The timeline depends on the scope: a single-floor office migrating from analog to SIP might take two to four weeks, while a multi-floor enterprise consolidating several legacy phone systems onto one IP-PBX can take six to ten weeks. The audit and design phase typically accounts for the first week or two, with installation and cutover following. We provide a detailed project schedule during the planning phase so every milestone is visible before work begins.",
    },
  ],

  ctaHeadline: "Planning a Voice System Upgrade?",
  ctaDescription:
    "Whether you're consolidating legacy phones onto IP or designing unified communication for a new office, our engineers will audit what you have and design what you actually need.",
  ctaButtonText: "Talk to an IBS Engineer",
};

// ===========================================================================
// 2. AUDIO VIDEO & BOARDROOM SOLUTIONS
// ===========================================================================
const audioVideoBoardroomSolutions: ServicePageData = {
  slug: "audio-video-boardroom-solutions",

  heroHeadline: "Meeting Rooms That Just Work",
  heroSubheadline:
    "Audio and video conferencing, video walls, public address systems, and room booking — installed so meetings and presentations run without the extra troubleshooting.",
  heroPrimaryCta: "Plan Your AV System",
  heroSecondaryCta: "View Capabilities",

  challengeTitle: "Why Boardroom AV Keeps Failing",
  challengeParagraphs: [
    "Boardroom AV fails for predictable reasons: the room was designed around one conferencing platform and the company switched to another, the touchscreen has twenty macro buttons nobody remembers how to use, or the ceiling mics pick up the air-conditioning louder than the speaker. The first minute of every meeting is spent guessing which button to press, and the IT team's phone rings every time a guest presenter can't figure out the HDMI switcher.",
    "In larger spaces — auditoriums, training rooms, banquet halls — the engineering trade-offs are different and the consequences of getting them wrong are more visible. Public address systems that feedback when someone steps near a speaker, video walls that are illegible from the back row, and microphone setups that require someone to ride a mixer throughout the entire event. These aren't exotic problems. They are what happens when AV is specified as equipment rather than as an experience.",
    "Classrooms and training rooms have their own failure mode: the equipment has to survive being used by people who are not AV engineers. A guest walks in with a laptop that doesn't have the right adapter. The lighting is set for a presentation but someone needs whiteboard visibility. The room was booked for twenty people but the audio was tuned for six. When the technology requires an operator to function, it has already failed the people who need it most.",
  ],

  approachSteps: [
    {
      title: "Room Usage Discovery",
      description:
        "We start by understanding how the room is actually used — which conferencing platform the team has standardized on, how many people typically join remotely, whether the room doubles as a training space — before specifying a single piece of equipment.",
      icon: "search",
    },
    {
      title: "Signal Path & Acoustic Design",
      description:
        "We design the AV signal paths, camera placement, speaker positions, and DSP tuning so audio is intelligible, video is framed correctly, and the room's acoustics work with the system rather than against it.",
      icon: "pen-tool",
    },
    {
      title: "Control System Engineering",
      description:
        "A single-touch start sequence, clearly labeled inputs, and a control interface that doesn't require training — because the best AV system is one the host doesn't have to think about.",
      icon: "layout-dashboard",
    },
    {
      title: "Installation & DSP Calibration",
      description:
        "On-site deployment by certified technicians, followed by acoustic measurement and DSP tuning so the system sounds right in the actual room — not just on the specification sheet.",
      icon: "wrench",
    },
    {
      title: "Integration & Room Booking",
      description:
        "Connecting the AV system to the team's calendar so the room reports availability, the display powers down when the booking ends, and double-bookings are caught automatically.",
      icon: "calendar-check",
    },
    {
      title: "Documentation & Handover",
      description:
        "Every input label, macro, and configuration is documented so the next engineer — or the next tenant — doesn't have to reverse-engineer the installation.",
      icon: "file-text",
    },
  ],

  solutions: [
    {
      title: "Audio Conferencing",
      description:
        "Conferencing audio engineered for the room's actual acoustics, not a generic preset. We specify ceiling or tabletop microphones, DSP processing, and speaker placement so every participant is heard clearly — whether they're in the room or joining remotely. For critical spaces, we provide 24/7 support so a mid-meeting failure doesn't become a mid-meeting silence.",
      benefits: [
        "DSP-tuned audio that compensates for room acoustics, not just amplifies sound",
        "Microphone and speaker placement designed around seating, not the other way around",
        "24/7 support availability for mission-critical conferencing spaces",
      ],
      typicalDeployment: "Boardrooms, huddle rooms, and training spaces where remote participation is routine.",
      oemBrands: ["Biamp", "Shure", "QSC", "Poly"],
    },
    {
      title: "Video Conferencing",
      description:
        "Video calling between offices, clients, and remote staff — with screen sharing, recording, and chat built in. We design camera placement and framing so remote participants can see every face in the room, and we integrate with the conferencing platform the team already uses rather than requiring a new workflow.",
      benefits: [
        "Camera and display sizing matched to room dimensions and typical participant count",
        "Native integration with existing conferencing platforms — no new software to learn",
        "One-touch meeting start that eliminates the guesswork before every call",
      ],
      typicalDeployment: "Enterprise boardrooms and huddle rooms standardizing on a single video platform.",
      oemBrands: ["Poly", "Cisco", "Logitech", "AVer", "Zoom"],
    },
    {
      title: "Classroom & Training Room Solutions",
      description:
        "Displays, audio, and connectivity for the devices people actually bring — phones, laptops, and tablets — along with lighting, acoustics, and furniture suited to how the room is taught in. The system is designed to be operated by presenters, not AV engineers, with connectivity that handles whatever a guest walks in with.",
      benefits: [
        "Universal connectivity that works with any laptop, tablet, or phone without adapters",
        "Lighting and acoustic treatments designed for both in-person and remote learners",
        "Room-booking integration so AV powers down automatically when the session ends",
      ],
      typicalDeployment: "Corporate training centers, educational institutions, and multi-purpose rooms.",
      oemBrands: ["Epson", "Samsung", "LG", "Panasonic", "Kramer"],
    },
    {
      title: "Video Walls",
      description:
        "Multi-monitor video wall installations built for larger sites — auditoriums, command centers, and event spaces — designed to stay legible from every seat and handle concurrent speakers. We engineer the video processing, bezel compensation, and content routing so the wall serves the content, not the other way around.",
      benefits: [
        "Display configurations sized for viewing distance and content type",
        "Bezel compensation and content routing engineered for the actual content mix",
        "Scalable architecture that handles multi-source, multi-zone layouts",
      ],
      typicalDeployment: "Auditoriums, lobby displays, command centers, and large-format event spaces.",
      oemBrands: ["Samsung", "LG", "Barco", "Extron"],
    },
    {
      title: "Public Address System",
      description:
        "Microphones, amplifiers, and loudspeakers engineered for the venue's actual dimensions and usage patterns — not a generic package from a catalog. We design for even coverage without feedback, clear intelligibility for announcements, and headroom for live events without clipping.",
      benefits: [
        "Even sound coverage across the entire space without dead zones or feedback",
        "Speaker and amplifier sizing based on room volume and usage, not just square footage",
        "Designed to handle both scheduled events and emergency announcements",
      ],
      typicalDeployment: "Hotel banquet halls, auditoriums, places of worship, and public assembly spaces.",
      oemBrands: ["QSC", "Biamp", "Shure", "Harman"],
    },
    {
      title: "Room Booking System",
      description:
        "Calendar-integrated room scheduling with real-time availability displays outside each room. The system ties into the calendar the team already uses, so rooms report when they're free, AV powers down when bookings end, and double-bookings surface before anyone walks in. For organizations managing multiple rooms, it turns a scheduling headache into a self-service workflow.",
      benefits: [
        "Real-time availability visible from the hallway — no walking in on someone else's meeting",
        "Automated AV power management tied to booking start and end times",
        "Integration with existing calendar platforms — no separate scheduling tool to manage",
      ],
      typicalDeployment: "Multi-room offices, co-working spaces, and hotels with conferencing facilities.",
      oemBrands: ["Crestron", "Extron"],
    },
  ],

  deployment: {
    headline: "Hospitality Property Banquet AV & Conferencing Integration",
    clientType: "Hospitality Property",
    deploymentSize: "Multi-space property with banquet, conference, and boardroom facilities",
    technologies: ["Video Conferencing", "Public Address", "Video Walls", "Room Booking"],
    overview:
      "A representative scope for a hotel property upgrading guest-facing AV and back-of-house conferencing. The engagement covers banquet and conference room audio/video systems, video walls for event spaces, public address for common areas, and room booking integration across all meeting facilities.",
    outcome:
      "Guest-facing spaces ready for events, conferencing, and presentations — with continuous monitoring and a single integrator to call when something needs attention before the next event.",
    timeline: "6–10 weeks",
  },

  industries: [
    {
      segmentSlug: "enterprises",
      title: "Enterprises",
      description:
        "Enterprise offices need boardroom AV that works the same way every time — not a different ritual for each room. We design conferencing systems around the platform the organization has standardized on, with single-touch operation and calendar integration across all meeting spaces.",
    },
    {
      segmentSlug: "hotels",
      title: "Hotels & Hospitals",
      description:
        "Hospitality properties need AV systems that serve both scheduled events and walk-in requirements: banquet halls with public address, conference rooms with video conferencing, and lobby displays that are always on. We design for the reality that different events have different AV needs, and the system has to adapt without an engineer on standby.",
    },
    {
      segmentSlug: "government",
      title: "Government",
      description:
        "Government proceedings and council chambers require AV systems that support formal meeting protocols — clear recording, reliable audio for remote participants, and display systems for presentations and evidence. We engineer these rooms for consistency, so every session runs the same way regardless of who is chairing.",
    },
  ],

  oemPartners: [
    {
      name: "Poly",
      expertise: "Video conferencing endpoints and audio conferencing systems for boardrooms and huddle rooms.",
      category: "AV Integration",
    },
    {
      name: "Cisco",
      expertise: "Unified communications and video conferencing infrastructure for enterprise deployments.",
      category: "AV Integration",
    },
    {
      name: "Logitech",
      expertise: "Conference cameras and speakerphones for small-to-medium meeting rooms.",
      category: "AV Integration",
    },
    {
      name: "AVer",
      expertise: "USB and PTZ cameras for huddle rooms and classroom environments.",
      category: "AV Integration",
    },
    {
      name: "Epson",
      expertise: "Projectors and projection systems for classrooms, boardrooms, and large-format displays.",
      category: "AV Integration",
    },
    {
      name: "Barco",
      expertise: "High-brightness projectors, LED walls, and video processing for event and auditorium spaces.",
      category: "AV Integration",
    },
    {
      name: "Biamp",
      expertise: "DSP audio processing, ceiling microphones, and distributed audio systems for conferencing and PA.",
      category: "AV Integration",
    },
    {
      name: "Extron",
      expertise: "AV signal switching, control systems, and room booking integration for multi-room deployments.",
      category: "AV Integration",
    },
    {
      name: "Crestron",
      expertise: "Room control systems, touch panels, and enterprise-wide AV management platforms.",
      category: "AV Integration",
    },
    {
      name: "Samsung",
      expertise: "Commercial displays, LED video walls, and digital signage for corporate and hospitality spaces.",
      category: "AV Integration",
    },
    {
      name: "LG",
      expertise: "Commercial displays, video wall panels, and interactive touchscreens for conference and education spaces.",
      category: "AV Integration",
    },
    {
      name: "Panasonic",
      expertise: "Projectors, displays, and professional video equipment for boardroom and classroom installations.",
      category: "AV Integration",
    },
    {
      name: "Kramer",
      expertise: "AV signal management, switching, and control for conference rooms and presentation spaces.",
      category: "AV Integration",
    },
    {
      name: "Shure",
      expertise: "Microphones, wireless systems, and discussion systems for conferencing and public address.",
      category: "AV Integration",
    },
    {
      name: "QSC",
      expertise: "Speakers, amplifiers, and DSP platforms for installed sound and conferencing audio.",
      category: "AV Integration",
    },
    {
      name: "Harman",
      expertise: "Professional audio systems, amplifiers, and speakers for commercial installations.",
      category: "AV Integration",
    },
    {
      name: "Draper",
      expertise: "Projection screens, lifts, and mounting solutions for boardrooms and auditoriums.",
      category: "AV Integration",
    },
    {
      name: "Zoom",
      expertise: "Video conferencing platform integration, Zoom Rooms hardware configuration, and UC platform optimization.",
      category: "AV Integration",
    },
  ],

  whyIbs: [
    {
      title: "Designed Around How the Room Is Actually Used",
      description:
        "We don't start with a product catalog. We start by understanding the room's real usage — platform, participant count, remote ratio, dual-purpose needs — and engineer from there.",
    },
    {
      title: "Single-Touch Operation, Not Twenty Buttons",
      description:
        "Every room we deliver starts a meeting with one action. The control interface is designed so a first-time guest can walk in and start presenting without asking for help.",
    },
    {
      title: "Documented for the Next Engineer",
      description:
        "Every input label, macro, DSP setting, and cable run is documented. When another technician or a future tenant needs to understand the system, the documentation is already complete.",
    },
    {
      title: "From Installation to Ongoing Support",
      description:
        "AV systems need calibration, firmware updates, and occasional troubleshooting. Our AMC covers scheduled servicing and emergency response so the room stays reliable after handover.",
    },
  ],

  faqs: [
    {
      question: "What does an AV integration project typically involve?",
      answer:
        "An AV integration project starts with understanding how the room is used — which conferencing platform, how many local versus remote participants, and whether the space has a secondary purpose like training. From there, we design the audio system (microphones, speakers, DSP processing), the video system (displays, cameras, signal switching), and the control system (touch panels, room booking, one-touch start). Installation, calibration, and documentation follow. The entire process is scoped before any equipment is ordered.",
    },
    {
      question: "Can we keep using our existing displays and projectors?",
      answer:
        "In many cases, yes. Part of our discovery process is evaluating which existing equipment can be retained and integrated into the new system. A functional display or projector that meets the room's current requirements can be repurposed with updated signal switching and control. We only recommend replacement when the existing equipment genuinely limits the room's capability or can't be integrated with the target platform.",
    },
    {
      question: "How do you handle rooms that need to support multiple conferencing platforms?",
      answer:
        "We design the AV system around the organization's primary conferencing platform but ensure the room's connectivity and display infrastructure work with secondary platforms through direct HDMI/USB inputs or BYOD (bring-your-own-device) connectivity. The goal is that any presenter can connect and present regardless of which platform the meeting is scheduled on, while the one-touch start sequence is optimized for the primary platform.",
    },
    {
      question: "What is DSP tuning and why does it matter?",
      answer:
        "DSP (Digital Signal Processing) tuning is the process of adjusting the audio system's equalization, echo cancellation, and noise reduction to match the room's actual acoustic characteristics. A room with hard surfaces, high ceilings, or air-conditioning noise will sound different from a carpeted, low-ceiling room — and the DSP settings need to compensate for those differences. Without DSP tuning, remote participants hear the room's acoustics instead of the speaker's voice. We measure and tune on-site, after installation, so the settings match the real room.",
    },
    {
      question: "Do you install video walls, and how are they different from a single large display?",
      answer:
        "Yes. A video wall is a grid of individual display panels driven by a video processor that manages content across the entire surface. Compared to a single large display, a video wall offers much higher resolution and brightness, can be scaled to virtually any size, and supports multiple content zones — for example, a presentation on the left, a live feed on the right, and a data dashboard across the bottom. We handle the panel selection, video processing, mounting, and bezel compensation engineering.",
    },
    {
      question: "How does the room booking system integrate with our existing calendar?",
      answer:
        "We deploy room booking panels outside each meeting room that connect directly to your existing calendar platform — whether that's Microsoft 365, Google Workspace, or another system. The panel shows real-time availability, supports ad-hoc booking, and feeds check-in/check-out events back to the calendar. We can also tie the booking system to the AV controls so displays and audio power on when a meeting starts and power down when it ends, reducing energy waste and extending equipment life.",
    },
    {
      question: "What kind of ongoing support do AV systems need?",
      answer:
        "AV systems benefit from regular maintenance: DSP calibration can drift over time, firmware updates improve compatibility and security, and cables or connections can degrade. Our Annual Maintenance Contracts include scheduled visits for calibration checks and firmware updates, plus emergency response for issues that can't wait. For mission-critical spaces like boardrooms and auditoriums, we recommend quarterly service visits to catch issues before they affect a meeting.",
    },
  ],

  ctaHeadline: "Planning a Boardroom or Auditorium Upgrade?",
  ctaDescription:
    "From a single huddle room to a multi-space property, we'll design the AV system around how your rooms are actually used — not around a product catalog.",
  ctaButtonText: "Talk to an IBS Engineer",
};

// ===========================================================================
// 3. IT NETWORK & INFRASTRUCTURE
// ===========================================================================
const itInfrastructure: ServicePageData = {
  slug: "it-infrastructure",

  heroHeadline: "Infrastructure That Doesn't Drift",
  heroSubheadline:
    "Storage, servers, routers, firewalls, cabling, and power backup — installed, configured, and supported so your network stays reliable as it grows.",
  heroPrimaryCta: "Plan Your Network",
  heroSecondaryCta: "View Capabilities",

  challengeTitle: "The Accumulation Problem",
  challengeParagraphs: [
    "Network infrastructure is where most offices quietly accumulate technical debt. A firewall bought five years ago, a switch added during a floor expansion, an access point bolted on when Wi-Fi got spotty in the corner office — none of it was planned together, and the cabling documentation stopped being accurate somewhere around the second move. Every new decision depends on knowing what is actually in the walls, and in most offices, that information exists only in someone's memory.",
    "The consequences compound silently. A switch port that was supposed to be temporary becomes permanent. The UPS that was sized for the original server count now has no headroom for the three servers added since. Wi-Fi coverage maps that were accurate at deployment now have dead zones from changed wall configurations and increased device density. When something fails, troubleshooting means tracing undocumented connections through a rack that has been modified by three different vendors.",
    "New builds and fit-outs have a cleaner starting point but their own risks: cabling laid before the network design is finalized, racks that fill up faster than expected because growth wasn't factored in, and Wi-Fi access points placed based on a floor plan rather than a coverage survey. The difference between a network that works well on day one and one that works well three years later is whether the initial installation was planned for the next five years of growth or just the current headcount.",
  ],

  approachSteps: [
    {
      title: "Site Survey & Cabling Audit",
      description:
        "A full physical inventory of every cable run, patch panel, switch port, and power circuit — because every later decision about the network depends on knowing what is actually in the walls.",
      icon: "map-pin",
    },
    {
      title: "Network Architecture Design",
      description:
        "Designing the network topology, VLAN structure, IP addressing, and firewall rules to support the current operation and the next five years of growth — not just the headcount today.",
      icon: "network",
    },
    {
      title: "Hardware Specification",
      description:
        "Selecting switches, routers, firewalls, access points, servers, and storage based on the project's budget, performance requirements, and support expectations — not a single brand relationship.",
      icon: "cpu",
    },
    {
      title: "Structured Deployment",
      description:
        "On-site installation following the engineered plan: cabling laid before drywall in new builds, racks built with growth headroom, and Wi-Fi access points placed based on coverage survey data.",
      icon: "hard-hat",
    },
    {
      title: "Verification & Documentation",
      description:
        "Full-path network testing, throughput verification, and documentation of every IP, VLAN, patch panel label, and power circuit — so the next person who touches the system has an accurate map.",
      icon: "check-square",
    },
    {
      title: "Maintenance & Evolution",
      description:
        "Ongoing firmware updates, battery testing, capacity reviews, and a defined escalation path through an Annual Maintenance Contract — so the network stays current as the organization grows.",
      icon: "refresh-cw",
    },
  ],

  solutions: [
    {
      title: "Data Center",
      description:
        "Storage, servers, routers, and firewalls installed and configured with cooling and battery backup — plus ongoing support once the site is live. We design the data center for the organization's actual compute and storage requirements, with headroom for growth, and document every component so the rack stays manageable as equipment is added or replaced.",
      benefits: [
        "Integrated design covering compute, storage, networking, and power in one plan",
        "Cooling and power redundancy engineered for the site's actual load profile",
        "Complete documentation of every component for long-term maintainability",
      ],
      typicalDeployment: "On-premises server rooms and network closets for offices managing their own infrastructure.",
      oemBrands: ["Dell", "Synology", "Cisco", "HP Aruba"],
    },
    {
      title: "Firewall",
      description:
        "Traffic monitoring and access rules that block unauthorized data and known threats without slowing the network down. We size firewalls with headroom at peak load so the device doesn't become the bottleneck when the team grows, and we configure rules that align with the organization's actual traffic patterns rather than a generic template.",
      benefits: [
        "Throughput sizing based on actual peak traffic, not just current average",
        "Rule sets configured for the organization's traffic patterns and risk profile",
        "Ongoing firmware and signature updates through AMC coverage",
      ],
      typicalDeployment: "Office internet gateways and inter-VLAN security for networks with sensitive data.",
      oemBrands: ["Fortinet", "Sophos", "Cisco"],
    },
    {
      title: "Network Rack",
      description:
        "Racks built to organize and protect network hardware as a site adds more equipment over time. We specify racks with growth headroom, proper cable management, and ventilation — because a rack that's full on day one is a rack that will need a forklift upgrade in twelve months.",
      benefits: [
        "Rack capacity sized for projected growth, not just current equipment count",
        "Cable management that stays navigable as equipment is added",
        "Integrated power distribution and ventilation planning",
      ],
      typicalDeployment: "Server rooms, network closets, and IDF/MDF installations in office buildings.",
      oemBrands: ["APW", "APC"],
    },
    {
      title: "Structured Cabling",
      description:
        "Cabling laid out so the network stays easy to trace and maintain, including fiber runs for longer distances and higher throughput. Whether it's a new build where cabling goes in before the drywall or an existing office where cable paths have to be retrofitted, we document every run so the next modification doesn't require a cable tracer.",
      benefits: [
        "Complete cabling documentation from patch panel to wall outlet",
        "Fiber backbone for inter-floor and inter-building connectivity",
        "Cable paths planned for future expansion, not just current port count",
      ],
      typicalDeployment: "New office fit-outs, floor expansions, and cabling refreshes in aging buildings.",
      oemBrands: ["CommScope", "Systimax", "D-Link", "Netgear"],
    },
    {
      title: "Wi-Fi",
      description:
        "Wireless access points for computers, laptops, printers, scanners, and phones — placed based on a coverage survey rather than guesswork. We design for the device density the space actually has, with mesh coverage where a single access point won't reach, and we configure SSID segmentation, QoS, and security policies that match the organization's needs.",
      benefits: [
        "Access point placement based on on-site RF survey, not floor plan estimation",
        "SSID and security policies segmented for staff, guests, and IoT devices",
        "Mesh coverage for spaces where a single access point can't provide adequate signal",
      ],
      typicalDeployment: "Open-plan offices, multi-floor buildings, hotels, and warehouses requiring seamless wireless coverage.",
      oemBrands: ["Ruckus", "HP Aruba", "D-Link", "Netgear"],
    },
    {
      title: "Online UPS",
      description:
        "Battery-backed power that stays continuously connected to the inverter, so critical systems keep running through an outage instead of blinking off and restarting. We size UPS runtime for the actual load and the site's typical outage duration, and we fold battery testing into the AMC so a degraded battery is caught before the next power event.",
      benefits: [
        "Continuous inverter operation — zero transfer time during an outage",
        "Runtime sizing based on actual equipment load and local power reliability",
        "Scheduled battery load testing through AMC to catch degradation early",
      ],
      typicalDeployment: "Server rooms, network closets, and any location where an unexpected power loss means data loss or service interruption.",
      oemBrands: ["APC", "Vertiv", "Eaton"],
    },
  ],

  deployment: {
    headline: "Enterprise HQ Network & Infrastructure Consolidation",
    clientType: "Enterprise Headquarters",
    deploymentSize: "Multi-floor office with server room, Wi-Fi, and boardroom infrastructure",
    technologies: ["Structured Cabling", "Firewall", "Wi-Fi", "Online UPS", "Data Center"],
    overview:
      "A representative scope for a multi-floor enterprise office consolidating network infrastructure that had accumulated across separate vendors and expansions. The engagement covers structured cabling, firewall-secured LAN, Wi-Fi coverage survey and deployment, online UPS for the server room, and rack infrastructure with growth headroom.",
    outcome:
      "A documented, centralized network infrastructure where every cable run, IP address, and VLAN is mapped — replacing the undocumented accumulation that made every modification a risk.",
    timeline: "6–12 weeks",
  },

  industries: [
    {
      segmentSlug: "enterprises",
      title: "Enterprises",
      description:
        "Enterprise offices need network infrastructure that supports current operations and planned growth — without the technical debt that accumulates when additions are made without a master plan. We design the network topology, structured cabling, and power backup for the next five years, not just the current headcount.",
    },
    {
      segmentSlug: "hotels",
      title: "Hotels & Hospitals",
      description:
        "Hospitality properties need Wi-Fi that covers every room, corridor, and common area without dead zones, plus back-of-house network infrastructure for property management, surveillance, and guest services. We design networks that segment guest traffic from operational traffic and scale with occupancy.",
    },
    {
      segmentSlug: "government",
      title: "Government",
      description:
        "Government facilities need hardened network infrastructure with strict access controls, firewall policies that meet compliance requirements, and documentation that supports audit readiness. We design networks with VLAN segmentation, traffic logging, and power backup that meets regulatory expectations.",
    },
    {
      segmentSlug: "residential",
      title: "Residential",
      description:
        "Modern homes need dependable Wi-Fi coverage, structured cabling for media rooms and home offices, and network infrastructure that supports streaming, automation, and remote work without the frustration of dead zones and buffer drops.",
    },
    {
      segmentSlug: "soho",
      title: "SOHO",
      description:
        "Small offices need enterprise-grade network protection — firewall, Wi-Fi, and structured cabling — scaled to a smaller footprint and budget. We specify right-sized infrastructure that gives a lean team the same reliability as a large corporate network.",
    },
  ],

  oemPartners: [
    {
      name: "Cisco",
      expertise: "Enterprise switching, routing, and firewall infrastructure for mid-to-large network deployments.",
      category: "Communication & IT",
    },
    {
      name: "Fortinet",
      expertise: "Next-generation firewall and security appliances with throughput sizing for enterprise and government networks.",
      category: "Communication & IT",
    },
    {
      name: "Sophos",
      expertise: "Firewall and endpoint security solutions for organizations prioritizing simplified security management.",
      category: "Communication & IT",
    },
    {
      name: "HP Aruba",
      expertise: "Enterprise Wi-Fi access points and switching for high-density wireless environments.",
      category: "Communication & IT",
    },
    {
      name: "Ruckus",
      expertise: "High-performance Wi-Fi with smart antenna technology for challenging RF environments.",
      category: "Communication & IT",
    },
    {
      name: "D-Link",
      expertise: "Switches, access points, and networking hardware for small-to-medium business infrastructure.",
      category: "Communication & IT",
    },
    {
      name: "Netgear",
      expertise: "Switching and wireless solutions for SOHO and growing office networks.",
      category: "Communication & IT",
    },
    {
      name: "Dell",
      expertise: "Servers and storage solutions for on-premises data center deployments.",
      category: "Communication & IT",
    },
    {
      name: "Synology",
      expertise: "Network-attached storage for file sharing, backup, and surveillance recording.",
      category: "Communication & IT",
    },
    {
      name: "APC",
      expertise: "Online UPS systems and rack infrastructure for server rooms and network closets.",
      category: "Communication & IT",
    },
    {
      name: "Vertiv",
      expertise: "Power management, cooling, and UPS systems for data center and critical infrastructure.",
      category: "Communication & IT",
    },
    {
      name: "Eaton",
      expertise: "Power quality solutions and online UPS systems for continuous power protection.",
      category: "Communication & IT",
    },
    {
      name: "CommScope",
      expertise: "Structured cabling systems and connectivity solutions for enterprise network infrastructure.",
      category: "Communication & IT",
    },
    {
      name: "Systimax",
      expertise: "Structured cabling and fiber optic solutions for high-performance network backbones.",
      category: "Communication & IT",
    },
    {
      name: "APW",
      expertise: "Network racks, enclosures, and physical infrastructure for organizing and protecting network hardware.",
      category: "Communication & IT",
    },
  ],

  whyIbs: [
    {
      title: "We Audit Before We Design",
      description:
        "Every infrastructure engagement starts with a site survey and cabling audit — because the right switch, the right rack location, and the right UPS capacity all depend on knowing what's actually installed.",
    },
    {
      title: "We Don't Default to One Brand",
      description:
        "We recommend hardware based on the project's budget, performance requirements, and support expectations. The decision is driven by fit, not by a single vendor relationship.",
    },
    {
      title: "Spec'd for Growth, Not Just Today",
      description:
        "Firewalls with throughput headroom, racks with empty U-space, and cabling with spare runs — we design for the next five years of growth so the infrastructure doesn't need a forklift upgrade when the team expands.",
    },
    {
      title: "UPS Sized for Real Outages",
      description:
        "We specify online UPS systems with runtime matched to the site's actual load and local power reliability, and we fold battery load-testing into the AMC so a degraded battery is caught before the next monsoon brownout.",
    },
  ],

  faqs: [
    {
      question: "What is the difference between an online UPS and a standby UPS?",
      answer:
        "An online UPS continuously powers connected equipment through its inverter — the battery is always in the circuit, so there is zero transfer time when the power goes out. A standby UPS only switches to battery power when it detects an outage, which means a brief interruption while the transfer happens. For servers, network equipment, and anything where a momentary power blip means data loss or a reboot, an online UPS is the correct choice. We specify online UPS for all critical infrastructure deployments.",
    },
    {
      question: "How do you determine the right Wi-Fi access point placement?",
      answer:
        "We conduct an on-site RF (radio frequency) survey that measures signal propagation, interference sources, and coverage gaps in the actual space — accounting for walls, furniture, ceiling height, and expected device density. Access points are then placed based on that survey data, not on a floor plan estimation. For large or complex spaces, we may also model coverage predictions before installation to validate the design.",
    },
    {
      question: "Do we need to re-cable our office, or can the existing cabling be reused?",
      answer:
        "It depends on the age and condition of the existing cabling. During our site survey, we test cable runs for signal integrity, check patch panel labeling accuracy, and assess whether the cabling category supports the target network speeds. Runs that test well and meet current standards can be reused; degraded or underspecified runs are replaced. The goal is to avoid unnecessary re-cabling while ensuring the network has a reliable physical layer.",
    },
    {
      question: "What does a firewall actually do for our office network?",
      answer:
        "A firewall sits between your internal network and the internet (and between internal VLANs), enforcing rules about what traffic is allowed to pass. It blocks unauthorized access attempts, inspects traffic for known threats, and can limit bandwidth allocation by application or user group. We configure firewall rules based on your organization's actual traffic patterns and security requirements — not a generic template — and size the hardware with enough throughput headroom that it doesn't become a bottleneck at peak load.",
    },
    {
      question: "How is structured cabling different from just running Ethernet cables?",
      answer:
        "Structured cabling is a planned, standardized approach to network cabling that uses consistent cable categories, color-coded patch panels, labeled wall outlets, and documented cable paths. The result is a network that is easy to trace, modify, and troubleshoot — as opposed to ad-hoc cabling where connections are made wherever convenient and documentation is nonexistent. When a new workstation needs to be added or a cable fails, structured cabling means the fix takes minutes instead of hours of cable tracing.",
    },
    {
      question: "What kind of maintenance does network infrastructure need?",
      answer:
        "Network infrastructure benefits from scheduled maintenance: firmware updates on switches and firewalls, UPS battery load testing, Wi-Fi access point health checks, and cabling inspections. Without this, firmware vulnerabilities go unpatched, UPS batteries degrade silently until they can't hold a charge, and Wi-Fi performance degrades as the environment changes. Our AMC includes all of these on a defined schedule, plus emergency response for issues that can't wait for the next visit.",
    },
    {
      question: "Can you design our network for a new office fit-out?",
      answer:
        "Yes, and new builds are the ideal starting point for network infrastructure because we can plan the cabling, rack locations, and access point placement before the drywall goes up. We work with the fit-out team to ensure network closets are properly sized, power circuits are adequate, and cable paths are planned for future expansion. The result is a network that's clean, documented, and ready to grow from day one.",
    },
  ],

  ctaHeadline: "Planning a Network Upgrade or New Office Fit-Out?",
  ctaDescription:
    "Whether you're dealing with accumulated technical debt or starting fresh, we'll survey what you have and design infrastructure for the next five years — not just the current headcount.",
  ctaButtonText: "Talk to an IBS Engineer",
};

// ===========================================================================
// 4. SECURITY SOLUTIONS
// ===========================================================================
const securitySolutions: ServicePageData = {
  slug: "security-solutions",

  heroHeadline: "Security That's Actually Usable",
  heroSubheadline:
    "CCTV, access control, fire alarm systems, and home automation — designed as an integrated system that works when something happens, not just when it's installed.",
  heroPrimaryCta: "Plan Your Security System",
  heroSecondaryCta: "View Capabilities",

  challengeTitle: "Installed Is Not the Same as Operational",
  challengeParagraphs: [
    "Security installations tend to get specified camera-by-camera, with the result that footage is collected but never reviewed, access control logs sit untouched, and fire alarm panels get tested only when the auditor visits. The system is technically installed, but it's not operational in any meaningful sense — because operational means someone can find and act on the footage when they need to, the access log tells a story that's actually useful, and the fire alarm works the day before the auditor shows up, not just the day of.",
    "For most commercial sites, the problem starts with specification. Cameras are placed to cover entrances and parking, but the NVR storage is sized for a week of footage when the compliance requirement is thirty days. Access control readers are installed on exterior doors but not on the server room. The fire alarm panel is connected to hooters but not to the access control system, so doors stay locked during an evacuation. Each component works in isolation, and no one designed the system to work together.",
    "Residential security has a different failure mode: the homeowner is expected to be the operator. A surveillance system that requires opening an app, navigating to the right camera, and exporting footage is a system that won't get used when it matters. Access control that means managing PIN codes for domestic staff is a system that will get bypassed with a spare key. We design residential systems so security, lighting, and automation work together through a single interface — reducing the operational burden to the point where the system actually gets used.",
  ],

  approachSteps: [
    {
      title: "Risk & Coverage Assessment",
      description:
        "We assess the site's security requirements by mapping access points, critical areas, and coverage gaps — not by placing a camera at every door and calling it done.",
      icon: "shield-alert",
    },
    {
      title: "Integrated System Design",
      description:
        "Camera placement, NVR retention, access control event logging, and fire alarm test schedules are all designed together so the system is usable when something happens.",
      icon: "puzzle",
    },
    {
      title: "Hardware Engineering",
      description:
        "Specifying cameras, readers, panels, and sensors with the right resolution, storage, and coverage for the site's actual risk profile — not a generic package.",
      icon: "wrench",
    },
    {
      title: "Installation & Integration",
      description:
        "On-site deployment with cross-system integration: access control tied to attendance and visitor management, fire alarms triggering door release, and surveillance feeding into a unified monitoring view.",
      icon: "arrow-right-circle",
    },
    {
      title: "Commissioning & Acceptance",
      description:
        "Full-system testing that verifies every camera records, every reader responds, every fire alarm zone triggers correctly, and every integration path works end to end.",
      icon: "check-circle",
    },
    {
      title: "Ongoing Maintenance & Compliance",
      description:
        "Scheduled servicing aligned with BIS fire safety norms, STQC practices where applicable, and the OEM's maintenance recommendations — with documented service logs for audit readiness.",
      icon: "shield-check",
    },
  ],

  solutions: [
    {
      title: "CCTV Surveillance",
      description:
        "Camera systems for continuous monitoring across private and public areas of a site. We design camera placement for meaningful coverage — entrances, parking, critical aisles, and perimeters — and size NVR storage for the retention period the site actually requires, not just what's included in the default package. The result is footage that's available and findable when it matters.",
      benefits: [
        "Camera placement designed for coverage and evidence quality, not just checkbox compliance",
        "NVR storage sized for the site's actual retention requirements",
        "Remote monitoring support for off-site surveillance access",
      ],
      typicalDeployment: "Commercial offices, hospitality properties, residential complexes, and government facilities requiring continuous surveillance.",
      oemBrands: ["Hikvision", "Dahua", "Axis", "Pelco"],
    },
    {
      title: "Access Control & Biometric Solutions",
      description:
        "Entry systems that check identity before letting someone in, with visitor screening and biometric fingerprint scanning for accurate attendance records. We integrate access control with attendance and visitor management so the same badge that opens the door also logs working hours, and we configure event logging so the access history tells a useful story when it's needed.",
      benefits: [
        "Integrated access, attendance, and visitor management from a single system",
        "Biometric accuracy that eliminates buddy-punching and manual attendance tracking",
        "Event logging configured for operational insight, not just data collection",
      ],
      typicalDeployment: "Office entrances, server rooms, restricted areas, and any location requiring identity-verified entry.",
      oemBrands: ["eSSL", "HID", "Cooper", "Honeywell"],
    },
    {
      title: "Fire Alarm System",
      description:
        "Smoke detectors and alarms designed to sound early enough to evacuate a building before damage spreads. We specify conventional and addressable panels based on the building's size and complexity, configure zone mapping for the actual floor layout, and integrate the fire alarm with access control so doors release automatically on an evacuation signal. The test schedule is aligned with BIS norms and documented for audit readiness.",
      benefits: [
        "Panel selection matched to building size: conventional for smaller sites, addressable for complex facilities",
        "Fire alarm and access control integration for automatic door release on evacuation",
        "Maintenance schedule aligned with BIS fire safety norms, with documented service logs",
      ],
      typicalDeployment: "Commercial buildings, hotels, hospitals, and government facilities requiring fire safety compliance.",
      oemBrands: ["Honeywell", "Morley", "Notifier", "Edwards"],
    },
    {
      title: "Home Automation",
      description:
        "Security systems, thermostats, lighting, and entertainment tied into one setup that's simpler to control day to day. For residences, this means a single app that manages surveillance, access control for domestic staff, climate, and entertainment — reducing the operational burden so the system actually gets used rather than bypassed.",
      benefits: [
        "Single-app control for security, climate, lighting, and entertainment",
        "Access control that handles domestic staff schedules without manual PIN management",
        "Security scenes that tie cameras, lighting, and locks together automatically",
      ],
      typicalDeployment: "Modern residences and luxury apartments where security and convenience need to coexist.",
      oemBrands: ["Hikvision", "Honeywell"],
    },
  ],

  deployment: {
    headline: "Hospitality Property-Wide Security Integration",
    clientType: "Hospitality Property",
    deploymentSize: "Full property with guest areas, back-of-house, parking, and perimeters",
    technologies: ["IP CCTV", "Access Control", "Fire Alarm", "Visitor Management"],
    overview:
      "A representative scope for a hotel property upgrading guest-facing AV and back-of-house security in the same engagement. The security component covers IP CCTV across guest areas, parking, and perimeters; access control for guest floors, staff areas, and restricted zones; and a fire alarm system integrated with access control for automatic evacuation support.",
    outcome:
      "Continuous monitoring across the property with access control and fire safety working as an integrated system — guest-facing spaces secured without creating a checkpoint atmosphere, and back-of-house operations protected with identity-verified entry.",
    timeline: "6–10 weeks",
  },

  industries: [
    {
      segmentSlug: "enterprises",
      title: "Enterprises",
      description:
        "Enterprise offices need security systems that cover perimeters, parking, server rooms, and access points — with access control integrated into attendance and visitor management. We design systems where the same badge opens the door, logs working hours, and maintains an audit trail, and where surveillance footage is findable when it's needed.",
    },
    {
      segmentSlug: "hotels",
      title: "Hotels & Hospitals",
      description:
        "Hospitality and healthcare properties need security that protects without creating friction: surveillance in common areas and perimeters, access control for guest floors and restricted zones, and fire alarm systems integrated with evacuation protocols. The challenge is covering a large, multi-use property with a system that's operational around the clock.",
    },
    {
      segmentSlug: "government",
      title: "Government",
      description:
        "Government facilities require security systems that meet compliance requirements and support audit readiness. We design surveillance with retention policies aligned to regulatory norms, access control with role-based permissions, and fire alarm systems with documented test schedules. Every component is specified and maintained with the expectation of regulatory scrutiny.",
    },
    {
      segmentSlug: "residential",
      title: "Residential",
      description:
        "Residential security works best when it's invisible until needed. We design systems with careful camera placement, access control that handles domestic staff schedules, and home automation that ties security to lighting and climate — all controllable from a single app that the homeowner actually uses.",
    },
  ],

  oemPartners: [
    {
      name: "Hikvision",
      expertise: "IP and analog CCTV cameras, NVRs, and video management for commercial and residential surveillance.",
      category: "Security",
    },
    {
      name: "Dahua",
      expertise: "CCTV cameras and recording systems for large-scale surveillance deployments.",
      category: "Security",
    },
    {
      name: "Axis",
      expertise: "Premium IP cameras and network video solutions for high-end surveillance requirements.",
      category: "Security",
    },
    {
      name: "eSSL",
      expertise: "Biometric attendance and access control systems for enterprise and commercial deployments.",
      category: "Security",
    },
    {
      name: "HID",
      expertise: "Card-based access control and identity verification for secure facility entry.",
      category: "Security",
    },
    {
      name: "Honeywell",
      expertise: "Fire alarm panels, access control, and integrated security management systems.",
      category: "Security",
    },
    {
      name: "Morley",
      expertise: "Addressable fire alarm panels (DXc1/DXc2 series) for commercial and institutional fire safety.",
      category: "Security",
    },
    {
      name: "Notifier",
      expertise: "Fire detection and alarm systems for large commercial and institutional buildings.",
      category: "Security",
    },
    {
      name: "Edwards",
      expertise: "Fire alarm panels and detection systems for commercial fire safety compliance.",
      category: "Security",
    },
    {
      name: "Cooper",
      expertise: "Fire alarm and detection systems for commercial and residential properties.",
      category: "Security",
    },
    {
      name: "Pelco",
      expertise: "Professional CCTV cameras and video management systems for surveillance-critical environments.",
      category: "Security",
    },
  ],

  whyIbs: [
    {
      title: "Designed as a System, Not a Checklist",
      description:
        "Camera placement, NVR storage, access control logging, and fire alarm scheduling are all designed together. The result is a security system that works when something happens — not just when it's inspected.",
    },
    {
      title: "Integration Where It Matters",
      description:
        "Access control tied to attendance. Fire alarms triggering door release. Surveillance feeding into a unified view. These integrations aren't extras — they're how a security system becomes operational.",
    },
    {
      title: "Compliance Built Into the Schedule",
      description:
        "Fire alarm maintenance aligned with BIS norms. Surveillance practices aligned with STQC where applicable. The maintenance calendar is designed around regulatory requirements, not bolted on for the auditor's visit.",
    },
    {
      title: "Same Team That Installed It",
      description:
        "Because we install the systems, the AMC is not a third-party vendor guessing at someone else's wiring. It's the same engineering team, with the original as-built documentation on hand.",
    },
  ],

  faqs: [
    {
      question: "How many cameras does our office actually need?",
      answer:
        "The number of cameras depends on the site's layout, access points, critical areas, and the level of surveillance coverage the organization requires. Rather than quoting a number based on square footage, we conduct an on-site assessment that maps entry points, parking areas, server rooms, corridors, and any space where surveillance is operationally necessary. The goal is meaningful coverage — cameras placed where footage would actually be useful — rather than filling every wall with a camera for the appearance of security.",
    },
    {
      question: "What is the difference between conventional and addressable fire alarm systems?",
      answer:
        "A conventional fire alarm panel divides the building into zones, and when a detector triggers, the panel identifies the zone but not the specific device. An addressable panel assigns a unique address to every detector, so the panel identifies the exact device that triggered and its location. For smaller buildings, a conventional system is typically sufficient and more cost-effective. For larger or more complex buildings — multi-floor offices, hotels, hospitals — addressable panels provide the specificity needed for efficient evacuation response. We recommend based on the building's size, layout, and evacuation complexity.",
    },
    {
      question: "Can access control and CCTV be managed from the same system?",
      answer:
        "Yes. We integrate access control with surveillance so that, for example, a door-forced-open event automatically pulls up the corresponding camera feed. This makes incident investigation significantly faster — instead of manually searching through hours of footage and correlating it with access logs, the system presents both together. The degree of integration depends on the brands and models selected, and we design the system with this integration in mind from the start.",
    },
    {
      question: "How long should CCTV footage be retained?",
      answer:
        "Retention requirements depend on the site's industry, regulatory obligations, and operational needs. Some compliance frameworks specify minimum retention periods, while other organizations define their own based on how long footage might be useful for incident investigation. We size NVR storage to meet the site's actual retention requirement — whether that's a week or ninety days — and configure overwrite policies accordingly. We also monitor storage health through AMC visits so a full disk doesn't silently stop recording.",
    },
    {
      question: "What does a fire alarm compliance audit involve?",
      answer:
        "A fire alarm compliance audit typically requires documented evidence that the system has been tested, maintained, and serviced according to the manufacturer's recommendations and applicable norms (such as BIS standards in India). This includes detector cleaning, alarm verification, battery checks, panel testing, and zone verification — all recorded with dates, findings, and corrective actions. Our AMC includes all of these activities on a scheduled basis and produces the service logs and health summaries that an auditor expects to see.",
    },
    {
      question: "Can home automation and security be combined?",
      answer:
        "Yes, and combining them is often more effective than running them separately. A home automation system that integrates security can trigger automatic responses — cameras recording when a door opens after hours, lights turning on when motion is detected, and locks engaging when the system is armed. For the homeowner, this means a single app that manages everything instead of switching between a security app, a lighting app, and a climate app. We design residential systems with this integration from the start.",
    },
    {
      question: "How do you handle security for a property that already has some equipment installed?",
      answer:
        "We assess the existing equipment during the site survey — testing camera functionality, checking NVR storage health, verifying access control reader operation, and reviewing the fire alarm panel status. Equipment that is functional and compatible with the target system design can be retained and integrated. Equipment that is end-of-life, non-functional, or incompatible is replaced. The goal is to build on what works rather than starting from zero, while ensuring the final system meets the site's security requirements.",
    },
  ],

  ctaHeadline: "Planning a Security System Upgrade?",
  ctaDescription:
    "Whether you're securing a new property or upgrading a system that's been installed but never integrated, we'll design surveillance, access control, and fire safety as one operational system.",
  ctaButtonText: "Talk to an IBS Engineer",
};

// ===========================================================================
// 5. CALL CENTER SOLUTIONS
// ===========================================================================
const callCenterSolutions: ServicePageData = {
  slug: "call-center-solutions",

  heroHeadline: "Every Call, Captured and Controlled",
  heroSubheadline:
    "Headsets, GSM/PRI gateways, CRM-integrated dialers, and voice logging — the full contact center stack, specified and supported as one system.",
  heroPrimaryCta: "Plan Your Contact Center",
  heroSecondaryCta: "View Capabilities",

  challengeTitle: "The Three Layers That Fail Separately",
  challengeParagraphs: [
    "A contact center lives or dies on three things: the agent can hear the caller clearly, the dialer keeps talk-time high without dropping leads, and every call is recorded and retrievable when a dispute or compliance question comes up weeks later. In most contact centers, these three layers are sourced from separate vendors — a headset supplier, a dialer vendor, and a recording provider — and when audio quality drops, each vendor points at the other. The result is a troubleshooting chain that takes hours and an IT team that spends more time on voice tickets than any other category.",
    "The connectivity layer is where most contact centers bleed money without realizing it. A GSM gateway sized for the right number of concurrent outbound calls can cut ISDN line costs dramatically, but most sites either over-provision (paying for channels they never use) or under-provision (watching agents sit idle because all trunks are occupied). A PRI gateway can bridge an existing ISDN setup to a newer IP-PBX without a forklift upgrade, but the routing rules have to be configured correctly or the cost savings disappear in misrouted calls and failed connections.",
    "On the software side, the gap between a room full of people on phones and an actual contact center is the CRM and dialer integration. Without it, agents manually dial numbers, have no customer history on screen when the call connects, and the operations team has no visibility into drop rates, average handle times, or agent-level performance. The information is technically available — it's just scattered across systems that don't talk to each other. A contact center that can't measure performance can't improve it.",
  ],

  approachSteps: [
    {
      title: "Call Volume Analysis",
      description:
        "We start with actual call-volume data — inbound and outbound, peak concurrency, and answer-seizure ratios — rather than designing around a vendor's spec sheet or the operations team's estimates.",
      icon: "bar-chart",
    },
    {
      title: "Platform & Connectivity Design",
      description:
        "Specifying the CRM and dialer platform, sizing GSM and PRI gateways against real concurrency data, and configuring routing rules that use the cheapest trunk that still hits quality targets.",
      icon: "git-branch",
    },
    {
      title: "Agent Workspace Engineering",
      description:
        "Selecting headsets for full-shift comfort, configuring softphones and agent dashboards, and ensuring the audio chain from caller to agent to recording is clean and consistent.",
      icon: "headset",
    },
    {
      title: "Integration & Configuration",
      description:
        "Connecting the dialer to CRM for screen-pops, configuring predictive/progressive/preview dialing modes, and setting up call recording across analog, PRI, and VoIP lines.",
      icon: "settings",
    },
    {
      title: "Testing & Shift Readiness",
      description:
        "Full-path testing of every call route, recording verification, dashboard accuracy checks, and a live-shift rehearsal before the system goes into production.",
      icon: "check-circle",
    },
    {
      title: "Ongoing Support & Optimization",
      description:
        "Ongoing support for mid-shift issues, scheduled reviews of dialer performance and routing efficiency, and firmware and software updates through an AMC.",
      icon: "trending-up",
    },
  ],

  solutions: [
    {
      title: "Call Center Headsets",
      description:
        "Headsets built for full-shift comfort, with noise reduction and cushioned ear pads for agents on back-to-back calls. We specify headsets that match the desk phone or softphone platform in use, and we ensure the audio chain from the caller to the agent to the recording system is clean — because a headset issue that causes echo or one-way audio is a headset issue that stops the shift.",
      benefits: [
        "Full-shift comfort with noise reduction for open-floor contact centers",
        "Audio quality matched to the recording system so every call is intelligible",
        "Compatibility verified against the specific phone or softphone platform in use",
      ],
      typicalDeployment: "Inbound and outbound contact centers where agents are on calls for the majority of their shift.",
      oemBrands: [],
    },
    {
      title: "GSM / PRI Gateway",
      description:
        "GSM gateways connect digital, analog, IP, and GSM networks for cost-effective outbound calling. PRI gateways bridge existing ISDN lines to IP-PBX platforms without a full infrastructure replacement. We size both based on actual call-volume data and configure routing rules so the dialer uses the cheapest trunk that still meets answer-seizure and quality targets.",
      benefits: [
        "GSM gateway sizing based on actual concurrency, reducing ISDN line costs",
        "PRI gateway bridging that avoids a forklift upgrade from ISDN to IP",
        "Routing rules configured per-trunk so cost optimization doesn't sacrifice call quality",
      ],
      typicalDeployment: "Contact centers running high-volume outbound campaigns or migrating from ISDN to IP infrastructure.",
      oemBrands: ["Alcatel-Lucent", "Cisco"],
    },
    {
      title: "CRM / Dialer Solution",
      description:
        "CRM and predictive dialer software that automates dialing and surfaces customer history on the agent's screen the moment the call connects. We deploy and integrate the platform so customer data, call outcomes, and follow-up tasks flow into one workflow — turning a room full of people on phones into an operation that can measure and improve its performance.",
      benefits: [
        "Customer history on screen at call connect — no manual lookup during the conversation",
        "Automated dialing in predictive, progressive, preview, or manual mode per campaign",
        "Performance dashboards showing drop rates, average handle times, and agent talk-time",
      ],
      typicalDeployment: "Sales and support contact centers needing CRM integration and outbound campaign automation.",
      oemBrands: [],
    },
    {
      title: "Voice Logger & Auto Dialer",
      description:
        "Call recording across analog, PRI, and VoIP lines — paired with automated outbound dialing and performance dashboards. Every call is logged and retrievable for compliance, dispute resolution, or quality review. The auto dialer supports predictive, progressive, preview, and manual modes, with CRM integration, IVR, and SMS outreach capabilities.",
      benefits: [
        "Universal recording across all line types — analog, PRI, and VoIP — in one system",
        "Automated dialing modes matched to campaign type and compliance requirements",
        "Performance dashboards that surface bottlenecks before they show up in weekly reports",
      ],
      typicalDeployment: "Regulated contact centers, customer service operations, and outbound sales teams requiring compliance recording.",
      oemBrands: [],
    },
  ],

  deployment: {
    headline: "Corporate Contact Center Platform Modernization",
    clientType: "Corporate Contact Center",
    deploymentSize: "Multi-shift contact center operation",
    technologies: ["CRM-Integrated Dialer", "Voice Logging", "GSM Gateway", "Headset Fleet"],
    overview:
      "A representative scope for a contact center replacing aging headset and dialer hardware with an integrated platform. The engagement covers a fleet refresh of full-shift headsets, deployment of a CRM-integrated predictive dialer, voice logging across all line types for compliance, and GSM gateway connectivity sized for actual call-volume data.",
    outcome:
      "Call handling, customer data, and compliance recording brought into one integrated workflow — with performance dashboards that give the operations team real-time visibility instead of waiting for weekly reports.",
    timeline: "4–8 weeks",
  },

  industries: [
    {
      segmentSlug: "enterprises",
      title: "Enterprises",
      description:
        "Enterprise contact centers need the full stack integrated: headsets, connectivity, dialer, CRM, and recording — all supported by one team so there's a single escalation path when something fails mid-shift. We design the platform around the organization's call volume, compliance requirements, and performance measurement needs.",
    },
    {
      segmentSlug: "hotels",
      title: "Hotels & Hospitals",
      description:
        "Hospitality and healthcare contact centers handle reservation calls, guest inquiries, patient scheduling, and service requests — often across multiple locations. We design systems that route calls to the right team, log interactions for service quality, and integrate with the property's management systems.",
    },
    {
      segmentSlug: "soho",
      title: "SOHO",
      description:
        "Smaller operations that run inbound or outbound calling as part of their business — sales teams, support lines, appointment scheduling — need the same dialer and recording capabilities scaled to a smaller agent count. We specify right-sized platforms that give lean teams enterprise-grade call management without enterprise overhead.",
    },
  ],

  oemPartners: [
    {
      name: "Alcatel-Lucent",
      expertise: "Voice platforms and PRI gateway infrastructure for contact center telephony.",
      category: "Communication & IT",
    },
    {
      name: "Cisco",
      expertise: "Unified Communications platforms supporting contact center voice, recording, and CRM integration.",
      category: "Communication & IT",
    },
    {
      name: "D-Link",
      expertise: "Network switching infrastructure supporting contact center voice and data traffic.",
      category: "Communication & IT",
    },
    {
      name: "Fortinet",
      expertise: "Network security for contact center infrastructure, securing voice and data traffic.",
      category: "Communication & IT",
    },
  ],

  whyIbs: [
    {
      title: "One Stack, One Escalation Path",
      description:
        "Headsets, gateways, dialer, CRM, and recording — specified and supported by one team. When audio quality drops mid-shift, there's a single point of accountability instead of three vendors pointing at each other.",
    },
    {
      title: "Sized on Data, Not Spec Sheets",
      description:
        "GSM and PRI gateway capacity is sized against actual call-volume data — peak concurrency, answer-seizure ratios, and campaign patterns. The result is trunks that match the operation, not the supplier's recommended package.",
    },
    {
      title: "Integration Before Handover",
      description:
        "The CRM surfaces customer data at call connect. The dialer logs outcomes automatically. The recording system captures every line type. By the time the system goes live, the workflow is integrated — not a collection of disconnected tools.",
    },
    {
      title: "Visibility That Enables Improvement",
      description:
        "Performance dashboards showing drop rates, average handle times, and agent talk-time mean the operations team can spot a bottleneck in real time — not when it shows up in a weekly report.",
    },
  ],

  faqs: [
    {
      question: "What is the difference between predictive and progressive dialing?",
      answer:
        "Predictive dialing uses algorithms to dial multiple numbers simultaneously, anticipating which calls will be answered and routing connected calls to available agents. This maximizes agent talk-time but can result in abandoned calls if the prediction overestimates agent availability. Progressive dialing dials one number per available agent, waiting for an agent to be free before initiating the next call. This eliminates abandoned calls but results in lower agent utilization. We configure the dialing mode based on the campaign type, compliance requirements, and the organization's tolerance for abandoned calls versus agent idle time.",
    },
    {
      question: "Do we need a GSM gateway if we already have ISDN lines?",
      answer:
        "It depends on your call profile. GSM gateways are most cost-effective for outbound calling to mobile numbers, where GSM-to-mobile rates are lower than ISDN-to-mobile rates. If your contact center primarily makes outbound calls to mobiles, a GSM gateway can significantly reduce per-call costs. If your traffic is primarily inbound or calls to landlines, your existing ISDN lines may be more cost-effective. We analyze your actual call patterns — not a generic rate card — and recommend the connectivity mix that optimizes cost without sacrificing quality.",
    },
    {
      question: "What does a PRI gateway do, and do we need one?",
      answer:
        "A PRI gateway bridges existing ISDN (E1/T1) lines to an IP-PBX or VoIP infrastructure, allowing you to retain your ISDN connectivity while migrating the rest of the telephony to IP. This is useful for contact centers that want the benefits of IP-based dialers and recording without the cost and risk of replacing their existing ISDN lines all at once. If you're planning a full migration to SIP, a PRI gateway serves as a transitional bridge. If you're not planning to move off ISDN, you may not need one.",
    },
    {
      question: "How does voice logging work across different line types?",
      answer:
        "A properly configured voice logger records calls regardless of the line type — analog, PRI, or VoIP — by tapping into the audio signal at the appropriate point in the call path. For analog lines, this is typically a physical tap on the line. For PRI and VoIP, it's a logical tap through the PBX or a SPAN port. The recording is then indexed by date, time, agent, extension, and (if integrated with CRM) by customer record. We configure the logger to capture all line types and integrate with the dialer so every call is automatically recorded without agent intervention.",
    },
    {
      question: "Can the dialer integrate with our existing CRM?",
      answer:
        "In most cases, yes. The CRM and dialer platforms we deploy support standard integration methods — API connections, database lookups, and screen-pop protocols — that work with the CRM systems commonly used in Delhi NCR contact centers. We configure the integration so that when a call connects, the agent sees the customer's record, history, and any open issues without manual lookup. If the CRM is a proprietary or legacy system, we assess the integration options during the planning phase and recommend the approach that provides the most reliable connection.",
    },
    {
      question: "What kind of headsets do contact center agents need?",
      answer:
        "Contact center headsets need to meet three requirements: full-shift comfort (agents wear them for hours), clear audio with noise reduction (open-floor contact centers are noisy environments), and compatibility with the specific phone or softphone platform in use. We specify headsets that meet all three, and we verify the audio chain from caller to agent to recording system to ensure there's no echo, clipping, or one-way audio. The right headset for a Cisco desk phone is not necessarily the right headset for a softphone running on a PC — we match the hardware to the platform.",
    },
  ],

  ctaHeadline: "Planning a Contact Center Upgrade?",
  ctaDescription:
    "Whether you're modernizing an existing operation or setting up a new contact center, we'll design the full stack — headsets, connectivity, dialer, and recording — as one integrated system.",
  ctaButtonText: "Talk to an IBS Engineer",
};

// ===========================================================================
// 6. SOFTWARE LICENSES
// ===========================================================================
const softwareLicenses: ServicePageData = {
  slug: "software-licenses",

  heroHeadline: "Licensed, Compliant, Under Control",
  heroSubheadline:
    "Genuine software licenses for Zoom, Microsoft 365, Adobe, Webex, and security software — sourced through authorized channels, managed on a renewal calendar, and documented for audit readiness.",
  heroPrimaryCta: "Audit Your Licenses",
  heroSecondaryCta: "View Capabilities",

  challengeTitle: "The Quiet Cost of License Sprawl",
  challengeParagraphs: [
    "Most licensing problems in offices are quiet: a Microsoft 365 tenant where half the users are on Business Basic and the other half are on Business Standard but nobody remembers who approved the split, a Zoom plan that renews automatically at a higher tier than the team needs, or a fleet of Adobe seats assigned to people who left the company a year ago. The money leaks in small amounts every month, and nobody notices until someone asks for a license inventory or a vendor triggers a compliance review.",
    "License sprawl doesn't just waste money — it creates risk. A software audit, whether triggered by a vendor, a customer's due diligence, or a regulatory review, turns up unlicensed installs fast. The penalty math for unlicensed software is never favorable, and the discovery process itself is disruptive: the IT team pulls away from operational work for weeks, the legal team gets involved, and the organization is exposed to fines and reputational damage. Genuine licensing with documented proof of purchase is the only defense that holds up.",
    "The underlying problem is that licensing was never treated as a managed process. Licenses were purchased ad hoc — a new hire needed Microsoft Office, the marketing team needed Adobe, the security team needed endpoint protection — and each purchase went through a different channel, often a different vendor, with no central inventory or renewal tracking. Over time, the organization accumulates licenses it doesn't need, misses renewals on licenses it does need, and has no single source of truth when someone asks what software the company is actually paying for.",
  ],

  approachSteps: [
    {
      title: "License Audit",
      description:
        "We inventory every software license deployed across the organization — what's installed, what's assigned, what's actually being used, and where it was purchased — to establish a baseline of reality.",
      icon: "clipboard-search",
    },
    {
      title: "Consolidation & Optimization",
      description:
        "We reconcile the audit against actual usage to identify unused seats, mismatched tiers, and redundant products — then consolidate the licensing structure so the spend matches the need.",
      icon: "layers",
    },
    {
      title: "Authorized Procurement",
      description:
        "We source genuine licenses through authorized channels — not gray-market resellers — so the manufacturer warranty and support entitlements actually apply. Every license comes with documented proof of purchase.",
      icon: "shopping-cart",
    },
    {
      title: "Tenant & Deployment Configuration",
      description:
        "We configure the software tenant — user assignments, security policies, and feature access — so the license delivers its full value from day one, rather than sitting at default settings that leave capabilities unused.",
      icon: "settings",
    },
    {
      title: "Compliance Documentation",
      description:
        "We compile the license inventory, proof-of-purchase records, and user assignment maps into a compliance-ready package — so a software audit is a one-hour conversation instead of a six-week fire drill.",
      icon: "file-check",
    },
    {
      title: "Renewal Management",
      description:
        "We manage the renewal calendar so plans don't lapse mid-quarter, don't auto-renew at the wrong tier, and don't renew for users who have left. Every renewal is a conscious decision, not an automatic charge.",
      icon: "calendar-clock",
    },
  ],

  solutions: [
    {
      title: "Collaboration & Productivity",
      description:
        "Licenses for the collaboration tools that run the business day-to-day: Zoom and Webex for video conferencing, Microsoft 365 for email, Office applications, and cloud collaboration, and Windows licenses for the devices the team works on. We audit what's deployed, consolidate what's scattered, and source genuine licenses through authorized channels so support entitlements and update access are never in question.",
      benefits: [
        "Genuine licenses with valid support entitlements and manufacturer warranty",
        "Consolidated tenant management — one admin view instead of fragmented accounts",
        "Renewal calendar that prevents lapses and eliminates auto-renewal surprises",
      ],
      typicalDeployment: "Organizations standardizing their collaboration stack or cleaning up license sprawl accumulated across multiple ad-hoc purchases.",
      oemBrands: ["Zoom", "Microsoft"],
    },
    {
      title: "Creative & Enterprise Applications",
      description:
        "Access to current Adobe applications for design and marketing teams, and enterprise resource planning (ERP) software for operations. We manage the licensing lifecycle — from procurement through assignment to renewal — so the creative and enterprise tools the business depends on are always current, compliant, and assigned to the right people.",
      benefits: [
        "Current Adobe applications with up-to-date features and security patches",
        "User assignment management that reclaims seats from departed employees",
        "ERP licensing sourced through authorized vendor channels with proper support",
      ],
      typicalDeployment: "Design teams needing current creative tools, and operations teams running ERP software that requires compliant licensing.",
      oemBrands: ["Adobe"],
    },
    {
      title: "Security Software",
      description:
        "Licensed antivirus and endpoint protection to keep systems patched and compliant. Security software licensing is particularly sensitive — a lapsed license means no updates, which means no protection against new threats. We manage the renewal cycle so security software never lapses, and we ensure the licensed features match the organization's security requirements rather than running on a default configuration that leaves gaps.",
      benefits: [
        "Continuous update access that keeps endpoint protection current against new threats",
        "Feature licensing matched to the organization's security requirements",
        "Compliance-ready documentation for regulatory and audit requirements",
      ],
      typicalDeployment: "Any organization where endpoint protection and antivirus software are required for operational or regulatory compliance.",
      oemBrands: [],
    },
  ],

  deployment: {
    headline: "Enterprise License Consolidation & Compliance",
    clientType: "Enterprise Organization",
    deploymentSize: "Multi-department organization with fragmented software licensing",
    technologies: ["Microsoft 365", "Zoom", "Adobe", "Endpoint Security"],
    overview:
      "A representative scope for an organization with software licenses accumulated across multiple departments, vendors, and purchase channels — some genuine, some questionable, and none centrally tracked. The engagement covers a full license audit, consolidation onto authorized channels, tenant configuration, compliance documentation, and a managed renewal calendar.",
    outcome:
      "A centralized license inventory with proof-of-purchase records, a consolidated tenant structure that matches the organization's actual usage, and a renewal calendar that turns every license renewal into a conscious decision instead of an automatic charge.",
    timeline: "2–4 weeks",
  },

  industries: [
    {
      segmentSlug: "enterprises",
      title: "Enterprises",
      description:
        "Enterprise organizations are where license sprawl accumulates fastest — multiple departments making independent purchases, employees joining and leaving without license reclamation, and tiers being selected based on immediate need rather than a managed plan. We audit, consolidate, and manage the entire licensing lifecycle so the enterprise has one inventory, one renewal calendar, and one compliance-ready document set.",
    },
    {
      segmentSlug: "hotels",
      title: "Hotels & Hospitals",
      description:
        "Hospitality and healthcare organizations run multiple software platforms — property management, point of sale, guest services, clinical systems — each with its own licensing requirements. We manage the licensing portfolio so renewals are tracked, seats are properly assigned, and compliance is maintained across a complex software ecosystem.",
    },
    {
      segmentSlug: "government",
      title: "Government",
      description:
        "Government departments operate under procurement and compliance requirements that make genuine licensing and documented proof of purchase non-negotiable. We source licenses through authorized channels, maintain the documentation trail that regulatory reviews require, and manage renewals to prevent lapses that could create compliance gaps.",
    },
    {
      segmentSlug: "soho",
      title: "SOHO",
      description:
        "Small offices need genuine, licensed software — the same compliance and support requirements apply regardless of organization size. We help lean teams get the right licenses for their actual needs, set up the tenant properly, and manage renewals so a small IT function isn't spending time chasing invoices from multiple vendors.",
    },
  ],

  oemPartners: [
    {
      name: "Zoom",
      expertise: "Video conferencing licenses and Zoom Rooms hardware integration, with tier management and renewal tracking.",
      category: "AV Integration",
    },
    {
      name: "Microsoft",
      expertise: "Microsoft 365 tenant management, Office licensing, and Windows device licensing through authorized channels.",
      category: "Communication & IT",
    },
    {
      name: "Adobe",
      expertise: "Creative Cloud and enterprise Adobe licensing for design and marketing teams.",
      category: "Communication & IT",
    },
    {
      name: "Fortinet",
      expertise: "FortiGuard security subscription and firewall licensing for endpoint and network protection.",
      category: "Communication & IT",
    },
    {
      name: "Sophos",
      expertise: "Endpoint protection and antivirus licensing with centralized management.",
      category: "Communication & IT",
    },
  ],

  whyIbs: [
    {
      title: "Audit Before Procurement",
      description:
        "Every licensing engagement starts with an audit — what's deployed, what's assigned, what's actually used. We don't sell licenses until we understand what's already there.",
    },
    {
      title: "Authorized Channels Only",
      description:
        "We source through authorized channels, not gray-market resellers. That means the manufacturer's warranty, support entitlements, and update access actually apply to your licenses.",
    },
    {
      title: "Compliance as a Default State",
      description:
        "License inventory, proof-of-purchase records, and user assignment maps are maintained continuously — so an audit is a one-hour conversation, not a six-week fire drill.",
    },
    {
      title: "Renewal as a Conscious Decision",
      description:
        "We manage the renewal calendar so every renewal is reviewed, approved, and optimized — not an automatic charge for seats that are no longer needed or tiers that don't match current usage.",
    },
  ],

  faqs: [
    {
      question: "Why does it matter where we buy our software licenses?",
      answer:
        "Licenses sourced through unauthorized or gray-market channels may appear cheaper, but they often don't carry the manufacturer's support entitlements, warranty, or update access. If you need technical support, the manufacturer may refuse it. If an audit is triggered, gray-market licenses may not be accepted as proof of compliance. We source exclusively through authorized channels so that every license comes with valid entitlements and documented proof of purchase — the only defense that holds up in a compliance review.",
    },
    {
      question: "How do we know if we have unlicensed or over-licensed software?",
      answer:
        "The only reliable way is to conduct a license audit: inventory every software installation across the organization, match each installation to a license, and compare the assigned licenses to actual usage. This reveals unlicensed installs (compliance risk), unused seats (wasted spend), and mismatched tiers (paying for features nobody uses). We do this as the first step of every licensing engagement — it's the foundation for everything that follows.",
    },
    {
      question: "What happens during a software compliance audit?",
      answer:
        "A software audit — whether triggered by the vendor, a customer's due diligence, or a regulatory review — typically requires the organization to produce proof of licensing for every software installation in use. This means producing license keys, proof-of-purchase documents, and user assignment records for every product on every machine. If unlicensed software is found, the penalties can include back-payment of license fees, fines, and legal costs. With proper licensing documentation maintained in advance, the audit process is a straightforward verification rather than a disruptive investigation.",
    },
    {
      question: "Can you help us consolidate licenses from multiple vendors?",
      answer:
        "Yes. A common starting point for organizations is licenses purchased from multiple resellers, in multiple transactions, with no central tracking. We audit the entire portfolio, identify what's genuine and what isn't, reconcile assignments against actual users, and consolidate onto a managed structure with a single renewal calendar. Where licenses were purchased through unauthorized channels, we replace them with genuine licenses from authorized sources.",
    },
    {
      question: "How do you manage license renewals?",
      answer:
        "We maintain a renewal calendar for every license in the portfolio, with advance notices that give enough time to review, adjust, and approve each renewal before it processes. This means reviewing whether the tier is still correct, whether all assigned users are still active, and whether the quantity matches the current headcount. The goal is to prevent both lapses (which create compliance gaps) and unnecessary auto-renewals (which waste budget on unused seats).",
    },
    {
      question: "Do you only handle Microsoft and Adobe, or other software too?",
      answer:
        "We handle licensing across the software stack the organization depends on. Microsoft 365 and Adobe are the most common because they represent the largest spend and the highest compliance risk, but we also manage licensing for security software, ERP systems, video conferencing platforms, and other business applications. The approach is the same regardless of the product: audit what's deployed, consolidate what's scattered, source through authorized channels, and manage the renewal lifecycle.",
    },
    {
      question: "What's the difference between Microsoft 365 Business Basic, Standard, and Business Premium?",
      answer:
        "The tiers differ in the applications and features included. Business Basic includes web and mobile versions of Office apps plus email and Teams. Business Standard adds desktop versions of Office apps. Business Premium includes everything in Standard plus advanced security features like Intune for device management and Azure AD Plan 1 for identity management. The right tier depends on whether your team needs desktop apps, whether you have compliance or device management requirements, and whether you're currently paying for features you don't use. We analyze your actual usage during the audit and recommend the tier that matches.",
    },
  ],

  ctaHeadline: "When Was Your Last License Audit?",
  ctaDescription:
    "If you can't answer that in under five seconds, your licensing needs attention. We'll audit what you have, consolidate what's scattered, and build a renewal calendar that keeps you compliant.",
  ctaButtonText: "Talk to an IBS Engineer",
};

// ===========================================================================
// 7. ANNUAL MAINTENANCE SERVICE
// ===========================================================================
const annualMaintenanceService: ServicePageData = {
  slug: "annual-maintenance-service",

  heroHeadline: "Systems That Stay Reliable",
  heroSubheadline:
    "Annual Maintenance Contracts that keep communication, AV, security, and fire alarm systems running the way they were designed to — backed by certified technicians and clear service-level agreements.",
  heroPrimaryCta: "Discuss an AMC Plan",
  heroSecondaryCta: "View Service Categories",

  challengeTitle: "The Gap Between Installation and Downtime",
  challengeParagraphs: [
    "Most systems integration projects end at handover. The install team packs up, the project closes, and the customer inherits a network rack, a boardroom touchscreen, a CCTV NVR, and a fire alarm panel — with no plan for what happens when any of them drifts out of calibration six months later. A smoke detector that hasn't been cleaned in a year, a UPS battery that hasn't been load-tested, a SIP trunk that hasn't had its firmware updated — these are the things that fail silently and then become outages.",
    "The cost of this gap is underestimated because it's invisible until it manifests. A video conferencing system that worked perfectly at handover gradually develops audio issues as the DSP settings drift. Wi-Fi coverage degrades as the environment changes — new walls, new furniture, more devices — and nobody notices until a critical video call drops. The fire alarm panel that tested clean at commissioning develops a fault that would have been caught by a scheduled inspection, but the inspection was never scheduled. Every one of these is a preventable outage that becomes an unplanned emergency.",
    "The organizations that avoid this pattern are the ones that treat maintenance as a structured process, not a reactive expense. Scheduled visits, documented service logs, and a defined escalation matrix mean problems are caught early, response times are predictable, and compliance requirements are met as a matter of routine — not as a scramble before an audit. An AMC is not an insurance policy against failure. It's a discipline that prevents the kind of failure that comes from neglect.",
  ],

  approachSteps: [
    {
      title: "Full Asset Inventory",
      description:
        "Every AMC engagement starts with a comprehensive inventory: what was installed, when, what the OEM recommends for maintenance, and what the site's own risk profile looks like. This inventory becomes the baseline for every service visit.",
      icon: "clipboard-list",
    },
    {
      title: "Service Calendar Design",
      description:
        "We build a scheduled-service calendar based on the asset inventory and OEM recommendations: quarterly visits for communication and AV systems, half-yearly for fire alarm panels, annual for UPS battery load tests — tailored to the site's actual systems and risk profile.",
      icon: "calendar",
    },
    {
      title: "Scheduled Preventive Maintenance",
      description:
        "Certified technicians perform scheduled servicing on every covered system — firmware updates, calibration checks, cleaning, battery testing, and configuration verification — with a service log and health summary produced after every visit.",
      icon: "wrench",
    },
    {
      title: "Emergency Response Protocol",
      description:
        "A separate emergency-response protocol with a defined escalation matrix and target response time, so when something fails outside the scheduled visits, the right person is notified and the right action is taken — not a call to a generic support line.",
      icon: "phone-call",
    },
    {
      title: "Compliance Alignment",
      description:
        "Maintenance schedules aligned with BIS norms for fire safety, STQC-aligned practices for surveillance and access control where applicable, and the OEM's own service requirements — so compliance is maintained as a routine, not a pre-audit exercise.",
      icon: "shield-check",
    },
    {
      title: "Reporting & Documentation",
      description:
        "Every visit produces a service log, a checklist, and a health summary. Over time, these build into a maintenance history that supports audit readiness, informs capital planning, and provides a documented record of the system's condition.",
      icon: "file-text",
    },
  ],

  solutions: [
    {
      title: "Communication Technologies",
      description:
        "Maintenance of voice platforms — SIP, analog, and hybrid configurations — including scheduled firmware updates, call-flow optimization, and troubleshooting for connectivity, call drops, and user provisioning issues. A quarterly visit keeps the voice system performing the way it did at handover, catching issues like voicemail capacity limits or SIP trunk firmware bugs before they affect users.",
      benefits: [
        "Scheduled firmware updates that prevent security vulnerabilities and compatibility issues",
        "Call-flow reviews that catch routing problems caused by organizational changes",
        "Troubleshooting for connectivity, call drops, and user provisioning — resolved on a schedule, not in an emergency",
      ],
      typicalDeployment: "Offices running IP-PBX, SIP trunks, or hybrid voice systems that need ongoing reliability.",
      oemBrands: ["Alcatel-Lucent", "Cisco"],
    },
    {
      title: "Audio/Video Solutions",
      description:
        "Servicing of AV setups in conference rooms, classrooms, and auditoriums, with DSP and mixer calibration, cable integrity checks, and video conferencing support. Room AV that was perfectly tuned at installation will drift over time — microphone sensitivity changes, display settings shift, and cable connections degrade. Scheduled calibration keeps the system performing the way it did on day one.",
      benefits: [
        "DSP and mixer calibration that restores audio quality to installation-day levels",
        "Cable integrity checks that catch degraded connections before a meeting fails",
        "Video conferencing platform support to keep room systems compatible with software updates",
      ],
      typicalDeployment: "Boardrooms, training rooms, auditoriums, and any space where AV reliability directly affects business operations.",
      oemBrands: ["Poly", "Crestron", "Biamp", "Shure", "Kramer"],
    },
    {
      title: "Fire Alarm Systems",
      description:
        "Servicing of conventional and addressable panels — including Morley DXc1/DXc2 series — with periodic smoke detector cleaning, alarm verification, battery checks, and fire safety compliance support. Fire alarm maintenance is not optional in regulated environments, and the maintenance schedule is designed to meet BIS norms with documented service logs for audit readiness.",
      benefits: [
        "Smoke detector cleaning and alarm verification on a schedule aligned with BIS norms",
        "Battery and panel testing that catches degraded components before they fail",
        "Audit-ready documentation — service logs, checklists, and health summaries for every visit",
      ],
      typicalDeployment: "Commercial buildings, hotels, hospitals, and government facilities where fire safety compliance is mandatory.",
      oemBrands: ["Honeywell", "Morley", "Notifier", "Edwards"],
    },
    {
      title: "CCTV Surveillance Systems",
      description:
        "Maintenance of IP and analog cameras with NVR/DVR integration, lens cleaning, angle verification, and storage health checks. Surveillance systems that aren't maintained develop problems incrementally: cameras shift angle, lenses accumulate dust, and NVR storage fills or develops faults. Scheduled visits catch these issues before they result in a gap in coverage when footage is actually needed.",
      benefits: [
        "Lens cleaning and angle verification that maintains coverage quality over time",
        "NVR/DVR health checks that catch storage degradation before recording stops",
        "Remote monitoring support to verify system status between scheduled visits",
      ],
      typicalDeployment: "Any property relying on CCTV for security, compliance, or operational monitoring.",
      oemBrands: ["Hikvision", "Dahua", "Axis"],
    },
    {
      title: "Access Control Systems",
      description:
        "Inspection of biometric, RFID, and keypad modules, with configuration updates, event log monitoring, and door controller diagnostics. Access control systems also need integration support — visitor management integration and fire evacuation workflows that need to be verified periodically. We check that the system not only works but works as part of the integrated security ecosystem.",
      benefits: [
        "Biometric and RFID module inspection that catches reader degradation before entry failures",
        "Event log monitoring that surfaces anomalies — failed attempts, time-breach entries, controller faults",
        "Integration verification with visitor management and fire evacuation workflows",
      ],
      typicalDeployment: "Offices, hotels, hospitals, and any facility with identity-verified entry requirements.",
      oemBrands: ["eSSL", "HID", "Honeywell"],
    },
  ],

  deployment: {
    headline: "Enterprise Multi-System AMC Engagement",
    clientType: "Enterprise Organization",
    deploymentSize: "Multi-system, multi-floor facility with communication, AV, security, and fire alarm systems",
    technologies: ["Voice Maintenance", "AV Calibration", "CCTV Service", "Fire Alarm Testing", "Access Control Inspection"],
    overview:
      "A representative scope for an organization entering a comprehensive AMC covering all installed systems: voice communication platforms, boardroom and training room AV, CCTV surveillance, access control, and fire alarm systems. The engagement starts with a full asset inventory and builds a scheduled-service calendar tailored to the site's system mix and risk profile.",
    outcome:
      "Every installed system covered by a defined maintenance schedule, with documented service logs, a clear escalation matrix for emergencies, and compliance alignment built into the calendar — so maintenance is a routine process, not a reactive scramble.",
    timeline: "Ongoing annual engagement",
  },

  industries: [
    {
      segmentSlug: "enterprises",
      title: "Enterprises",
      description:
        "Enterprise offices run multiple technology systems — voice, AV, network, security — and maintaining them in-house requires specialized skills that most IT teams don't have time for. An AMC with IBS means the same engineering team that installed the systems maintains them, with the original as-built documentation on hand and a service calendar tailored to the organization's system mix.",
    },
    {
      segmentSlug: "hotels",
      title: "Hotels & Hospitals",
      description:
        "Hospitality and healthcare properties run technology around the clock, and system failures directly affect guests or patients. AMC coverage for these properties includes fire alarm maintenance aligned with regulatory norms, surveillance system health checks, and AV servicing for event and conferencing spaces — with emergency response protocols that match the 24/7 operational reality.",
    },
    {
      segmentSlug: "government",
      title: "Government",
      description:
        "Government facilities operate under compliance requirements that make documented maintenance non-negotiable. Our AMC includes service logs, checklists, and health summaries formatted for audit readiness, with maintenance schedules aligned to BIS fire safety norms and STQC-aligned practices where applicable for surveillance and access control systems.",
    },
    {
      segmentSlug: "residential",
      title: "Residential",
      description:
        "Residential systems — surveillance, access control, home automation — need periodic maintenance to stay reliable. Camera lenses accumulate dust, access control readers degrade, and automation configurations can drift. Our residential AMC covers the systems we installed with scheduled visits and emergency response, keeping the home's technology running without requiring the homeowner to manage it.",
    },
  ],

  oemPartners: [
    {
      name: "Alcatel-Lucent",
      expertise: "Scheduled maintenance for IP-PBX and voice communication platforms, including firmware updates and call-flow optimization.",
      category: "Communication & IT",
    },
    {
      name: "Cisco",
      expertise: "Maintenance for unified communications platforms, network infrastructure, and video conferencing endpoints.",
      category: "Communication & IT",
    },
    {
      name: "Poly",
      expertise: "Servicing of video conferencing endpoints and audio conferencing systems.",
      category: "AV Integration",
    },
    {
      name: "Crestron",
      expertise: "Maintenance of room control systems, touch panels, and AV management platforms.",
      category: "AV Integration",
    },
    {
      name: "Biamp",
      expertise: "DSP calibration and audio system servicing for conference and public address systems.",
      category: "AV Integration",
    },
    {
      name: "Shure",
      expertise: "Microphone system inspection and servicing for installed sound and conferencing.",
      category: "AV Integration",
    },
    {
      name: "Kramer",
      expertise: "AV signal management and switching system maintenance.",
      category: "AV Integration",
    },
    {
      name: "Hikvision",
      expertise: "IP and analog camera maintenance, NVR health checks, and surveillance system servicing.",
      category: "Security",
    },
    {
      name: "Dahua",
      expertise: "CCTV camera maintenance and recording system health checks.",
      category: "Security",
    },
    {
      name: "Axis",
      expertise: "Premium IP camera maintenance and network video system servicing.",
      category: "Security",
    },
    {
      name: "eSSL",
      expertise: "Biometric and RFID access control module inspection and configuration updates.",
      category: "Security",
    },
    {
      name: "HID",
      expertise: "Card-based access control system maintenance and reader diagnostics.",
      category: "Security",
    },
    {
      name: "Honeywell",
      expertise: "Fire alarm panel servicing, access control maintenance, and integrated security system support.",
      category: "Security",
    },
    {
      name: "Morley",
      expertise: "Addressable fire alarm panel (DXc1/DXc2) servicing and compliance-aligned maintenance.",
      category: "Security",
    },
    {
      name: "Notifier",
      expertise: "Fire detection and alarm system maintenance for commercial buildings.",
      category: "Security",
    },
    {
      name: "Edwards",
      expertise: "Fire alarm panel maintenance and detector servicing.",
      category: "Security",
    },
    {
      name: "APC",
      expertise: "Online UPS battery load testing and power protection system maintenance.",
      category: "Communication & IT",
    },
    {
      name: "Vertiv",
      expertise: "UPS system maintenance and power infrastructure servicing.",
      category: "Communication & IT",
    },
  ],

  whyIbs: [
    {
      title: "Tailored AMC Packages",
      description:
        "Built around site size, system complexity, and risk profile — not a one-size-fits-all contract. A small office with voice and Wi-Fi gets a different schedule and scope than a multi-floor enterprise with AV, security, and fire alarm systems.",
    },
    {
      title: "Rapid Response Team",
      description:
        "Trained personnel with a defined escalation matrix. When something fails, the right technician is dispatched based on the system type and severity — not a generic support queue.",
    },
    {
      title: "Compliance Ready",
      description:
        "Maintenance aligned with BIS, STQC, and other regulatory norms. The service calendar is designed so compliance is maintained as a routine, not as a pre-audit scramble.",
    },
    {
      title: "Preventive & Emergency Support",
      description:
        "Scheduled servicing catches problems before they become outages. The emergency response protocol handles the ones that slip through. Both are covered under the same contract.",
    },
    {
      title: "Documentation & Reporting",
      description:
        "Service logs, checklists, and health summaries after every visit. Over time, these build into a maintenance history that supports audit readiness, informs capital planning, and documents the system's condition.",
    },
  ],

  faqs: [
    {
      question: "What does an Annual Maintenance Contract actually cover?",
      answer:
        "An AMC covers the ongoing servicing, maintenance, and emergency support for the technology systems we've installed — or, in some cases, systems installed by others that the organization wants us to take over. The scope is defined during the AMC setup and typically includes scheduled preventive maintenance visits (frequency depends on the system type), firmware and software updates, calibration and configuration checks, emergency response with a defined escalation matrix, and compliance-aligned servicing for regulated systems like fire alarms. The specific systems, visit frequency, and response times are all documented in the contract.",
    },
    {
      question: "How is the maintenance schedule determined?",
      answer:
        "The maintenance schedule is built from three inputs: the asset inventory (what systems are installed), the OEM's recommended service intervals, and the site's risk profile. Communication and AV systems typically get quarterly visits. Fire alarm panels get half-yearly servicing (aligned with BIS norms). UPS battery load tests are annual. The schedule is documented at the start of the AMC and adjusted if the system mix changes during the contract period.",
    },
    {
      question: "Can you maintain systems that IBS didn't install?",
      answer:
        "Yes, with a caveat. We can take over maintenance of systems installed by others, but the first step is a full assessment of the existing installation — its condition, documentation quality, and any issues from the original deployment. If the system was installed to a reasonable standard and is compatible with the OEM's service requirements, we can build an AMC around it. If there are significant gaps in documentation or installation quality, we may recommend remediation work before the AMC begins, so the maintenance has a reliable baseline.",
    },
    {
      question: "What happens if something breaks between scheduled visits?",
      answer:
        "Every AMC includes an emergency response protocol with a defined escalation matrix and target response time. When a system fails outside the scheduled maintenance window, the reported issue is routed to the appropriate technician based on system type and severity. The escalation matrix defines who is notified, what the target response time is, and what happens if the first response doesn't resolve the issue. The goal is to restore service as quickly as possible, with a documented record of the fault and resolution.",
    },
    {
      question: "How does AMC maintenance support compliance audits?",
      answer:
        "Every scheduled maintenance visit produces a service log, a checklist of what was inspected, and a health summary of each system's condition. For fire alarm systems, the maintenance schedule is aligned with BIS norms, and the service logs document the specific tests and verifications performed. For surveillance and access control systems, the maintenance practices follow STQC-aligned guidelines where applicable. When an auditor requests evidence of maintenance, the documented service history is already compiled and ready — turning an audit into a verification exercise rather than a discovery process.",
    },
    {
      question: "Is it more cost-effective to have an AMC or pay for repairs as needed?",
      answer:
        "For organizations with multiple technology systems, an AMC is almost always more cost-effective than reactive repair. Scheduled maintenance catches issues early — a battery degrading, a firmware vulnerability, a calibration drift — when the fix is small and scheduled. Reactive repair means waiting for a failure, which is more disruptive, more expensive to resolve, and potentially damaging to the business (a boardroom system that fails during a client presentation, a fire alarm that doesn't sound during an actual event). The AMC also provides budget predictability: a fixed annual cost versus unpredictable repair bills.",
    },
    {
      question: "What's included in a fire alarm maintenance visit?",
      answer:
        "A fire alarm maintenance visit covers the full scope recommended by the OEM and required by applicable norms: visual inspection of all detectors and manual call points, smoke detector cleaning, alarm verification and sounder testing, battery voltage and backup power testing, panel functionality checks, zone mapping verification, and event log review. For addressable panels like the Morley DXc1/DXc2, we also verify device addressing and communication integrity. Every test result is documented in the service log, and any findings that require corrective action are flagged with a recommended resolution timeline.",
    },
  ],

  ctaHeadline: "Your Systems Deserve More Than Hope",
  ctaDescription:
    "If your last maintenance visit was the day the system was installed, it's already drifting. We'll inventory your assets, build a service calendar, and keep every system performing the way it was designed to.",
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