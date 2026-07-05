import { amcService } from "./services";
import type { QualityPlaceholder } from "./types";

/** Real, already-sourced AMC quality commitments (see services.ts / ibsinfra.com). */
export const qualityHighlights = amcService.whyUs;

/** The one real, verifiable compliance claim on ibsinfra.com -- surfaced prominently, not buried. */
export const complianceStatement = amcService.whyUs.find((w) => w.title === "Compliance Ready")!;

/**
 * No formal certification has been published on ibsinfra.com beyond the
 * compliance statement above. These slots are deliberately generic (no
 * specific standard named) and flagged `placeholder: true` so the UI can
 * render them as clearly pending -- never as an implied claim.
 */
export const certificationPlaceholders: QualityPlaceholder[] = [
  {
    title: "Certification",
    description: "Formal certification details will be published here once available.",
    placeholder: true,
  },
  {
    title: "Compliance Documentation",
    description: "Additional compliance documentation will be published here once available.",
    placeholder: true,
  },
];

export const downloadPlaceholders: QualityPlaceholder[] = [
  {
    title: "Company Brochure",
    description: "A downloadable company brochure is coming soon.",
    placeholder: true,
  },
  {
    title: "AMC Service Guide",
    description: "A downloadable AMC service guide is coming soon.",
    placeholder: true,
  },
];
