"use client";

import { useEffect } from "react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/shared/button-link";

export default function SiteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <p className="font-heading text-sm font-semibold tracking-[0.2em] text-signal-orange uppercase">
        Something went wrong
      </p>
      <h1 className="max-w-lg text-3xl font-semibold text-charcoal font-heading lg:text-4xl">
        This page hit a snag
      </h1>
      <p className="max-w-md text-steel">
        Please try again. If the problem continues, reach out and we&apos;ll help sort it out.
      </p>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <Button variant="cta" size="xl" onClick={() => reset()}>
          Try again
        </Button>
        <ButtonLink href="/contact" variant="outline" size="xl">
          Contact us
        </ButtonLink>
      </div>
    </Container>
  );
}
