"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail, Globe, Loader2, Sparkles, MapPin, Phone, Server, Terminal } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    companySize: "",
    topic: "Global Contractor Directory",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
 
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Message received!", {
      description: "Our HR compliance team will email you shortly.",
    });
  };

  const activeEndpoints = [
    { name: "New York Gateway Node", endpoint: "ny.gateway.zoiee", coords: "40.71° N, 74.00° W", email: "ny@zoiee.me", status: "Active" },
    { name: "London Gateway Node", endpoint: "london.gateway.zoiee", coords: "51.50° N, 0.12° W", email: "london@zoiee.me", status: "Active" },
    { name: "Frankfurt Gateway Node", endpoint: "frankfurt.gateway.zoiee", coords: "50.11° N, 8.68° E", email: "frankfurt@zoiee.me", status: "Active" },
    { name: "Singapore Platform Node", endpoint: "singapore.gateway.zoiee", coords: "1.35° N, 103.81° E", email: "sg@zoiee.me", status: "Active" }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-neutral-900 font-sans flex flex-col">
      {/* Hero Header */}
      <div className="pt-44 pb-16 px-6 border-b border-neutral-200/80 relative overflow-hidden fintech-grid-dots">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-rose-100/40 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-4 text-center lg:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/5 border border-neutral-900/10 text-neutral-700 text-[10px] font-extrabold uppercase tracking-widest font-mono">
            <Terminal className="w-3.5 h-3.5" /> Platform Communication
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 font-logo">
            Get in touch
          </h1>
          <p className="text-base text-neutral-600 max-w-2xl font-medium">
            Contact our HR compliance specialists to request custom directory setups or custom enterprise terms.
          </p>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16 w-full flex-1 relative z-10">
        
        {/* Left Column: API Gateways Endpoint Directory */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-neutral-450 uppercase tracking-widest">Global Nodes</span>
            <h2 className="text-2xl font-extrabold text-neutral-900 font-logo">Zoiee Network Gateway</h2>
            <p className="text-neutral-500 text-xs font-semibold leading-relaxed">
              We operate local compliance nodes across key regions to verify and manage global workforce compliance.
            </p>
          </div>

          <div className="space-y-4">
            {activeEndpoints.map((term, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm space-y-3 hover:border-black transition-colors font-mono">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-extrabold text-xs text-neutral-800">{term.name}</h3>
                    <span className="text-[9px] text-neutral-500 font-bold block mt-1">{term.endpoint}</span>
                  </div>
                  <span className="text-[9px] bg-neutral-50 border border-neutral-200 px-2 py-0.5 rounded-md text-neutral-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-neutral-900" /> {term.coords}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-bold text-neutral-400 border-t border-neutral-100 pt-2.5">
                  <a href={`mailto:${term.email}`} className="hover:text-black flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-neutral-600" /> {term.email}</a>
                  <span className="text-neutral-800 bg-neutral-900/5 px-2 py-0.5 border border-neutral-950/10 rounded-full text-[8px] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> {term.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Intake Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-neutral-200 shadow-sm">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-bold text-neutral-900 tracking-tight font-logo">Submit Inquiry</h2>
                  <p className="text-neutral-500 text-xs font-semibold mb-6">
                    Fill out the request form below and one of our HR onboarding managers will follow up.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-mono font-bold text-neutral-500 mb-1.5 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 font-semibold text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all placeholder:text-neutral-400"
                        placeholder="Sarah Jenkins"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-mono font-bold text-neutral-500 mb-1.5 uppercase tracking-wider">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 font-semibold text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all placeholder:text-neutral-400"
                        placeholder="s.jenkins@energycorp.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-mono font-bold text-neutral-500 mb-1.5 uppercase tracking-wider">
                        Company Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 font-semibold text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all placeholder:text-neutral-400"
                        placeholder="Acme Heavy Logistics"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-mono font-bold text-neutral-500 mb-1.5 uppercase tracking-wider">
                        Contractor Roster Size
                      </label>
                      <select
                        required
                        value={formData.companySize}
                        onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-700 font-semibold text-sm appearance-none cursor-pointer focus:outline-none focus:border-black"
                      >
                        <option value="">Select size...</option>
                        <option value="1-10">1 - 10 contractors</option>
                        <option value="11-50">11 - 50 contractors</option>
                        <option value="51-200">51 - 200 contractors</option>
                        <option value="201-1000">201 - 1000 contractors</option>
                        <option value="1000+">1000+ contractors</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono font-bold text-neutral-500 mb-1.5 uppercase tracking-wider">
                      Integration Scope
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-700 font-semibold text-sm appearance-none cursor-pointer focus:outline-none focus:border-black"
                    >
                      <option value="Global Contractor Directory">Global Contractor Directory</option>
                      <option value="Automated Compliance & Taxes">Automated Compliance & Taxes</option>
                      <option value="IT & Device Logistics">IT & Device Logistics</option>
                      <option value="Custom Enterprise Integration">Custom Enterprise Integration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono font-bold text-neutral-500 mb-1.5 uppercase tracking-wider">
                      Tell us about your remote workforce setup
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 font-semibold text-sm resize-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black placeholder:text-neutral-400"
                      placeholder="We want to automate onboarding and tax forms for 50 remote developers using Zoiee..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 bg-black hover:bg-neutral-900 text-white font-bold py-4 rounded-full transition-all duration-150 flex items-center justify-center gap-2 shadow-sm text-sm cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>Submitting Request... <Loader2 className="w-5 h-5 animate-spin" /></>
                    ) : (
                      <>Send Message <ArrowRight className="w-4 h-4" /></>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 px-4 space-y-6"
                >
                  <div className="w-20 h-20 bg-neutral-100 border border-neutral-200 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-neutral-900" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-extrabold text-neutral-900 font-logo">Message Sent!</h3>
                    <p className="text-neutral-500 font-medium text-base leading-relaxed max-w-sm mx-auto">
                      Thank you, {formData.name}. Our compliance onboarding consultants will review your inquiry and follow up shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-sm font-bold text-neutral-800 hover:underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
