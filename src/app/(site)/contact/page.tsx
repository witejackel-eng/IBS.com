import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { ViewOnMap } from "@/components/shared/view-on-map";
import { ContactNetworkIllustration } from "@/components/illustrations/contact-network";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { ContactPageJsonLd } from "@/components/seo/contact-page-jsonld";
import { company } from "@/lib/content";
import { getContentOverride } from "@/lib/content-overrides";
import type { ContactInfo } from "@/lib/admin-content-types";

export const metadata: Metadata = {
  title: "Contact Our Engineering Team",
  description: `Reach ${company.legalName} at ${company.contact.phones[0]} or ${company.contact.email}.`,
  alternates: { canonical: "/contact" },
};

export default async function ContactPage() {
  const info = await getContentOverride<ContactInfo>("contact.info", {
    address: company.contact.address,
    phones: [...company.contact.phones],
    email: company.contact.email,
    mapQuery: company.contact.mapQuery,
  });

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <ContactPageJsonLd />
      <Section bg="ambient" className="bg-background pt-40 pb-24">
        <Container>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
            Contact Us
          </span>
          <SplitText
            as="h1"
            text="Let's talk about your requirement."
            className="max-w-2xl text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance"
          />

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-5">
            <Reveal direction="up" className="md:col-span-3">
              <ContactForm />
            </Reveal>

            <Reveal direction="up" delay={0.15} className="flex flex-col gap-6 md:col-span-2">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8">
                <ContactNetworkIllustration className="pointer-events-none absolute -top-6 -right-6 h-28 w-28 opacity-70" />
                <h2 className="relative text-sm font-semibold tracking-[0.1em] text-steel uppercase">Reach us directly</h2>
                <ul className="mt-5 flex flex-col gap-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-deep-blue" />
                    <span className="text-charcoal">{info.address}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-deep-blue" />
                    <span className="flex flex-col text-charcoal">
                      {info.phones.map((p) => (
                        <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-deep-blue">
                          {p}
                        </a>
                      ))}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-deep-blue" />
                    <a href={`mailto:${info.email}`} className="text-charcoal hover:text-deep-blue">
                      {info.email}
                    </a>
                  </li>
                </ul>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
                  {company.serviceAreas.map((area) => (
                    <span key={area} className="rounded-full bg-secondary px-3 py-1 text-xs text-steel">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <ViewOnMap address={info.mapQuery} className="mt-2" />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
