import type { ComponentType } from "react";

import { VoiceCommunicationIllustration } from "./voice-communication";
import { AudioVideoBoardroomIllustration } from "./audio-video-boardroom-solutions";
import { ItInfrastructureIllustration } from "./it-infrastructure";
import { SecuritySolutionsIllustration } from "./security-solutions";
import { CallCenterSolutionsIllustration } from "./call-center-solutions";
import { SoftwareLicensesIllustration } from "./software-licenses";
import { AnnualMaintenanceIllustration } from "./annual-maintenance-service";

export {
  VoiceCommunicationIllustration,
  AudioVideoBoardroomIllustration,
  ItInfrastructureIllustration,
  SecuritySolutionsIllustration,
  CallCenterSolutionsIllustration,
  SoftwareLicensesIllustration,
  AnnualMaintenanceIllustration,
};

/** Slug -> illustration, for services.ts entries + the AMC service. */
export const serviceIllustrationMap: Record<string, ComponentType<{ className?: string }>> = {
  "voice-communication": VoiceCommunicationIllustration,
  "audio-video-boardroom-solutions": AudioVideoBoardroomIllustration,
  "it-infrastructure": ItInfrastructureIllustration,
  "security-solutions": SecuritySolutionsIllustration,
  "call-center-solutions": CallCenterSolutionsIllustration,
  "software-licenses": SoftwareLicensesIllustration,
  "annual-maintenance-service": AnnualMaintenanceIllustration,
};
