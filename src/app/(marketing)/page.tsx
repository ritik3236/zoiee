"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Calendar, 
  Zap, 
  ChevronRight, 
  TrendingUp, 
  Clock, 
  Lock, 
  Workflow, 
  Sparkles, 
  Server, 
  DollarSign, 
  ArrowUpRight, 
  TrendingDown, 
  Layers, 
  Check, 
  Plus, 
  ArrowRightLeft,
  Users,
  FileText,
  CreditCard,
  Percent,
  PlusCircle,
  HelpCircle,
  Menu,
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PARTNER_LOGOS = [
  { name: "Airbnb", domain: "airbnb.com" },
  { name: "Dropbox", domain: "dropbox.com" },
  { name: "Slack", domain: "slack.com" },
  { name: "GitHub", domain: "github.com" },
  { name: "Stripe", domain: "stripe.com" },
  { name: "Figma", domain: "figma.com" },
  { name: "Netflix", domain: "netflix.com" }
];

const ANALYTICS_DATA = {
  weekly: [
    { label: "Mon", amount: 12400, transactions: 14 },
    { label: "Tue", amount: 18900, transactions: 22 },
    { label: "Wed", amount: 15600, transactions: 19 },
    { label: "Thu", amount: 28400, transactions: 35 },
    { label: "Fri", amount: 22100, transactions: 29 },
    { label: "Sat", amount: 9800, transactions: 10 },
    { label: "Sun", amount: 14500, transactions: 12 }
  ],
  monthly: [
    { label: "Week 1", amount: 78000, transactions: 110 },
    { label: "Week 2", amount: 92000, transactions: 145 },
    { label: "Week 3", amount: 115000, transactions: 190 },
    { label: "Week 4", amount: 84000, transactions: 130 }
  ],
  annual: [
    { label: "Q1", amount: 280000, transactions: 420 },
    { label: "Q2", amount: 340000, transactions: 510 },
    { label: "Q3", amount: 410000, transactions: 630 },
    { label: "Q4", amount: 390000, transactions: 580 }
  ]
};

