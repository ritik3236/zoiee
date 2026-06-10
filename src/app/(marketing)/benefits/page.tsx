import Link from "next/link";
import { ArrowRight, Shield, Award, Heart, Check } from "lucide-react";

export default function BenefitsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-neutral-900 font-sans">
      {/* Hero Section */}
      <div className="pt-44 pb-24 px-6 border-b border-neutral-200/80 relative overflow-hidden fintech-grid-dots">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-rose-100/40 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-left space-y-6">
            <div className="text-neutral-500 font-extrabold tracking-widest text-[10px] uppercase flex items-center gap-2 bg-neutral-900/5 px-3 py-1.5 w-fit rounded-full border border-neutral-200">
              <Heart className="w-3.5 h-3.5 text-neutral-900" /> Remote Benefits
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight font-logo">
              Premium international benefits, simplified.
            </h1>
            <p className="text-base text-neutral-600 leading-relaxed font-semibold">
              Provide remote contractors with localized health coverage, pensions, and workspace allowances. Retain top talent by offering tier-1 benefits in 120+ countries.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-black hover:bg-neutral-900 text-white px-8 py-3.5 rounded-full font-bold transition-all text-xs shadow-sm">
              Request Benefits Setup <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          {/* Health plan card overview */}
          <div className="bg-white p-8 rounded-3xl border border-neutral-250 shadow-sm relative text-neutral-800 space-y-6">
             <div className="bg-neutral-50/60 rounded-2xl p-6 border border-neutral-200 shadow-inner">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-left">
                    <div className="font-extrabold text-base text-neutral-900 mb-1 font-logo">Global Health Shield</div>
                    <div className="text-emerald-700 border border-emerald-250 bg-emerald-50 font-bold text-[10px] px-2.5 py-0.5 rounded-full inline-block">Plan Active</div>
                  </div>
                  <Heart className="w-6 h-6 text-neutral-900 fill-neutral-900/5" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-450 font-bold uppercase tracking-wider text-[10px] font-mono">Coverage Area</span>
                    <span className="font-bold text-neutral-800">Worldwide (Excl. US/Canada option)</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-450 font-bold uppercase tracking-wider text-[10px] font-mono">Deductible Limit</span>
                    <span className="font-bold text-neutral-800">$0 Deductible copay</span>
                  </div>
                  <div className="h-px bg-neutral-200 w-full my-2"></div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-450 font-bold uppercase tracking-wider text-[10px] font-mono">Platform Admin</span>
                    <span className="font-bold text-neutral-900">Managed by Zoiee</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Concrete Features Section */}
      <div className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
            <span className="text-neutral-450 font-extrabold uppercase tracking-widest text-xs font-mono font-bold">BENEFITS HIGHLIGHTS</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 font-logo">Retain top international talent.</h2>
            <p className="text-base text-neutral-600 font-semibold font-sans font-medium">Coordinate private health insurance plans, pension matching, and office stipends globally without manual compliance forms.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-neutral-200 hover:border-black transition-colors">
              <Shield className="w-8 h-8 text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-neutral-900 font-logo">Private Health Shield</h3>
              <p className="text-neutral-500 leading-relaxed font-semibold text-xs">
                Offer contractors private medical, dental, and vision insurance packages complying with local healthcare regulations.
              </p>
            </div>
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-neutral-200 hover:border-black transition-colors">
              <Award className="w-8 h-8 text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-neutral-900 font-logo">Workspace Stipends</h3>
              <p className="text-neutral-500 leading-relaxed font-semibold text-xs">
                Set monthly recurring allowances for co-working access, high-speed remote internet, or wellness programs directly from the dashboard.
              </p>
            </div>
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-neutral-200 hover:border-black transition-colors">
              <Heart className="w-8 h-8 text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-neutral-900 font-logo">Pension Schemes</h3>
              <p className="text-neutral-500 leading-relaxed font-semibold text-xs">
                Coordinate retirement contributions and local pension plans automatically, deducting allocations directly from contractor payroll runs.
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
            Deploy international contractor benefits today.
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed font-medium">
            Keep remote contractors happy and compliantly covered in over 120 countries under Zoiee Benefits.
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
