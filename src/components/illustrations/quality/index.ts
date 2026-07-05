import type { ComponentType } from "react";

import { DocumentationIllustration } from "./documentation";
import { ComplianceIllustration } from "./compliance";
import { PreventiveMaintenanceIllustration } from "./preventive-maintenance";
import { RemoteMonitoringIllustration } from "./remote-monitoring";
import { TechnicalSupportIllustration } from "./technical-support";
import { QualityAssuranceIllustration } from "./quality-assurance";

export {
  DocumentationIllustration,
  ComplianceIllustration,
  PreventiveMaintenanceIllustration,
  RemoteMonitoringIllustration,
  TechnicalSupportIllustration,
  QualityAssuranceIllustration,
};

export const qualityIllustrationMap: Record<string, ComponentType<{ className?: string }>> = {
  documentation: DocumentationIllustration,
  compliance: ComplianceIllustration,
  "preventive-maintenance": PreventiveMaintenanceIllustration,
  "remote-monitoring": RemoteMonitoringIllustration,
  "technical-support": TechnicalSupportIllustration,
  "quality-assurance": QualityAssuranceIllustration,
};
