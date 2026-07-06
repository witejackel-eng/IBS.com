import { Container } from "@/components/layout/container";

export default function ServiceLoading() {
  return (
    <div className="flex flex-col gap-0">
      <section className="relative py-24 pb-0 lg:py-32">
        <Container className="pt-40">
          <div className="flex flex-col gap-6">
            <div className="h-6 w-48 animate-pulse rounded-full bg-border" />
            <div className="h-14 w-full max-w-2xl animate-pulse rounded-2xl bg-border" />
            <div className="h-5 w-full max-w-lg animate-pulse rounded-lg bg-border" />
            <div className="mt-6 h-64 w-full animate-pulse rounded-3xl bg-border sm:h-96" />
          </div>
        </Container>
      </section>

      <section className="relative py-24 lg:py-32">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-4">
            <div className="h-5 w-full animate-pulse rounded bg-border" />
            <div className="h-5 w-5/6 animate-pulse rounded bg-border" />
            <div className="h-5 w-4/6 animate-pulse rounded bg-border" />
          </div>
        </Container>
      </section>

      <section className="relative py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-40 animate-pulse rounded-2xl border border-border bg-card p-6"
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}