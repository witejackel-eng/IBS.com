import { Container } from "@/components/layout/container";
import { ServicesTrustMetrics } from "@/components/sections/services/trust-metrics";

export function TrustMetricsSection() {
  return (
    <section className="bg-background pb-8 pt-8 lg:pb-12 lg:pt-12">
      <Container>
        <ServicesTrustMetrics />
      </Container>
    </section>
  );
}