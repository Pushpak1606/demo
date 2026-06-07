"use client"
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/stores/auth-store";
import { useRouter } from "next/navigation";
import { CheckCircle2, ChevronRight, Stethoscope, UploadCloud, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DoctorRegister() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) setStep(step + 1);
  };

  const handleComplete = () => {
    router.push("/");
  };

  return (
    <>
      <div className="hidden lg:flex flex-col justify-center items-center bg-navy p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[slide_2s_linear_infinite]" />
        <div className="max-w-md text-center relative z-10">
          <Stethoscope className="w-20 h-20 text-blue-400 mx-auto mb-8" />
          <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Join as a Doctor</h1>
          <p className="text-lg text-slate-300 leading-relaxed">Expand your practice, connect with patients globally, and leverage AI to streamline your workflows.</p>
        </div>
      </div>
      
      <div className="flex flex-col justify-center px-4 sm:px-8 lg:px-24 py-12">
        <div className="max-w-xl w-full mx-auto bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-[2rem] shadow-card-lg border dark:border-slate-800">
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-10 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-navy dark:bg-blue-600 transition-all duration-500 ease-in-out" 
                style={{ width: `${((step - 1) / 3) * 100}%` }} 
              />
            </div>
            {[1, 2, 3, 4].map((s) => (
              <div 
                key={s} 
                className={cn(
                  "relative z-10 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full text-sm font-bold border-2 transition-colors duration-300",
                  step >= s ? "bg-navy border-navy dark:bg-blue-600 dark:border-blue-600 text-white" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-400"
                )}
              >
                {step > s ? <CheckCircle2 className="h-5 w-5" /> : s}
              </div>
            ))}
          </div>

          <div className="mb-8 text-center sm:text-left">
            <h2 className="text-3xl font-extrabold text-navy dark:text-slate-100 tracking-tight">
              {step === 1 && "Professional Account"}
              {step === 2 && "Medical Credentials"}
              {step === 3 && "Verification Docs"}
              {step === 4 && "Under Review"}
            </h2>
            <p className="text-text-secondary dark:text-slate-400 mt-2">
              {step === 1 && "Enter your basic contact information."}
              {step === 2 && "Tell us about your medical specialty and practice."}
              {step === 3 && "Upload your medical license for verification."}
              {step === 4 && "We are reviewing your application."}
            </p>
          </div>

          {step !== 4 ? (
            <form onSubmit={handleNext} className="space-y-6">
              
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-foreground">Full Name (As on License)</Label>
                    <Input id="fullName" required className="h-12 rounded-xl border-slate-200 focus-visible:ring-navy" placeholder="Dr. Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Professional Email</Label>
                    <Input id="email" type="email" required className="h-12 rounded-xl border-slate-200 focus-visible:ring-navy" placeholder="doctor@hospital.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-foreground">Detailed Password</Label>
                    <Input id="password" type="password" required className="h-12 rounded-xl border-slate-200 focus-visible:ring-navy" />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300 relative">
                  <div className="space-y-2">
                    <Label htmlFor="mrn" className="text-foreground">Medical Registration Number (MRN)</Label>
                    <Input id="mrn" required className="h-12 rounded-xl border-slate-200 focus-visible:ring-navy" placeholder="e.g. 12345678" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialty" className="text-foreground">Primary Specialty</Label>
                    <select id="specialty" required className="flex h-12 w-full rounded-xl border border-slate-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-navy disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:focus-visible:ring-slate-300">
                      <option value="">Select Specialty...</option>
                      <option value="cardio">Cardiologist</option>
                      <option value="psych">Psychiatrist</option>
                      <option value="endocrin">Endocrinologist</option>
                      <option value="gp">General Physician</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hospital" className="text-foreground">Hospital / Clinic Name</Label>
                    <Input id="hospital" className="h-12 rounded-xl border-slate-200 focus-visible:ring-navy" placeholder="e.g. City General Hospital" />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300 relative">
                  <p className="text-sm font-semibold text-foreground mb-4">Upload your Medical License for verification (PDF, JPG, PNG)</p>
                  
                  <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <UploadCloud className="h-12 w-12 text-slate-400 mb-4" />
                    <p className="font-semibold text-navy dark:text-slate-200 mb-1">Click to upload or drag and drop</p>
                    <p className="text-sm text-slate-500">SVG, PNG, JPG or PDF (max. 5MB)</p>
                  </div>
                </div>
              )}

              <div className="pt-6 flex justify-between gap-4 mt-8">
                {step > 1 ? (
                  <Button type="button" variant="outline" onClick={() => setStep(step - 1)} className="h-12 px-6 rounded-xl hidden sm:block border-slate-200 dark:border-slate-700">
                    Back
                  </Button>
                ) : <div className="hidden sm:block w-24" />}
                <Button type="submit" className="flex-1 h-12 bg-navy hover:bg-navy-light dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold text-base rounded-xl shadow-md">
                  {step === 3 ? "Submit Application" : "Continue"}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center animate-in zoom-in-95 duration-500 relative">
              <div className="h-28 w-28 bg-blue-50 dark:bg-blue-900/30 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <Clock className="h-14 w-14" />
              </div>
              <h3 className="text-3xl font-bold text-navy dark:text-slate-100 mb-3 tracking-tight">Application Submitted</h3>
              <p className="text-text-secondary dark:text-slate-400 mb-6 text-lg">
                Your credentials are currently under review by our medical board.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 mb-10 text-sm text-left border border-slate-100 dark:border-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                  <p className="text-slate-600 dark:text-slate-300">You will receive an email confirmation within 24-48 hours once your account is verified.</p>
                </div>
              </div>
              <Button onClick={handleComplete} className="w-full h-14 bg-navy hover:bg-navy-light text-white font-bold text-lg rounded-xl shadow-card">
                Return to Home
              </Button>
            </div>
          )}
          
          {step === 1 && (
            <div className="mt-8 pt-6 border-t dark:border-slate-800 text-center space-y-4">
              <p className="text-sm text-text-secondary dark:text-slate-400">
                Already have an account? <Link href="/auth/doctor/login" className="text-navy dark:text-blue-400 font-bold hover:underline">Sign In</Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
