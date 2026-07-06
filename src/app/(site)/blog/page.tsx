import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { CollectionPageJsonLd } from "@/components/seo/collection-page-jsonld";
import { SecondaryHeroNetwork } from "@/components/webgl/secondary-hero-network";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights & Articles — Insight Business Solutions",
  description:
    "Practical guides and expert insights on unified communications, office security, IT network infrastructure, and AV maintenance for businesses in Delhi NCR and across India.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]}
      />
      <CollectionPageJsonLd
        name="Blog"
        path="/blog"
        description="Expert insights on unified communications, office security, IT infrastructure, and AV maintenance."
        items={blogPosts.map((p) => ({ name: p.title, path: `/blog/${p.slug}` }))}
      />

      <Section bg="ambient" className="relative overflow-hidden bg-background pt-40 pb-20">
        <SecondaryHeroNetwork />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        <Container className="relative z-10">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
            Insights &amp; Articles
          </span>
          <SplitText
            as="h1"
            text="Practical guides for the systems your business runs on."
            className="max-w-3xl text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance"
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {blogPosts.map((post) => (
              <RevealItem key={post.slug}>
                <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-colors hover:border-deep-blue/30">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-deep-blue">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-steel">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold leading-snug tracking-tight text-charcoal font-heading line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 relative" data-cursor-hover>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-3 flex-1 text-sm text-steel line-clamp-3">{post.excerpt}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <time dateTime={post.publishedAt} className="text-xs text-steel">
                      {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-deep-blue transition-colors hover:text-deep-blue/80"
                      data-cursor-hover
                    >
                      Read more <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>
    </>
  );
}