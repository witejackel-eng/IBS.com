import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { imageCredits } from "@/lib/content";

export const metadata: Metadata = {
  title: "Image Credits & Licensing Info",
  description: "Attribution for freely-licensed photography used on this site.",
  alternates: { canonical: "/credits" },
  robots: { index: false, follow: true },
};

export default function CreditsPage() {
  return (
    <Section className="pt-40">
      <Container className="max-w-2xl">
        <h1 className="text-display-3 font-semibold tracking-tight text-charcoal">Image Credits</h1>
        <p className="mt-4 text-steel">
          Photography on this site is sourced from Wikimedia Commons and Pexels under free licenses.
          Where the license requires attribution, it&apos;s provided below.
        </p>
        <ul className="mt-10 flex flex-col gap-6">
          {imageCredits.map((credit) => (
            <li key={credit.title} className="border-b border-border pb-6 text-sm">
              <p className="font-medium text-charcoal">
                &ldquo;{credit.title}&rdquo; -- used for {credit.usedFor}
              </p>
              <p className="mt-1 text-steel">
                By {credit.author}, licensed under{" "}
                <a href={credit.licenseUrl} className="underline underline-offset-2 hover:text-charcoal" target="_blank" rel="noreferrer">
                  {credit.license}
                </a>
                .{" "}
                <a href={credit.source} className="underline underline-offset-2 hover:text-charcoal" target="_blank" rel="noreferrer">
                  Source
                </a>
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
