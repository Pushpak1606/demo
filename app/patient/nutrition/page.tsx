"use client"
import { H2, H4 } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Apple, Flame, Utensils, Droplets, Target, ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function NutritionPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <H2 className="flex items-center gap-3">
            <Apple className="h-8 w-8 text-teal" /> Nutrition & Fitness
          </H2>
          <p className="text-text-secondary dark:text-slate-400 mt-2">
            Monitor your daily intake and exercise goals tailored to your health profile.
          </p>
        </div>
        <Button className="bg-teal hover:bg-teal-light text-white font-bold h-12 px-6 rounded-xl shadow-sm">
          Log Activity
        </Button>
      </div>

      {/* Daily Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <SummaryCard icon={<Flame className="h-5 w-5 text-orange-500" />} title="Calories" value="1,850" target="/ 2,200 kcal" progress={84} />
        <SummaryCard icon={<Utensils className="h-5 w-5 text-teal" />} title="Protein" value="85g" target="/ 120g" progress={70} />
        <SummaryCard icon={<Droplets className="h-5 w-5 text-blue-500" />} title="Water" value="1.5L" target="/ 2.5L" progress={60} />
        <SummaryCard icon={<Target className="h-5 w-5 text-navy dark:text-blue-400" />} title="Steps" value="6,400" target="/ 10k" progress={64} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[1.5rem] bg-white dark:bg-slate-900 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
            <H4>Today's Meal Plan</H4>
            <Button variant="ghost" className="text-teal font-bold hover:text-teal-dark dark:hover:text-teal-300">Edit Plan</Button>
          </div>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              <MealItem meal="Breakfast" time="8:00 AM" desc="Oatmeal with berries and nuts" cals="350 kcal" />
              <MealItem meal="Lunch" time="1:00 PM" desc="Grilled chicken salad with olive oil" cals="450 kcal" />
              <MealItem meal="Dinner" time="7:00 PM" desc="Baked salmon with asparagus" cals="500 kcal" />
              <MealItem meal="Snacks" time="Anytime" desc="Greek yogurt, apple" cals="200 kcal" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[1.5rem] bg-white dark:bg-slate-900 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
            <H4>AI Recommendations</H4>
          </div>
          <CardContent className="p-6 md:p-8 space-y-6">
            <div className="bg-teal-tint/50 dark:bg-teal-900/30 p-6 rounded-2xl border border-teal-tint dark:border-teal-900">
              <div className="flex items-start gap-4">
                <Apple className="h-8 w-8 text-teal shrink-0 mt-1" />
                <div>
                  <h5 className="font-extrabold text-navy dark:text-slate-100 mb-2">Lower Sodium Intake</h5>
                  <p className="text-sm font-medium text-text-secondary dark:text-slate-400 leading-relaxed">
                    Based on your recent blood pressure readings, AI recommends reducing sodium intake to under 1,500mg daily.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-2xl border border-blue-100 dark:border-blue-900">
              <div className="flex items-start gap-4">
                <Target className="h-8 w-8 text-blue-500 shrink-0 mt-1" />
                <div>
                  <h5 className="font-extrabold text-navy dark:text-slate-100 mb-2">Increase Cardio</h5>
                  <p className="text-sm font-medium text-text-secondary dark:text-slate-400 leading-relaxed">
                    Try adding 20 minutes of brisk walking to help improve your resting heart rate.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function SummaryCard({ icon, title, value, target, progress }: any) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3 hover:-translate-y-1 transition-transform">
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded-lg">{icon}</div>
        <span className="font-bold text-text-secondary dark:text-slate-400 text-sm">{title}</span>
      </div>
      <div>
        <span className="text-3xl font-extrabold tracking-tight text-foreground">{value}</span>
        <span className="text-sm font-bold text-slate-400 ml-1">{target}</span>
      </div>
      <Progress value={progress} className="h-2.5 mt-2 rounded-full" />
    </div>
  );
}

function MealItem({ meal, time, desc, cals }: any) {
  return (
    <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group cursor-pointer gap-4">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-extrabold text-navy dark:text-slate-100 text-lg">{meal}</span>
          <span className="text-xs font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md tracking-wider uppercase">{time}</span>
        </div>
        <p className="font-medium text-text-secondary dark:text-slate-400 text-sm">{desc}</p>
      </div>
      <div className="flex items-center gap-3 self-end sm:self-auto">
        <span className="text-sm font-extrabold text-teal bg-teal-tint dark:bg-teal-900/30 px-3 py-1 rounded-lg">{cals}</span>
        <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-teal transition-colors" />
      </div>
    </div>
  );
}
