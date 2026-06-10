import Link from "next/link";
import { ArrowRight, Users, Database, FileText, Shield, UserCheck, Check } from "lucide-react";

export default function CoreHRPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-neutral-900 font-sans">
      {/* Hero Section */}
      <div className="pt-44 pb-24 px-6 border-b border-neutral-200/80 relative overflow-hidden fintech-grid-dots">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-rose-100/40 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-left space-y-6">
            <div className="text-neutral-500 font-extrabold tracking-widest text-[10px] uppercase flex items-center gap-2 bg-neutral-900/5 px-3 py-1.5 w-fit rounded-full border border-neutral-200">
              <Shield className="w-3.5 h-3.5 text-neutral-900" /> Compliance Hub
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight font-logo">
              Absolute compliance directory for remote teams.
            </h1>
            <p className="text-base text-neutral-600 leading-relaxed font-semibold">
              Zoiee acts as your international compliance directory. Automatically verify candidate identities, track tax filings (W-8BEN, W-9), approve legal contracts, and archive local country documents.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-black hover:bg-neutral-900 text-white px-8 py-3.5 rounded-full font-bold transition-all text-xs shadow-sm">
              Request Compliance Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          {/* Compliance directory layout */}
          <div className="bg-white p-8 rounded-3xl border border-neutral-250 shadow-sm relative text-neutral-800 space-y-6">
             <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
               <div className="font-extrabold text-sm text-neutral-900 font-logo">Contractor Registry</div>
               <div className="bg-neutral-900/5 text-neutral-800 border border-neutral-250 px-3 py-1 rounded-full text-[10px] font-bold font-mono">Syncing Stripe ID...</div>
             </div>
             <div className="space-y-4">
                {[
                  { name: "Sarah Jenkins", role: "Frontend Engineer (UK)", status: "Cleared", creds: "W-8BEN Approved" },
                  { name: "Marcus Chen", role: "Data Scientist (SG)", status: "Active", creds: "Stripe ID Verified" },
                  { name: "Elena Rodriguez", role: "QA Lead (MX)", status: "Pending", creds: "Tax Form Required" }
                ].map((emp, i) => (
                  <div key={i} className="flex items-center gap-4 bg-neutral-50/50 p-4 rounded-xl border border-neutral-200/60 hover:border-black transition-colors">
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">{emp.name.charAt(0)}</div>
                    <div className="flex-1 text-left">
                      <div className="font-bold text-xs text-neutral-850">{emp.name}</div>
                      <div className="text-neutral-450 text-[10px] font-bold font-mono">{emp.role} • <span className="text-neutral-500 font-medium">{emp.creds}</span></div>
                    </div>
                    <div className={`px-2.5 py-0.5 rounded-full text-[9px] uppercase font-bold border ${
                      emp.status === 'Cleared' || emp.status === 'Active' 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-250' 
                        : 'bg-amber-50 text-amber-700 border-amber-250'
                    }`}>
                      {emp.status}
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* Concrete Features Section */}
      <div className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
            <span className="text-neutral-450 font-extrabold uppercase tracking-widest text-xs font-mono">FEATURES IN DEPTH</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 font-logo">Manage contractor directories cleanly.</h2>
            <p className="text-base text-neutral-600 font-semibold font-sans font-medium">Say goodbye to messy document folders, expired identity cards, and manual compliance audits.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-neutral-200 hover:border-black transition-colors">
              <Database className="w-8 h-8 text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-neutral-900 font-logo">Identity Vault</h3>
              <p className="text-neutral-500 leading-relaxed font-semibold text-xs">
                Securely check contractor photo identity, passport files, and bank records before dispatching international deposits.
              </p>
            </div>
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-neutral-200 hover:border-black transition-colors">
              <FileText className="w-8 h-8 text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-neutral-900 font-logo">Digital Tax Archive</h3>
              <p className="text-neutral-500 leading-relaxed font-semibold text-xs">
                Auto-approve tax classifications based on location, tracking year-end 1099 compliance for US companies seamlessly.
              </p>
            </div>
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-neutral-200 hover:border-black transition-colors">
              <UserCheck className="w-8 h-8 text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-neutral-900 font-logo">Compliant Contracts</h3>
              <p className="text-neutral-500 leading-relaxed font-semibold text-xs">
                Generate localized legal agreements with built-in NDAs, intellectual property protections, and termination clauses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="bg-black py-24 px-6 overflow-hidden relative mt-auto border-t border-neutral-200">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-neutral-800/40 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-logo">
            Secure your remote workforce compliance today.
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed font-medium">
            Deploy automated identity checks and localized tax documents instantly under Zoiee Compliance Hub.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact" className="w-full sm:w-auto bg-white hover:bg-neutral-100 text-black font-extrabold px-8 py-3.5 rounded-full shadow-sm text-xs">
              Request Demo
            </Link>
            <Link href="/login" className="w-full sm:w-auto bg-neutral-900 border border-neutral-850 text-neutral-350 font-bold px-8 py-3.5 rounded-full hover:bg-neutral-800 hover:text-white transition-colors text-xs">
              Log in
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
