"use client"
import { H2, H4 } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Smile, Frown, Meh, Save, Calendar } from "lucide-react";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { useState } from "react";

export default function JournalPage() {
  const [mood, setMood] = useState<string | null>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'How are you feeling today? Write your thoughts here...',
        emptyEditorClass: 'cursor-text before:content-[attr(data-placeholder)] before:absolute before:text-slate-400 before:opacity-50',
      }),
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-slate dark:prose-invert max-w-none focus:outline-none min-h-[400px] text-lg leading-relaxed text-foreground',
      },
    },
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <H2 className="flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-teal" /> Daily Journal
          </H2>
          <p className="text-text-secondary dark:text-slate-400 mt-2 text-lg font-medium">
            Reflect on your day. Your entries are private and secure.
          </p>
        </div>
        <Button className="bg-navy hover:bg-navy-light dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold h-12 px-8 rounded-xl shadow-sm transition-transform active:scale-95">
          <Save className="mr-2 h-5 w-5" /> Save Entry
        </Button>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] bg-white dark:bg-slate-900/80 overflow-hidden">
        <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-text-secondary dark:text-slate-300">
            <Calendar className="h-6 w-6 text-teal" />
            <span className="font-extrabold text-xl tracking-tight text-foreground">Today, {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>

          <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mx-3">Mood</span>
            <MoodButton icon={<Smile className="h-6 w-6" />} label="Good" active={mood === 'good'} onClick={() => setMood('good')} activeColor="bg-success text-white border-success" />
            <MoodButton icon={<Meh className="h-6 w-6" />} label="Neutral" active={mood === 'neutral'} onClick={() => setMood('neutral')} activeColor="bg-warning text-white border-warning" />
            <MoodButton icon={<Frown className="h-6 w-6" />} label="Bad" active={mood === 'bad'} onClick={() => setMood('bad')} activeColor="bg-error text-white border-error" />
          </div>
        </div>
        <CardContent className="p-8 md:p-12 relative">
          <EditorContent editor={editor} />
        </CardContent>
      </Card>
      
      <div className="pt-4 flex justify-end">
         <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-2">AI insights are generated automatically when saved <SparkleIcon /></p>
      </div>
    </div>
  );
}

function MoodButton({ icon, label, active, onClick, activeColor }: any) {
  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-[1rem] border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal ${
        active 
          ? `${activeColor} shadow-md transform scale-110` 
          : `border-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:text-slate-500 dark:hover:text-slate-300 dark:hover:bg-slate-800`
      }`}
      title={label}
    >
      {icon}
    </button>
  );
}

function SparkleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal animate-pulse">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}
