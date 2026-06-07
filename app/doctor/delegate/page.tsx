"use client"
import { H2, H4 } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, ArrowRight, ShieldCheck, Mail, Building2, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DelegatePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <H2 className="flex items-center gap-3">
            <UserPlus className="h-8 w-8 text-navy dark:text-blue-400" /> Assistant Delegation
          </H2>
          <p className="text-text-secondary dark:text-slate-400 mt-2 text-lg font-medium">
            Grant access to medical assistants or clinic staff to manage scheduling and triage.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Add Assistant Form */}
        <Card className="border-slate-200 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none rounded-[2rem] bg-white dark:bg-slate-900 border-none overflow-hidden h-fit">
          <div className="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <H4>Invite Staff Member</H4>
          </div>
          <CardContent className="p-8 space-y-8">
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-extrabold text-foreground">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-navy transition-colors" />
                  <Input 
                    placeholder="assistant@clinic.com" 
                    className="pl-12 h-14 rounded-[1.25rem] border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus-visible:ring-navy shadow-inner text-base font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-extrabold text-foreground">Role / Permissions</label>
                <select className="flex h-14 w-full rounded-[1.25rem] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-5 py-2 text-base font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 dark:focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 text-foreground shadow-inner cursor-pointer">
                  <option value="assistant">Medical Assistant (Triage & Messages)</option>
                  <option value="admin">Clinic Admin (Scheduling & Billing)</option>
                  <option value="nurse">Registered Nurse (Vitals & Care Plans)</option>
                </select>
              </div>
            </div>
            
            <div className="bg-blue-50/80 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/50 flex items-start gap-4 shadow-sm">
              <ShieldCheck className="h-7 w-7 text-navy dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-black text-navy dark:text-blue-100 mb-1.5 tracking-tight">HIPAA Compliance Guarantee</h5>
                <p className="text-sm font-medium text-blue-800/90 dark:text-blue-300/80 leading-relaxed">
                  Delegates only see patient data related to their specific role. All actions are securely logged in the immutable practice audit trail.
                </p>
              </div>
            </div>

            <Button className="w-full bg-navy hover:bg-navy-light dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-black h-14 rounded-2xl shadow-[0_5px_15px_-3px_rgba(10,35,66,0.3)] text-lg transition-transform active:scale-[0.98]">
              Send Invitation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </CardContent>
        </Card>

        {/* Existing Staff */}
        <div className="space-y-6">
          <H4 className="px-2">Active Delegates (2)</H4>
          
          <StaffCard 
            name="Jessica Miller"
            role="Medical Assistant"
            email="j.miller@cityclinic.com"
            status="Active"
            joined="Joined 2 mos ago"
          />
          <StaffCard 
            name="David Chen"
            role="Clinic Admin"
            email="d.chen@cityclinic.com"
            status="Pending"
            joined="Invited yesterday"
          />
        </div>

      </div>
    </div>
  );
}

function StaffCard({ name, role, email, status, joined }: any) {
  const isActive = status === 'Active';
  return (
    <Card className={`border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] bg-white dark:bg-slate-900 overflow-hidden transition-shadow hover:shadow-md ${isActive ? '' : 'opacity-80 grayscale-[30%]'}`}>
      <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className={`h-16 w-16 rounded-[1.25rem] flex items-center justify-center font-black text-2xl shadow-inner ${isActive ? 'bg-blue-50 text-navy dark:bg-blue-900/50 dark:text-blue-300' : 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500'}`}>
            {name.split(' ').map((n: string) => n[0]).join('')}
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <h4 className="font-black text-xl text-foreground tracking-tight">{name}</h4>
              {isActive ? (
                <Badge className="bg-success-light/50 text-success border-none text-[10px] uppercase font-black tracking-widest px-2.5 py-0.5 rounded-lg"><CheckCircle2 className="w-3 h-3 mr-1.5" /> Active</Badge>
              ) : (
                <Badge className="bg-warning-light text-warning-dark dark:bg-warning-light/20 dark:text-warning border-none text-[10px] uppercase font-black tracking-widest px-2.5 py-0.5 rounded-lg">Pending</Badge>
              )}
            </div>
            <p className="text-sm font-extrabold text-slate-500 mb-0.5">{role}</p>
            <p className="text-xs font-bold text-slate-400 tracking-wide">{email}</p>
          </div>
        </div>
        <div className="sm:text-right pt-5 sm:pt-0 border-t sm:border-0 border-slate-100 dark:border-slate-800">
           <Button variant="ghost" className="text-error hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/30 font-bold h-10 px-5 rounded-xl -ml-4 sm:ml-0 transition-colors">
             Revoke Access
           </Button>
           <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-3 sm:mt-1">{joined}</p>
        </div>
      </CardContent>
    </Card>
  );
}
