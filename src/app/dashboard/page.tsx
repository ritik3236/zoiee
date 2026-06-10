"use client";

import { useState } from "react";
import { Users, FileText, Calendar, CheckCircle2, Clock, MapPin, Shield, Server, Terminal, Radio, Cpu, Network, Globe, Landmark, DollarSign, ArrowUpRight } from "lucide-react";

export default function DashboardPage() {
  const activeGateways = [
    {
      site: "us.ach.gateway",
      local: "US Dollar (USD)",
      hitch: "ACH Routing",
      period: "SLA Uptime: 99.99%",
      progress: 95,
      color: "bg-black"
    },
    {
      site: "eu.sepa.gateway",
      local: "Euro (EUR)",
      hitch: "SEPA Direct Routing",
      period: "SLA Uptime: 99.98%",
      progress: 85,
      color: "bg-neutral-800"
    },
    {
      site: "uk.fps.gateway",
      local: "Pound Sterling (GBP)",
      hitch: "Faster Payments Routing",
      period: "SLA Uptime: 99.99%",
      progress: 75,
      color: "bg-neutral-600"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 bg-[#FAF9F6] text-neutral-900 font-sans text-left">
      <div>
        <h1 className="text-3xl font-extrabold text-neutral-900 mb-2 font-logo flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-black"></span> Welcome back, Olivia!
        </h1>
        <p className="text-neutral-500 font-mono uppercase text-[10px] tracking-wider font-bold">
          Zoiee global treasury console: active and operational
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Metric Card 1 */}
        <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <div className="text-[10px] font-mono font-bold text-neutral-450 uppercase tracking-wider mb-1">Total Volume Processed</div>
              <div className="text-3xl font-black text-neutral-900 font-logo flex items-baseline gap-2">
                $44,089 <span className="text-xs text-neutral-450 font-sans">this month</span>
              </div>
            </div>
            <div className="p-3 bg-neutral-50 text-neutral-700 border border-neutral-200 rounded-2xl">
              <Landmark className="w-5 h-5" />
            </div>
          </div>
          <div className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md w-fit flex items-center gap-0.5">
            <ArrowUpRight className="w-3 h-3" /> +12.4% from last month
          </div>
        </div>

        {/* Metric Card 2 */}
        <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <div className="text-[10px] font-mono font-bold text-neutral-450 uppercase tracking-wider mb-1">Pending Disbursements</div>
              <div className="text-3xl font-black text-neutral-900 font-logo">
                $18,200 <span className="text-xs text-neutral-450 font-normal">5 wire transfers</span>
              </div>
            </div>
            <div className="p-3 bg-neutral-50 text-neutral-700 border border-neutral-200 rounded-2xl">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <div className="text-[9px] font-mono font-bold text-neutral-450">Scheduled for payment run tomorrow</div>
        </div>

        {/* Metric Card 3 */}
        <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <div className="text-[10px] font-mono font-bold text-neutral-450 uppercase tracking-wider mb-1">Global Tax compliance</div>
              <div className="text-3xl font-black text-neutral-900 font-logo">
                100% <span className="text-sm font-normal text-neutral-500">compliant</span>
              </div>
            </div>
            <div className="p-3 bg-neutral-50 text-neutral-700 border border-neutral-200 rounded-2xl">
              <Shield className="w-5 h-5" />
            </div>
          </div>
          <div className="text-[9px] font-mono font-bold text-neutral-950 bg-neutral-100 border border-neutral-200 px-2 py-0.5 rounded-md w-fit">All W-8/W-9 forms archived</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Bank Gateways */}
        <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[10px] font-mono font-bold text-neutral-450 uppercase tracking-widest flex items-center gap-1.5"><Terminal className="w-4 h-4 text-neutral-900" /> Active Payout Gateways</h2>
            <div className="flex items-center gap-1.5 text-[9px] font-mono text-neutral-700 font-bold bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full">
              <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-600" /> API Gateway Online
            </div>
          </div>
          <div className="space-y-6 flex-1 flex flex-col justify-center">
            {activeGateways.map((proj, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-[11px] font-mono font-bold">
                  <span className="text-neutral-800 flex items-center gap-2"><Server className="w-3.5 h-3.5 text-neutral-600" /> {proj.site}</span>
                  <span className="text-neutral-450 font-medium">{proj.period}</span>
                </div>
                <div className="relative">
                  <div className="w-full bg-neutral-100 h-6 rounded-full overflow-hidden border border-neutral-200 relative flex items-center px-3">
                    <div 
                      className={`absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ${proj.color}`} 
                      style={{ width: `${proj.progress}%` }}
                    />
                    <span className="relative z-10 text-[9px] font-mono font-black text-neutral-400 uppercase tracking-wider">{proj.hitch} ({proj.local})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Access & Audit Logs */}
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-sm flex flex-col overflow-hidden">
          <div className="p-6 border-b border-neutral-200">
            <h2 className="text-[10px] font-mono font-bold text-neutral-450 uppercase tracking-widest text-left">Recent Payout Logs</h2>
          </div>
          <div className="flex-1 overflow-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap font-mono text-[10px]">
              <thead>
                <tr className="bg-neutral-50 text-[9px] font-bold text-neutral-450 border-b border-neutral-200">
                  <th className="p-4 font-bold uppercase tracking-wider">Log Action</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Gateway Status</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Timestamp</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Payee Country</th>
                </tr>
              </thead>
              <tbody className="text-neutral-600 divide-y divide-neutral-100">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 text-neutral-900 font-bold flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-neutral-900" /> Stripe ID clear for Alex Rivera</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-emerald-250 bg-emerald-50 text-emerald-700 font-bold text-[9px]">
                      VERIFIED
                    </span>
                  </td>
                  <td className="p-4 text-neutral-400">06:42:10</td>
                  <td className="p-4 text-neutral-500">Brazil (BRL)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 text-neutral-900 font-bold flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-neutral-600" /> W-8BEN form audit (Maria G.)</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-sky-200 bg-sky-50 text-sky-700 font-bold text-[9px]">
                      RUNNING
                    </span>
                  </td>
                  <td className="p-4 text-neutral-400">06:43:02</td>
                  <td className="p-4 text-neutral-500">United Kingdom (GBP)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 text-neutral-900 font-bold flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-neutral-400" /> Wire release scheduled (James W.)</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-neutral-200 bg-neutral-50 text-neutral-500 font-bold text-[9px]">
                      PENDING
                    </span>
                  </td>
                  <td className="p-4 text-neutral-400">06:44:00</td>
                  <td className="p-4 text-neutral-500">Singapore (SGD)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
