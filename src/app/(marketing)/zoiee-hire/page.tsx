import Link from "next/link";
import { ArrowRight, UserPlus, Calendar, Shield, Check, Info, FileText, Landmark, Key, Users } from "lucide-react";

export default function ZoieeHirePage() {
  const kanbanColumns: {
    title: string;
    count: number;
    candidates: {
      name: string;
      role: string;
      region: string;
      details: string;
      badge?: string;
      status?: string;
    }[];
  }[] = [
    {
      title: "Applied Pool",
      count: 3,
      candidates: [
        { name: "Alex Rivera", role: "Backend Engineer", region: "Brazil (BRL)", details: "Applied 2h ago" },
        { name: "Sarah Jenkins", role: "Finance Specialist", region: "United Kingdom (GBP)", details: "Applied 4h ago" },
        { name: "David Miller", role: "UI Designer", region: "Canada (CAD)", details: "Applied 1d ago" }
      ]
    },
    {
      title: "Identity Verified",
      count: 2,
      candidates: [
        { name: "Marcus Chen", role: "Data Engineer", region: "Singapore (SGD)", details: "Identity Check Clear", badge: "Stripe ID Verified" },
        { name: "Jessica Alva", role: "Compliance Lead", region: "Germany (EUR)", details: "Bank Sync OK", badge: "IBAN Connected" }
      ]
    },
    {
      title: "Tax Form Approved",
      count: 2,
      candidates: [
        { name: "Carlos Reyes", role: "QA Specialist", region: "Mexico (MXN)", details: "W-8BEN Completed", badge: "W-8BEN Clear" },
        { name: "Elena Gomez", role: "Product Manager", region: "United States (USD)", details: "W-9 Form Completed", badge: "W-9 Clear" }
      ]
    },
    {
      title: "Active Payee",
      count: 2,
      candidates: [
        { name: "Michael Kim", role: "Fullstack Dev", region: "South Korea (KRW)", details: "Contract Signed", status: "Active Payouts" },
        { name: "Vilian Garner", role: "Sales Director", region: "Australia (AUD)", details: "Contract Signed", status: "Active Payouts" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-neutral-900 font-sans">
      {/* Hero Section */}
      <div className="pt-44 pb-24 px-6 border-b border-neutral-200/80 relative overflow-hidden fintech-grid-dots">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-rose-100/40 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="text-neutral-500 font-extrabold tracking-widest text-[10px] bg-neutral-900/5 px-3 py-1.5 w-fit rounded-full border border-neutral-900/10 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span> Payee Sourcing & ATS
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight font-logo">
              Onboard contractors in record time.
            </h1>
            <p className="text-base text-neutral-600 leading-relaxed font-semibold">
              An international contractor hiring platform built directly into your payments dashboard. Onboard talent, verify identity credentials, approve tax status, and configure recurring automated payouts.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-black hover:bg-neutral-900 text-white px-8 py-3.5 rounded-full font-bold transition-all text-xs shadow-sm">
              Schedule Sourcing Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-neutral-250 flex flex-col justify-center items-center text-center shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center border border-neutral-200/50 mb-4 shadow-sm">
              <Shield className="w-5 h-5 text-neutral-900" />
            </div>
            <h3 className="font-extrabold text-sm text-neutral-900 font-logo">Identity & Compliance Guarantee</h3>
            <p className="text-neutral-500 font-semibold text-xs leading-relaxed max-w-xs mt-2">
              Zoiee cross-checks bank account matches, international sanctions lists, and tax status before activating payout accounts.
            </p>
          </div>
        </div>
      </div>

      {/* Visual Kanban Sourcing Pipeline Board */}
      <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="space-y-3 mb-10 text-center lg:text-left">
          <span className="text-neutral-500 font-extrabold uppercase tracking-widest text-[10px] font-mono">Workforce ATS</span>
          <h2 className="text-2xl font-extrabold text-neutral-900 font-logo">Onboarding Pipeline Tracker</h2>
          <p className="text-neutral-500 text-xs font-semibold leading-relaxed max-w-xl">
            Monitor contractor progress as they complete bank account connections, identity verifications, tax form completions, and enter the active payroll directory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {kanbanColumns.map((col, i) => (
            <div key={i} className="p-4 rounded-3xl border flex flex-col bg-white border-neutral-200/80 shadow-sm">
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-neutral-100 text-neutral-800">
                <span className="font-extrabold text-[10px] tracking-wider uppercase font-mono">{col.title}</span>
                <span className="font-mono text-xs bg-neutral-50 border border-neutral-200 px-2.5 py-0.5 rounded-full text-neutral-900 font-bold">{col.count}</span>
              </div>
              <div className="space-y-3 flex-1">
                {col.candidates.map((cand, j) => (
                  <div key={j} className="bg-neutral-50/50 p-4 rounded-2xl border border-neutral-200/60 shadow-sm space-y-2.5 hover:border-black transition-colors">
                    <div>
                      <h4 className="font-bold text-neutral-900 text-xs">{cand.name}</h4>
                      <span className="text-[9px] text-neutral-450 font-bold uppercase tracking-wider font-mono">{cand.role} • {cand.region}</span>
                    </div>
                    
                    {cand.details && (
                      <p className="text-[10px] text-neutral-500 font-semibold flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0" /> {cand.details}
                      </p>
                    )}

                    {cand.badge && (
                      <span className="inline-block text-[8px] bg-white border border-neutral-200 font-mono font-bold px-2 py-0.5 rounded text-neutral-700 uppercase tracking-wider">{cand.badge}</span>
                    )}

                    {cand.status && (
                      <span className="inline-block text-[8px] bg-neutral-950 text-white font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">{cand.status}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sourcing Features Section */}
      <div className="py-24 px-6 border-t border-neutral-200/85 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-neutral-450 font-extrabold uppercase tracking-widest text-xs font-mono">AUTOMATED ONBOARDING</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 mt-2 font-logo">Hire global talent compliance-first.</h2>
            <p className="text-base text-neutral-600 font-semibold font-sans">
              Everything you need to onboard, authenticate, sign, and pay overseas team members without legal headaches or paper documents.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-neutral-200 hover:border-black transition-colors">
              <Users className="w-8 h-8 text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-neutral-900 font-logo">Self-Service Onboarding</h3>
              <p className="text-neutral-500 leading-relaxed font-semibold text-xs">
                Contractors submit bank info, complete identity documentation via Stripe Identity, and select payout currencies independently.
              </p>
            </div>
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-neutral-200 hover:border-black transition-colors">
              <FileText className="w-8 h-8 text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-neutral-900 font-logo">Tax Form Generation</h3>
              <p className="text-neutral-500 leading-relaxed font-semibold text-xs">
                Collect localized W-8BEN, W-9, and local withholding declarations automatically. Complete 1099-NEC tax filings at year-end.
              </p>
            </div>
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-neutral-200 hover:border-black transition-colors">
              <Landmark className="w-8 h-8 text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-neutral-900 font-logo">Direct Ledger Sync</h3>
              <p className="text-neutral-500 leading-relaxed font-semibold text-xs">
                Approved contracts and payments sync straight to QuickBooks, Xero, or custom corporate ERP systems via our REST endpoints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