export default function MarketingHomePage() {
  const [analyticsTab, setAnalyticsTab] = useState<"weekly" | "monthly" | "annual">("weekly");
  const [selectedCurrency, setSelectedCurrency] = useState<"USD" | "EUR" | "GBP">("USD");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Currency multiplier
  const currencySymbol = selectedCurrency === "USD" ? "$" : selectedCurrency === "EUR" ? "€" : "£";
  const currencyRate = selectedCurrency === "USD" ? 1 : selectedCurrency === "EUR" ? 0.92 : 0.78;

  const currentAnalytics = ANALYTICS_DATA[analyticsTab];
  const maxAmount = Math.max(...currentAnalytics.map(d => d.amount));
  
  const totalPayrollValue = currentAnalytics.reduce((acc, curr) => acc + curr.amount, 0) * currencyRate;
  const totalTransactions = currentAnalytics.reduce((acc, curr) => acc + curr.transactions, 0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-[#FAF9F6] text-neutral-900 overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION: Modern, Asymmetric Left-Aligned Layout */}
      <section className="relative pt-44 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden fintech-grid-dots">
        {/* Soft decorative background gradients */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-sky-200/40 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-40 left-10 w-[300px] h-[300px] bg-pink-100/40 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Column: Typography, bullets, actions */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-neutral-600 font-mono">
                Now Live: Global Contractors V2
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-neutral-900 font-logo">
              Work Intelligently.<br />
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-500 bg-clip-text text-transparent">
                Pay Independently.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-medium max-w-xl">
              The automated contractor payments and tax compliance system built for global remote teams. Dispatch funds, manage local W-8/W-9 requirements, and ship work devices instantly.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 text-sm font-semibold text-neutral-700">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-neutral-950 shrink-0" />
                <span>Zero FX markups on local currency contractor payouts</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-neutral-950 shrink-0" />
                <span>Auto-generated 1099-NEC & local country tax withholding</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-neutral-950 shrink-0" />
                <span>Compliant agreements and NDAs local to 120+ regions</span>
              </div>
            </div>

            {/* Hero CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/contact" className="px-8 py-4 bg-black hover:bg-neutral-900 text-white font-bold rounded-full shadow-md text-sm text-center transition-all">
                Get Started
              </Link>
              <Link href="/pricing" className="px-8 py-4 bg-white border border-neutral-200 hover:border-neutral-850 hover:bg-neutral-50 text-neutral-800 font-bold rounded-full text-sm text-center transition-all shadow-sm">
                See Pricing & Plans
              </Link>
            </div>

            {/* Trust badge */}
            <div className="pt-6 flex items-center gap-4 text-xs font-semibold text-neutral-400 border-t border-neutral-200/60 max-w-lg">
              <span className="uppercase tracking-widest text-[9px] font-bold font-mono bg-neutral-150 px-2 py-0.5 rounded-md text-neutral-500">TRUSTED</span>
              <span>Onboarding 12,000+ global contractors monthly across tech and logistics.</span>
            </div>
          </div>

          {/* Right Column: Floating glassmorphic cards mockup */}
          <div className="lg:col-span-5 w-full flex items-center justify-center relative">
            
            {/* Background design elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-100/30 to-rose-100/30 rounded-3xl -rotate-2 scale-105 pointer-events-none border border-neutral-200/50" />
            
            <div className="relative w-full max-w-[380px] p-6 bg-white/70 backdrop-blur-md rounded-3xl border border-neutral-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.04)] space-y-6">
              
              {/* Card 1: Total Payroll Dispatched */}
              <div className="bg-white p-5 rounded-2xl border border-neutral-200/60 shadow-sm relative overflow-hidden group hover:border-neutral-900 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono">Total Dispatched</span>
                  <span className="text-emerald-600 bg-emerald-50 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" /> +12.4%
                  </span>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <h3 className="text-3xl font-extrabold text-neutral-900 tracking-tight font-logo">$44,089</h3>
                  <span className="text-xs text-neutral-500 font-medium">USD / Month</span>
                </div>
                <p className="mt-2 text-xs text-neutral-450 font-medium">Auto-approved payroll routing to international contractors.</p>
              </div>

              {/* Card 2: Wallet Card (Pink/Blue Gradient) */}
              <div className="bg-gradient-to-tr from-neutral-900 to-neutral-850 p-6 rounded-2xl text-white shadow-md relative overflow-hidden group hover:scale-[1.01] transition-transform">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-x-8 -translate-y-8" />
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest font-mono">Zoiee Smart Card</span>
                    <h4 className="text-xs font-bold text-neutral-200 mt-0.5">Alex Rivera</h4>
                  </div>
                  <CreditCard className="w-5 h-5 text-neutral-400" />
                </div>
                <div className="mt-8">
                  <span className="text-[10px] font-medium text-neutral-400">Available Balance</span>
                  <div className="text-2xl font-black font-logo tracking-tight mt-0.5">$1,469.00</div>
                </div>
                <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-neutral-400">
                  <span>•••• 9012</span>
                  <span>08/29</span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Active Contractors */}
                <div className="bg-white p-4 rounded-xl border border-neutral-200/60 shadow-sm flex flex-col justify-between">
                  <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest font-mono">Contractors</span>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xl font-bold text-neutral-900">124</span>
                    <Users className="w-4 h-4 text-neutral-600" />
                  </div>
                  <div className="mt-2 flex -space-x-1.5 overflow-hidden">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="inline-block h-4 w-4 rounded-full ring-2 ring-white bg-neutral-100 text-[8px] flex items-center justify-center font-bold text-neutral-600">
                        {i}
                      </div>
                    ))}
                    <div className="inline-block h-4 w-4 rounded-full ring-2 ring-white bg-neutral-900 text-[7px] text-white flex items-center justify-center font-bold">
                      +
                    </div>
                  </div>
                </div>

                {/* Approved Invoices */}
                <div className="bg-white p-4 rounded-xl border border-neutral-200/60 shadow-sm flex flex-col justify-between">
                  <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest font-mono">Invoices</span>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xl font-bold text-neutral-900">100%</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <span className="mt-2 text-[10px] font-medium text-neutral-500">Fully Audited & Paid</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. LOGO STRIP Section */}
      <section className="py-10 bg-white border-y border-neutral-200/60 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6 font-mono">
            Powers compliant contractor payments for global innovators
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 opacity-40">
            {PARTNER_LOGOS.map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2 group cursor-default">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={`https://img.logo.dev/${logo.domain}?token=pk_KjubQJ-VS0K5ygwjPRKxOg`} 
                  alt={`${logo.name} logo`} 
                  className="w-5 h-5 object-contain grayscale" 
                  onError={(e) => { e.currentTarget.style.display = "none"; }} 
                />
                <span className="font-logo text-sm font-bold text-neutral-700 tracking-wider group-hover:text-black transition-colors">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION 1: PAYMENTS & LOGISTICS */}
      <section className="py-24 px-6 bg-[#FAF9F6] border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Smart Pay Card visualizer */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative p-6 sm:p-8 bg-white border border-neutral-200 rounded-3xl shadow-[0_15px_30px_rgba(0,0,0,0.02)] space-y-6">
              
              {/* Wallet Header */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-neutral-450 uppercase tracking-widest font-mono">Corporate Ledger</span>
                  <h3 className="text-lg font-bold text-neutral-800">Zoiee Smart Pay Card</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-neutral-450">Limit: $50,000</span>
                </div>
              </div>

              {/* Card visual representation */}
              <div className="bg-neutral-900 rounded-2xl p-6 text-white shadow-sm relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold font-logo text-neutral-200">ZOIEE</span>
                  <span className="text-[10px] font-mono text-neutral-400">Debit Card</span>
                </div>
                <div className="mt-8 flex justify-between items-end">
                  <div>
                    <span className="text-[9px] text-neutral-400">Card Balance</span>
                    <div className="text-3xl font-black font-logo tracking-tight mt-0.5">$16,058.94</div>
                  </div>
                  <div className="w-10 h-7 bg-white/10 rounded-lg flex items-center justify-center font-bold text-xs">
                    VISA
                  </div>
                </div>
              </div>

              {/* Transactions List */}
              <div className="space-y-3">
                <span className="text-[9px] font-bold text-neutral-450 uppercase tracking-widest font-mono block">Recent Transactions</span>
                <div className="space-y-2.5">
                  {[
                    { merchant: "GitHub Copilot", category: "Software Development", amount: -19.00, date: "Just now" },
                    { merchant: "Vercel Pro Tier", category: "Hosting & Cloud", amount: -20.00, date: "1 hour ago" },
                    { merchant: "Figma Team Plan", category: "Design Tools", amount: -45.00, date: "Yesterday" }
                  ].map((tx, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 hover:bg-neutral-50 rounded-xl transition-colors border border-neutral-100">
                      <div>
                        <h4 className="text-xs font-bold text-neutral-800">{tx.merchant}</h4>
                        <span className="text-[10px] text-neutral-450">{tx.category} • {tx.date}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-neutral-800">${Math.abs(tx.amount).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copywriting and bullets */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-neutral-500 font-extrabold uppercase tracking-widest text-[10px] bg-neutral-900/5 px-3 py-1 rounded-full border border-neutral-900/10">
              Contractor Logistics
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight font-logo">
              Streamline Sales With Seamless Payments.
            </h2>
            <p className="text-neutral-600 text-sm font-semibold leading-relaxed">
              Ditch traditional wire transfers and complex spreadsheets. Zoiee consolidates your entire international payroll into a single dashboard. Pay teams instantly, track business expenses with physical and virtual debit cards, and maintain total compliance.
            </p>
            
            <ul className="space-y-4 pt-4 border-t border-neutral-200/80">
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-neutral-950 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Automated Tax Forms & W-8/W-9</h4>
                  <p className="text-neutral-500 text-xs font-medium mt-0.5">Collect tax identifiers on onboarding and auto-generate year-end 1099 filings.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-neutral-950 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Zero FX Markups & Real Exchange Rates</h4>
                  <p className="text-neutral-500 text-xs font-medium mt-0.5">Convert currency at standard interbank rates without hidden platform percentages.</p>
                </div>
              </li>
            </ul>

            <div className="pt-4">
              <Link href="/contact" className="px-8 py-3.5 bg-black hover:bg-neutral-900 text-white font-bold rounded-full text-xs transition-colors inline-block shadow-sm">
                Create Account
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SECTION 2: INTERACTIVE ANALYTICS PLAYGROUND */}
      <section className="py-24 px-6 bg-white border-b border-neutral-200/80 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:10rem_10rem] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Copywriting and bullets */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-neutral-550 font-extrabold uppercase tracking-widest text-[10px] bg-neutral-900/5 px-3 py-1 rounded-full border border-neutral-900/10">
              Analytics Playground
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight font-logo">
              Sell Smarter With Fast, Secure Payments.
            </h2>
            <p className="text-neutral-600 text-sm font-semibold leading-relaxed">
              Get an instant audit overview of all contractor invoices, ongoing billing hitches, and payout distributions. Review detailed analytics, toggle currency representations, and monitor payout categories from one central screen.
            </p>
            
            <div className="space-y-4 pt-6 border-t border-neutral-250 text-xs font-semibold">
              <div className="flex gap-3">
                <Workflow className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-neutral-800">Automated Webhooks System</h4>
                  <p className="text-neutral-500 font-medium leading-relaxed mt-0.5">Deploy webhooks that trigger when invoices are approved, notifying internal ledger databases.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Lock className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-neutral-800">Compliant Multi-currency Vaults</h4>
                  <p className="text-neutral-500 font-medium leading-relaxed mt-0.5">Secure currency holds in fully audited local escrow bank accounts before transfer completion.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Beautiful Interactive Charting Dashboard */}
          <div className="lg:col-span-7 bg-[#FAF9F6] border border-neutral-200 rounded-3xl overflow-hidden shadow-sm p-6 sm:p-8 space-y-6">
            
            {/* Control panel header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-neutral-200/80 pb-6">
              
              {/* Analytics tab toggle */}
              <div className="flex gap-1 bg-white p-1 rounded-full border border-neutral-200/80">
                {[
                  { id: "weekly", label: "Weekly" },
                  { id: "monthly", label: "Monthly" },
                  { id: "annual", label: "Annual" }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setAnalyticsTab(tab.id as any)}
                    className={`text-xs px-3.5 py-1.5 rounded-full transition-all cursor-pointer font-bold ${
                      analyticsTab === tab.id 
                        ? "bg-black text-white" 
                        : "text-neutral-500 hover:text-black"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Currency Selector */}
              <div className="flex gap-2">
                {[
                  { id: "USD", label: "USD ($)" },
                  { id: "EUR", label: "EUR (€)" },
                  { id: "GBP", label: "GBP (£)" }
                ].map(curr => (
                  <button
                    key={curr.id}
                    onClick={() => setSelectedCurrency(curr.id as any)}
                    className={`text-[10px] font-mono px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer font-bold ${
                      selectedCurrency === curr.id
                        ? "bg-white text-black border-neutral-800 shadow-sm"
                        : "bg-transparent text-neutral-500 border-neutral-200 hover:text-black"
                    }`}
                  >
                    {curr.label}
                  </button>
                ))}
              </div>

            </div>

            {/* Total value display */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest font-mono">Volume Processed</span>
                <div className="text-3xl font-black text-neutral-900 mt-1 font-logo">
                  {currencySymbol}{Math.round(totalPayrollValue).toLocaleString()}
                </div>
              </div>
              <div>
                <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest font-mono">Invoice Volume</span>
                <div className="text-3xl font-black text-neutral-900 mt-1 font-logo">
                  {totalTransactions} Paid
                </div>
              </div>
            </div>

            {/* Graph bars visual */}
            <div className="pt-4">
              <div className="flex justify-between items-center text-[9px] text-neutral-400 font-bold uppercase tracking-wider mb-4 font-mono">
                <span>Distribution Volume Ledger</span>
                <span className="text-neutral-900 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-black"></span> Real-time Live
                </span>
              </div>
              
              <div className="flex gap-2 sm:gap-4 items-end h-48 w-full px-1 border-b border-neutral-200">
                {currentAnalytics.map((data, idx) => {
                  const barHeightPercent = (data.amount / maxAmount) * 100;
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div className="relative w-full group flex justify-center">
                        {/* Tooltip on hover */}
                        <div className="absolute bottom-full mb-2 bg-neutral-900 text-white text-[9px] font-mono font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm">
                          {currencySymbol}{Math.round(data.amount * currencyRate).toLocaleString()}
                        </div>
                        <div 
                          className="w-full bg-neutral-900 rounded-t-lg hover:bg-neutral-800 transition-colors cursor-pointer" 
                          style={{ height: `${Math.max(barHeightPercent, 10)}%`, minHeight: '16px' }}
                        />
                      </div>
                      <span className="text-[9px] font-mono font-bold text-neutral-500 truncate w-full text-center">
                        {data.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Accessible Data Table for Screen Readers */}
              <div className="sr-only">
                <table>
                  <caption>Global Contractor Payments Volume</caption>
                  <thead>
                    <tr>
                      <th scope="col">Period</th>
                      <th scope="col">Volume ({selectedCurrency})</th>
                      <th scope="col">Transactions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentAnalytics.map((data, idx) => (
                      <tr key={idx}>
                        <td>{data.label}</td>
                        <td>{currencySymbol}{Math.round(data.amount * currencyRate).toLocaleString()}</td>
                        <td>{data.transactions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>

            {/* Footer metrics */}
            <div className="bg-white p-4 rounded-2xl border border-neutral-250 flex items-center justify-between text-[10px] font-mono font-bold text-neutral-500 shadow-sm">
              <div className="flex items-center gap-2 text-neutral-700">
                <Clock className="w-3.5 h-3.5 text-neutral-900" /> Automatic invoice syncing active
              </div>
              <div>
                Platform FX Margin: <span className="text-emerald-600 font-bold">0.0%</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FEATURES GRID (Three-Column Layout) */}
      <section className="py-24 px-6 border-b border-neutral-200/80 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-neutral-500 font-extrabold uppercase tracking-widest text-[10px] bg-neutral-900/5 px-3 py-1 rounded-full border border-neutral-900/10">
              Features System
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 font-logo">
              Engineered For Compliance.
            </h2>
            <p className="text-neutral-600 text-sm font-semibold leading-relaxed">
              We handle onboarding logistics, contractor classifications, health benefits, and banking details. You focus on building global products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Secure Contractor Portal",
                description: "Onboard remote contractors with pre-vetted legal contracts, bank deposit verifications, and automated W-8/W-9 tax classification pipelines.",
                icon: Shield,
                badge: "Legal Guard"
              },
              {
                title: "Global Tax Compliance",
                description: "Local country tax rules, VAT/GST tracking, and automated year-end filings. Seamlessly export structured 1099 datasets directly to QuickBooks or Xero.",
                icon: FileText,
                badge: "100% Compliant"
              },
              {
                title: "Real-Time Balance Verification",
                description: "Instantly verify payroll account funds before kicking off wire transfers, eliminating delayed contractor payouts and administrative bounces.",
                icon: DollarSign,
                badge: "Instant Sync"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-sm flex flex-col justify-between hover:border-neutral-900 transition-colors">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-neutral-50 border border-neutral-200/50 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-neutral-900" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">{feature.title}</h3>
                  <p className="text-neutral-500 text-xs font-semibold leading-relaxed">{feature.description}</p>
                </div>
                <div className="pt-6 flex justify-between items-center text-[10px] font-mono font-bold text-neutral-450 uppercase tracking-widest border-t border-neutral-100 mt-6">
                  <span>{feature.badge}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-900" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ & SUPPORT SECTION */}
      <section className="py-24 px-6 border-b border-neutral-200/80 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: FAQs Accordion */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-neutral-500 font-extrabold uppercase tracking-widest text-[10px] bg-neutral-900/5 px-3 py-1 rounded-full border border-neutral-900/10">
                Support & Help
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 mt-4 font-logo">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-600 text-sm font-semibold mt-2">
                Everything you need to know about contractor payouts, local currency conversions, and tax regulations.
              </p>
            </div>

            <div className="space-y-4 border-t border-neutral-200/80 pt-6">
              {[
                { 
                  q: "How does Zoiee process contractor currency payouts?", 
                  a: "We support deposits in 80+ local currencies via local banking networks (like SEPA, ACH, Pix, and Faster Payments), avoiding expensive SWIFT wire fees and standard platform exchange markups." 
                },
                { 
                  q: "How does the automated tax filing system work?", 
                  a: "During self-onboarding, contractors complete digital W-8BEN or W-9 forms. Zoiee tracks payment thresholds throughout the year and automatically generates compliant end-of-year 1099-NEC forms for US-based operations." 
                },
                { 
                  q: "Can we configure multi-currency payroll templates?", 
                  a: "Yes. Our dashboard allows you to define contractor payment templates grouped by team, department, or location, making it simple to execute batch payrolls across multiple currencies in one click." 
                },
                { 
                  q: "Is there a custom platform API available?", 
                  a: "Absolutely. Developers can leverage our REST API and webhook events to programmatically trigger contractor onboardings, invoice validations, and payout deposits." 
                }
              ].map((faq, idx) => (
                <div key={idx} className="border-b border-neutral-200 pb-4">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center text-left py-2 font-bold text-neutral-850 hover:text-black cursor-pointer"
                  >
                    <span className="text-sm md:text-base">{faq.q}</span>
                    <span className="text-neutral-400 font-normal ml-4 shrink-0">
                      {activeFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-neutral-500 text-xs font-semibold leading-relaxed mt-2 pb-2">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Callout Support Card */}
          <div className="lg:col-span-5 flex items-center">
            <div className="w-full p-8 bg-[#FAF9F6] border border-neutral-200 rounded-3xl space-y-6 text-left shadow-sm">
              <HelpCircle className="w-8 h-8 text-neutral-900" />
              <h3 className="text-xl font-bold text-neutral-900 leading-tight">Need dedicated custom compliance solutions?</h3>
              <p className="text-neutral-600 text-xs font-semibold leading-relaxed">
                Our global payments and legal compliance specialists are available to review contractor agreements, tax structures, and multi-currency payouts for large remote teams.
              </p>
              <div className="pt-4">
                <Link href="/contact" className="w-full text-center px-6 py-3 bg-black hover:bg-neutral-900 text-white font-bold rounded-full text-xs transition-colors inline-block shadow-sm">
                  Contact Payments Team
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. FINAL CTA BANNER (High-Contrast, Geometric Dark Banner) */}
      <section className="bg-black py-28 px-6 overflow-hidden relative border-t border-neutral-200">
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-neutral-800/40 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-logo">
            Work Intelligently. Pay Independently.
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto font-medium text-sm sm:text-base leading-relaxed">
            Create an account today to access automated contractor invoices, global tax withholding forms, and seamless local currency payouts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-neutral-100 text-black font-extrabold rounded-full transition-all text-xs cursor-pointer text-center">
              Request Demo
            </Link>
            <Link href="/login" className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 border border-neutral-800 text-neutral-300 font-bold rounded-full hover:bg-neutral-800 hover:text-white transition-colors cursor-pointer text-center text-xs">
              Log in to Dashboard
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
