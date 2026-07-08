import { describe, it, expect } from "vitest";
import { careerFormSchema } from "@/lib/validation/career";
import { services, amcService, company } from "@/lib/content";

describe("Career form validation", () => {
  it("accepts valid career form data", () => {
    const result = careerFormSchema.safeParse({
      name: "John Doe",
      email: "john@example.com",
      phone: "+91 9876543210",
      role: "Frontend Developer",
      message: "I am interested in this role because of my experience with React and TypeScript.",
    });
    expect(result.success).toBe(true);
  });

  it("rejects empty name", () => {
    const result = careerFormSchema.safeParse({
      name: "A",
      email: "john@example.com",
      phone: "+91 9876543210",
      role: "Dev",
      message: "This message is long enough to pass validation requirements.",
    });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = careerFormSchema.safeParse({
      name: "John Doe",
      email: "not-an-email",
      phone: "+91 9876543210",
      role: "Developer",
      message: "This message is long enough to pass validation requirements.",
    });
    expect(result.success).toBe(false);
  });

  it("rejects short phone number", () => {
    const result = careerFormSchema.safeParse({
      name: "John Doe",
      email: "john@example.com",
      phone: "123",
      role: "Developer",
      message: "This message is long enough to pass validation requirements.",
    });
    expect(result.success).toBe(false);
  });

  it("rejects short message (under 20 chars)", () => {
    const result = careerFormSchema.safeParse({
      name: "John Doe",
      email: "john@example.com",
      phone: "+91 9876543210",
      role: "Developer",
      message: "Too short",
    });
    expect(result.success).toBe(false);
  });

  it("accepts optional fields as empty strings", () => {
    const result = careerFormSchema.safeParse({
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+91 9999999999",
      role: "Designer",
      experience: "",
      location: "",
      resumeLink: "",
      message: "I have 5 years of design experience and would love to join your team.",
    });
    expect(result.success).toBe(true);
  });

  it("rejects invalid resume URL when provided", () => {
    const result = careerFormSchema.safeParse({
      name: "John Doe",
      email: "john@example.com",
      phone: "+91 9876543210",
      role: "Developer",
      resumeLink: "not-a-url",
      message: "This message is long enough to pass validation requirements.",
    });
    expect(result.success).toBe(false);
  });
});

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