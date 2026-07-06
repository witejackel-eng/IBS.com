import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function Loading() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero skeleton */}
      <Section className="min-h-[70vh]">
        <Container className="pt-24">
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <div className="h-6 w-48 animate-pulse rounded-full bg-border" />
            {/* H1 lines */}
            <div className="h-16 w-full max-w-3xl animate-pulse rounded-2xl bg-border" />
            <div className="h-16 w-3/4 max-w-2xl animate-pulse rounded-2xl bg-border" />
            {/* Subtext */}
            <div className="h-5 w-full max-w-lg animate-pulse rounded-lg bg-border" />
            {/* Buttons */}
            <div className="mt-4 flex gap-4">
              <div className="h-12 w-40 animate-pulse rounded-full bg-border" />
              <div className="h-12 w-40 animate-pulse rounded-full bg-border" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Content skeleton */}
      <Section>
        <Container>
          <div className="mb-12 flex flex-col gap-4">
            <div className="h-4 w-24 animate-pulse rounded bg-border" />
            <div className="h-10 w-80 animate-pulse rounded-xl bg-border" />
            <div className="h-4 w-full max-w-xl animate-pulse rounded bg-border" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex h-full animate-pulse flex-col overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="h-52 w-full bg-border" />
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="h-3 w-20 rounded bg-border" />
                  <div className="h-6 w-3/4 rounded-lg bg-border" />
                  <div className="mt-1 flex flex-1 flex-col gap-2">
                    <div className="h-3 w-full rounded bg-border" />
                    <div className="h-3 w-5/6 rounded bg-border" />
                    <div className="h-3 w-2/3 rounded bg-border" />
                  </div>
                  <div className="h-4 w-24 rounded bg-border" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}