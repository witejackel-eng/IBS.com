"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import type { HeroContent } from "@/components/sections/hero-section";
import type { ContactInfo } from "@/lib/admin-content-types";
import { saveContactInfo, saveHeroContent } from "@/app/admin/content/actions";

export function HeroContentEditor({ initial, dbAvailable }: { initial: HeroContent; dbAvailable: boolean }) {
  const [headline, setHeadline] = useState(initial.headline);
  const [subcopy, setSubcopy] = useState(initial.subcopy);
  const [pending, startTransition] = useTransition();

  function save() {
    startTransition(async () => {
      try {
        await saveHeroContent({ headline, subcopy });
        toast.success("Homepage hero updated");
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Failed to save");
      }
    });
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h2 className="text-base font-semibold text-charcoal font-heading">Homepage Hero</h2>
      <div className="mt-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="headline">Headline</Label>
          <Textarea id="headline" rows={2} value={headline} onChange={(e) => setHeadline(e.target.value)} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="subcopy">Subcopy</Label>
          <Textarea id="subcopy" rows={3} value={subcopy} onChange={(e) => setSubcopy(e.target.value)} />
        </div>
        <Button onClick={save} disabled={pending || !dbAvailable} className="w-fit rounded-full bg-deep-blue text-warm-white hover:bg-deep-blue-light">
          {pending ? "Saving..." : "Save"}
        </Button>
        {!dbAvailable && (
          <p className="text-xs text-steel">Set DATABASE_URL to enable saving content changes.</p>
        )}
      </div>
    </div>
  );
}

export function ContactInfoEditor({ initial, dbAvailable }: { initial: ContactInfo; dbAvailable: boolean }) {
  const [address, setAddress] = useState(initial.address);
  const [phones, setPhones] = useState(initial.phones.join(", "));
  const [email, setEmail] = useState(initial.email);
  const [pending, startTransition] = useTransition();

  function save() {
    startTransition(async () => {
      try {
        await saveContactInfo({
          address,
          phones: phones.split(",").map((p) => p.trim()).filter(Boolean),
          email,
          mapQuery: initial.mapQuery,
        });
        toast.success("Contact info updated");
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Failed to save");
      }
    });
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h2 className="text-base font-semibold text-charcoal font-heading">Contact Information</h2>
      <div className="mt-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="address">Address</Label>
          <Textarea id="address" rows={2} value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phones">Phone numbers (comma separated)</Label>
          <Input id="phones" value={phones} onChange={(e) => setPhones(e.target.value)} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <Button onClick={save} disabled={pending || !dbAvailable} className="w-fit rounded-full bg-deep-blue text-warm-white hover:bg-deep-blue-light">
          {pending ? "Saving..." : "Save"}
        </Button>
        {!dbAvailable && (
          <p className="text-xs text-steel">Set DATABASE_URL to enable saving content changes.</p>
        )}
      </div>
    </div>
  );
}
