"use client";

import { useAuthStore } from "@/stores/auth-store";
import { useUiStore } from "@/stores/ui-store";
import { useNotificationStore } from "@/stores/notification-store";
import { Bell, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TopBar({ role }: { role: "patient" | "doctor" }) {
  const { toggleSidebar } = useUiStore();
  const { unreadCount } = useNotificationStore();

  return (
    <header className="sticky top-0 z-30 flex h-[72px] w-full items-center justify-between border-b bg-white px-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <span className="font-semibold text-lg text-foreground">
          {role === "doctor" ? "Doctor Portal" : "Patient Dashboard"}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute right-2 top-2 flex h-2 w-2 rounded-full bg-red-500" />
          )}
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-slate-100 dark:bg-slate-800">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
