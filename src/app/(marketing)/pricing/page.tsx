import Link from "next/link";
import { Check, X, Shield, Info } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-neutral-900 font-sans">
      
      {/* Hero Section */}
      <div className="pt-44 pb-24 px-6 text-center border-b border-neutral-200/80 relative overflow-hidden fintech-grid-dots">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-rose-100/40 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <div className="text-neutral-500 font-extrabold tracking-widest text-[10px] uppercase mb-4 bg-neutral-900/5 px-3 py-1.5 w-fit mx-auto rounded-full border border-neutral-900/10">
            Pricing Matrix
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight font-logo">
            Sleek, Transparent Plans
          </h1>
          <p className="text-base text-neutral-600 max-w-2xl mx-auto font-medium">
            No complex lock-ins or hidden administration fees. Choose a plan tailored to your remote workforce size. Scale up or down at any time.
          </p>
        </div>
      </div>

      {/* Comparison Grid Matrix */}
      <div className="max-w-5xl mx-auto px-6 py-20 w-full relative z-10 flex-1">
        
        {/* Tier Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Compliance Starter */}
          <div className="bg-sky-50/60 border border-sky-100 p-8 rounded-3xl flex flex-col justify-between hover:border-sky-350 transition-colors shadow-sm text-left">
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-sky-700 bg-sky-100/60 px-2.5 py-1 rounded-md w-fit block">Compliance Starter</span>
              <div>
                <span className="text-3xl font-extrabold text-neutral-900 font-logo">$19</span>
                <span className="text-xs text-neutral-500 font-medium"> / contractor / mo</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed font-semibold">
                Perfect for growing remote teams beginning to hire international contractors compliant with local laws.
              </p>
              <div className="h-px bg-sky-200/40 my-2" />
              <ul className="space-y-2.5 text-xs text-neutral-700 font-semibold">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Compliant local agreements (120+ countries)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>W-8/W-9 auto-collection</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Multi-region profile management</span>
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <Link href="/login" className="w-full bg-white hover:bg-neutral-50 text-neutral-800 border border-sky-200 font-bold py-3 rounded-full text-xs text-center block transition-colors shadow-sm">
                Start Free Trial
              </Link>
            </div>
          </div>

          {/* Card 2: Grow Platform */}
          <div className="bg-rose-50/60 border border-rose-100 p-8 rounded-3xl flex flex-col justify-between hover:border-rose-350 transition-colors shadow-sm relative text-left">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Most Popular
            </div>
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-rose-700 bg-rose-100/60 px-2.5 py-1 rounded-md w-fit block">Grow Platform</span>
              <div>
                <span className="text-3xl font-extrabold text-neutral-900 font-logo">$49</span>
                <span className="text-xs text-neutral-500 font-medium"> / contractor / mo</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed font-semibold">
                Complete system for automated contractor onboarding, localized HR compliance, device logistics, and custom webhooks.
              </p>
              <div className="h-px bg-rose-200/40 my-2" />
              <ul className="space-y-2.5 text-xs text-neutral-700 font-semibold">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-rose-700 shrink-0" />
                  <span>Everything in Compliance Starter</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-rose-700 shrink-0" />
                  <span>Automated laptop and device shipping</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-rose-700 shrink-0" />
                  <span>Custom onboarding checklist flows</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-rose-700 shrink-0" />
                  <span>Custom event webhooks & directory API</span>
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <Link href="/login" className="w-full bg-black hover:bg-neutral-900 text-white font-bold py-3 rounded-full text-xs text-center block transition-colors shadow-sm">
                Get Started
              </Link>
            </div>
          </div>

          {/* Card 3: Enterprise */}
          <div className="bg-neutral-50/65 border border-neutral-200 p-8 rounded-3xl flex flex-col justify-between hover:border-neutral-350 transition-colors shadow-sm text-left">
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-neutral-600 bg-neutral-200/60 px-2.5 py-1 rounded-md w-fit block">Enterprise Gateway</span>
              <div>
                <span className="text-3xl font-extrabold text-neutral-900 font-logo">Custom</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed font-semibold">
                Dedicated compliance audits, custom directory integrations, private contractor benefits, and SLA-backed support.
              </p>
              <div className="h-px bg-neutral-200 my-2" />
              <ul className="space-y-2.5 text-xs text-neutral-700 font-semibold">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Everything in Grow Platform</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Custom country benefit provisions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Dedicated corporate HR account manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>SLA-backed identity & document verification</span>
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <Link href="/contact" className="w-full bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 font-bold py-3 rounded-full text-xs text-center block transition-colors shadow-sm">
                Contact Sales
              </Link>
            </div>
          </div>

        </div>

        {/* Detailed Matrix Table */}
        <div className="bg-white rounded-3xl border border-neutral-200/80 shadow-sm overflow-hidden mt-16 text-left">
          <div className="p-6 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
            <div>
              <span className="text-[9px] font-bold text-neutral-450 uppercase tracking-widest font-mono block">Feature Matrix</span>
              <h2 className="text-sm font-bold text-neutral-800">Compare platform capabilities</h2>
            </div>
          </div>

          <div className="divide-y divide-neutral-100 font-semibold text-xs text-neutral-650">
            {[
              { feat: "Compliant Local Contracts", desc: "Digital onboarding templates written by local legal experts.", t1: true, t2: true, t3: true },
              { feat: "W-8/W-9 Auto-Validation", desc: "Tax classification checks completed automatically on hire.", t1: true, t2: true, t3: true },
              { feat: "Automated Device Logistics", desc: "Ship workspace laptops and equipment globally in under 5 days.", t1: false, t2: true, t3: true },
              { feat: "Custom Onboarding Workflows", desc: "Configure checklist steps and document signing stages.", t1: false, t2: true, t3: true },
              { feat: "Custom Webhook Integrations", desc: "Trigger events on your system when contractor details update.", t1: false, t2: true, t3: true },
              { feat: "Private Healthcare Options", desc: "Coordinate private health insurance packages for remote hires.", t1: false, t2: false, t3: true },
              { feat: "Dedicated Account Manager", desc: "Direct customer success support with SLA-backed response times.", t1: false, t2: false, t3: true }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-4 p-5 hover:bg-neutral-50 items-center transition-colors">
                <div className="col-span-4 sm:col-span-1 space-y-1 pr-4">
                  <h4 className="font-bold text-neutral-900 flex items-center gap-1.5">{row.feat}</h4>
                  <p className="text-[10px] text-neutral-400 font-medium leading-relaxed">{row.desc}</p>
                </div>
                
                {/* Tier 1 */}
                <div className="col-span-4 sm:col-span-1 text-center py-2 sm:py-0 border-t sm:border-t-0 border-neutral-100 mt-2 sm:mt-0 flex justify-center">
                  <span className="sm:hidden text-neutral-400 mr-2 text-[10px] uppercase">Starter:</span>
                  {row.t1 ? <Check className="w-5 h-5 text-neutral-900 shrink-0" /> : <X className="w-4 h-4 text-neutral-200 shrink-0" />}
                </div>

                {/* Tier 2 */}
                <div className="col-span-4 sm:col-span-1 text-center py-2 sm:py-0 border-t sm:border-t-0 border-neutral-100 mt-2 sm:mt-0 flex justify-center bg-rose-50/20">
                  <span className="sm:hidden text-neutral-400 mr-2 text-[10px] uppercase">Grow:</span>
                  {row.t2 ? <Check className="w-5 h-5 text-neutral-900 shrink-0" /> : <X className="w-4 h-4 text-neutral-200 shrink-0" />}
                </div>

                {/* Tier 3 */}
                <div className="col-span-4 sm:col-span-1 text-center py-2 sm:py-0 border-t sm:border-t-0 border-neutral-100 mt-2 sm:mt-0 flex justify-center">
                  <span className="sm:hidden text-neutral-400 mr-2 text-[10px] uppercase">Enterprise:</span>
                  {row.t3 ? <Check className="w-5 h-5 text-neutral-900 shrink-0" /> : <X className="w-4 h-4 text-neutral-200 shrink-0" />}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Final CTA Section */}
      <section className="bg-black py-24 px-6 overflow-hidden relative mt-auto border-t border-neutral-200">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-neutral-800/40 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-logo">
            Simplify your contractor onboarding today.
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Configure automated onboarding checklists, sign local compliance agreements, and ship workspace laptops globally.
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
