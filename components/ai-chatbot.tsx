"use client"
import { useState } from "react";
import { X, Send, Brain, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatReady, setChatReady] = useState(false);

  return (
    <>
      {!isOpen && (
        <Button 
          onClick={() => { setIsOpen(true); setTimeout(() => setChatReady(true), 300); }}
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-teal hover:bg-teal-light text-white shadow-[0_10px_25px_-5px_rgba(2,128,144,0.4)] transition-transform hover:scale-105 z-50 p-0 hover:animate-none group"
        >
          <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping opacity-75 group-hover:opacity-0 transition-opacity" />
          <Brain className="h-7 w-7 relative z-10" />
        </Button>
      )}

      <div 
        className={cn(
          "fixed bottom-6 right-6 w-[90vw] max-w-[380px] h-[600px] max-h-[85vh] bg-white dark:bg-slate-900 rounded-[2rem] shadow-card-lg border border-slate-200 dark:border-slate-800 flex flex-col z-50 transition-all duration-300 transform origin-bottom-right",
          isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95 pointer-events-none"
        )}
      >
        <div className="bg-teal text-white p-6 rounded-t-[2rem] flex justify-between items-center relative overflow-hidden shrink-0 shadow-sm border-b dark:border-teal-900/50">
          <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
          <div className="flex items-center gap-4 relative z-10">
            <div className="bg-white/20 p-2.5 rounded-2xl backdrop-blur-md shadow-sm">
              <Brain className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-lg tracking-tight leading-tight">Medscope AI</h4>
              <p className="text-teal-tint text-xs font-semibold tracking-wider uppercase mt-0.5">Always here to listen</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 rounded-xl relative z-10 h-10 w-10 transition-transform active:scale-95">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 dark:bg-slate-950/50">
          {chatReady && (
            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="flex items-start gap-4 mx-auto w-full max-w-[90%]">
                <div className="bg-teal text-white p-2.5 rounded-full shrink-0 shadow-sm mt-1">
                  <Brain className="h-4 w-4" />
                </div>
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl rounded-tl-md shadow-sm text-sm text-foreground font-medium leading-relaxed">
                  Hi Alex, I'm your AI health companion. I noticed you logged a bad mood in your journal earlier today. Would you like to talk about what's bothering you?
                </div>
              </div>
              
              <div className="text-center mt-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800/80 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">AI-Generated Health Insight</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 sm:p-5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 rounded-b-[2rem] shrink-0">
           <div className="hidden bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-xl text-xs font-bold flex items-center gap-2 mb-4 border border-red-100 dark:border-red-900/50">
            <AlertTriangle className="h-4 w-4 shrink-0" />
            Crisis detected. Proceeding to emergency protocol.
          </div>
          <form className="relative flex items-center group" onSubmit={(e) => { e.preventDefault(); setMessage(""); }}>
            <Input 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message your AI assistant..." 
              className="pr-14 h-14 rounded-[1.25rem] border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus-visible:ring-teal text-sm pl-5 shadow-inner w-full font-medium"
            />
            <Button type="submit" size="icon" disabled={!message} className="absolute right-2 h-10 w-10 bg-teal hover:bg-teal-light text-white rounded-[0.85rem] shadow-sm transition-transform active:scale-90 disabled:opacity-50 disabled:bg-slate-300 dark:disabled:bg-slate-700">
              <Send className="h-4 w-4 ml-0.5" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
