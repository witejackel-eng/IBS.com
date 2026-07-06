import type { ReactNode } from "react";

import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { CustomCursor } from "@/components/shared/custom-cursor";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { BackToTop } from "@/components/shared/back-to-top";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { MobileCallBar } from "@/components/shared/mobile-call-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-deep-blue focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-warm-white"
      >
        Skip to main content
      </a>
      <div className="grain-overlay-fixed" aria-hidden />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
      <MobileCallBar />
    </SmoothScrollProvider>
  );
}
