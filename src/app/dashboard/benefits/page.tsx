import { HeartPulse, Shield, Award, ArrowUpRight, Plus } from "lucide-react";
import { ActionButton } from "@/components/ActionButton";

export default function BenefitsPage() {
  const benefits = [
    {
      icon: <HeartPulse className="w-6 h-6 text-neutral-800" />,
      title: "Union Health & Welfare",
      provider: "IUOE Trust Fund / BlueCross",
      enrolled: 684,
    },
    {
      icon: <Shield className="w-6 h-6 text-neutral-800" />,
      title: "Boots & PPE Allowance",
      provider: "Red Wing Gear / Zoiee",
      enrolled: 984,
    },
    {
      icon: <Award className="w-6 h-6 text-neutral-800" />,
      title: "Union Pension Fund",
      provider: "Ironworkers Local 15 Trust",
      enrolled: 230,
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 text-left">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-neutral-900 font-logo">Crew Benefits & Allowances</h1>
          <p className="text-neutral-400 mt-1 font-semibold text-sm">Manage union benefit allocations, safety incentives, and gear credits.</p>
        </div>
        <ActionButton 
          icon={<Plus className="w-4 h-4" />} 
          label="Add Union Perk" 
          loadingLabel="Preparing form..."
          successMessage="Ready to add a new benefit."
          className="bg-black hover:bg-neutral-900 text-white font-extrabold rounded-full text-xs cursor-pointer px-6 py-3 shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, i) => (
          <div key={i} className="p-6 rounded-3xl border border-neutral-200 bg-white flex flex-col shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center mb-6 border border-neutral-200 shadow-sm">
              {benefit.icon}
            </div>
            <h3 className="text-lg font-bold text-neutral-900 font-logo">{benefit.title}</h3>
            <p className="text-xs text-neutral-400 font-semibold mt-1">Managed via {benefit.provider}</p>
            
            <div className="mt-8 pt-6 flex items-center justify-between border-t border-neutral-100">
              <span className="text-xs font-bold text-neutral-500 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full">
                {benefit.enrolled} Dispatched
              </span>
              <button className="text-neutral-400 hover:text-neutral-800 transition-colors cursor-pointer">
                <ArrowUpRight className="w-5 h-5 text-neutral-900" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
