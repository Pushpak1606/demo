"use client"
import { H2, H4 } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, MoreHorizontal, ShieldCheck, PenSquare, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";

export default function GroupFeed() {
  const params = useParams();
  const groupName = (params.group as string).split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-10">
      <div className="flex items-center gap-4 mb-2">
        <Link href="/patient/community" className="text-slate-400 hover:text-seafoam transition-colors p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <H2 className="tracking-tight">{groupName}</H2>
        <Badge className="bg-seafoam/10 text-seafoam border-none font-bold px-3 py-1 rounded-lg ml-2 hidden sm:inline-flex">Verified Group</Badge>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
        <Tabs defaultValue="latest" className="w-full sm:w-auto">
          <TabsList className="bg-slate-100 dark:bg-slate-800/80 p-1.5 h-14 rounded-2xl">
            <TabsTrigger value="latest" className="rounded-xl h-full px-6 font-bold data-[state=active]:shadow-sm">Latest</TabsTrigger>
            <TabsTrigger value="popular" className="rounded-xl h-full px-6 font-bold data-[state=active]:shadow-sm">Popular</TabsTrigger>
            <TabsTrigger value="doctors" className="rounded-xl h-full px-6 font-extrabold data-[state=active]:shadow-sm text-navy dark:text-blue-400">Doctor Insights</TabsTrigger>
          </TabsList>
        </Tabs>

        <Button className="bg-seafoam hover:bg-emerald-500 text-white font-bold h-14 px-8 rounded-2xl shadow-sm transition-transform active:scale-95 text-base">
          <PenSquare className="mr-2 h-5 w-5" /> Write Post
        </Button>
      </div>

      <div className="space-y-8">
        {/* Doctor Insight Pinned Post */}
        <PostCard 
          author="Dr. Sarah Jenkins" 
          role="Endocrinologist" 
          isDoctor={true}
          avatar="SJ"
          time="2 hours ago"
          title="Understanding your HbA1c fluctuations"
          content="Many patients ask why their HbA1c varies even with strict diets. It's important to remember that stress, sleep patterns, and even minor infections can impact this metric over the 3-month lifespan of red blood cells..."
          likes={245}
          comments={42}
          pinned={true}
        />

        {/* Regular Community Posts */}
        <PostCard 
          author="Anonymous" 
          role="Patient" 
          isDoctor={false}
          avatar="A"
          time="4 hours ago"
          title="Tips for dealing with dawn phenomenon?"
          content="I've been waking up with high blood sugar levels (around 140 mg/dL) even though my post-dinner readings are normal. Does anyone have strategies that worked for them? I've tried having a small protein snack before bed but it hasn't completely resolved it."
          likes={38}
          comments={15}
        />

        <PostCard 
          author="Michael T." 
          role="Patient" 
          isDoctor={false}
          avatar="MT"
          time="8 hours ago"
          title="Just hit my target weight!"
          content="Wanted to share a highly positive update! After 6 months of logging my meals and daily walking, I finally hit my target weight and my doctor reduced my insulin dosage. Keep pushing, the consistency pays off!"
          likes={182}
          comments={24}
        />
      </div>
    </div>
  );
}

function PostCard({ author, role, isDoctor, avatar, time, title, content, likes, comments, pinned }: any) {
  return (
    <Card className={`rounded-[2rem] shadow-sm border overflow-hidden transition-all hover:shadow-md ${pinned ? 'border-navy dark:border-blue-900 bg-blue-50/20 dark:bg-slate-900/80 ring-1 ring-navy/10 dark:ring-blue-500/10' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'}`}>
      {pinned && (
        <div className="bg-navy text-white text-xs font-bold uppercase tracking-widest py-2.5 px-8 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" /> Doctor Insight • Pinned
        </div>
      )}
      <CardContent className="p-8 md:p-10">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 border-2 border-slate-100 dark:border-slate-800 shadow-sm">
              <AvatarFallback className={isDoctor ? "bg-navy text-white font-bold" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 font-bold"}>
                {avatar}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-foreground text-lg">{author}</span>
                {isDoctor && <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/50 dark:text-blue-300 px-2 py-0 border-none text-[10px] uppercase font-bold tracking-wider h-5 rounded-md">Verified</Badge>}
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">{role} • {time}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 -mr-3 transition-colors rounded-xl h-10 w-10">
            <MoreHorizontal className="w-5 h-5" />
          </Button>
        </div>

        <h3 className="text-2xl font-black text-navy dark:text-slate-100 mb-4 tracking-tight leading-snug">{title}</h3>
        <p className="text-text-secondary dark:text-slate-300 leading-relaxed text-[15px] md:text-base font-medium">
          {content}
        </p>

        <div className="flex items-center gap-6 mt-8 pt-5 border-t border-slate-100 dark:border-slate-800">
          <button className="flex items-center gap-2.5 text-slate-500 hover:text-red-500 transition-colors group font-extrabold text-sm px-2 py-1 -ml-2 rounded-lg">
            <div className="p-2 rounded-xl group-hover:bg-red-50 dark:group-hover:bg-red-900/30 transition-colors">
              <Heart className="w-5 h-5" />
            </div>
            {likes}
          </button>
          <button className="flex items-center gap-2.5 text-slate-500 hover:text-seafoam transition-colors group font-extrabold text-sm px-2 py-1 rounded-lg">
            <div className="p-2 rounded-xl group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/30 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </div>
            {comments}
          </button>
          <button className="flex items-center gap-2.5 text-slate-500 hover:text-blue-500 transition-colors group font-extrabold text-sm ml-auto px-2 py-1 -mr-2 rounded-lg">
             <div className="p-2 rounded-xl group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
               <Share2 className="w-5 h-5" />
             </div>
             <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
