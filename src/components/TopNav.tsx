"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, HelpCircle, ChevronDown, User, Settings, LogOut, CheckCircle, AlertTriangle, Menu, X, LayoutDashboard, Users, CreditCard, Calendar, ShieldPlus, FileText, BarChart, Server } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function TopNav() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const profileRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      router.push(`/dashboard/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
    <header className="h-16 bg-white border-b border-neutral-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-10 backdrop-blur-md">
      <div className="flex items-center gap-3 md:hidden">
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-1 -ml-1 text-neutral-500 hover:text-black">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 max-w-xl hidden md:block text-left">
        <div className="relative">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search payments, payees, and transactions..." 
            className="w-full bg-neutral-55 border border-neutral-200 rounded-xl pl-4 pr-10 py-1.5 text-xs focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-neutral-900 placeholder:text-neutral-400"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        {/* Notifications Dropdown */}
        <div className="relative" ref={notifRef}>
          <button 
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            className="text-neutral-500 hover:text-black relative cursor-pointer flex items-center justify-center p-1"
          >
            <Bell className="w-4.5 h-4.5" />
            <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-black rounded-full animate-ping"></span>
          </button>
          
          {isNotifOpen && (
            <div className="absolute right-0 mt-3 w-80 bg-white border border-neutral-200 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] z-50 overflow-hidden text-left">
              <div className="p-4 border-b border-neutral-200 flex justify-between items-center bg-neutral-50">
                <h3 className="font-bold text-xs text-neutral-850 uppercase tracking-wider">Gateway Alerts</h3>
                <span className="text-[10px] text-neutral-900 font-bold cursor-pointer hover:underline">Clear all</span>
              </div>
              <div className="max-h-80 overflow-y-auto divide-y divide-neutral-100">
                <div className="p-4 hover:bg-neutral-50 transition-colors cursor-pointer flex gap-3">
                  <div className="mt-0.5"><CheckCircle className="w-4 h-4 text-emerald-600" /></div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-neutral-900">Zoiee Payroll Sync Complete</p>
                    <p className="text-[10px] text-neutral-500 leading-relaxed font-semibold">USD batch payouts completed successfully across 3 active wire pools.</p>
                    <p className="text-[9px] text-neutral-400 font-mono">2m ago</p>
                  </div>
                </div>
                <div className="p-4 hover:bg-neutral-50 transition-colors cursor-pointer flex gap-3">
                  <div className="mt-0.5"><AlertTriangle className="w-4 h-4 text-amber-600" /></div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-neutral-900">Tax Form Audit Required</p>
                    <p className="text-[10px] text-neutral-500 leading-relaxed font-semibold">W-8BEN missing for 2 new contractors in Singapore sourcing pool.</p>
                    <p className="text-[9px] text-neutral-400 font-mono">1h ago</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Help Icon */}
        <Link 
          href="/dashboard/help"
          className="text-neutral-500 hover:text-black cursor-pointer p-1"
        >
          <HelpCircle className="w-4.5 h-4.5" />
        </Link>
        
        <div className="h-6 border-l border-neutral-200"></div>
        
        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 hover:opacity-85 transition-opacity cursor-pointer text-neutral-700"
          >
            <div className="w-7 h-7 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shadow-sm">
              OM
            </div>
            <div className="text-left hidden md:block">
              <div className="text-xs font-bold text-neutral-900">Olivia Martin</div>
              <div className="text-[9px] text-neutral-400 font-mono uppercase font-bold">ADMIN GATEWAY</div>
            </div>
            <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-white border border-neutral-200 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] z-50 overflow-hidden py-1 text-left">
              <div className="px-4 py-3 border-b border-neutral-200 mb-1">
                <p className="text-xs font-bold text-neutral-900">Olivia Martin</p>
                <p className="text-[10px] text-neutral-500 truncate font-mono">olivia@zoiee.me</p>
              </div>
              
              <Link href="/dashboard/profile" className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors">
                <User className="w-3.5 h-3.5 text-neutral-800" /> My Profile
              </Link>
              <Link href="/dashboard/settings" className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors">
                <Settings className="w-3.5 h-3.5 text-neutral-800" /> Console Settings
              </Link>
              
              <div className="border-t border-neutral-200 my-1"></div>
              
              <button 
                onClick={() => signOut({ callbackUrl: '/login' })}
                className="w-full flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-red-600 hover:bg-red-50 transition-colors cursor-pointer text-left font-semibold"
              >
                <LogOut className="w-3.5 h-3.5" /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>

    {/* Mobile Navigation Drawer */}
    {isMobileMenuOpen && (
      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
        <div 
          className="w-64 h-full bg-white text-neutral-750 flex flex-col border-r border-neutral-200 animate-in slide-in-from-left text-left"
          onClick={e => e.stopPropagation()}
        >
          <div className="h-16 flex items-center justify-between px-4 border-b border-neutral-200">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-black"></span>
              <span className="font-bold text-lg text-neutral-900 font-logo">Zoiee HR</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-neutral-500 p-1">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 text-xs font-semibold">
            <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-neutral-950 text-white font-bold">
              <LayoutDashboard className="w-4 h-4" /> Dashboard
            </Link>
            <Link href="/dashboard/directory" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 hover:text-black transition-colors font-medium">
              <Users className="w-4 h-4" /> Payees Directory
            </Link>
            <Link href="/dashboard/payroll" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 hover:text-black transition-colors font-medium">
              <CreditCard className="w-4 h-4" /> Global Payroll
            </Link>
            <Link href="/dashboard/time-off" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 hover:text-black transition-colors font-medium">
              <Calendar className="w-4 h-4" /> Time Off
            </Link>
            <Link href="/dashboard/benefits" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 hover:text-black transition-colors font-medium">
              <ShieldPlus className="w-4 h-4" /> Contractor Benefits
            </Link>
            <Link href="/dashboard/documents" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 hover:text-black transition-colors font-medium">
              <FileText className="w-4 h-4" /> W-8/W-9 Vault
            </Link>
            <Link href="/dashboard/reports" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 hover:text-black transition-colors font-medium">
              <BarChart className="w-4 h-4" /> Treasury Reports
            </Link>
          </nav>
        </div>
      </div>
    )}
    </>
  );
}
