import type { ComponentType } from "react";

import { EnterprisesIllustration } from "./enterprises";
import { HotelsIllustration } from "./hotels";
import { GovernmentIllustration } from "./government";
import { ResidentialIllustration } from "./residential";
import { SohoIllustration } from "./soho";

export { EnterprisesIllustration, HotelsIllustration, GovernmentIllustration, ResidentialIllustration, SohoIllustration };

/** Slug -> illustration, for segments.ts entries. */
export const segmentIllustrationMap: Record<string, ComponentType<{ className?: string }>> = {
  enterprises: EnterprisesIllustration,
  hotels: HotelsIllustration,
  government: GovernmentIllustration,
  residential: ResidentialIllustration,
  soho: SohoIllustration,
};