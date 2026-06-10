import Link from "next/link";
import { LayoutDashboard, Users, CreditCard, Calendar, ShieldPlus, FileText, BarChart, Settings } from "lucide-react";
import { LogoutButton } from "@/components/LogoutButton";
import { TopNav } from "@/components/TopNav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FAF9F6] flex text-neutral-800">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-white text-neutral-600 flex-shrink-0 border-r border-neutral-200 flex-col h-screen sticky top-0 font-sans text-xs">
        <div className="h-16 flex items-center px-6 border-b border-neutral-200">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-black"></span>
            <span className="font-bold text-base text-neutral-900 tracking-tight font-logo">Zoiee HR</span>
          </div>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-neutral-950 text-white font-bold shadow-sm">
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>
          <Link href="/dashboard/directory" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 hover:text-neutral-900 transition-colors font-medium border border-transparent">
            <Users className="w-4 h-4" />
            Payees Directory
          </Link>
          <Link href="/dashboard/payroll" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 hover:text-neutral-900 transition-colors font-medium border border-transparent">
            <CreditCard className="w-4 h-4" />
            Global Payroll
          </Link>
          <Link href="/dashboard/time-off" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 hover:text-neutral-900 transition-colors font-medium border border-transparent">
            <Calendar className="w-4 h-4" />
            Time Off
          </Link>
          <Link href="/dashboard/benefits" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 hover:text-neutral-900 transition-colors font-medium border border-transparent">
            <ShieldPlus className="w-4 h-4" />
            Contractor Benefits
          </Link>
          <Link href="/dashboard/documents" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 hover:text-neutral-900 transition-colors font-medium border border-transparent">
            <FileText className="w-4 h-4" />
            W-8/W-9 Vault
          </Link>
          <Link href="/dashboard/reports" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 hover:text-neutral-900 transition-colors font-medium border border-transparent">
            <BarChart className="w-4 h-4" />
            Workforce Reports
          </Link>
        </nav>
        
        <div className="p-4 border-t border-neutral-200 space-y-1">
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 hover:text-neutral-900 transition-colors font-medium border border-transparent">
            <Settings className="w-4 h-4" />
            Console Settings
          </Link>
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navigation */}
        <TopNav />

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto bg-[#FAF9F6]">
          {children}
        </main>
      </div>
    </div>
  );
}
