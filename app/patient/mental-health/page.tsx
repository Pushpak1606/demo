"use client"
import { H2, H4 } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, HeartPulse, Activity, ChevronRight, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function MentalHealthPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <H2 className="flex items-center gap-3">
            <Brain className="h-8 w-8 text-teal" /> Mental Wealth
          </H2>
          <p className="text-text-secondary dark:text-slate-400 mt-2 text-lg font-medium">
            Track your emotional wellbeing with clinical AI assessments.
          </p>
        </div>
        <Button className="bg-teal hover:bg-teal-light text-white font-bold h-12 px-6 rounded-xl shadow-sm">
          Start New Assessment
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Assessment Card */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-slate-200 dark:border-slate-800 shadow-[0_10px_40px_-10px_rgba(99,102,241,0.2)] rounded-[2rem] bg-indigo-50 dark:bg-indigo-950/30 border-none relative overflow-hidden transition-all hover:shadow-[0_10px_40px_-5px_rgba(99,102,241,0.3)]">
            <div className="absolute top-0 right-0 w-64 h-full bg-[linear-gradient(to_left,rgba(99,102,241,0.15),transparent)]" />
            <CardContent className="p-8 md:p-12 relative z-10">
              <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-900 mb-6 font-extrabold py-1.5 px-4 border-none text-sm rounded-full">PHQ-9 Available</Badge>
              <H2 className="text-indigo-950 dark:text-indigo-100 mb-4 bg-clip-text">Bi-Weekly Check-in</H2>
              <p className="text-indigo-800/80 dark:text-indigo-200/90 text-lg mb-10 max-w-md leading-relaxed font-medium">
                Take 3 minutes to complete your scheduled depression and anxiety screening. Your insights help adjust your care pathway.
              </p>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold h-14 px-8 rounded-[1.5rem] shadow-card transition-transform active:scale-95 text-lg">
                Begin Assessment <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[1.5rem] bg-white dark:bg-slate-900 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
              <H4>Recent Screenings</H4>
            </div>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                <ScreeningResult date="Oct 12, 2026" test="GAD-7 Anxiety Tool" score="Minimal (3/21)" />
                <ScreeningResult date="Sep 28, 2026" test="PHQ-9 Depression Tool" score="Mild (6/27)" />
                <ScreeningResult date="Sep 14, 2026" test="GAD-7 Anxiety Tool" score="Minimal (4/21)" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Status */}
        <div className="space-y-8">
          <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[1.5rem] bg-white dark:bg-slate-900">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full border-[10px] border-teal-tint dark:border-teal-900/30 flex items-center justify-center mb-6 shadow-inner">
                  <span className="text-3xl font-black text-teal">Great</span>
                </div>
                <h3 className="text-2xl font-extrabold text-navy dark:text-slate-100 mb-3 tracking-tight">Overall Mood Trend</h3>
                <p className="text-text-secondary dark:text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                  Based on your chat interactions and daily journals, your emotional baseline has been improving over the last 14 days.
                </p>
                <div className="w-full bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-5 flex items-center justify-between border border-slate-100 dark:border-slate-700 shadow-sm">
                  <span className="font-extrabold text-sm text-foreground">Next Assessment</span>
                  <span className="font-extrabold text-sm text-teal">Tomorrow</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}

function ScreeningResult({ date, test, score }: any) {
  return (
    <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors group cursor-pointer">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Activity className="h-5 w-5 text-indigo-500" />
          <span className="font-extrabold text-navy dark:text-slate-100 text-lg">{test}</span>
        </div>
        <p className="font-medium text-text-secondary dark:text-slate-400 text-sm flex items-center gap-2">
          {date} <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" /> Clinical Assessment
        </p>
      </div>
      <div className="mt-5 sm:mt-0 pt-5 sm:pt-0 border-t sm:border-0 border-slate-100 dark:border-slate-800">
        <Badge variant="outline" className="bg-success-light/50 dark:bg-success-light/10 border-success/30 text-success font-extrabold px-4 py-2 text-sm rounded-xl">
          <CheckCircle2 className="w-4 h-4 mr-2" />
          {score}
        </Badge>
      </div>
    </div>
  );
}
