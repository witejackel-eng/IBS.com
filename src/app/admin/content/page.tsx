import { HeroContentEditor, ContactInfoEditor } from "@/components/admin/content-editor";
import { defaultHeroContent, type HeroContent } from "@/components/sections/hero-section";
import { getContentOverride } from "@/lib/content-overrides";
import { company } from "@/lib/content";
import { prisma } from "@/lib/db";
import type { ContactInfo } from "@/lib/admin-content-types";

export const dynamic = "force-dynamic";

export default async function AdminContentPage() {
  const dbAvailable = Boolean(prisma);
  const hero = await getContentOverride<HeroContent>("home.hero", defaultHeroContent);
  const contactInfo = await getContentOverride<ContactInfo>("contact.info", {
    address: company.contact.address,
    phones: [...company.contact.phones],
    email: company.contact.email,
    mapQuery: company.contact.mapQuery,
  });

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-semibold text-charcoal font-heading">Site Content</h1>
      <HeroContentEditor initial={hero} dbAvailable={dbAvailable} />
      <ContactInfoEditor initial={contactInfo} dbAvailable={dbAvailable} />
    </div>
  );
}
