import { PatientSidebar } from "@/components/layout/patient-sidebar";
import { TopBar } from "@/components/layout/topbar";
import { AiChatbot } from "@/components/ai-chatbot";

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-surface dark:bg-slate-950 min-h-screen">
      <PatientSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <TopBar role="patient" />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
      <AiChatbot />
    </div>
  );
}
