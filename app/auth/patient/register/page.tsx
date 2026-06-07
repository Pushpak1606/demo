"use client"
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/stores/auth-store";
import { useRouter } from "next/navigation";
import { CheckCircle2, ChevronRight, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PatientRegister() {
  const [step, setStep] = useState(1);
  const { setAuth } = useAuthStore();
  const router = useRouter();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) setStep(step + 1);
  };

  const handleComplete = () => {
    setAuth("dummy-token", "patient");
    router.push("/patient/dashboard");
  };

  return (
    <>
      <div className="hidden lg:flex flex-col justify-center items-center bg-teal-tint dark:bg-teal-900/20 p-12">
        <div className="max-w-md text-center">
          <Activity className="w-20 h-20 text-teal mx-auto mb-8" />
          <h1 className="text-4xl font-extrabold text-teal mb-4 tracking-tight">Join Medscope Today</h1>
          <p className="text-lg text-teal-dark dark:text-teal-400">Take control of your health with AI-powered insights, smart reminders, and an empathetic community.</p>
        </div>
      </div>
      
      <div className="flex flex-col justify-center px-4 sm:px-8 lg:px-24 py-12">
        <div className="max-w-xl w-full mx-auto bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-[2rem] shadow-card-lg border dark:border-slate-800">
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-10 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-teal transition-all duration-500 ease-in-out" 
                style={{ width: `${((step - 1) / 3) * 100}%` }} 
              />
            </div>
            {[1, 2, 3, 4].map((s) => (
              <div 
                key={s} 
                className={cn(
                  "relative z-10 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full text-sm font-bold border-2 transition-colors duration-300",
                  step >= s ? "bg-teal border-teal text-white" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-400"
                )}
              >
                {step > s ? <CheckCircle2 className="h-5 w-5" /> : s}
              </div>
            ))}
          </div>

          <div className="mb-8 text-center sm:text-left">
            <h2 className="text-3xl font-extrabold text-navy dark:text-slate-100 tracking-tight">
              {step === 1 && "Create Account"}
              {step === 2 && "Personal Details"}
              {step === 3 && "Health Profile"}
              {step === 4 && "You're all set!"}
            </h2>
            <p className="text-text-secondary dark:text-slate-400 mt-2">
              {step === 1 && "Enter your basic information to get started."}
              {step === 2 && "Just a few more details to personalize your experience."}
              {step === 3 && "Select any conditions you manage to join communities."}
              {step === 4 && "Your account has been created successfully."}
            </p>
          </div>

          {step !== 4 ? (
            <form onSubmit={handleNext} className="space-y-6">
              
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-foreground">Full Name</Label>
                    <Input id="fullName" required className="h-12 rounded-xl border-slate-200 dark:border-slate-700 focus-visible:ring-teal" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email address</Label>
                    <Input id="email" type="email" required className="h-12 rounded-xl border-slate-200 dark:border-slate-700 focus-visible:ring-teal" placeholder="name@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-foreground">Password</Label>
                    <Input id="password" type="password" required className="h-12 rounded-xl border-slate-200 dark:border-slate-700 focus-visible:ring-teal" />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300 relative">
                  <div className="space-y-2">
                    <Label htmlFor="dob" className="text-foreground">Date of Birth</Label>
                    <Input id="dob" type="date" required className="h-12 rounded-xl border-slate-200 dark:border-slate-700 focus-visible:ring-teal" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Phone Number (Optional)</Label>
                    <Input id="phone" type="tel" className="h-12 rounded-xl border-slate-200 dark:border-slate-700 focus-visible:ring-teal" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-foreground">City / State</Label>
                    <Input id="city" className="h-12 rounded-xl border-slate-200 dark:border-slate-700 focus-visible:ring-teal" placeholder="e.g. San Francisco, CA" />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300 relative">
                  <p className="text-sm font-semibold text-foreground mb-4">Select to auto-join Community Support Groups:</p>
                  <div className="grid grid-cols-2 gap-3">
                    {["Diabetes", "Hypertension", "Anxiety", "Depression", "Heart Disease", "PCOS"].map((condition) => (
                      <div key={condition} className="flex items-center space-x-3 border dark:border-slate-700 rounded-xl p-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <input type="checkbox" id={condition} className="w-5 h-5 text-teal border-slate-300 rounded focus:ring-teal accent-teal" />
                        <label htmlFor={condition} className="text-sm font-semibold leading-none cursor-pointer w-full text-foreground">
                          {condition}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 mt-6">
                    <Label htmlFor="other" className="text-foreground">Other Conditions (Optional)</Label>
                    <Input id="other" className="h-12 rounded-xl border-slate-200 dark:border-slate-700 focus-visible:ring-teal" placeholder="Please specify..." />
                  </div>
                </div>
              )}

              <div className="pt-6 flex justify-between gap-4 mt-8">
                {step > 1 ? (
                  <Button type="button" variant="outline" onClick={() => setStep(step - 1)} className="h-12 px-6 rounded-xl hidden sm:block border-slate-200 dark:border-slate-700">
                    Back
                  </Button>
                ) : <div className="hidden sm:block w-24" />}
                <Button type="submit" className="flex-1 h-12 bg-teal hover:bg-teal-light text-white font-bold text-base rounded-xl shadow-md">
                  {step === 3 ? "Complete Profile" : "Continue"}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center animate-in zoom-in-95 duration-500 relative">
              <div className="h-28 w-28 bg-teal-tint dark:bg-teal-900/30 text-teal rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <CheckCircle2 className="h-14 w-14" />
              </div>
              <h3 className="text-3xl font-bold text-navy dark:text-slate-100 mb-3 tracking-tight">Registration Complete!</h3>
              <p className="text-text-secondary dark:text-slate-400 mb-10 text-lg">
                We've set up your communities and personalized your dashboard.
              </p>
              <Button onClick={handleComplete} className="w-full h-14 bg-teal hover:bg-teal-light text-white font-bold text-lg rounded-xl shadow-card">
                Go to My Dashboard
              </Button>
            </div>
          )}
          
          {step === 1 && (
            <div className="mt-8 pt-6 border-t dark:border-slate-800 text-center space-y-4">
              <p className="text-sm text-text-secondary dark:text-slate-400">
                Already have an account? <Link href="/auth/patient/login" className="text-teal font-bold hover:underline">Sign In</Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
