"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/stores/ui-store";
import { 
  Home, 
  Users, 
  Calendar, 
  Pill, 
  UserPlus, 
  UserCircle 
} from "lucide-react";

const navItems = [
  { href: "/doctor/dashboard", label: "Dashboard", icon: Home },
  { href: "/doctor/patients", label: "Patient List", icon: Users },
  { href: "/doctor/medicine", label: "AI Medicine", icon: Pill },
  { href: "/doctor/schedule", label: "Schedule", icon: Calendar },
  { href: "/doctor/community", label: "Community", icon: Users },
  { href: "/doctor/delegate", label: "Assistant", icon: UserPlus },
  { href: "/doctor/profile", label: "Profile", icon: UserCircle },
];

export function DoctorSidebar() {
  const pathname = usePathname();
  const { sidebarCollapsed } = useUiStore();

  return (
    <aside
      className={cn(
        "flex h-screen flex-col border-r bg-surface transition-all duration-300 dark:bg-slate-900 dark:border-slate-800",
        sidebarCollapsed ? "w-[72px]" : "w-[256px] hidden lg:flex"
      )}
    >
      <div className="flex h-[72px] items-center justify-center border-b dark:border-slate-800">
        <span className="text-xl font-extrabold tracking-tight text-navy dark:text-blue-400">Medscope DR</span>
      </div>
      <nav className="flex-1 space-y-2 overflow-y-auto p-4">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive 
                  ? "bg-slate-200 text-navy dark:bg-slate-800 dark:text-slate-200" 
                  : "text-text-secondary hover:bg-slate-100 hover:text-foreground dark:text-slate-400 dark:hover:bg-slate-800/50"
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {!sidebarCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
