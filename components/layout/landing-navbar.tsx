"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-slate-950/80">
      <div className="container mx-auto flex h-[72px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex bg-clip-text items-center">
          <Link href="/" className="text-2xl font-extrabold text-teal">
            Medscope
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-text-secondary hover:text-teal transition-colors">Features</Link>
          <Link href="#pathways" className="text-sm font-medium text-text-secondary hover:text-teal transition-colors">Pathways</Link>
          <Link href="/about" className="text-sm font-medium text-text-secondary hover:text-teal transition-colors">About</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/auth/patient/login">
            <Button variant="outline" className="border-teal text-teal hover:bg-teal-tint">
              Patient Login
            </Button>
          </Link>
          <Link href="/auth/doctor/login">
            <Button className="bg-navy hover:bg-navy-light text-white">
              Doctor Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
