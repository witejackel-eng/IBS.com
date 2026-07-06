import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(120),
  email: z.email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(8, "Enter a valid phone number")
    .max(20),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  serviceInterest: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(2000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
