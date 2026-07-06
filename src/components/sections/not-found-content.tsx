import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/shared/button-link";

export function NotFoundContent() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <p className="font-heading text-sm font-semibold tracking-[0.2em] text-deep-blue uppercase">
        404
      </p>
      <h1 className="max-w-lg text-3xl font-semibold text-charcoal font-heading lg:text-4xl">
        We couldn&apos;t find that page
      </h1>
      <p className="max-w-md text-steel">
        The page you&apos;re looking for may have moved or no longer exists. Try the homepage, or
        get in touch and our team will point you in the right direction.
      </p>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <ButtonLink href="/" variant="cta" size="xl">
          Back to homepage
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline" size="xl">
          Contact us
        </ButtonLink>
      </div>
    </Container>
  );
}
