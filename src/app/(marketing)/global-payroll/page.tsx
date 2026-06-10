import Link from "next/link";
import { ArrowRight, Globe, Shield, Zap, CheckCircle2, UserCheck, RefreshCw, Landmark } from "lucide-react";

export default function GlobalPayrollPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-neutral-900 font-sans">
      {/* Hero Section */}
      <div className="pt-44 pb-24 px-6 border-b border-neutral-200/80 relative overflow-hidden fintech-grid-dots">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-rose-100/40 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-left space-y-6">
            <div className="text-neutral-500 font-extrabold tracking-widest text-[10px] uppercase flex items-center gap-2 bg-neutral-900/5 px-3 py-1.5 w-fit rounded-full border border-neutral-200">
              <UserCheck className="w-3.5 h-3.5 text-neutral-900" /> Remote Directories
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight font-logo">
              Automate global contractor onboarding.
            </h1>
            <p className="text-base text-neutral-600 leading-relaxed font-semibold">
              Stop dealing with scattered compliance forms, manual identity verifications, and custom contract drafts. Zoiee organizes your entire remote workforce directory under a single, automated HR portal.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-black hover:bg-neutral-900 text-white px-8 py-3.5 rounded-full font-bold transition-all text-xs shadow-sm">
              Schedule Directory Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          {/* Visual payroll summary card */}
          <div className="bg-white p-8 rounded-3xl border border-neutral-250 shadow-sm relative text-neutral-800 space-y-6">
             <div className="bg-neutral-50/60 p-6 rounded-2xl border border-neutral-200 shadow-inner space-y-3">
                <div className="flex justify-between items-center text-left">
                   <div className="font-bold text-neutral-450 text-[10px] uppercase tracking-wider font-mono">Workforce Compliance Status</div>
                   <div className="text-emerald-700 border border-emerald-250 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full text-[10px] flex items-center gap-1">
                     <CheckCircle2 className="w-3.5 h-3.5" /> 100% Verified
                   </div>
                </div>
                <div className="text-4xl font-extrabold text-neutral-900 font-logo tracking-tight">124 Hires</div>
                <div className="text-[10px] text-neutral-500 font-bold font-mono text-left">Archive W-8/W-9 & Identity Checks...</div>
             </div>
             <div className="space-y-3">
                {[
                  { region: "Europe (EUR)", name: "Sarah Jenkins", sub: "Frontend Engineer", status: "W-8BEN Clear" },
                  { region: "Singapore (SGD)", name: "Marcus Chen", sub: "Data Scientist", status: "Stripe ID Verified" },
                  { region: "Brazil (BRL)", name: "Alex Rivera", sub: "UI Designer", status: "W-8BEN Clear" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center bg-neutral-50/50 p-4 rounded-xl border border-neutral-200/60 hover:border-black transition-colors">
                    <div className="flex items-center gap-3 font-bold text-neutral-800 text-xs text-left">
                      <Globe className="w-4 h-4 text-neutral-600" /> 
                      <div className="flex flex-col">
                        <span>{item.name}</span>
                        <span className="text-[10px] text-neutral-400 font-bold font-mono">{item.sub} • {item.region}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-extrabold text-neutral-900 text-xs bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 rounded-full text-[9px]">{item.status}</span>
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
            <span className="text-neutral-450 font-extrabold uppercase tracking-widest text-xs font-mono">HR DIRECTORIES</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 font-logo">Built for remote operations.</h2>
            <p className="text-base text-neutral-600 font-semibold font-sans">Everything you need to onboard your remote workforce on time, compliantly, without touching manual spreadsheets.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-neutral-200 hover:border-black transition-colors">
              <RefreshCw className="w-8 h-8 text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-neutral-900 font-logo">Identity Checks</h3>
              <p className="text-neutral-500 leading-relaxed font-semibold text-xs">
                Auto-trigger photo passport and security audits on contractor invite, verifying details in under 5 minutes.
              </p>
            </div>
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-neutral-200 hover:border-black transition-colors">
              <Shield className="w-8 h-8 text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-neutral-900 font-logo">Tax Classification</h3>
              <p className="text-neutral-500 leading-relaxed font-semibold text-xs">
                Prompt and collect international tax classifications (W-8/W-9) seamlessly on remote employee onboarding.
              </p>
            </div>
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-neutral-200 hover:border-black transition-colors">
              <Landmark className="w-8 h-8 text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-neutral-900 font-logo">Device Logistics</h3>
              <p className="text-neutral-500 leading-relaxed font-semibold text-xs">
                Configure corporate laptops and screen monitors to ship automatically to talent locations upon contract signing.
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
            Simplify your contractor directory today.
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed font-medium">
            Partner with Zoiee to organize compliance, laptops, and remote contractor directories under a single dashboard.
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
