"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";

export function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <Button variant="outline" size="sm" className="gap-1.5 rounded-full" onClick={logout}>
      <LogOut className="h-3.5 w-3.5" /> Sign out
    </Button>
  );
}
