import Link from "next/link";
import { ArrowRight, Laptop, Shield, Box, CheckCircle2 } from "lucide-react";

export default function ITDevicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-neutral-900 font-sans">
      {/* Hero Section */}
      <div className="pt-44 pb-24 px-6 border-b border-neutral-200/80 relative overflow-hidden fintech-grid-dots">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-rose-100/40 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-left space-y-6">
            <div className="text-neutral-500 font-extrabold tracking-widest text-[10px] uppercase flex items-center gap-2 bg-neutral-900/5 px-3 py-1.5 w-fit rounded-full border border-neutral-200">
              <Laptop className="w-3.5 h-3.5 text-neutral-900" /> IT & Devices
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight font-logo">
              Equip remote contractors globally.
            </h1>
            <p className="text-base text-neutral-600 leading-relaxed font-semibold">
              The moment a contractor contract is approved, Zoiee coordinates laptop shipments, handles customs declaration papers, and manages secure device MDM registrations.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-black hover:bg-neutral-900 text-white px-8 py-3.5 rounded-full font-bold transition-all text-xs shadow-sm">
              Request Devices Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          {/* Logistics onboarding timeline */}
          <div className="bg-white p-8 rounded-3xl border border-neutral-250 shadow-sm relative text-neutral-800 space-y-6">
             <div className="text-xs font-bold text-neutral-450 uppercase tracking-widest font-mono text-left">Logistics Onboarding Flow</div>
             <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-5 before:w-0.5 before:bg-neutral-200">
               
               <div className="relative flex items-start gap-4">
                 <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white shadow-sm shrink-0 z-10 font-bold text-xs">1</div>
                 <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 shadow-sm text-left flex-1">
                   <div className="font-bold text-xs text-neutral-900">Device Procurement</div>
                   <div className="text-[10px] text-neutral-500 font-semibold mt-0.5">MacBook Pro M3 Max cataloged and configured</div>
                 </div>
               </div>

               <div className="relative flex items-start gap-4">
                 <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white shadow-sm shrink-0 z-10 font-bold text-xs">2</div>
                 <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 shadow-sm text-left flex-1">
                   <div className="font-bold text-xs text-neutral-900">Customs & Shipping</div>
                   <div className="text-[10px] text-neutral-500 font-semibold mt-0.5">Customs declarations cleared for Brazil delivery</div>
                 </div>
               </div>

               <div className="relative flex items-start gap-4">
                 <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 text-neutral-400 shadow-sm shrink-0 z-10 font-bold text-xs border border-neutral-200">3</div>
                 <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 shadow-sm text-left flex-1 opacity-50">
                   <div className="font-bold text-xs text-neutral-900">MDM Active Sync</div>
                   <div className="text-[10px] text-neutral-500 font-semibold mt-0.5">Pending contractor local login and verification...</div>
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
            <span className="text-neutral-450 font-extrabold uppercase tracking-widest text-xs font-mono">LOGISTICS HIGHLIGHTS</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 font-logo">Simplify remote IT logistics.</h2>
            <p className="text-base text-neutral-600 font-semibold font-sans font-medium">Equip your global engineering, design, and operations teams compliantly in under 5 days.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-neutral-200 hover:border-black transition-colors">
              <Box className="w-8 h-8 text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-neutral-900 font-logo">Device Shipments</h3>
              <p className="text-neutral-500 leading-relaxed font-semibold text-xs">
                We handle the procurement, configuration, and shipping of MacBooks, iPhones, and custom hardware accessories worldwide.
              </p>
            </div>
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-neutral-200 hover:border-black transition-colors">
              <Shield className="w-8 h-8 text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-neutral-900 font-logo">Security & MDM</h3>
              <p className="text-neutral-500 leading-relaxed font-semibold text-xs">
                Devices ship pre-registered with corporate Mobile Device Management (MDM) platforms, enforcing security protocols automatically.
              </p>
            </div>
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-neutral-200 hover:border-black transition-colors">
              <Laptop className="w-8 h-8 text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-neutral-900 font-logo">Offboarding Returns</h3>
              <p className="text-neutral-500 leading-relaxed font-semibold text-xs">
                When a remote contract terminates, Zoiee handles laptop collections, returns shipping labels, and data wipe verifications.
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
            Deploy remote IT gear with ease.
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed font-medium">
            Ship work laptops and accessories globally, tracking MDM setup status directly under Zoiee IT Portal.
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
