/**
 * Static content for the /careers page. Open positions, benefits, and the
 * application form's role options all read from here so they can be edited
 * in one place — and, where an admin override exists, swapped at runtime.
 */

export interface OpenPosition {
  slug: string;
  title: string;
  department: "Engineering" | "Sales" | "Operations" | "Support" | "Administration";
  location: "Dwarka, New Delhi" | "Delhi NCR (Field)" | "Remote (India)";
  experience: string;
  type: "Full-time" | "Contract" | "Internship";
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

/**
 * Roles we are typically hiring for. Each is a real, defined role at IBS;
 * the application form lists these so candidates self-select into the right
 * pipeline. We may not have an active opening for every role at all times
 * — that's communicated on the page itself.
 */
export const openPositions: OpenPosition[] = [
  {
    slug: "field-service-engineer",
    title: "Field Service Engineer",
    department: "Engineering",
    location: "Delhi NCR (Field)",
    experience: "2–5 years",
    type: "Full-time",
    summary:
      "Own the on-site commissioning, handover, and ongoing maintenance of communication, AV, and security systems across Delhi NCR client sites.",
    responsibilities: [
      "Commissioning and configuring IP-PBX, networking, CCTV, and access control systems on customer sites.",
      "First-line troubleshooting and preventive maintenance visits under AMCs.",
      "Coordinating with the project lead on installation schedules and material readiness.",
      "Documenting site configurations, handover checklists, and maintenance reports.",
    ],
    requirements: [
      "Diploma or B.Tech in Electronics, Electrical, or Computer Science.",
      "Hands-on experience with at least one of: IP-PBX (Alcatel, Cisco, Matrix), networking (Cisco, D-Link, Aruba), or CCTV/access control (Hikvision, Dahua, eSSL).",
      "Comfortable travelling across Delhi NCR; valid driving licence preferred.",
      "Strong communication — you will be the face of IBS on customer sites.",
    ],
  },
  {
    slug: "av-installation-engineer",
    title: "AV Installation Engineer",
    department: "Engineering",
    location: "Delhi NCR (Field)",
    experience: "3–6 years",
    type: "Full-time",
    summary:
      "Lead boardroom and auditorium AV installations end-to-end: from site survey and BOQ through installation, integration, and client handover.",
    responsibilities: [
      "Site surveys, BOQ preparation, and integration design for boardrooms, training rooms, and auditoriums.",
      "Installation and configuration of displays, projectors, audio systems, video conferencing codecs (Poly, Cisco, Logitech, AVer).",
      "Programming and commissioning of control systems (Crestron, Extron, Kramer) and DSP audio (Biamp, QSC, Shure).",
      "Client handover, training, and post-installation support.",
    ],
    requirements: [
      "3+ years installing and commissioning AV systems in corporate environments.",
      "Familiarity with at least one control system platform (Crestron, Extron, or Kramer).",
      "Ability to read AV system drawings and signal-flow diagrams.",
      "Manufacturer certifications (Crestron, Extron, Biamp, etc.) are a strong plus.",
    ],
  },
  {
    slug: "network-engineer",
    title: "Network Engineer",
    department: "Engineering",
    location: "Dwarka, New Delhi",
    experience: "2–5 years",
    type: "Full-time",
    summary:
      "Design, deploy, and support enterprise network infrastructure — switching, routing, Wi-Fi, and firewall — for IBS clients across Delhi NCR.",
    responsibilities: [
      "Network design, configuration, and deployment for office and campus environments.",
      "Switching (Cisco, Dell, D-Link), routing, Wi-Fi (Aruba, Ruckus, Netgear), and firewall (Sophos, Fortinet) configuration.",
      "Structured cabling supervision and certification testing.",
      "Ongoing support, monitoring, and AMC visits for deployed networks.",
    ],
    requirements: [
      "B.Tech or equivalent; CCNA / CCNP or equivalent hands-on experience.",
      "Strong understanding of L2/L3, VLANs, routing protocols, and Wi-Fi design.",
      "Experience with next-generation firewalls (Sophos, Fortinet).",
      "Ability to independently scope, deploy, and document a small-to-mid office network.",
    ],
  },
  {
    slug: "sales-engineer",
    title: "Sales Engineer (Pre-sales)",
    department: "Sales",
    location: "Dwarka, New Delhi",
    experience: "3–6 years",
    type: "Full-time",
    summary:
      "Be the technical bridge between customers and the engineering team: scope requirements, design solutions, prepare BOQs, and close proposals.",
    responsibilities: [
      "Customer site visits to understand requirements across communication, AV, IT, and security systems.",
      "Solution design, BOQ preparation, and proposal documentation.",
      "Coordinating with OEM partners for pricing, availability, and technical clarifications.",
      "Handover of won projects to the engineering team for execution.",
    ],
    requirements: [
      "Engineering degree with 3+ years in pre-sales or solution consulting for IT/AV/security systems.",
      "Ability to translate customer pain points into a concrete technical solution and BOQ.",
      "Strong written communication — proposals and technical documentation are a core deliverable.",
      "Existing relationships with Delhi NCR facility managers, IT heads, or project consultants is a plus.",
    ],
  },
  {
    slug: "amc-coordinator",
    title: "AMC Coordinator",
    department: "Operations",
    location: "Dwarka, New Delhi",
    experience: "1–3 years",
    type: "Full-time",
    summary:
      "Run the operational backbone of our Annual Maintenance Contract business: scheduling, ticket tracking, SLA monitoring, and customer communication.",
    responsibilities: [
      "Schedule preventive maintenance visits and track completion against SLAs.",
      "Log and triage incoming support requests; assign to field engineers based on skill and proximity.",
      "Maintain AMC contract records, renewal calendars, and spare-part inventory.",
      "Be the single point of contact for AMC customers on ticket status.",
    ],
    requirements: [
      "Bachelor's degree with 1–3 years of coordination or operations experience.",
      "Highly organised — comfortable managing 50+ open tickets at any time.",
      "Strong phone and email communication, in English and Hindi.",
      "Familiarity with ticketing tools (Freshdesk, Zoho, or similar) is a plus.",
    ],
  },
  {
    slug: "project-engineer-intern",
    title: "Project Engineer Intern",
    department: "Engineering",
    location: "Dwarka, New Delhi",
    experience: "0–1 year",
    type: "Internship",
    summary:
      "A structured 3–6 month internship for fresh engineering graduates: shadow senior engineers across AV, networking, and security deployments and grow into a full-time role.",
    responsibilities: [
      "Shadow senior engineers on site surveys, installations, and commissioning.",
      "Prepare documentation: site drawings, configuration notes, handover checklists.",
      "Help the operations team with ticket logging and AMC visit reports.",
      "Learn one specialisation (AV, networking, or security) in depth by month 3.",
    ],
    requirements: [
      "Recent B.Tech/Diploma graduate in Electronics, Electrical, or Computer Science.",
      "Eager to learn on site — this is not a desk-only role.",
      "Comfortable with basic hand tools and willing to travel across Delhi NCR.",
      "Strong fundamentals in networking or electronics; manufacturer coursework is a plus.",
    ],
  },
];

export interface CareerBenefit {
  title: string;
  description: string;
}

/**
 * Working at IBS — used in the "why join us" section. These are the real,
 * defensible benefits of working at a small, engineering-led systems
 * integrator (vs. a large corporate IT services firm).
 */
export const careerBenefits: CareerBenefit[] = [
  {
    title: "Real engineering, not just ticket-taking",
    description:
      "We are an engineering-led company. You will design, install, and maintain systems end-to-end — not hand off to someone else after the install. The work is hands-on and the learning is fast.",
  },
  {
    title: "Direct exposure to the OEM stack",
    description:
      "You will work with Cisco, Poly, Sophos, Hikvision, Crestron, Biamp, and the rest of our OEM roster in real deployments, not in a lab. Manufacturer certifications and direct OEM relationships are part of the job.",
  },
  {
    title: "Small team, real ownership",
    description:
      "We are a small team. Your work shows up on real client sites within weeks, and you own outcomes end-to-end. No layers of approval between you and the customer's problem.",
  },
  {
    title: "Delhi NCR focus — home every evening",
    description:
      "All our projects are in Delhi NCR. Field engineers are back home every evening — no multi-week outstation deployments that take over your life.",
  },
  {
    title: "Structured growth path",
    description:
      "Interns grow into engineers. Engineers grow into project leads. Project leads grow into solution architects. The path is real, and several of our senior engineers started as interns.",
  },
  {
    title: "Health insurance and PF",
    description:
      "Group health insurance for you and your dependents, EPF contribution from day one of full-time employment, and paid leave that actually gets approved.",
  },
];

/**
 * The hiring process — what candidates can expect after they apply.
 * Communicating this on the page reduces no-shows and "what's next?" emails.
 */
export const hiringProcess: { step: string; title: string; description: string }[] = [
  {
    step: "01",
    title: "Application review",
    description:
      "We review every application within 5 working days. If your profile fits an open role, you'll hear from us with next steps.",
  },
  {
    step: "02",
    title: "Phone screen",
    description:
      "A 20–30 minute call with our hiring lead to understand your background, expectations, and the role in more detail.",
  },
  {
    step: "03",
    title: "Technical round",
    description:
      "A 60–90 minute technical conversation with a senior engineer. For field roles, this may include a short site visit.",
  },
  {
    step: "04",
    title: "Offer & onboarding",
    description:
      "If we move forward, we'll share an offer within 3–5 days of the technical round. Onboarding typically starts within 2–4 weeks.",
  },
];
