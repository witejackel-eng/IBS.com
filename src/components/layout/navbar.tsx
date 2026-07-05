"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

import { ButtonLink } from "@/components/shared/button-link";
import { Magnetic } from "@/components/shared/magnetic";
import { Logo } from "@/components/layout/logo";
import { mainNav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500",
          scrolled ? "glass shadow-[0_8px_30px_-12px_rgba(15,23,42,0.25)]" : "bg-transparent"
        )}
      >
        <Link href="/" data-cursor-hover>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {mainNav.map((link) =>
            "children" in link && link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onFocus={() => setServicesOpen(true)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false);
                }}
              >
                <Link
                  href={link.href}
                  data-cursor-hover
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-steel transition-colors hover:text-charcoal"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform" style={{ rotate: servicesOpen ? "180deg" : "0deg" }} />
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="glass absolute top-full left-1/2 mt-2 w-72 -translate-x-1/2 rounded-2xl p-2 shadow-[0_24px_48px_-16px_rgba(15,23,42,0.3)]"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-4 py-2.5 text-sm text-steel transition-colors hover:bg-deep-blue/5 hover:text-charcoal"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                data-cursor-hover
                className="rounded-full px-4 py-2 text-sm font-medium text-steel transition-colors hover:text-charcoal"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex">
          <Magnetic>
            <ButtonLink href="/contact" size="sm" className="rounded-full bg-deep-blue text-warm-white hover:bg-deep-blue-light" data-cursor-hover>
              Talk to us <ArrowRight className="h-3.5 w-3.5" />
            </ButtonLink>
          </Magnetic>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
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
                className="w-full rounded-full bg-deep-blue text-warm-white hover:bg-deep-blue-light"
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
