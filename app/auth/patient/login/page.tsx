"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/stores/auth-store";
import { useRouter } from "next/navigation";
import { Activity } from "lucide-react";

export default function PatientLogin() {
  const { setAuth } = useAuthStore();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuth("dummy-token", "patient");
    router.push("/patient/dashboard");
  };

  return (
    <>
      <div className="hidden lg:flex flex-col justify-center items-center bg-teal-tint dark:bg-teal-900/20 p-12">
        <div className="max-w-md text-center">
          <Activity className="w-20 h-20 text-teal mx-auto mb-8" />
          <h1 className="text-4xl font-extrabold text-teal mb-4 tracking-tight">Your Health Journey Starts Here</h1>
          <p className="text-lg text-teal-dark dark:text-teal-400 leading-relaxed">Access your digital healthcare records, AI assistant, and community support in one place.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-24 py-16">
        <div className="max-w-md w-full mx-auto bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[2rem] shadow-card-lg border dark:border-slate-800">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-navy dark:text-slate-100 tracking-tight">Welcome back</h2>
            <p className="text-text-secondary dark:text-slate-400 mt-2">Sign in to your health journey</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email address</Label>
              <Input id="email" type="email" placeholder="name@example.com" required className="h-12 rounded-xl" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-foreground">Password</Label>
                <Link href="/auth/patient/forgot-password" className="text-sm font-semibold text-teal hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <Input id="password" type="password" required className="h-12 rounded-xl" />
            </div>
            <Button type="submit" className="w-full h-12 bg-teal hover:bg-teal-light text-white font-bold text-base rounded-xl">
              Sign In
            </Button>
          </form>
          <div className="mt-8 pt-6 border-t dark:border-slate-800 text-center space-y-4">
            <p className="text-sm text-text-secondary dark:text-slate-400">
              Don't have an account? <Link href="/auth/patient/register" className="text-teal font-bold hover:underline">Register here</Link>
            </p>
            <p className="text-sm text-text-secondary dark:text-slate-400">
              Are you a Doctor? <Link href="/auth/doctor/login" className="text-navy dark:text-blue-400 font-bold hover:underline">Doctor Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
