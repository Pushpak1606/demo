import { DoctorSidebar } from "@/components/layout/doctor-sidebar";
import { TopBar } from "@/components/layout/topbar";

export default function DoctorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-surface dark:bg-slate-950 min-h-screen">
      <DoctorSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <TopBar role="doctor" />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
