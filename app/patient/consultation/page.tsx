"use client"
import { H2, H4 } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Video, Mic, MicOff, VideoOff, PhoneOff, MonitorUp, Send, User, ChevronRight, MessageSquare, Maximize2 } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function PatientConsultation() {
  const [micMuted, setMicMuted] = useState(false);
  const [videoDisabled, setVideoDisabled] = useState(false);

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500 pb-10 h-[calc(100vh-8rem)] flex flex-col">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div>
          <H2 className="flex items-center gap-3 text-navy dark:text-blue-400 tracking-tight">
            <Video className="h-8 w-8" /> Live Consultation
          </H2>
        </div>
        <div className="flex items-center gap-3">
          <Badge className="bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-black uppercase tracking-widest px-4 py-1.5 shadow-sm rounded-lg hidden sm:flex">Secure Connection</Badge>
          <Badge className="bg-red-50 text-error dark:bg-red-900/20 border border-red-200 dark:border-red-800 font-black uppercase tracking-widest px-4 py-1.5 animate-pulse shadow-sm rounded-lg">● Live 04:23</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1 min-h-0">
        
        {/* Main Video Area */}
        <Card className="lg:col-span-3 border-slate-200 dark:border-slate-800 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-none rounded-[2rem] bg-slate-900 dark:bg-black overflow-hidden flex flex-col relative h-[60vh] lg:h-full">
          
          {/* Main Feed (Doctor) */}
          <div className="flex-1 relative flex items-center justify-center bg-slate-900 overflow-hidden group">
            {/* Example Doctor Video Placeholder */}
            <div className="absolute inset-0 bg-cover bg-center opacity-40 blur-sm pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80')" }} />
            <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
              <div className="h-32 w-32 rounded-[2rem] bg-navy/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] mb-6 ring-2 ring-white/10 ring-offset-4 ring-offset-transparent">
                <User className="h-16 w-16 text-white/50" />
              </div>
              <h3 className="text-3xl font-black text-white tracking-tight drop-shadow-lg mb-2">Dr. Sarah Jenkins</h3>
              <p className="text-emerald-400 font-black uppercase tracking-widest text-xs drop-shadow-md bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">Endocrinologist</p>
            </div>
            
            <Button variant="ghost" size="icon" className="absolute top-6 right-6 text-white/60 hover:text-white bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity h-12 w-12 border border-white/10">
              <Maximize2 className="h-5 w-5" />
            </Button>
          </div>

          {/* Picture-in-Picture (Patient) */}
          <div className="absolute top-6 left-6 w-32 h-44 sm:w-48 sm:h-64 bg-slate-800 rounded-2xl border-2 border-slate-700 shadow-2xl overflow-hidden z-20 group">
            {videoDisabled ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950">
                <div className="h-16 w-16 bg-slate-800 rounded-full flex items-center justify-center mb-3 shadow-inner">
                  <User className="h-8 w-8 text-slate-500" />
                </div>
                <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest">Camera Off</span>
              </div>
            ) : (
              <>
                 <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80')" }} />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </>
            )}
            {micMuted && (
              <div className="absolute bottom-3 right-3 bg-error/90 backdrop-blur-sm p-2 rounded-lg shadow-[0_5px_15px_-3px_rgba(231,76,60,0.5)] animate-pulse">
                <MicOff className="h-4 w-4 text-white" />
              </div>
            )}
            <Badge className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white border-none font-bold text-[10px] uppercase tracking-widest">You</Badge>
          </div>

          {/* Controls Bar */}
          <div className="p-6 bg-slate-950/90 backdrop-blur-xl border-t border-white/10 flex items-center justify-center gap-4 sm:gap-6 shrink-0 transition-transform relative z-30">
            <Button 
              size="icon" 
              variant="outline"
              onClick={() => setMicMuted(!micMuted)} 
              className={`h-16 w-16 rounded-[1.25rem] border-transparent transition-all shadow-sm ${micMuted ? 'bg-error hover:bg-red-600 text-white shadow-[0_5px_15px_-3px_rgba(231,76,60,0.4)]' : 'bg-slate-800 hover:bg-slate-700 text-white hover:scale-105'}`}
            >
              {micMuted ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
            </Button>
            <Button 
              size="icon" 
              variant="outline"
              onClick={() => setVideoDisabled(!videoDisabled)} 
              className={`h-16 w-16 rounded-[1.25rem] border-transparent transition-all shadow-sm ${videoDisabled ? 'bg-error hover:bg-red-600 text-white shadow-[0_5px_15px_-3px_rgba(231,76,60,0.4)]' : 'bg-slate-800 hover:bg-slate-700 text-white hover:scale-105'}`}
            >
              {videoDisabled ? <VideoOff className="h-6 w-6" /> : <Video className="h-6 w-6" />}
            </Button>
            <Button 
              size="icon" 
              variant="outline"
              className="h-16 w-16 rounded-[1.25rem] border-transparent bg-slate-800 hover:bg-slate-700 text-white shadow-sm hidden sm:flex hover:scale-105 transition-transform"
            >
              <MonitorUp className="h-6 w-6" />
            </Button>
            <div className="w-px h-10 bg-white/10 mx-2 hidden sm:block" />
            <Button className="bg-error hover:bg-red-600 text-white font-black h-16 px-10 rounded-[1.25rem] shadow-[0_5px_20px_-5px_rgba(231,76,60,0.5)] transition-transform active:scale-95 text-lg ml-auto sm:ml-0">
              <PhoneOff className="mr-3 h-6 w-6" /> End Call
            </Button>
          </div>
        </Card>

        {/* Side Panel (Chat & Notes) */}
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] bg-white dark:bg-slate-900 overflow-hidden flex flex-col h-[50vh] lg:h-full">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 shrink-0 flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-navy dark:text-blue-400" />
            <H4 className="text-xl tracking-tight">Consultation Chat</H4>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="text-center">
              <Badge variant="outline" className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest text-[10px] px-4 py-1.5 rounded-lg shadow-sm">Connection Established</Badge>
            </div>
            
            <ChatBubble 
              isDoctor={true} 
              time="04:12 PM" 
              text="Hello Alex, I can see your recent glucose logs. Let's discuss the morning spikes." 
            />
            <ChatBubble 
              isDoctor={false} 
              time="04:13 PM" 
              text="Hi Dr. Jenkins. Yes, they have been higher lately even though I didn't change my diet." 
            />
            <ChatBubble 
              isDoctor={true} 
              time="04:15 PM" 
              text="I'm sending over a document explaining the Dawn Phenomenon. Please review it after our call." 
            />
            
            {/* File Attachment Mock */}
            <div className="ml-2 mr-10 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 p-5 rounded-b-[1.5rem] rounded-tr-[1.5rem] cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors group shadow-sm hover:shadow">
               <div className="flex items-center gap-4">
                 <div className="bg-navy dark:bg-blue-500 text-white p-3 rounded-xl shadow-inner group-hover:scale-110 transition-transform">
                   <MonitorUp className="h-5 w-5" />
                 </div>
                 <div>
                    <p className="text-base font-black text-navy dark:text-blue-300 tracking-tight group-hover:underline decoration-2 underline-offset-2">Dawn_Phenomenon_Guide.pdf</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Shared by Dr. Jenkins</p>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 shrink-0">
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <Input 
                placeholder="Type your message..." 
                className="pr-14 h-14 rounded-[1.25rem] border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 focus-visible:ring-navy shadow-sm text-sm font-medium"
              />
              <Button type="submit" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 bg-navy hover:bg-navy-light dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-[0.85rem] shadow-sm transition-transform active:scale-95 disabled:opacity-50">
                <Send className="h-4 w-4 ml-0.5" />
              </Button>
            </form>
          </div>
        </Card>

      </div>
    </div>
  );
}

function ChatBubble({ isDoctor, time, text }: any) {
  return (
    <div className={`flex flex-col ${isDoctor ? 'items-start mr-8' : 'items-end ml-8'}`}>
      <div className="flex items-center gap-2 mb-2 px-2">
        <span className={`text-[10px] font-black uppercase tracking-widest ${isDoctor ? 'text-navy dark:text-blue-400' : 'text-slate-500'}`}>{isDoctor ? 'Dr. Jenkins' : 'You'}</span>
        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-600">• {time}</span>
      </div>
      <div className={`p-5 shadow-sm text-[15px] font-medium leading-relaxed max-w-[95%] ${isDoctor ? 'bg-slate-100 dark:bg-slate-800 text-foreground rounded-r-[1.5rem] rounded-bl-[1.5rem] border border-slate-200 dark:border-slate-700' : 'bg-navy dark:bg-blue-600 text-white rounded-l-[1.5rem] rounded-br-[1.5rem] shadow-blue-900/20 shadow-md'}`}>
        {text}
      </div>
    </div>
  );
}
