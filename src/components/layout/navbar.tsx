"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

import { ButtonLink } from "@/components/shared/button-link";
import { Magnetic } from "@/components/shared/magnetic";
import { Logo } from "@/components/layout/logo";
import { CapabilityCheckIcon } from "@/components/illustrations/icons";
import { amcService, mainNav, segments, serviceCategories, services } from "@/lib/content";
import { navIconMap } from "@/lib/nav-icons";
import { serviceIllustrationMap } from "@/components/illustrations/services";
import { blurMap } from "@/lib/image-blur-map";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Flat visual order of the mega menu (category order, not the raw services array) -- keyboard nav follows this. */
const orderedServiceSlugs = serviceCategories.flatMap((category) => category.slugs);

type ServicePreview = {
  title: string;
  tagline: string;
  summary: string;
  image?: string;
  illustration?: React.ComponentType<{ className?: string }>;
  /** Real, sourced capability titles (used as both the bullet list and the tag chips). */
  capabilities: string[];
};

/** slug -> rich preview-pane data for the mega menu's hover/focus preview -- every field traces back to services.ts. */
const servicePreviewBySlug: Record<string, ServicePreview> = {};
for (const s of services) {
  servicePreviewBySlug[s.slug] = {
    title: s.title,
    tagline: s.tagline,
    summary: s.summary,
    image: s.image,
    illustration: serviceIllustrationMap[s.slug],
    capabilities: s.capabilities.slice(0, 5).map((c) => c.title),
  };
}
servicePreviewBySlug[amcService.slug] = {
  title: amcService.title,
  tagline: amcService.tagline,
  summary: amcService.summary,
  image: amcService.image,
  illustration: serviceIllustrationMap[amcService.slug],
  capabilities: amcService.categories.slice(0, 5).map((c) => c.title),
};

