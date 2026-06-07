"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { H2, H4 } from "@/components/shared/typography";
import { UploadCloud, Pill, Sparkles, Image as ImageIcon, Send, Clock, Search, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function MedicineAssistant() {
  const [query, setQuery] = useState("");
  const [analyzing, setAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => setAnalyzing(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <H2 className="flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-teal" /> AI Medicine Assistant
          </H2>
          <p className="text-text-secondary dark:text-slate-400 mt-2">
            Upload a prescription or type a medicine name to get instant AI-powered insights.
          </p>
        </div>
        <Badge variant="outline" className="border-teal text-teal flex items-center gap-1 py-1.5 px-3 rounded-full bg-teal-tint/50 dark:bg-teal-900/30">
          <ShieldCheck className="h-4 w-4" /> Medically aligned AI
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Upload Column */}
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[1.5rem] bg-white dark:bg-slate-900 border-dashed border-2 hover:border-teal/50 transition-colors cursor-pointer group">
          <CardContent className="p-8 sm:p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
            <div className="w-20 h-20 bg-teal-tint dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <UploadCloud className="h-10 w-10 text-teal" />
            </div>
            <H4 className="mb-2">Upload Prescription</H4>
            <p className="text-sm text-text-secondary dark:text-slate-400 mb-8 max-w-xs">
              Take a clear photo of your pill bottle or prescription pad. Our AI will extract the details.
            </p>
            <Button className="bg-navy hover:bg-navy-light dark:bg-blue-600 dark:hover:bg-blue-700 h-12 px-8 rounded-xl font-bold shadow-sm pointer-events-none">
              <ImageIcon className="h-4 w-4 mr-2" /> Browse Files
            </Button>
            <span className="text-xs text-text-secondary dark:text-slate-500 mt-4 font-medium">Formats: JPG, PNG, PDF (Max 5MB)</span>
          </CardContent>
        </Card>

        {/* Manual Search Column */}
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[1.5rem] bg-white dark:bg-slate-900 overflow-hidden flex flex-col">
          <div className="p-8 border-b border-slate-100 dark:border-slate-800">
            <H4 className="mb-4">Or type a medicine name</H4>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input 
                placeholder="e.g., Amoxicillin 500mg" 
                className="pl-12 h-14 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus-visible:ring-teal text-base"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button 
                onClick={handleAnalyze}
                disabled={!query || analyzing} 
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-lg bg-teal hover:bg-teal-light p-0 transition-transform active:scale-95"
              >
                <Send className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>
          
          <div className="flex-1 p-8 bg-slate-50 dark:bg-slate-950/50">
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Recent Inquiries</h5>
            <div className="space-y-3">
              <RecentQuery name="Metformin 500mg" time="2 days ago" />
              <RecentQuery name="Lisinopril 10mg" time="1 week ago" />
              <RecentQuery name="Atorvastatin 20mg" time="2 weeks ago" />
            </div>
          </div>
        </Card>
      </div>
      
      {/* Disclaimer */}
      <div className="bg-warning-light/50 dark:bg-warning-light/10 text-warning-dark dark:text-warning border border-warning-light dark:border-warning/20 p-5 rounded-[1.5rem] text-sm flex items-start gap-3">
        <ShieldCheck className="h-5 w-5 shrink-0" />
        <p className="leading-relaxed"><strong>AI Disclaimer:</strong> The information provided by the AI assistant is for educational purposes only and should not replace professional medical advice. Always consult your doctor before making changes to your medication.</p>
      </div>
    </div>
  );
}

function RecentQuery({ name, time }: { name: string, time: string }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-teal/50 dark:hover:border-teal/50 transition-colors cursor-pointer group shadow-sm hover:shadow">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg group-hover:bg-teal-tint dark:group-hover:bg-teal-900/30 transition-colors">
          <Pill className="h-4 w-4 text-slate-400 group-hover:text-teal transition-colors" />
        </div>
        <span className="font-bold text-foreground text-sm">{name}</span>
      </div>
      <div className="flex items-center gap-1.5 text-xs font-medium text-text-secondary dark:text-slate-500">
        <Clock className="h-3 w-3" /> {time}
      </div>
    </div>
  );
}
