import type { Metadata } from "next";

import { SiteChrome } from "@/components/layout/site-chrome";
import { NotFoundContent } from "@/components/sections/not-found-content";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function RootNotFound() {
  return (
    <SiteChrome>
      <NotFoundContent />
    </SiteChrome>
  );
}
