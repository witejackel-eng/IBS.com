import { z } from "zod";

/**
 * Contact form validation schema.
 *
 * Limits are tightened for production:
 * - Name: 80 chars (people don't need more)
 * - Company: 120 chars
 * - Phone: 10–15 digits only (international format handled by wa.me)
 * - Message: 1000 chars max
 * - Email: standard email validation
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full name")
    .max(80, "Name is too long (80 characters max)"),
  email: z.email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .regex(/^[\d\s+()-]{10,15}$/, "Enter a valid phone number (10–15 digits)")
    .or(z.literal("")),
  company: z
    .string()
    .trim()
    .max(120, "Company name is too long")
    .optional()
    .or(z.literal("")),
  serviceInterest: z
    .string()
    .trim()
    .max(120)
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more (10+ characters)")
    .max(1000, "Message is too long (1000 characters max). Please call us for detailed enquiries."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;