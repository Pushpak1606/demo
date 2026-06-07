"use client"
import { H2, H4 } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowLeft, Edit, Activity, Pill, History, FileText, Download, TrendingUp, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";

export default function PatientDetail() {
  const params = useParams();
  const patientId = params.id;

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-10">
      
      {/* Header Profile Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <Link href="/doctor/patients" className="inline-flex items-center text-sm font-black text-slate-400 hover:text-navy dark:hover:text-blue-400 transition-colors mb-5 group uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
          </Link>
          <div className="flex items-center gap-4 mb-3">
             <H2 className="tracking-tight mb-0 text-4xl">Sarah Jenkins</H2>
             <Badge className="bg-warning text-white border-none px-3 py-1 font-black uppercase tracking-widest text-[10px] shadow-[0_5px_15px_-3px_rgba(243,156,18,0.4)] animate-pulse rounded-lg flex items-center gap-1.5"><AlertTriangle className="w-3 h-3" /> Needs Review</Badge>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-extrabold text-slate-500 uppercase tracking-widest">
            <span>ID: <span className="text-foreground">{patientId?.toString().toUpperCase() || 'PT-8892'}</span></span>
            <span>DOB: 12/04/1985 (41y)</span>
            <span>Female</span>
            <span className="text-navy dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 rounded-md">Type 1 Diabetes</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <Button variant="outline" className="font-extrabold border-slate-200 dark:border-slate-700 h-14 px-6 rounded-2xl shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 flex-1 lg:flex-none">
            <Download className="mr-2 h-5 w-5" /> Export Record
          </Button>
          <Button className="bg-navy hover:bg-navy-light dark:bg-blue-600 text-white font-extrabold h-14 px-8 rounded-2xl shadow-sm flex-1 lg:flex-none transition-transform active:scale-95 text-base">
            <Edit className="mr-2 h-5 w-5" /> Update Plan
          </Button>
        </div>
      </div>

      {/* AI Summary Banner */}
      <div className="bg-[linear-gradient(to_right,rgba(10,35,66,0.05),transparent)] dark:bg-[linear-gradient(to_right,rgba(59,130,246,0.1),transparent)] border border-navy/10 dark:border-blue-500/20 rounded-[2rem] p-8 sm:p-10 flex flex-col md:flex-row gap-8 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
         <div className="absolute left-0 top-0 w-1.5 h-full bg-navy dark:bg-blue-500 rounded-l-[2rem]" />
         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm shrink-0 border border-slate-100 dark:border-slate-800 flex items-center justify-center -rotate-3 group-hover:rotate-0 transition-transform duration-300">
            <Activity className="h-10 w-10 text-navy dark:text-blue-400" />
         </div>
         <div>
            <h4 className="font-black text-2xl text-navy dark:text-blue-100 mb-3 flex items-center gap-3 tracking-tight">
               AI Patient Summary <Badge variant="outline" className="text-[10px] border-navy/20 text-navy font-bold uppercase tracking-widest bg-navy/5 dark:border-blue-400/30 dark:text-blue-300 px-3 py-1 ml-2 rounded-lg">Generated Today</Badge>
            </h4>
            <p className="text-text-secondary dark:text-slate-300 font-medium leading-relaxed max-w-4xl text-lg">
               Patient has been experiencing consistent morning elevated glucose levels <span className="font-bold text-foreground bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">(Dawn Phenomenon)</span> over the last 14 logs. Activity levels are down 20% compared to last month. Med adherence remains at 95%. <strong className="text-navy dark:text-blue-300">AI suggests evaluating overnight basal insulin rates and requesting an updated HbA1c panel.</strong>
            </p>
         </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-8 w-full max-w-2xl flex bg-slate-100 dark:bg-slate-900 p-1.5 h-16 rounded-[1.5rem] border border-slate-200 dark:border-slate-800 shadow-inner">
          <TabsTrigger value="overview" className="flex-1 rounded-[1rem] h-full font-extrabold data-[state=active]:shadow-sm text-sm sm:text-base data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800">Overview</TabsTrigger>
          <TabsTrigger value="history" className="flex-1 rounded-[1rem] h-full font-extrabold data-[state=active]:shadow-sm text-sm sm:text-base data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800">History & Vitals</TabsTrigger>
          <TabsTrigger value="medications" className="flex-1 rounded-[1rem] h-full font-extrabold data-[state=active]:shadow-sm text-sm sm:text-base data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800">Medications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6 focus-visible:outline-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] bg-white dark:bg-slate-900 overflow-hidden">
               <div className="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                 <H4>Recent Metrics</H4>
               </div>
               <CardContent className="p-8 pt-6 space-y-6">
                 <MetricRow title="Average Fasting Glucose" value="138 mg/dL" trend="up" alert={true} trendDetail="+12% vs last month" />
                 <MetricRow title="Blood Pressure" value="118/75" trend="stable" alert={false} trendDetail="No change" />
                 <MetricRow title="Weight" value="165 lbs" trend="down" alert={false} trendDetail="-3 lbs vs last month" />
               </CardContent>
             </Card>

             <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] bg-white dark:bg-slate-900 overflow-hidden">
               <div className="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                 <H4>Upcoming Reminders</H4>
               </div>
               <CardContent className="p-0 divide-y divide-slate-100 dark:divide-slate-800">
                 <div className="p-8 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-start gap-4">
                       <div className="mt-1 bg-red-50 dark:bg-red-900/20 p-2 rounded-xl"><AlertTriangle className="h-5 w-5 text-error" /></div>
                       <div>
                          <p className="font-black text-foreground text-lg mb-1 tracking-tight">HbA1c Lab Test</p>
                          <p className="text-sm font-bold text-error uppercase tracking-widest">Overdue by 2 weeks</p>
                       </div>
                    </div>
                    <Button className="bg-error hover:bg-red-600 text-white font-bold rounded-xl shadow-[0_5px_15px_-3px_rgba(231,76,60,0.4)] px-5">Order Lab</Button>
                 </div>
                 <div className="p-8 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-start gap-4">
                       <div className="mt-1 bg-slate-100 dark:bg-slate-800 p-2 rounded-xl"><CalendarIcon className="h-5 w-5 text-slate-500" /></div>
                       <div>
                          <p className="font-extrabold text-foreground text-lg mb-1 tracking-tight">Dietitian Follow-up</p>
                          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Scheduled for Nov 20</p>
                       </div>
                    </div>
                 </div>
               </CardContent>
             </Card>
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-6 focus-visible:outline-none">
           <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] bg-white dark:bg-slate-900 border-dashed border-2 hover:border-navy/30 transition-colors">
             <CardContent className="p-20 flex flex-col items-center justify-center text-center">
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-3xl mb-8 shadow-inner">
                  <History className="h-16 w-16 text-slate-400 dark:text-slate-500" />
                </div>
                <h3 className="text-2xl font-black text-navy dark:text-slate-300 tracking-tight mb-3">Historical Data Visualization</h3>
                <p className="text-slate-500 max-w-md font-medium text-lg leading-relaxed">Charts and graphs showing long-term trends and correlations will be rendered here dynamically.</p>
             </CardContent>
           </Card>
        </TabsContent>

        <TabsContent value="medications" className="space-y-6 focus-visible:outline-none">
           <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] bg-white dark:bg-slate-900 overflow-hidden">
             <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
               <H4>Active Prescriptions</H4>
               <Button variant="outline" className="text-navy dark:text-blue-400 font-extrabold border-slate-200 dark:border-slate-700 rounded-xl px-6 h-10 bg-white dark:bg-slate-950">Add New Rx</Button>
             </div>
             <CardContent className="p-0 divide-y divide-slate-100 dark:divide-slate-800">
               <div className="p-8 flex flex-col sm:flex-row sm:items-center gap-6 group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                 <div className="bg-blue-50 dark:bg-blue-900/40 p-5 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-800 group-hover:scale-105 transition-transform">
                    <Pill className="h-8 w-8 text-navy dark:text-blue-400" />
                 </div>
                 <div className="flex-1">
                    <h5 className="font-black tracking-tight text-2xl text-foreground mb-1.5 group-hover:text-navy transition-colors">Lantus (Insulin Glargine)</h5>
                    <p className="text-sm font-extrabold text-slate-500 uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-3 py-1 inline-block rounded-lg mt-1">20 Units • Subcutaneous • Nightly</p>
                 </div>
                 <Badge variant="outline" className="border-success text-success bg-success-light/30 font-black px-4 py-1.5 rounded-lg uppercase tracking-widest text-[10px] self-start sm:self-center">Active</Badge>
               </div>
               
               <div className="p-8 flex flex-col sm:flex-row sm:items-center gap-6 group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                 <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-105 transition-transform">
                    <Pill className="h-8 w-8 text-slate-500" />
                 </div>
                 <div className="flex-1">
                    <h5 className="font-black tracking-tight text-2xl text-foreground mb-1.5">Metformin ER</h5>
                    <p className="text-sm font-extrabold text-slate-500 uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-3 py-1 inline-block rounded-lg mt-1">1000mg • Oral • With Dinner</p>
                 </div>
                 <Badge variant="outline" className="border-success text-success bg-success-light/30 font-black px-4 py-1.5 rounded-lg uppercase tracking-widest text-[10px] self-start sm:self-center">Active</Badge>
               </div>
             </CardContent>
           </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function MetricRow({ title, value, trend, alert, trendDetail }: any) {
  return (
    <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0 pt-2 first:pt-0">
       <div>
          <p className="font-extrabold text-slate-500 mb-1.5 uppercase tracking-widest text-xs">{title}</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
             <span className={`text-4xl font-black tracking-tight ${alert ? 'text-error' : 'text-foreground'}`}>{value}</span>
             <span className="text-sm font-bold text-slate-400">{trendDetail}</span>
          </div>
       </div>
       <div className={`p-4 rounded-[1.25rem] shadow-sm ${trend === 'up' && alert ? 'bg-error text-white' : trend === 'up' ? 'bg-red-50 text-red-500 dark:bg-red-900/20' : trend === 'down' ? 'bg-emerald-50 text-emerald-500 dark:bg-emerald-900/20' : 'bg-slate-100 text-slate-500 dark:bg-slate-800'}`}>
         {trend === 'up' || trend === 'down' ? <TrendingUp className={`h-8 w-8 ${trend === 'down' ? 'rotate-180' : ''}`} /> : <Activity className="h-8 w-8" />}
       </div>
    </div>
  );
}

// Minimal mock Calendar component import placeholder
function CalendarIconComponent({className}: {className?: string}) {
  return <CalendarIcon className={className} />
}
