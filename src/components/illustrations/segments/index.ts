import type { ComponentType } from "react";

import { EnterprisesIllustration } from "./enterprises";
import { HotelsIllustration } from "./hotels";
import { ResidentialIllustration } from "./residential";
import { SohoIllustration } from "./soho";

export { EnterprisesIllustration, HotelsIllustration, ResidentialIllustration, SohoIllustration };

/** Slug -> illustration, for segments.ts entries. */
export const segmentIllustrationMap: Record<string, ComponentType<{ className?: string }>> = {
  enterprises: EnterprisesIllustration,
  hotels: HotelsIllustration,
  residential: ResidentialIllustration,
  soho: SohoIllustration,
};
