"use client"
import { H2, H4 } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BellRing, CalendarPlus, Check, Clock, Edit2, Pill, Droplet, Activity } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function RemindersPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <H2 className="flex items-center gap-3">
            <BellRing className="h-8 w-8 text-teal" /> Timeline & Reminders
          </H2>
          <p className="text-text-secondary dark:text-slate-400 mt-2">
            Track your medications, measurements, and scheduled appointments.
          </p>
        </div>
        <Button className="bg-teal hover:bg-teal-light text-white font-bold h-12 px-6 rounded-xl shadow-sm">
          <CalendarPlus className="mr-2 h-5 w-5" /> Add Reminder
        </Button>
      </div>

      <Tabs defaultValue="today" className="w-full">
        <TabsList className="mb-8 grid w-full max-w-md grid-cols-3 h-14 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl">
          <TabsTrigger value="yesterday" className="rounded-xl h-full font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm">Yesterday</TabsTrigger>
          <TabsTrigger value="today" className="rounded-xl h-full font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm">Today</TabsTrigger>
          <TabsTrigger value="tomorrow" className="rounded-xl h-full font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm">Tomorrow</TabsTrigger>
        </TabsList>
        
        <TabsContent value="today" className="space-y-6 focus-visible:outline-none">
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-5 md:ml-10 space-y-10 pb-8 mt-4 pt-4">
            
            <TimelineItem 
              time="08:00 AM" 
              type="Medicine" 
              title="Amoxicillin 500mg" 
              desc="Take 1 capsule with food."
              icon={<Pill className="h-5 w-5 text-white" />}
              iconColor="bg-teal"
              status="completed"
            />

            <TimelineItem 
              time="12:30 PM" 
              type="Measurement" 
              title="Post-meal Blood Sugar" 
              desc="Target: < 140 mg/dL"
              icon={<Droplet className="h-5 w-5 text-white" />}
              iconColor="bg-blue-500"
              status="pending"
            />
            
            <TimelineItem 
              time="02:00 PM" 
              type="Appointment" 
              title="Follow-up with Dr. Smith" 
              desc="Live Video Consultation"
              icon={<Activity className="h-5 w-5 text-white" />}
              iconColor="bg-navy"
              status="upcoming"
            />
            
            <TimelineItem 
              time="08:00 PM" 
              type="Medicine" 
              title="Amoxicillin 500mg" 
              desc="Take 1 capsule after dinner."
              icon={<Pill className="h-5 w-5 text-white" />}
              iconColor="bg-teal"
              status="upcoming"
            />

          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function TimelineItem({ time, type, title, desc, icon, iconColor, status }: any) {
  const isCompleted = status === "completed";
  const isPending = status === "pending";

  return (
    <div className="relative pl-8 md:pl-16">
      {/* Timeline Dot/Icon */}
      <div className={`absolute -left-6 md:-left-7 top-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-[4px] border-surface dark:border-slate-950 flex items-center justify-center shadow-sm z-10 transition-colors ${isCompleted ? 'bg-success' : iconColor}`}>
        {isCompleted ? <Check className="h-5 w-5 text-white" /> : icon}
      </div>

      <Card className={`border shadow-sm rounded-2xl overflow-hidden transition-all ${isCompleted ? 'bg-slate-50 dark:bg-slate-900/40 border-transparent opacity-80' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'} ${isPending ? 'ring-2 ring-warning ring-offset-2 ring-offset-surface dark:ring-offset-slate-950 shadow-md transform scale-[1.01]' : ''}`}>
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Badge variant={isPending ? "default" : "secondary"} className={`font-bold py-1 px-3 ${isPending ? "bg-warning hover:bg-warning text-white" : ""}`}>
                  <Clock className="w-3 h-3 mr-1.5" /> {time}
                </Badge>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{type}</span>
              </div>
              <h3 className={`text-xl md:text-2xl font-extrabold tracking-tight mb-2 ${isCompleted ? 'line-through text-slate-400' : 'text-foreground'}`}>{title}</h3>
              <p className="text-text-secondary dark:text-slate-400 font-medium">{desc}</p>
            </div>
            
            <div className="flex items-center gap-2 mt-2 md:mt-0">
              {!isCompleted && (
                <Button className="rounded-xl px-6 h-12 font-bold shadow-sm" variant={isPending ? "default" : "outline"}>
                  <Check className="w-5 h-5 mr-2" /> Mark Done
                </Button>
              )}
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl text-slate-400 hover:text-slate-600 bg-slate-50 dark:bg-slate-800">
                <Edit2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
