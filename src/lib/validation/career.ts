import { z } from "zod";

export const careerFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(120),
  email: z.email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(8, "Enter a valid phone number")
    .max(20),
  role: z.string().trim().min(2, "Tell us which role you are applying for").max(160),
  experience: z.string().trim().max(120).optional().or(z.literal("")),
  location: z.string().trim().max(120).optional().or(z.literal("")),
  resumeLink: z
    .string()
    .trim()
    .max(500, "That link is too long")
    .url("Enter a valid URL to your resume (e.g. Google Drive or Dropbox link)")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a little more about why you're applying (20+ characters)")
    .max(3000),
});

export type CareerFormValues = z.infer<typeof careerFormSchema>;
