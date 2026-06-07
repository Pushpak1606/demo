"use client"
import { H2, H4 } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Plus, Users, ChevronRight, Activity, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function PatientsList() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <H2 className="flex items-center gap-3">
            <Users className="h-8 w-8 text-navy dark:text-blue-400" /> Patient Roster
          </H2>
          <p className="text-text-secondary dark:text-slate-400 mt-2 text-lg font-medium">
            Manage your patients, view AI insights, and organize care plans.
          </p>
        </div>
        <Button className="bg-navy hover:bg-navy-light dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-extrabold h-12 px-6 rounded-[1rem] shadow-sm transition-transform active:scale-95">
          <Plus className="mr-2 h-5 w-5" /> Invite Patient
        </Button>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] bg-white dark:bg-slate-900 overflow-hidden">
        <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center gap-4 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-navy transition-colors" />
            <Input 
              placeholder="Search by name, ID, or condition..." 
              className="pl-12 h-14 rounded-2xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 focus-visible:ring-navy shadow-sm text-base font-medium"
            />
          </div>
          <Button variant="outline" className="h-14 px-6 rounded-2xl border-slate-200 dark:border-slate-700 font-bold bg-white dark:bg-slate-950 shadow-sm hover:border-navy hover:text-navy dark:hover:border-blue-500 dark:hover:text-blue-400 transition-colors">
            <Filter className="mr-2 h-5 w-5 text-slate-500" /> Filter
          </Button>
        </div>

        <CardContent className="p-0">
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            <div className="grid grid-cols-12 gap-4 p-5 px-8 bg-slate-50/80 dark:bg-slate-900/80 text-xs font-black text-slate-500 uppercase tracking-widest hidden md:grid">
              <div className="col-span-3">Patient Name</div>
              <div className="col-span-3">Condition / Plan</div>
              <div className="col-span-3">Latest Status</div>
              <div className="col-span-2">Next Appt</div>
              <div className="col-span-1 text-right">Action</div>
            </div>
            
            <PatientRow 
              name="Sarah Jenkins" 
              id="PT-8892" 
              condition="Type 1 Diabetes" 
              status="Needs Review"
              statusType="warning"
              nextAppt="Nov 12"
            />
            <PatientRow 
              name="Robert Fox" 
              id="PT-3294" 
              condition="Hypertension" 
              status="Critical Alert"
              statusType="critical"
              nextAppt="Today"
            />
            <PatientRow 
              name="Eleanor Pence" 
              id="PT-9934" 
              condition="Anxiety Disorder" 
              status="Stable"
              statusType="success"
              nextAppt="Nov 18"
            />
            <PatientRow 
              name="Michael T." 
              id="PT-1102" 
              condition="Weight Management" 
              status="Improving"
              statusType="success"
              nextAppt="Nov 21"
            />
          </div>
        </CardContent>
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex justify-center bg-slate-50/30 dark:bg-slate-900/30">
          <Button variant="ghost" className="font-extrabold text-navy hover:text-navy dark:text-blue-400">Load More Patients...</Button>
        </div>
      </Card>
      
    </div>
  );
}

function PatientRow({ name, id, condition, status, statusType, nextAppt }: any) {
  const getStatusBadge = () => {
    if (statusType === 'critical') return <Badge className="bg-error text-white border-none font-extrabold px-3 py-1 shadow-sm"><AlertTriangle className="w-3 h-3 mr-1.5" />{status}</Badge>;
    if (statusType === 'warning') return <Badge className="bg-warning text-white border-none font-extrabold px-3 py-1 shadow-sm"><Activity className="w-3 h-3 mr-1.5" />{status}</Badge>;
    return <Badge className="bg-success-light text-success dark:bg-success-light/20 hover:bg-success-light border-none font-extrabold px-3 py-1">{status}</Badge>;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 md:px-8 items-center hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors cursor-pointer group">
      <div className="col-span-3">
        <h4 className="font-extrabold text-foreground text-lg mb-0.5 group-hover:text-navy dark:group-hover:text-blue-400 transition-colors tracking-tight">{name}</h4>
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{id}</span>
      </div>
      
      <div className="col-span-3">
        <span className="font-bold text-text-secondary dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-sm">{condition}</span>
      </div>
      
      <div className="col-span-3 mt-3 md:mt-0">
        {getStatusBadge()}
      </div>
      
      <div className="col-span-2 mt-3 md:mt-0">
        <span className="text-sm font-extrabold text-navy dark:text-slate-200">{nextAppt}</span>
      </div>
      
      <div className="col-span-1 text-right mt-4 md:mt-0">
        <Button variant="ghost" size="icon" className="h-12 w-12 bg-slate-100 text-slate-500 hover:bg-navy hover:text-white dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-blue-600 rounded-xl transition-all group-hover:bg-slate-200">
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
