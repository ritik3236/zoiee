import Link from "next/link";
import { ArrowRight, Compass, Shield, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-neutral-900 font-sans">
      {/* Hero Section */}
      <div className="pt-44 pb-24 px-6 text-center border-b border-neutral-200/80 relative overflow-hidden fintech-grid-dots">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-rose-100/40 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10 space-y-6">
          <div className="text-neutral-500 font-extrabold tracking-widest text-[10px] uppercase mb-4 bg-neutral-900/5 px-3 py-1.5 w-fit mx-auto rounded-full border border-neutral-900/10">Our Mission</div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight font-logo">
            We believe global contractor hiring shouldn't be so hard.
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed max-w-3xl mx-auto font-semibold">
            Zoiee was founded out of sheer frustration with manual overseas contractor onboarding and legal compliance bottlenecks. We realized that hiring companies were using fragmented spreadsheets, disconnected tools, and manual tax form tracking just to manage remote contractors. By building a unified, automated global workforce layer, we ensure remote teams can work intelligently and manage directories independently.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-black hover:bg-neutral-900 text-white px-8 py-3.5 rounded-full font-bold transition-all text-xs shadow-sm">
              Request Platform Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-neutral-800 px-8 py-3.5 rounded-full font-bold transition-colors border border-neutral-250 shadow-sm text-xs">
              View Plans
            </Link>
          </div>
        </div>
      </div>

      {/* Concrete Features / Values Section */}
      <div className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
            <span className="text-neutral-450 font-extrabold uppercase tracking-widest text-xs font-mono font-bold">GUIDING PRINCIPLES</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 font-logo">Our Core Values</h2>
            <p className="text-base text-neutral-600 font-semibold">The standards that guide every onboarding, identity audit, and contract directory we authorize.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-neutral-200 hover:border-black transition-colors">
              <Shield className="w-8 h-8 text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-neutral-900 font-logo">Ironclad Compliance</h3>
              <p className="text-neutral-500 leading-relaxed font-semibold text-xs">
                Legal compliance is our absolute baseline. We automate local tax calculations and W-8BEN/W-9 collection so your business is always audit-ready.
              </p>
            </div>
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-neutral-200 hover:border-black transition-colors">
              <Users className="w-8 h-8 text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-neutral-900 font-logo">Contractor-Centric</h3>
              <p className="text-neutral-500 leading-relaxed font-semibold text-xs">
                Remote contractors are the lifeblood of modern tech companies. We build software that respects their local compliance, works seamlessly across timezones, and simplifies their tax experience.
              </p>
            </div>
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-neutral-200 hover:border-black transition-colors">
              <Compass className="w-8 h-8 text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-neutral-900 font-logo">Frictionless UX</h3>
              <p className="text-neutral-500 leading-relaxed font-semibold text-xs">
                No complex corporate onboarding cycles or confusing portals. Zoiee features clean interfaces, automated verifications, and simple contract executions.
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
            Onboard global contractors with confidence.
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed font-medium">
            Join thousands of modern operations managing compliance, laptops, and contractor directories globally under Zoiee.
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
