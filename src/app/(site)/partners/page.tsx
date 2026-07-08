import type { Metadata } from "next";

import { PartnersPageClient } from "@/components/sections/partners-redesign/partners-page-client";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { CollectionPageJsonLd } from "@/components/seo/collection-page-jsonld";
import { partners, partnerCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our OEM Technology Partners",
  description:
    "The OEM brands IBS deals in across audio/video integration, communication & IT, and security.",
  alternates: { canonical: "/partners" },
};

const categoryGroups = partnerCategories.map((cat) => ({
  key: cat.key,
  partners: partners.filter((p) => p.category === cat.key),
}));

export default function PartnersPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Partners", path: "/partners" }]} />
      <CollectionPageJsonLd
        name="Partners"
        path="/partners"
        description="The OEM brands IBS deals in across audio/video integration, communication & IT, and security."
      />
      <PartnersPageClient categories={categoryGroups} />
    </>
  );
}