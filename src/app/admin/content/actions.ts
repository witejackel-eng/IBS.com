"use server";

import { revalidatePath } from "next/cache";

import { setContentOverride } from "@/lib/content-overrides";
import type { HeroContent } from "@/components/sections/hero-section";
import type { ContactInfo } from "@/lib/admin-content-types";

export async function saveHeroContent(data: HeroContent) {
  await setContentOverride("home.hero", data);
  revalidatePath("/");
}

export async function saveContactInfo(data: ContactInfo) {
  await setContentOverride("contact.info", data);
  revalidatePath("/contact");
}
