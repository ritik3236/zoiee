import { Building2, Mail, Globe, Save } from "lucide-react";
import { ActionButton } from "@/components/ActionButton";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-neutral-900 font-logo">Dispatch Settings</h1>
        <p className="text-neutral-400 mt-1 font-semibold text-sm">Manage your crewing preferences, union agreements, and dispatcher details.</p>
      </div>

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-neutral-200">
          <h2 className="text-sm font-bold text-neutral-500 uppercase tracking-widest">General Dispatch Information</h2>
          <p className="text-xs text-neutral-400 font-semibold mt-0.5">This information will be displayed on union reports and billing invoices.</p>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Organization Name</label>
              <div className="relative">
                <Building2 className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
                <input type="text" defaultValue="Zoiee Technical Services Inc." className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-800 font-semibold text-sm focus:bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-cyan-500 transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Dispatch & Billing Mail</label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
                <input type="email" defaultValue="dispatch@zoiee.com" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-800 font-semibold text-sm focus:bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-cyan-500 transition-all" />
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Website Domain</label>
              <div className="relative">
                <Globe className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
                <input type="url" defaultValue="https://zoiee.com" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-800 font-semibold text-sm focus:bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-cyan-500 transition-all" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex justify-end">
          <ActionButton 
            icon={<Save className="w-4 h-4" />} 
            label="Save Changes" 
            loadingLabel="Saving..."
            successMessage="Settings have been saved successfully!"
            className="bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-extrabold rounded-lg hover:from-cyan-400 hover:to-violet-400 text-neutral-900 shadow-sm font-bold text-xs cursor-pointer px-4 py-2.5 rounded"
          />
        </div>
      </div>
    </div>
  );
}