/** Short display labels for the real "Who We Serve" segments -- no industries beyond the four ibsinfra.com actually names. */
const industryShortLabel: Record<string, string> = {
  enterprises: "Enterprises",
  hotels: "Hotels",
  residential: "Residential",
  soho: "SOHO",
};
const industriesServed = segments.map((s) => industryShortLabel[s.slug] ?? s.title);

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const [previewSlug, setPreviewSlug] = useState<string | null>(null);

  const servicesRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsCoarsePointer(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const firstLink = mobileMenuRef.current?.querySelector("a");
    (firstLink as HTMLAnchorElement | null)?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        mobileToggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!servicesOpen) {
      setPreviewSlug(null);
      return;
    }
    if (document.activeElement === triggerRef.current) {
      itemRefs.current[0]?.focus();
    }
    function onPointerDown(e: PointerEvent) {
      if (!servicesRef.current?.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [servicesOpen]);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  }

  function focusItem(index: number) {
    const items = itemRefs.current.filter((el): el is HTMLAnchorElement => el !== null);
    if (!items.length) return;
    const clamped = ((index % items.length) + items.length) % items.length;
    items[clamped]?.focus();
  }

  function handleMenuKeyDown(e: React.KeyboardEvent) {
    const items = itemRefs.current.filter((el): el is HTMLAnchorElement => el !== null);
    const currentIndex = items.indexOf(document.activeElement as HTMLAnchorElement);

    if (e.key === "Escape") {
      e.preventDefault();
      setServicesOpen(false);
      triggerRef.current?.focus();
    } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      focusItem(currentIndex + 1);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      focusItem(currentIndex - 1);
    }
  }

  const servicesGroup = mainNav.find(
    (link): link is (typeof mainNav)[number] & { children: ReadonlyArray<{ label: string; href: string; tagline: string; slug: string }> } =>
      "children" in link && Array.isArray(link.children)
  );
  const isServicesActive =
    !!servicesGroup && (isActive(servicesGroup.href) || servicesGroup.children.some((c) => isActive(c.href)));

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={cn(
          "glass flex w-full max-w-6xl items-center justify-between rounded-full transition-[padding,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "px-5 py-2.5 shadow-[0_14px_36px_-16px_rgba(0,0,0,0.16),0_4px_14px_-6px_rgba(0,0,0,0.08)]"
            : "px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
        )}
      >
        <Link href="/" data-cursor-hover>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {mainNav.map((link) =>
            "children" in link && link.children ? (
              <div key={link.href} ref={servicesRef} className="relative">
                <button
                  ref={triggerRef}
                  type="button"
                  data-cursor-hover
                  aria-haspopup="menu"
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                  onClick={() => setServicesOpen((v) => (isCoarsePointer ? !v : true))}
                  onMouseEnter={() => !isCoarsePointer && setServicesOpen(true)}
                  onMouseLeave={() => !isCoarsePointer && setServicesOpen(false)}
                  className={cn(
                    "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium tracking-[0.01em] transition-colors",
                    isServicesActive ? "text-charcoal" : "text-graphite hover:text-deep-blue"
                  )}
                >
                  {link.label}
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", servicesOpen && "rotate-180")} />
                  {isServicesActive && (
                    <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-deep-blue" />
                  )}
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      id="services-menu"
                      role="menu"
                      aria-label="Services"
                      initial={{ opacity: 0, y: 10, scale: 0.98, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: 10, scale: 0.98, filter: "blur(4px)" }}
                      transition={{ duration: DURATION.base, ease: EASE_OUT_EXPO }}
                      onKeyDown={handleMenuKeyDown}
                      onMouseEnter={() => !isCoarsePointer && setServicesOpen(true)}
                      onMouseLeave={() => !isCoarsePointer && setServicesOpen(false)}
                      className="glass absolute top-full left-1/2 mt-3 w-[440px] max-w-[94vw] origin-top -translate-x-1/2 rounded-[24px] p-4 shadow-[0_32px_64px_-20px_rgba(0,0,0,0.18),0_10px_28px_-10px_rgba(0,0,0,0.1)] md:w-[680px] xl:w-[1180px]"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] md:gap-5 md:divide-x md:divide-border xl:grid-cols-[260px_1fr_260px] xl:gap-6">
                        <div className="flex flex-col md:pr-5 xl:pr-6">
                          {serviceCategories.map((category) => (
                            <div key={category.title}>
                              <div className="flex items-center gap-2 px-3 pt-3 pb-2">
                                <p className="text-[11px] font-semibold tracking-[0.12em] text-steel/70 uppercase">
                                  {category.title}
                                </p>
                                <span className="h-px flex-1 bg-border" />
                              </div>
                              <div className="flex flex-col gap-0.5">
                                {category.slugs.map((slug) => {
                                  const child = link.children.find((c) => c.slug === slug);
                                  if (!child) return null;
                                  const Icon = navIconMap[child.slug];
                                  const index = orderedServiceSlugs.indexOf(slug);
                                  const isPreviewActive = (previewSlug ?? orderedServiceSlugs[0]) === slug;
                                  return (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      role="menuitem"
                                      data-cursor-hover
                                      ref={(el) => {
                                        itemRefs.current[index] = el;
                                      }}
                                      onMouseEnter={() => setPreviewSlug(slug)}
                                      onFocus={() => setPreviewSlug(slug)}
                                      onClick={() => setServicesOpen(false)}
                                      className={cn(
                                        "group relative flex items-center gap-3 rounded-2xl py-3 pr-3 pl-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-deep-blue/5 hover:shadow-[0_10px_24px_-14px_rgba(234,88,12,0.3)] focus-visible:bg-deep-blue/5",
                                        isPreviewActive && "-translate-y-0.5 bg-deep-blue/5 shadow-[0_10px_24px_-14px_rgba(234,88,12,0.3)]"
                                      )}
                                    >
                                      <span
                                        className={cn(
                                          "absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-deep-blue transition-transform duration-300",
                                          isPreviewActive ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                                        )}
                                      />
                                      {Icon && (
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-deep-blue/10 text-deep-blue transition-transform duration-300 group-hover:scale-105">
                                          <Icon className="h-5 w-5" />
                                        </span>
                                      )}
                                      <span className="flex flex-col">
                                        <span className="text-sm font-medium text-charcoal">{child.label}</span>
                                        <span className="text-xs text-steel">{child.tagline}</span>
                                      </span>
                                      {isActive(child.href) && (
                                        <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-deep-blue" />
                                      )}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="relative hidden overflow-hidden md:flex md:flex-col md:px-1">
                          {(() => {
                            const activeSlug = previewSlug ?? orderedServiceSlugs[0];
                            const preview = servicePreviewBySlug[activeSlug];
                            if (!preview) return null;
                            return (
                              <AnimatePresence mode="wait">
                                <motion.div
                                  key={activeSlug}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
                                  className="flex h-full flex-col"
                                >
                                  <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-2xl border border-border/60 shadow-[0_16px_32px_-16px_rgba(0,0,0,0.16)]">
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-deep-blue/15 via-deep-blue/5 to-background bg-engineering-grid">
                                      {!preview.image && preview.illustration && <preview.illustration className="h-20 w-20" />}
                                    </div>
                                    {preview.image && (
                                      <Image
                                        src={preview.image}
                                        alt={preview.title}
                                        fill
                                        sizes="(min-width: 1280px) 620px, 400px"
                                        className="photo-grade object-cover transition-transform duration-700 hover:scale-105"
                                        placeholder={blurMap[preview.image] ? "blur" : "empty"}
                                        blurDataURL={blurMap[preview.image]}
                                      />
                                    )}
                                    {preview.image && (
                                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                                    )}
                                  </div>
                                  <div className="flex flex-1 flex-col gap-3 pt-4">
                                    <div>
                                      <p className="text-[11px] font-semibold tracking-[0.12em] text-deep-blue uppercase">
                                        {preview.tagline}
                                      </p>
                                      <p className="mt-1 text-[22px] leading-tight font-semibold text-charcoal font-heading">
                                        {preview.title}
                                      </p>
                                    </div>
                                    <p className="text-sm leading-relaxed text-steel">{preview.summary}</p>

                                    {preview.capabilities.length > 0 && (
                                      <ul className="grid grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2">
                                        {preview.capabilities.slice(0, 4).map((title) => (
                                          <li key={title} className="flex items-start gap-2 text-xs text-charcoal">
                                            <CapabilityCheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-deep-blue" />
                                            <span>{title}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    )}

                                    <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                                      <div className="flex flex-wrap gap-1.5">
                                        {preview.capabilities.slice(0, 3).map((title) => (
                                          <span
                                            key={title}
                                            className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[11px] text-steel"
                                          >
                                            {title}
                                          </span>
                                        ))}
                                      </div>
                                      <Link
                                        href={`/services/${activeSlug}`}
                                        data-cursor-hover
                                        onClick={() => setServicesOpen(false)}
                                        className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-deep-blue hover:text-tangerine-600"
                                      >
                                        Explore service <ArrowRight className="h-3.5 w-3.5" />
                                      </Link>
                                    </div>
                                  </div>
                                </motion.div>
                              </AnimatePresence>
                            );
                          })()}
                        </div>

                        <div className="hidden xl:flex xl:flex-col xl:gap-6 xl:pl-6">
                          <div>
                            <p className="mb-3 text-[11px] font-semibold tracking-[0.12em] text-steel/70 uppercase">Why IBS</p>
                            <ul className="flex flex-col gap-2.5">
                              {["46+ Global OEM Partners", "Genuine Products", "Engineering Expertise", "Long-term Support"].map(
                                (item) => (
                                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                                    <CapabilityCheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-deep-blue" />
                                    <span>{item}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          <div>
                            <p className="mb-3 text-[11px] font-semibold tracking-[0.12em] text-steel/70 uppercase">
                              Industries served
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {industriesServed.map((label) => (
                                <span
                                  key={label}
                                  className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-steel"
                                >
                                  {label}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="mt-auto rounded-2xl border border-border bg-secondary/40 p-4">
                            <p className="text-sm font-medium text-charcoal">Need help choosing?</p>
                            <p className="mt-1 text-xs text-steel">Talk to our team about your requirement.</p>
                            <ButtonLink
                              href="/contact"
                              variant="cta"
                              size="sm"
                              onClick={() => setServicesOpen(false)}
                              className="mt-3 w-full rounded-full"
                              data-cursor-hover
                            >
                              Talk to an expert
                            </ButtonLink>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 border-t border-border pt-3">
                        <Link
                          href="/services"
                          data-cursor-hover
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-deep-blue hover:bg-deep-blue/5"
                        >
                          View all services <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                data-cursor-hover
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium tracking-[0.01em] transition-colors",
                  isActive(link.href) ? "text-charcoal" : "text-graphite hover:text-deep-blue"
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-deep-blue" />
                )}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex">
          <Magnetic>
            <ButtonLink
              href="/contact"
              variant="cta"
              size="sm"
              className="rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(234,88,12,0.4)]"
              data-cursor-hover
            >
              Talk to us <ArrowRight className="h-3.5 w-3.5" />
            </ButtonLink>
          </Magnetic>
        </div>

        <button
          ref={mobileToggleRef}
          className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-menu"
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: DURATION.base, ease: EASE_OUT_EXPO }}
            className="glass absolute inset-x-4 top-20 z-40 flex max-h-[75vh] flex-col gap-1 overflow-y-auto rounded-3xl p-4 shadow-[0_32px_64px_-20px_rgba(0,0,0,0.18),0_10px_28px_-10px_rgba(0,0,0,0.1)] md:hidden"
          >
            {mainNav.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-charcoal hover:bg-deep-blue/5"
                >
                  {link.label}
                </Link>
                {"children" in link && link.children && (
                  <div className="ml-3 flex flex-col border-l border-border pl-3">
                    {link.children.map((child) => {
                      const Icon = navIconMap[child.slug];
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-steel hover:text-charcoal"
                        >
                          {Icon && (
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-deep-blue/10 text-deep-blue">
                              <Icon className="h-4 w-4" />
                            </span>
                          )}
                          <span className="flex flex-col">
                            {child.label}
                            <span className="block text-xs text-steel/90">{child.tagline}</span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-2 border-t border-border pt-3">
              <ButtonLink
                href="/contact"
                onClick={() => setOpen(false)}
                variant="cta"
                className="w-full rounded-full"
              >
                Talk to us
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
