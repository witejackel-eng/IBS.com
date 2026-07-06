import { describe, it, expect } from "vitest";
import { services, amcService, company } from "@/lib/content";

describe("Content data integrity", () => {
  it("exports at least 6 main services", () => {
    expect(services.length).toBeGreaterThanOrEqual(6);
  });

  it("each service has required fields", () => {
    for (const s of services) {
      expect(s.slug).toBeTruthy();
      expect(s.title).toBeTruthy();
      expect(s.summary).toBeTruthy();
      expect(s.tagline).toBeTruthy();
      expect(s.capabilities.length).toBeGreaterThan(0);
    }
  });

  it("all service slugs are unique", () => {
    const slugs = services.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("AMC service has required fields", () => {
    expect(amcService.slug).toBeTruthy();
    expect(amcService.title).toBeTruthy();
    expect(amcService.summary).toBeTruthy();
  });

  it("company data has contact info", () => {
    expect(company.contact.email).toContain("@");
    expect(company.contact.phones.length).toBeGreaterThan(0);
    expect(company.contact.address).toBeTruthy();
  });

  it("company has service areas", () => {
    expect(company.serviceAreas.length).toBeGreaterThan(0);
  });
});