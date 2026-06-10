import Link from "next/link";
import { Zap, ChevronDown } from "lucide-react";
import { MobileNav } from "@/components/MobileNav";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-neutral-100 selection:text-black bg-[#FAF9F6] text-neutral-900">
      {/* Navigation - Global Mega Menu */}
      <header className="absolute top-0 w-full z-50 border-b border-neutral-200/80 bg-white/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-3.5 h-3.5 rounded-full bg-black"></span>
            <span className="font-extrabold text-2xl tracking-tight text-black font-logo transition-colors">Zoiee</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-neutral-600 h-full">
            
            {/* Mega Menu Dropdown */}
            <div className="group h-full flex items-center">
              <button className="flex items-center gap-1 hover:text-black transition-colors py-8 cursor-pointer">
                Platform <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Mega Menu Panel */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden text-neutral-800 flex">
                {/* Left Side: Product Categories */}
                <div className="flex-[2] p-8 grid grid-cols-2 gap-x-8 gap-y-10">
                  
                  {/* Contractor Directory & Compliance */}
                  <div>
                    <h4 className="font-bold text-xs text-neutral-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Zap className="w-3 h-3 text-neutral-950" /> Directory & Compliance
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/global-payroll" className="block hover:bg-neutral-50 p-2 -ml-2 rounded-xl transition-colors group/link">
                          <div className="font-bold text-sm text-neutral-800 group-hover/link:text-black transition-colors">Global Directory</div>
                          <div className="text-xs text-neutral-500 font-medium mt-0.5">Automate contractor onboarding in 120+ countries.</div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/core-hr" className="block hover:bg-neutral-50 p-2 -ml-2 rounded-xl transition-colors group/link">
                          <div className="font-bold text-sm text-neutral-800 group-hover/link:text-black transition-colors">Compliance Hub</div>
                          <div className="text-xs text-neutral-500 font-medium mt-0.5">Local tax filing, W-8/W-9 automation, and legal safety.</div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/zoiee-hire" className="block hover:bg-neutral-50 p-2 -ml-2 rounded-xl transition-colors group/link">
                          <div className="font-bold text-sm text-neutral-800 group-hover/link:text-black transition-colors">Zoiee Sourcing</div>
                          <div className="text-xs text-neutral-500 font-medium mt-0.5">Hire and onboard vetted tech, finance, & sales experts.</div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* IT & Contractor Benefits */}
                  <div>
                    <h4 className="font-bold text-xs text-neutral-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Zap className="w-3 h-3 text-neutral-950" /> Equipment & Benefits
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/it-devices" className="block hover:bg-neutral-50 p-2 -ml-2 rounded-xl transition-colors group/link">
                          <div className="font-bold text-sm text-neutral-800 group-hover/link:text-black transition-colors">IT & Devices</div>
                          <div className="text-xs text-neutral-500 font-medium mt-0.5">Ship laptops, phones, and accessories globally.</div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/benefits" className="block hover:bg-neutral-50 p-2 -ml-2 rounded-xl transition-colors group/link">
                          <div className="font-bold text-sm text-neutral-800 group-hover/link:text-black transition-colors">Contractor Benefits</div>
                          <div className="text-xs text-neutral-500 font-medium mt-0.5">Private health insurance and pensions for remote teams.</div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                </div>

                {/* Right Side: Featured/Highlight */}
                <div className="flex-[1] bg-neutral-50 p-8 border-l border-neutral-200 flex flex-col">
                  <h4 className="font-bold text-xs text-neutral-400 uppercase tracking-widest mb-4">Real-Time Pulse</h4>
                  <div className="flex-1 bg-white rounded-2xl border border-neutral-200 p-4 flex flex-col group/feature cursor-pointer hover:border-black transition-colors shadow-sm">
                    <div className="w-full h-24 bg-neutral-50 rounded-xl mb-4 overflow-hidden relative border border-neutral-200/50">
                       <div className="absolute inset-0 bg-gradient-to-tr from-neutral-100 to-neutral-200 animate-pulse"></div>
                       <div className="absolute inset-0 flex items-center justify-center">
                         <span className="font-bold text-sm text-neutral-800 font-logo">Zoiee Pulse Engine</span>
                       </div>
                    </div>
                    <h5 className="font-bold text-sm text-neutral-800 group-hover/feature:text-black transition-colors">Workforce Compliance Hub</h5>
                    <p className="text-xs text-neutral-500 mt-1 font-medium leading-relaxed">Instantly verify identity credentials and generate local contractor profiles.</p>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className="hover:text-black transition-colors py-8">Solutions</Link>
            <Link href="/pricing" className="hover:text-black transition-colors py-8">Pricing</Link>
          </nav>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/login" className="text-sm font-semibold text-neutral-500 hover:text-black hidden lg:block transition-colors">
              Log in
            </Link>
            <Link href="/contact" className="bg-black hover:bg-neutral-900 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-colors duration-150 hidden lg:block shadow-sm">
              Get a demo
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-[#FAF9F6]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 pt-24 pb-12 overflow-hidden relative">
        <div className="max-w-[1312px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-10 mb-20">
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <span className="w-3.5 h-3.5 rounded-full bg-black"></span>
                <span className="font-extrabold text-3xl tracking-tight text-black font-logo">Zoiee</span>
              </Link>
              <p className="text-neutral-500 max-w-sm mb-8 font-medium leading-relaxed text-sm">
                The global workforce layer. Simplify contractor onboarding, compliance directory, and local tax filings.
              </p>
              
              {/* Newsletter */}
              <div className="bg-neutral-50 p-1.5 rounded-full border border-neutral-200 flex items-center max-w-sm focus-within:border-black transition-all duration-300">
                <input type="email" placeholder="Get platform updates" className="bg-transparent border-none outline-none px-4 w-full text-xs font-semibold placeholder:text-neutral-400 text-neutral-800" />
                <button className="bg-black hover:bg-neutral-800 text-white text-[10px] font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors duration-300 whitespace-nowrap shadow-sm cursor-pointer">Subscribe</button>
              </div>
            </div>
            
            {/* Link Columns */}
            <div className="col-span-1">
              <h4 className="font-bold text-neutral-400 mb-6 uppercase tracking-widest text-xs">Platform</h4>
              <ul className="space-y-4 text-sm text-neutral-600 font-medium">
                <li><Link href="/global-payroll" className="hover:text-black hover:translate-x-1 transition-all inline-block">Global Directory</Link></li>
                <li><Link href="/core-hr" className="hover:text-black hover:translate-x-1 transition-all inline-block">Compliance Hub</Link></li>
                <li><Link href="/zoiee-hire" className="hover:text-black hover:translate-x-1 transition-all inline-block">Zoiee Sourcing</Link></li>
                <li><Link href="/it-devices" className="hover:text-black hover:translate-x-1 transition-all inline-block">IT & Devices</Link></li>
                <li><Link href="/benefits" className="hover:text-black hover:translate-x-1 transition-all inline-block">Contractor Benefits</Link></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="font-bold text-neutral-400 mb-6 uppercase tracking-widest text-xs">Resources</h4>
              <ul className="space-y-4 text-sm text-neutral-600 font-medium">
                <li><Link href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">Workforce Blog</Link></li>
                <li><Link href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">Customer Stories</Link></li>
                <li><Link href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">Compliance Docs</Link></li>
                <li><Link href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">Platform API</Link></li>
                <li><Link href="#" className="flex items-center gap-2 hover:text-black hover:translate-x-1 transition-all w-fit">Community <span className="bg-neutral-900/10 text-black text-[9px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wide border border-neutral-900/20">New</span></Link></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="font-bold text-neutral-400 mb-6 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-4 text-sm text-neutral-600 font-medium">
                <li><Link href="/about" className="hover:text-black hover:translate-x-1 transition-all inline-block">About Us</Link></li>
                <li><Link href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">Careers</Link></li>
                <li><Link href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">Security First</Link></li>
                <li><Link href="/contact" className="hover:text-black hover:translate-x-1 transition-all inline-block">Contact Sales</Link></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="font-bold text-neutral-400 mb-6 uppercase tracking-widest text-xs">Legal</h4>
              <ul className="space-y-4 text-sm text-neutral-600 font-medium">
                <li><Link href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-black hover:translate-x-1 transition-all inline-block">compliance Guarantee</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-400 font-medium relative">
            <p>© {new Date().getFullYear()} Zoiee Technologies Inc. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-black transition-colors">Compliance Board</Link>
              <Link href="#" className="hover:text-black transition-colors">LinkedIn</Link>
              <Link href="#" className="hover:text-black transition-colors">System Status</Link>
            </div>
          </div>
        </div>

        {/* Massive Background Text */}
        <div className="w-full flex justify-center mt-4 md:-mt-8 select-none pointer-events-none opacity-[0.03] overflow-hidden">
          <h1 className="text-[12vw] leading-none font-bold tracking-tighter whitespace-nowrap text-black font-logo">ZOIEE WORKFORCE</h1>
        </div>
      </footer>
    </div>
  );
}
