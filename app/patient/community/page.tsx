"use client"
import { H2, H4 } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Users, Search, HeartPulse, Brain, Droplet, Users2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function CommunityHome() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <H2 className="flex items-center gap-3">
            <Users className="h-8 w-8 text-seafoam" /> Community Support
          </H2>
          <p className="text-text-secondary dark:text-slate-400 mt-2 text-lg font-medium">
            Connect with others, share experiences, and find empathy in specialized groups.
          </p>
        </div>
      </div>

      <div className="relative mb-10 group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-seafoam transition-colors" />
        <Input 
          placeholder="Search for conditions, topics, or groups..." 
          className="pl-12 h-14 rounded-2xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus-visible:ring-seafoam shadow-sm text-base font-medium"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Recommended Groups */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-1">
            <H4>Groups based on your Health Profile</H4>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <GroupCard 
              id="diabetes-management"
              name="Diabetes Management"
              members="12.5k"
              icon={<Droplet className="h-6 w-6 text-white" />}
              color="bg-blue-500"
              desc="Daily tips, diet plans, and support for Type 1 & Type 2."
              joined={true}
            />
            <GroupCard 
              id="anxiety-support"
              name="Anxiety & Stress Relief"
              members="24.1k"
              icon={<Brain className="h-6 w-6 text-white" />}
              color="bg-indigo-500"
              desc="A safe space to discuss anxiety, panic attacks, and therapy."
              joined={false}
            />
            <GroupCard 
              id="cardio-health"
              name="Cardiovascular Health"
              members="8.2k"
              icon={<HeartPulse className="h-6 w-6 text-white" />}
              color="bg-red-500"
              desc="Recovery stories, exercises, and heart-healthy recipes."
              joined={false}
            />
            <GroupCard 
              id="general-wellness"
              name="General Wellness"
              members="45.9k"
              icon={<Users2 className="h-6 w-6 text-white" />}
              color="bg-teal"
              desc="Broad health discussions, fitness challenges, and open Q&A."
              joined={true}
            />
          </div>
        </div>

        {/* Right: Trending Topics / Your Activity */}
        <div className="space-y-6">
          <Card className="border-slate-200 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none rounded-[2rem] bg-white dark:bg-slate-900 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
              <H4>Trending Topics</H4>
            </div>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                <TrendingItem rank={1} topic="#CGMSensors" posts="1,240" />
                <TrendingItem rank={2} topic="#MindfulMondays" posts="984" />
                <TrendingItem rank={3} topic="#KetoForPCOS" posts="845" />
                <TrendingItem rank={4} topic="#SleepHygiene" posts="620" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function GroupCard({ id, name, members, icon, color, desc, joined }: any) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-7 shadow-sm hover:shadow-card-lg transition-all flex flex-col h-full group">
      <div className="flex items-start justify-between mb-5">
        <div className={`w-14 h-14 rounded-[1.25rem] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform ${color}`}>
          {icon}
        </div>
        {joined ? (
          <Badge className="bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 font-extrabold border-none px-3 py-1 rounded-lg">Joined</Badge>
        ) : (
          <Badge className="bg-seafoam/10 text-seafoam hover:bg-seafoam/20 outline outline-1 outline-seafoam/30 font-extrabold border-none px-3 py-1 rounded-lg cursor-pointer">Join</Badge>
        )}
      </div>
      <h3 className="text-xl font-extrabold text-foreground mb-3 leading-tight tracking-tight">{name}</h3>
      <p className="text-sm font-medium text-text-secondary dark:text-slate-400 mb-6 flex-1 leading-relaxed">{desc}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{members} members</span>
        <Link href={`/patient/community/${id}`}>
          <Button variant="ghost" size="sm" className="text-seafoam font-bold hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-xl px-4 h-9">
            Enter <ArrowRight className="ml-1.5 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

function TrendingItem({ rank, topic, posts }: any) {
  return (
    <div className="p-6 flex items-center gap-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
      <span className="text-xl font-black text-slate-200 dark:text-slate-800 w-6 text-center">{rank}</span>
      <div>
        <p className="font-extrabold text-navy dark:text-slate-200 group-hover:text-seafoam transition-colors tracking-tight">{topic}</p>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{posts} Posts</p>
      </div>
    </div>
  );
}
