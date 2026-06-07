"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/stores/ui-store";
import { 
  Home, 
  Pill, 
  BellRing, 
  Apple, 
  Video, 
  Brain, 
  MessageSquare, 
  BookOpen, 
  Users, 
  UserCircle 
} from "lucide-react";

const navItems = [
  { href: "/patient/dashboard", label: "Dashboard", icon: Home },
  { href: "/patient/medicine", label: "AI Medicine", icon: Pill },
  { href: "/patient/reminders", label: "Reminders", icon: BellRing },
  { href: "/patient/nutrition", label: "Nutrition", icon: Apple },
  { href: "/patient/consultation", label: "Consultation", icon: Video },
  { href: "/patient/mental-health", label: "Mental Health", icon: Brain },
  { href: "/patient/chat", label: "AI Chatbot", icon: MessageSquare },
  { href: "/patient/journal", label: "Journal", icon: BookOpen },
  { href: "/patient/community", label: "Community", icon: Users },
  { href: "/patient/profile", label: "Profile", icon: UserCircle },
];

export function PatientSidebar() {
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
        <span className="text-xl font-extrabold tracking-tight text-teal">Medscope</span>
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
                  ? "bg-teal-tint text-teal-dark dark:bg-teal-900/30 dark:text-teal-400" 
                  : "text-text-secondary hover:bg-slate-100 hover:text-foreground dark:text-slate-400 dark:hover:bg-slate-800"
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
