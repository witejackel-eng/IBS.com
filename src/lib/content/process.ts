import type { ProcessStep } from "./types";

/**
 * The generic delivery methodology behind every engagement -- a description
 * of how work happens, not a claim about specific past projects. No dates,
 * durations, or outcomes are asserted here.
 */
export const processSteps: ProcessStep[] = [
  {
    slug: "consultation",
    title: "Consultation",
    description: "Understanding the space, the systems already in place, and what the business actually needs from them.",
  },
  {
    slug: "planning",
    title: "Planning",
    description: "Scoping the right mix of services and mapping how they fit the site, the budget, and the timeline.",
  },
  {
    slug: "design",
    title: "Design",
    description: "Laying out the technical architecture -- network topology, AV signal paths, security coverage -- before anything is installed.",
  },
  {
    slug: "engineering",
    title: "Engineering",
    description: "Specifying the exact hardware, configurations, and integrations the design calls for.",
  },
  {
    slug: "installation",
    title: "Installation",
    description: "On-site deployment by certified technicians, following the engineered plan.",
  },
  {
    slug: "testing",
    title: "Testing",
    description: "Verifying every system performs to spec before it's handed over.",
  },
  {
    slug: "deployment",
    title: "Deployment",
    description: "Bringing systems live and handing over documentation and training to the people who'll use them.",
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    description: "Scheduled servicing that keeps systems performing the way they did on day one.",
  },
  {
    slug: "support",
    title: "Support",
    description: "An ongoing point of contact for troubleshooting, questions, and fault resolution.",
  },
];
