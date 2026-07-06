import type { ComponentType } from "react";

import { ConsultationIllustration } from "./consultation";
import { PlanningIllustration } from "./planning";
import { DesignIllustration } from "./design";
import { EngineeringIllustration } from "./engineering";
import { InstallationIllustration } from "./installation";
import { TestingIllustration } from "./testing";
import { DeploymentIllustration } from "./deployment";
import { MaintenanceIllustration } from "./maintenance";
import { SupportIllustration } from "./support";

export {
  ConsultationIllustration,
  PlanningIllustration,
  DesignIllustration,
  EngineeringIllustration,
  InstallationIllustration,
  TestingIllustration,
  DeploymentIllustration,
  MaintenanceIllustration,
  SupportIllustration,
};

/** Ordered step -> illustration, for process.ts entries. */
export const processIllustrationMap: Record<string, ComponentType<{ className?: string }>> = {
  consultation: ConsultationIllustration,
  planning: PlanningIllustration,
  design: DesignIllustration,
  engineering: EngineeringIllustration,
  installation: InstallationIllustration,
  testing: TestingIllustration,
  deployment: DeploymentIllustration,
  maintenance: MaintenanceIllustration,
  support: SupportIllustration,
};
