import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { blogPosts, getBlogPost } from "@/lib/content";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsinfra.com";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      url: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            author: {
              "@type": "Organization",
              name: post.author,
              url: SITE_URL,
            },
            publisher: {
              "@type": "Organization",
              name: "Insight Business Solutions",
              url: SITE_URL,
            },
            datePublished: post.publishedAt,
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
            keywords: post.tags.join(", "),
          }),
        }}
      />

      <Section className="pt-40 pb-0">
        <Container className="max-w-3xl">
          <Reveal direction="up">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-1.5 text-sm text-steel transition-colors hover:text-charcoal"
              data-cursor-hover
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
          </Reveal>

          <span className="mb-4 inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-deep-blue">
            {post.category}
          </span>

          <SplitText
            as="h1"
            text={post.title}
            className="mt-4 text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance"
          />

          <Reveal direction="up" delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-steel">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-deep-blue" />
                {post.author}
              </span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-deep-blue" />
                {post.readTime}
              </span>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <RevealGroup className="flex flex-col gap-6" stagger={0.06}>
            {paragraphs.map((paragraph, i) => (
              <RevealItem key={i}>
                <p className="text-lg leading-relaxed text-steel">{paragraph}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          {post.tags.length > 0 && (
            <Reveal direction="up" delay={0.15}>
              <div className="mt-12 flex flex-wrap gap-2 border-t border-border pt-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-steel"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          )}

          <Reveal direction="up" delay={0.2}>
            <div className="mt-8 border-t border-border pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-deep-blue transition-colors hover:text-deep-blue/80"
                data-cursor-hover
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all articles
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}