import { Download, Clock, CheckCircle, FileText } from "lucide-react";
import { ActionButton } from "@/components/ActionButton";

export default function PayrollPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 text-left">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-neutral-900 font-logo">Union CBA Compliance</h1>
          <p className="text-neutral-400 mt-1 font-semibold text-sm">Manage trade classifications, union benefit fringe hours calculations, and labor agreements.</p>
        </div>
        <ActionButton 
          icon={<CheckCircle className="w-4 h-4" />} 
          label="Verify CBA Compliance Roster" 
          successMessage="CBA compliance verified! Roster synced."
          className="bg-black hover:bg-neutral-900 text-white font-extrabold rounded-full text-xs cursor-pointer px-6 py-3 shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm">
          <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">Next Union Dispatch Audit</p>
          <p className="text-2xl font-black text-neutral-900 font-logo">June 15, 2026</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-green-700 bg-green-50 border border-green-200 px-2.5 py-0.5 rounded-full w-fit font-bold">
            <CheckCircle className="w-3.5 h-3.5" /> CBAs Cleared
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm">
          <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">Total Labor Hours Logged</p>
          <p className="text-2xl font-black text-neutral-900 font-logo">412,500 Hrs</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400 font-semibold">
            <Clock className="w-3.5 h-3.5 text-neutral-800" /> Syncing 984 active operators
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm">
          <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">Union Fringe Hours</p>
          <p className="text-2xl font-black text-neutral-900 font-logo">90,750 Hrs</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400 font-semibold">
            <Download className="w-3.5 h-3.5 text-neutral-800" /> Auto-filed to IUOE & Ironworkers locals
          </div>
        </div>
      </div>

      <div className="bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-neutral-200">
          <h2 className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Recent Compliance Audits</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-neutral-50 text-neutral-400 text-xs font-bold border-b border-neutral-200">
              <tr>
                <th className="px-6 py-3 uppercase tracking-wider font-bold">Audit Period</th>
                <th className="px-6 py-3 uppercase tracking-wider font-bold">Audit Date</th>
                <th className="px-6 py-3 uppercase tracking-wider font-bold">Audit Hours Logged</th>
                <th className="px-6 py-3 uppercase tracking-wider font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="text-xs font-semibold text-neutral-500 divide-y divide-slate-100">
              {[1, 2, 3].map((i) => (
                <tr key={i} className="hover:bg-neutral-50/50 transition-colors">
                  <td className="px-6 py-4 text-neutral-900 font-extrabold text-sm">May 16 - May 31</td>
                  <td className="px-6 py-4 text-neutral-400 font-semibold">May 31, 2026</td>
                  <td className="px-6 py-4 text-neutral-900 font-black font-logo">410,200 Hrs</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-0.5 rounded-full border border-green-200 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider">
                      Verified & Audited
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
