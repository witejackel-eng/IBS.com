import { Component, type ReactNode } from "react";

/**
 * <Environment preset="city" /> fetches its HDRI from a third-party CDN
 * (raw.githack.com) at runtime. That fetch can fail (network policy, CDN
 * outage, ad/content blockers) and, unlike a slow load, a failed load throws
 * rather than merely suspending -- an ordinary <Suspense> fallback does not
 * catch it. Without this boundary, that throw propagates out of the Canvas
 * and takes down the entire page. Losing the environment map only costs the
 * hero some subtle material reflections, so it's caught and dropped here.
 */
export class EnvironmentErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("Hero environment map failed to load; continuing without it.", error);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}
