"use client"
import { H2, H4 } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldAlert, Check, X, MessageSquare, AlertTriangle, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ModerationDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <H2 className="flex items-center gap-3 text-navy dark:text-blue-400">
            <ShieldAlert className="h-8 w-8" /> Community Moderation
          </H2>
          <p className="text-text-secondary dark:text-slate-400 mt-2 text-lg font-medium">
            Review flagged posts and provide verified medical insights to community discussions.
          </p>
        </div>
        <Button variant="outline" className="font-extrabold border-slate-200 dark:border-slate-700 h-12 px-6 rounded-[1rem] shadow-sm">
          <Filter className="mr-2 h-4 w-4 text-slate-500" /> Filter Queue
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Moderation Queue */}
        <div className="lg:col-span-2 space-y-6">
          <H4 className="px-2 flex items-center gap-2">Needs Review <Badge className="bg-error text-white border-none py-0.5 px-3 rounded-md text-sm shadow-sm animate-pulse">3</Badge></H4>
          
          <div className="space-y-4">
             <ModerationItem 
               user="Anonymous"
               group="Diabetes Management"
               time="1 hour ago"
               content="I heard that taking cinnamon extract can completely cure Type 2 Diabetes within a month. Has anyone tried this miracle cure?"
               flagReason="Medical Misinformation"
               severity="high"
             />
             <ModerationItem 
               user="Michael T."
               group="Anxiety & Stress Relief"
               time="3 hours ago"
               content="Does anyone know if it's safe to mix my prescribed Xanax with herbal sleep supplements?"
               flagReason="Requires Medical Advice"
               severity="medium"
             />
             <ModerationItem 
               user="Sarah Jenkins"
               group="General Wellness"
               time="5 hours ago"
               content="Just feeling really hopeless today. Nothing seems to work and I don't know what to do anymore."
               flagReason="Potential Crisis / Mental Health"
               severity="critical"
             />
          </div>
        </div>

        {/* AI Auto-Moderation Stats */}
        <div className="space-y-6">
          <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] bg-white dark:bg-slate-900 border-none overflow-hidden">
            <div className="bg-emerald-500 text-white p-6 md:p-8 flex items-center justify-between relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse" />
                <div className="relative z-10">
                   <H4 className="mb-1 text-white flex items-center gap-2"><ShieldAlert className="h-6 w-6" /> AI Auto-Mod Active</H4>
                   <p className="text-emerald-100 text-sm font-bold uppercase tracking-widest mt-2">Guarding Community 24/7</p>
                </div>
            </div>
            <CardContent className="p-8">
               <div className="space-y-4 mb-8">
                 <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-800 p-4 rounded-xl shadow-inner border border-slate-100 dark:border-slate-700">
                   <span className="text-xs font-black uppercase tracking-widest text-slate-500">Posts Scanned</span>
                   <span className="text-2xl font-black text-navy dark:text-blue-100 tracking-tight">3,492</span>
                 </div>
                 <div className="flex justify-between items-center bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl shadow-inner border border-emerald-100/50 dark:border-emerald-900/50">
                   <span className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Auto-Resolved</span>
                   <span className="text-2xl font-black text-emerald-600 tracking-tight">142</span>
                 </div>
                 <div className="flex justify-between items-center bg-red-50 dark:bg-red-900/20 p-4 rounded-xl shadow-inner border border-red-100/50 dark:border-red-900/50">
                   <span className="text-xs font-black uppercase tracking-widest text-error">Escalated</span>
                   <span className="text-2xl font-black text-error tracking-tight">12</span>
                 </div>
               </div>

               <Button className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-navy dark:text-blue-400 font-black rounded-[1.25rem] h-14 shadow-sm transition-transform active:scale-95 text-base">
                 Adjust AI Thresholds
               </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}

function ModerationItem({ user, group, time, content, flagReason, severity }: any) {
  const getSeverityStyle = () => {
    if (severity === 'critical') return 'text-error bg-red-50 dark:bg-red-900/30 border-red-100 dark:border-red-900/50';
    if (severity === 'high') return 'text-orange-600 bg-orange-50 dark:bg-orange-900/30 border-orange-100 dark:border-orange-900/50';
    return 'text-warning-dark bg-warning-light dark:bg-warning/20 dark:text-warning border-warning-light dark:border-warning/30';
  };

  return (
    <Card className={`border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] bg-white dark:bg-slate-900 overflow-hidden group hover:shadow-md transition-shadow`}>
      <CardContent className="p-0">
        <div className={`px-6 py-4 border-b flex items-center justify-between ${getSeverityStyle()}`}>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span className="text-xs font-black uppercase tracking-widest">{flagReason}</span>
          </div>
          <span className="text-[10px] font-black opacity-80 uppercase tracking-widest bg-black/10 dark:bg-white/10 px-2 py-0.5 rounded-md">{severity} Priority</span>
        </div>
        
        <div className="p-6 sm:p-8">
           <div className="flex items-center justify-between mb-5">
              <div>
                 <p className="font-black text-foreground text-xl tracking-tight leading-none mb-2">{user}</p>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">In <span className="text-navy dark:text-blue-400">{group}</span> • {time}</p>
              </div>
           </div>
           
           <div className="bg-slate-50 dark:bg-slate-950/80 p-6 rounded-[1.5rem] border border-slate-100 dark:border-slate-800 shadow-inner mb-6 relative">
              <MessageSquare className="absolute -left-3 -top-3 h-8 w-8 text-slate-200 dark:text-slate-800 fill-white dark:fill-slate-900 border-[3px] border-white dark:border-slate-900 rounded-full box-content bg-white dark:bg-slate-900 z-10" />
              <p className="text-[15px] font-medium text-text-secondary dark:text-slate-300 leading-relaxed italic relative z-0 pl-1">"{content}"</p>
           </div>
           
           <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-black h-12 rounded-xl text-sm shadow-[0_5px_15px_-3px_rgba(16,185,129,0.3)] transition-transform active:scale-[0.98]">
                <Check className="w-4 h-4 mr-2" /> Verify & Reply
              </Button>
              <Button className="flex-1 bg-navy hover:bg-navy-light dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-black h-12 rounded-xl text-sm shadow-sm transition-transform active:scale-[0.98]">
                <ShieldAlert className="w-4 h-4 mr-2" /> Add Medical Note
              </Button>
              <Button variant="outline" className="flex-1 sm:flex-none text-error hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 border-red-200 dark:border-red-900/50 font-black h-12 px-6 rounded-xl transition-colors">
                <X className="w-4 h-4 sm:mr-0 md:mr-2" /> <span className="hidden md:inline">Remove</span>
              </Button>
           </div>
        </div>
      </CardContent>
    </Card>
  );
}
