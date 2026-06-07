"use client"
import { H2, H4 } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarIcon, Video, User, Clock, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SchedulePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-10">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <H2 className="flex items-center gap-3">
            <CalendarIcon className="h-8 w-8 text-navy dark:text-blue-400" /> Schedule Calendar
          </H2>
          <p className="text-text-secondary dark:text-slate-400 mt-2 text-lg font-medium">
            Manage your daily appointments and availability.
          </p>
        </div>
        <Button className="bg-navy hover:bg-navy-light dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-extrabold h-12 px-6 rounded-[1rem] shadow-sm transition-transform active:scale-95">
          Set Availability
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Placeholder Calendar Grid */}
        <div className="lg:col-span-3 space-y-6 flex flex-col">
          <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] bg-white dark:bg-slate-900 overflow-hidden flex-1 min-h-[600px] flex flex-col">
            <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-900/50 shrink-0">
               <h3 className="text-2xl font-black text-navy dark:text-slate-100 tracking-tight">November 2026</h3>
               <div className="flex gap-2">
                 <Button variant="outline" className="font-bold border-slate-200 dark:border-slate-700 rounded-xl h-10">Month</Button>
                 <Button className="bg-navy hover:bg-navy-light dark:bg-blue-600 text-white font-bold rounded-xl shadow-sm h-10">Week</Button>
                 <Button variant="outline" className="font-bold border-slate-200 dark:border-slate-700 rounded-xl h-10">Day</Button>
               </div>
            </div>
            <CardContent className="p-8 flex-1 flex flex-col items-center justify-center text-center bg-slate-50/20 dark:bg-slate-900/20 relative overflow-hidden">
               <div className="absolute inset-0 grid grid-cols-7 grid-rows-5 border-[0.5px] border-slate-100 dark:border-slate-800/50 opacity-50 z-0">
                  {Array.from({ length: 35 }).map((_, i) => <div key={i} className="border-[0.5px] border-slate-100 dark:border-slate-800/50" />)}
               </div>
               
               <div className="relative z-10 p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg max-w-sm w-full mx-auto">
                 <CalendarIcon className="h-16 w-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                 <h4 className="text-xl font-bold text-navy dark:text-slate-200 mb-2">Interactive Calendar Space</h4>
                 <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">This grid area will render dynamic time blocks integrating with standard APIs.</p>
               </div>
            </CardContent>
          </Card>
        </div>

        {/* Agenda Sidebar */}
        <div className="space-y-6">
          <Card className="border-slate-200 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none rounded-[2rem] bg-white dark:bg-slate-900 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
              <H4>Upcoming</H4>
            </div>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100 dark:divide-slate-800 p-6 space-y-5">
                <AgendaCard time="10:00 AM" name="Michael T." type="Video Consult" isNext={true} />
                <AgendaCard time="11:30 AM" name="Sarah Jenkins" type="In-Person" />
                <AgendaCard time="02:00 PM" name="David Kim" type="Video Consult" />
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}

function AgendaCard({ time, name, type, isNext }: any) {
  return (
    <div className={`p-6 rounded-2xl border transition-all ${isNext ? 'bg-blue-50/80 dark:bg-slate-800/80 border-blue-200 dark:border-blue-800 shadow-sm ring-2 ring-blue-500/20 ring-offset-2 ring-offset-white dark:ring-offset-slate-950 scale-[1.02]' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'}`}>
      {isNext && <Badge className="bg-blue-500 text-white border-none font-bold mb-4 px-3 py-1">Up Next</Badge>}
      <div className="flex items-center gap-2 mb-2 text-text-secondary dark:text-slate-400">
        <Clock className="w-4 h-4" />
        <span className="text-sm font-extrabold text-foreground tracking-tight">{time}</span>
      </div>
      <h5 className="font-black text-xl text-navy dark:text-slate-100 mb-4 tracking-tight">{name}</h5>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-100 dark:bg-slate-800/50 px-3 py-2 rounded-xl">
          {type.includes('Video') ? <Video className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
          {type}
        </div>
        <Button variant="ghost" size="icon" className="h-10 w-10 text-slate-400 hover:text-navy dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
