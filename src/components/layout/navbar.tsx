"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

import { ButtonLink } from "@/components/shared/button-link";
import { Magnetic } from "@/components/shared/magnetic";
import { Logo } from "@/components/layout/logo";
import { mainNav } from "@/lib/content";
import { navIconMap } from "@/lib/nav-icons";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

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
    if (!servicesOpen) return;
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
          "flex w-full max-w-6xl items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-500",
          scrolled
            ? "glass shadow-[0_8px_30px_-12px_rgba(15,23,42,0.25)]"
            : "border-transparent bg-transparent shadow-transparent"
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
                    "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isServicesActive ? "text-charcoal" : "text-steel hover:text-charcoal"
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
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}
                      onKeyDown={handleMenuKeyDown}
                      onMouseEnter={() => !isCoarsePointer && setServicesOpen(true)}
                      onMouseLeave={() => !isCoarsePointer && setServicesOpen(false)}
                      className="glass absolute top-full left-1/2 mt-2 w-[640px] max-w-[90vw] -translate-x-1/2 rounded-3xl p-3 shadow-[0_24px_48px_-16px_rgba(15,23,42,0.3)]"
                    >
                      <div className="grid grid-cols-2 gap-1">
                        {link.children.map((child, i) => {
                          const Icon = navIconMap[child.slug];
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              ref={(el) => {
                                itemRefs.current[i] = el;
                              }}
                              onClick={() => setServicesOpen(false)}
                              className={cn(
                                "group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-deep-blue/5 focus-visible:bg-deep-blue/5",
                                isActive(child.href) && "bg-deep-blue/5"
                              )}
                            >
                              {Icon && (
                                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-deep-blue/10 text-deep-blue">
                                  <Icon className="h-4 w-4" />
                                </span>
                              )}
                              <span className="flex flex-col">
                                <span className="text-sm font-medium text-charcoal">{child.label}</span>
                                <span className="text-xs text-steel">{child.tagline}</span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="mt-1 border-t border-border pt-2">
                        <Link
                          href="/services"
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
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive(link.href) ? "text-charcoal" : "text-steel hover:text-charcoal"
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
            <ButtonLink href="/contact" variant="cta" size="sm" className="rounded-full" data-cursor-hover>
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
            className="glass absolute inset-x-4 top-20 z-40 flex max-h-[75vh] flex-col gap-1 overflow-y-auto rounded-3xl p-4 shadow-[0_24px_48px_-16px_rgba(15,23,42,0.3)] md:hidden"
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
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="rounded-xl px-3 py-2 text-sm text-steel hover:text-charcoal"
                      >
                        {child.label}
                        <span className="block text-xs text-steel/90">{child.tagline}</span>
                      </Link>
                    ))}
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
