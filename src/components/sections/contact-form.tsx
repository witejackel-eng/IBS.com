"use client";

import { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation/contact";
import { EASE_OUT_EXPO, SPRING_SNAPPY } from "@/lib/motion";
import { services, amcService } from "@/lib/content";

const serviceOptions = [...services.map((s) => s.navLabel), amcService.navLabel];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    // Validate on blur so the user gets immediate feedback when leaving a
    // field, then re-validate on every change so errors clear as they type.
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: { name: "", email: "", phone: "", company: "", serviceInterest: "", message: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, hp: honeypotRef.current?.value ?? "" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        toast.error(data?.error ?? "Something went wrong. Please try again or call us directly.");
        return;
      }
      setSubmitted(true);
      reset();
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.");
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
        className="flex h-full flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-card p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, ...SPRING_SNAPPY }}
        >
          <CheckCircle2 className="h-14 w-14 text-deep-blue" />
        </motion.div>
        <h3 className="text-xl font-semibold text-charcoal font-heading">Message sent</h3>
        <p className="max-w-sm text-sm text-steel">
          Thanks for reaching out. Our team will get back to you shortly.
        </p>
        <Button variant="outline" className="mt-2 rounded-full" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-5 sm:p-6 md:p-8">
      <input
        ref={honeypotRef}
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Full name *</Label>
          <Input id="name" placeholder="Your name" aria-describedby={errors.name ? "name-error" : undefined} aria-invalid={!!errors.name} {...register("name")} />
          {errors.name && <p id="name-error" className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" placeholder="you@company.com" aria-describedby={errors.email ? "email-error" : undefined} aria-invalid={!!errors.email} {...register("email")} />
          {errors.email && <p id="email-error" className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="+91 " aria-describedby={errors.phone ? "phone-error" : undefined} aria-invalid={!!errors.phone} {...register("phone")} />
          {errors.phone && <p id="phone-error" className="text-xs text-destructive">{errors.phone.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Company (optional)</Label>
          <Input id="company" placeholder="Company name" {...register("company")} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="serviceInterest">What are you interested in? (optional)</Label>
        <Controller
          control={control}
          name="serviceInterest"
          render={({ field }) => (
            <Select value={field.value || undefined} onValueChange={field.onChange}>
              <SelectTrigger id="serviceInterest" className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((label) => (
                  <SelectItem key={label} value={label}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea id="message" rows={5} placeholder="Tell us about your requirement..." aria-describedby={errors.message ? "message-error" : undefined} aria-invalid={!!errors.message} {...register("message")} />
        {errors.message && <p id="message-error" className="text-xs text-destructive">{errors.message.message}</p>}
      </div>

      <Button
        type="submit"
        variant="cta"
        size="xl"
        disabled={isSubmitting}
        className="mt-2 self-start"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isSubmitting ? (
            <motion.span key="loading" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending...
            </motion.span>
          ) : (
            <motion.span key="idle" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              Send message <Send className="h-4 w-4" />
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </form>
  );
}
