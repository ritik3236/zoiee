import { TrendingUp, Users, Activity, BarChart, Download } from "lucide-react";
import { ActionButton } from "@/components/ActionButton";

export default function ReportsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-neutral-900 font-logo">Field Force Analytics</h1>
          <p className="text-neutral-400 mt-1 font-semibold text-sm">Data-driven insights for safety performance, crew availability, and dispatch rates.</p>
        </div>
        <ActionButton 
          icon={<Download className="w-4 h-4" />} 
          label="Export CSV Log" 
          loadingLabel="Generating export..."
          successMessage="CSV file has been successfully exported!"
          className="bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200 shadow-sm font-bold text-xs cursor-pointer px-4 py-2.5 rounded"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg/5 text-neutral-800 border border-cyan-500/20 rounded">
              <Users className="w-5 h-5" />
            </div>
            <span className="flex items-center text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded">
              <TrendingUp className="w-3 h-3 mr-1" /> +12%
            </span>
          </div>
          <p className="text-2xl font-black text-neutral-900 font-logo">984</p>
          <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mt-1">Total Active Dispatch</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg/5 text-neutral-800 border border-cyan-500/20 rounded">
              <Activity className="w-5 h-5" />
            </div>
            <span className="flex items-center text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded">
              <TrendingUp className="w-3 h-3 mr-1" /> +1.2 wks
            </span>
          </div>
          <p className="text-2xl font-black text-neutral-900 font-logo">6.4 wks</p>
          <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mt-1">Average Dispatch Period</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg/5 text-neutral-800 border border-cyan-500/20 rounded">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="flex items-center text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded">
              <TrendingUp className="w-3 h-3 mr-1" /> Audit Safe
            </span>
          </div>
          <p className="text-2xl font-black text-neutral-900 font-logo">99.8%</p>
          <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mt-1">Incident-Free Safety Rating</p>
        </div>
      </div>

      <div className="bg-neutral-50 h-96 rounded-xl border border-neutral-200 flex items-center justify-center flex-col text-neutral-500">
        <BarChart className="w-12 h-12 mb-4 text-neutral-800 opacity-60" />
        <p className="font-bold text-xs uppercase tracking-widest text-neutral-400">Detailed Analytics Rendering...</p>
      </div>
    </div>
  );
}
