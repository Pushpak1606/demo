import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Activity, 
  Brain, 
  Pill, 
  HeartPulse,
  Heart,
  Video,
  Users
} from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-surface dark:bg-slate-900 py-20 lg:py-32 flex flex-col items-center justify-center text-center px-4">
        <Badge variant="outline" className="mb-6 rounded-full border-teal text-teal bg-teal-tint dark:bg-teal-900/30 px-4 py-1.5 font-medium">
          100+ AI Features
        </Badge>
        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-navy dark:text-blue-100 sm:text-6xl lg:text-7xl mb-6">
          The AI-Powered Digital <br className="hidden sm:block" />
          <span className="text-teal">Healthcare Platform</span>
        </h1>
        <p className="max-w-2xl text-lg text-text-secondary dark:text-slate-400 mb-10">
          Unifying physical health management, mental wellbeing, and smart medication tracking into a single, patient-centric ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/auth/patient/register">
            <Button size="lg" className="h-12 w-full sm:w-auto bg-teal hover:bg-teal-light text-white text-base px-8 rounded-xl shadow-card">
              I am a Patient
            </Button>
          </Link>
          <Link href="/auth/doctor/register">
            <Button size="lg" variant="outline" className="h-12 w-full sm:w-auto border-navy text-navy hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 text-base px-8 rounded-xl">
              I am a Doctor
            </Button>
          </Link>
        </div>
      </section>

      {/* Pathways Section */}
      <section id="pathways" className="w-full max-w-7xl px-4 py-20 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy dark:text-slate-100 mb-4 tracking-tight">Explore Care Pathways</h2>
          <p className="text-text-secondary dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Medscope provides specialized tools for every aspect of your health journey.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 hover:*:-translate-y-1 *:transition-transform *:duration-300">
          <PathwayCard 
            icon={<Activity className="h-8 w-8 text-teal" />}
            title="Physical Health"
            desc="Track vitals, manage chronic conditions, and review medical history."
          />
          <PathwayCard 
            icon={<Brain className="h-8 w-8 text-teal" />}
            title="Mental Wealth"
            desc="AI assessments, mood tracking, and empathetic daily journaling."
          />
          <PathwayCard 
            icon={<Pill className="h-8 w-8 text-teal" />}
            title="Medication"
            desc="Smart reminders, AI prescription insights, and pharmacy locators."
          />
          <PathwayCard 
            icon={<HeartPulse className="h-8 w-8 text-teal" />}
            title="Lifestyle"
            desc="Tailored nutrition plans and physical activity monitoring."
          />
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="w-full bg-slate-50 dark:bg-slate-900/50 py-20 lg:py-24 px-4 border-y dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy dark:text-slate-100 mb-4 tracking-tight">Platform Features</h2>
              <p className="text-text-secondary dark:text-slate-400 max-w-xl text-lg">
                Built to connect patients with doctors faster, easier, and with more context than ever before.
              </p>
            </div>
            <Link href="/about" className="hidden md:flex text-teal font-semibold hover:underline items-center gap-1">
              View all features <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Brain className="h-6 w-6 text-white" />}
              title="AI Medicine Assistant"
              desc="Upload your medicine and our AI will explain dosage, side effects, and interactions."
              color="bg-teal"
            />
            <FeatureCard 
              icon={<Video className="h-6 w-6 text-white" />}
              title="Live Consultation"
              desc="Secure telehealth video calls with your assigned doctors directly on the platform."
              color="bg-navy"
            />
            <FeatureCard 
              icon={<Users className="h-6 w-6 text-white" />}
              title="Community Support"
              desc="Join moderated, condition-specific groups to share experiences with peers."
              color="bg-seafoam"
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20 lg:py-28">
        <div className="bg-navy dark:bg-slate-800 rounded-[2.5rem] p-10 lg:p-16 text-center text-white relative overflow-hidden shadow-card-lg">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[slide_2s_linear_infinite]" />
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 relative z-10 tracking-tight">Need a Doctor Now?</h2>
          <p className="text-lg lg:text-xl text-slate-300 dark:text-slate-400 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Book a live consultation in 60 seconds. Our network of verified professionals is ready to help.
          </p>
          <Link href="/auth/patient/register" className="relative z-10">
            <Button size="lg" className="bg-white text-navy hover:bg-slate-100 h-14 px-8 text-lg rounded-xl font-bold">
              Book Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function PathwayCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white dark:bg-slate-950 p-8 rounded-[1.5rem] border shadow-card hover:shadow-card-md transition-shadow">
      <div className="mb-6 h-16 w-16 bg-teal-tint dark:bg-teal-900/30 rounded-2xl flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">{title}</h3>
      <p className="text-text-secondary dark:text-slate-400 leading-relaxed text-sm lg:text-base">
        {desc}
      </p>
    </div>
  );
}

function FeatureCard({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) {
  return (
    <div className="bg-white dark:bg-slate-950 p-8 rounded-[1.5rem] border shadow-sm hover:shadow-card transition-shadow">
      <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{title}</h3>
      <p className="text-text-secondary dark:text-slate-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
