"use client";

import { useUserStore } from "@/stores/user-store";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Droplet, Heart, Thermometer, Pill, Calendar, ChevronRight, Video, Users } from "lucide-react";
import Link from "next/link";
import { H2, H4 } from "@/components/shared/typography";
import { Badge } from "@/components/ui/badge";

export default function PatientDashboard() {
  const { patient } = useUserStore();
  const userName = patient?.name || "Alex";

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-teal dark:bg-teal-900 rounded-3xl p-8 lg:p-10 shadow-card text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-full bg-[linear-gradient(to_left,rgba(255,255,255,0.1),transparent)]" />
        <div className="space-y-2 relative z-10 max-w-xl">
          <H2 className="text-white">Good morning, {userName}!</H2>
          <p className="text-teal-tint md:text-lg leading-relaxed">Your health score is looking excellent today. Keep up the hydration.</p>
        </div>
        <div className="relative z-10 shrink-0">
          <Link href="/patient/medicine">
            <Button className="bg-white text-teal hover:bg-slate-100 font-bold rounded-xl h-14 px-8 shadow-sm">
              Ask AI Assistant
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
        {/* Left Column (Main Metrics & Upcoming) */}
        <div className="lg:col-span-2 space-y-8">
          
          <section>
            <div className="flex items-center justify-between mb-5">
              <H4>Health Overview</H4>
              <Button variant="ghost" className="text-teal font-medium hover:text-teal-dark dark:hover:text-teal-300" size="sm">View History</Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <HealthMetric icon={<Heart className="h-5 w-5 text-red-500" />} title="Heart Rate" value="72" unit="bpm" />
              <HealthMetric icon={<Activity className="h-5 w-5 text-warning" />} title="Blood Pressure" value="120/80" unit="mmHg" />
              <HealthMetric icon={<Droplet className="h-5 w-5 text-blue-500" />} title="Blood Sugar" value="95" unit="mg/dL" />
              <HealthMetric icon={<Thermometer className="h-5 w-5 text-orange-500" />} title="Temperature" value="98.6" unit="°F" />
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-5">
              <H4>Quick Pathways</H4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <QuickActionCard 
                title="AI Medicine" 
                desc="Analyze prescriptions and dosage" 
                icon={<Pill className="text-teal w-6 h-6" />}
                href="/patient/medicine"
                color="bg-teal-tint dark:bg-teal-900/30 text-teal dark:text-teal-400"
              />
              <QuickActionCard 
                title="Consultation" 
                desc="Book live video call with doctors" 
                icon={<Video className="text-navy w-6 h-6 dark:text-blue-400" />}
                href="/patient/consultation"
                color="bg-blue-50 dark:bg-blue-900/30 text-navy dark:text-blue-400"
              />
              <QuickActionCard 
                title="Community" 
                desc="Join patients in support groups" 
                icon={<Users className="text-seafoam w-6 h-6" />}
                href="/patient/community"
                color="bg-emerald-50 dark:bg-emerald-900/30 text-seafoam dark:text-emerald-400"
              />
            </div>
          </section>

        </div>

        {/* Right Column (Reminders & Agenda) */}
        <div className="space-y-8">
          
          <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-2xl overflow-hidden bg-white dark:bg-slate-900">
            <CardHeader className="bg-slate-50 dark:bg-slate-900/50 border-b dark:border-slate-800 pb-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Today's Reminders</CardTitle>
                <Badge variant="secondary" className="bg-warning-light text-warning hover:bg-warning-light/80 border-none font-bold">3 Pending</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                <ReminderItem time="08:00 AM" title="Take Amoxicillin" type="Medicine" />
                <ReminderItem time="12:30 PM" title="Post-meal Blood Sugar test" type="Measurement" />
                <ReminderItem time="02:00 PM" title="Dr. Smith Consultation" type="Appointment" />
              </div>
            </CardContent>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-3 border-t border-slate-100 dark:border-slate-800 text-center">
              <Button variant="ghost" className="w-full text-sm font-semibold text-teal hover:text-teal-dark dark:hover:text-teal-300">View all agenda</Button>
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
}

function HealthMetric({ icon, title, value, unit }: any) {
  return (
    <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform cursor-pointer hover:border-teal/30 dark:hover:border-teal/30">
      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-text-secondary dark:text-slate-400 whitespace-nowrap">{title}</p>
        <p className="text-2xl font-extrabold text-foreground tracking-tight mt-1">
          {value} <span className="text-sm font-medium text-text-secondary dark:text-slate-500">{unit}</span>
        </p>
      </div>
    </div>
  );
}

function QuickActionCard({ title, desc, icon, href, color }: any) {
  return (
    <Link href={href} className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[1.5rem] p-6 shadow-sm hover:shadow-card transition-all h-full">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${color}`}>
        {icon}
      </div>
      <h3 className="font-bold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-text-secondary dark:text-slate-400 mt-1 mb-6 flex-1">{desc}</p>
      <div className="flex items-center text-sm font-bold text-teal dark:text-teal-400 group-hover:text-teal-dark dark:group-hover:text-teal-300">
        Launch <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

function ReminderItem({ time, title, type }: any) {
  return (
    <div className="flex items-start gap-4 p-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
      <div className="w-2 h-2 rounded-full bg-warning mt-1.5 shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm text-foreground truncate">{title}</p>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-xs font-semibold text-text-secondary dark:text-slate-400">{time}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
          <span className="text-xs font-semibold text-text-secondary dark:text-slate-400">{type}</span>
        </div>
      </div>
      <Button variant="outline" size="sm" className="h-8 rounded-lg border-slate-200 dark:border-slate-700 font-semibold text-xs">Done</Button>
    </div>
  );
}
