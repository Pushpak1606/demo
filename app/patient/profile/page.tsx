"use client"
import { H2, H4 } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { UserCircle, Save, Shield } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <H2 className="flex items-center gap-3">
            <UserCircle className="h-8 w-8 text-teal" /> Personal Profile
          </H2>
          <p className="text-text-secondary dark:text-slate-400 mt-2">
            Manage your account settings and personal health information.
          </p>
        </div>
        <Button className="bg-teal hover:bg-teal-light text-white font-bold h-12 px-6 rounded-xl shadow-sm">
          <Save className="mr-2 h-5 w-5" /> Save Changes
        </Button>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[1.5rem] bg-white dark:bg-slate-900 overflow-hidden">
        <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <H4>Basic Information</H4>
        </div>
        <CardContent className="p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-foreground font-semibold">First Name</Label>
              <Input id="firstName" defaultValue="Alex" className="h-12 rounded-xl focus-visible:ring-teal" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-foreground font-semibold">Last Name</Label>
              <Input id="lastName" defaultValue="Johnson" className="h-12 rounded-xl focus-visible:ring-teal" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-semibold">Email Address</Label>
              <Input id="email" type="email" defaultValue="alex.j@example.com" disabled className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 opacity-70" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground font-semibold">Phone Number</Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="h-12 rounded-xl focus-visible:ring-teal" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[1.5rem] bg-white dark:bg-slate-900 overflow-hidden">
        <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <H4>Health Data Privacy</H4>
        </div>
        <CardContent className="p-6 md:p-8 space-y-8">
          <div className="flex items-start gap-4 p-5 bg-teal-tint/50 dark:bg-teal-900/20 rounded-2xl border border-teal-tint dark:border-teal-900/50 shadow-sm">
            <Shield className="h-6 w-6 text-teal shrink-0 mt-0.5" />
            <div>
              <h5 className="font-extrabold text-navy dark:text-slate-100 mb-1">HIPAA Compliant Storage</h5>
              <p className="text-sm font-medium text-text-secondary dark:text-slate-400 leading-relaxed">
                Your medical data is encrypted at rest and in transit. Only you and your authorized doctors can access your full medical history.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b dark:border-slate-800 pb-6">
              <div>
                <p className="font-extrabold text-foreground mb-1">Share data with AI Assistant</p>
                <p className="text-sm font-medium text-slate-500">Allow AI to read your health records for better insights.</p>
              </div>
              <input type="checkbox" defaultChecked className="w-6 h-6 accent-teal rounded focus:ring-teal" />
            </div>
            <div className="flex items-center justify-between pb-2">
              <div>
                <p className="font-extrabold text-foreground mb-1">Public Community Profile</p>
                <p className="text-sm font-medium text-slate-500">Show your first name in community groups.</p>
              </div>
              <input type="checkbox" defaultChecked className="w-6 h-6 accent-teal rounded focus:ring-teal" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
