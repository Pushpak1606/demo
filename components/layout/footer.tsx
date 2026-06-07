import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, HeartPulse } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-surface dark:bg-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold text-teal">
              <HeartPulse className="h-6 w-6" />
              Medscope
            </Link>
            <p className="mt-4 text-sm text-text-secondary dark:text-slate-400">
              AI-Powered Digital Healthcare Platform unifying physical health, mental wellbeing, and community support.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-text-secondary hover:text-teal transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-text-secondary hover:text-teal transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-text-secondary hover:text-teal transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-text-secondary hover:text-teal transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Portals</h4>
            <ul className="space-y-3">
              <li><Link href="/auth/patient/login" className="text-sm text-text-secondary hover:text-teal transition-colors">Patient Login</Link></li>
              <li><Link href="/auth/patient/register" className="text-sm text-text-secondary hover:text-teal transition-colors">Join as Patient</Link></li>
              <li><Link href="/auth/doctor/login" className="text-sm text-text-secondary hover:text-teal transition-colors">Doctor Login</Link></li>
              <li><Link href="/auth/doctor/register" className="text-sm text-text-secondary hover:text-teal transition-colors">Join as Doctor</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Features</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-text-secondary hover:text-teal transition-colors">AI Medicine Assistant</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-teal transition-colors">Mental Health Screening</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-teal transition-colors">Live Consultation</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-teal transition-colors">Community Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-text-secondary hover:text-teal transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-teal transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-teal transition-colors">HIPAA Compliance</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-teal transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-text-secondary">
          <p>© 2026 Medscope Platform. IT Department B.Tech Project.</p>
          <p className="mt-4 md:mt-0">Built with Next.js 14 and AI Vibe Coding</p>
        </div>
      </div>
    </footer>
  );
}
