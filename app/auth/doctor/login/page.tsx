"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useAuthStore } from "@/stores/auth-store";
import { useRouter } from "next/navigation";
import { Stethoscope } from "lucide-react";

export default function DoctorLogin() {
  const { setAuth } = useAuthStore();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuth("dummy-doctor-token", "doctor");
    router.push("/doctor/dashboard");
  };

  return (
    <>
      <div className="hidden lg:flex flex-col justify-center items-center bg-navy p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[slide_2s_linear_infinite]" />
        <div className="max-w-md text-center relative z-10">
          <Stethoscope className="w-20 h-20 text-blue-400 mx-auto mb-8" />
          <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Doctor Portal</h1>
          <p className="text-lg text-slate-300 leading-relaxed">Manage your patients, access AI diagnostics, and streamline your consultations.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-24 py-16">
        <div className="max-w-md w-full mx-auto bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[2rem] shadow-card-lg border dark:border-slate-800">
          <div className="mb-10 text-center">
            <Badge className="bg-teal text-white hover:bg-teal mb-4 rounded-md px-3 py-1">Doctor Portal</Badge>
            <h2 className="text-3xl font-extrabold text-navy dark:text-slate-100 tracking-tight">
              Doctor Login
            </h2>
            <p className="text-text-secondary dark:text-slate-400 mt-2">Sign in to manage your practice</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="mrn" className="text-foreground">Medical Registration Number (MRN)</Label>
              <Input id="mrn" type="text" placeholder="e.g. 123456" required className="h-12 rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email address</Label>
              <Input id="email" type="email" placeholder="doctor@medscope.com" required className="h-12 rounded-xl" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-foreground">Password</Label>
                <Link href="/auth/doctor/forgot-password" className="text-sm font-semibold text-navy dark:text-blue-400 hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <Input id="password" type="password" required className="h-12 rounded-xl" />
            </div>
            <Button type="submit" className="w-full h-12 bg-navy hover:bg-navy-light dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold text-base rounded-xl">
              Sign In as Doctor
            </Button>
          </form>
          <div className="mt-8 pt-6 border-t dark:border-slate-800 text-center space-y-4">
            <p className="text-sm text-text-secondary dark:text-slate-400">
              New to Medscope? <Link href="/auth/doctor/register" className="text-navy dark:text-blue-400 font-bold hover:underline">Register as a Doctor</Link>
            </p>
            <p className="text-sm text-text-secondary dark:text-slate-400">
              Are you a Patient? <Link href="/auth/patient/login" className="text-teal font-bold hover:underline">Patient Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
