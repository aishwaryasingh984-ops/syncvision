"use client";

import { 
  Search, Gavel, Zap, Users2, Activity, ShieldCheck, FileText, ArrowRight 
} from "lucide-react";
import Reveal from "./Reveal";

const coreServices = [
  { title: "Site Feasibility & Selection", icon: <Search className="w-6 h-6" />, desc: "Site identification, investigator qualification, and infrastructure assessment." },
  { title: "Regulatory & Ethics Support", icon: <Gavel className="w-6 h-6" />, desc: "Seamless EC submissions, regulatory document compilation, and ICF coordination." },
  { title: "Study Start-Up & Activation", icon: <Zap className="w-6 h-6" />, desc: "Essential document management, SIV coordination, and investigator meetings." },
  { title: "Patient Recruitment", icon: <Users2 className="w-6 h-6" />, desc: "Strategic recruitment planning, pre-screening, and retention tracking." },
  { title: "Clinical Operations Support", icon: <Activity className="w-6 h-6" />, desc: "Source documentation, eCRF entries, and monitoring visit assistance." },
  { title: "Safety & Compliance", icon: <ShieldCheck className="w-6 h-6" />, desc: "SAE reporting, safety log tracking, and audit-readiness support." },
  { title: "Quality & Documentation", icon: <FileText className="w-6 h-6" />, desc: "TMF support, site file maintenance, and SOP-based data checks." },
];

export function CoreServicesGrid() {
  return (
    <section className="pt-20 pb-24 lg:pt-24 lg:pb-32 bg-[var(--sv-teal-20)] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--sv-teal)]/14 via-[var(--sv-green)]/6 to-transparent pointer-events-none" />
      <div className="absolute left-1/2 top-0 h-28 w-[min(92vw,72rem)] -translate-x-1/2 rounded-b-[3rem] bg-white/45 blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <Reveal className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-[var(--sv-teal)] tracking-tighter">
                Our Service <span className="text-[var(--sv-blue)]">Spectrum</span>
              </h2>
              <p className="text-slate-500 mt-4 font-light text-lg">
                Precision-engineered SMO solutions for the modern clinical trial landscape.
              </p>
            </div>
            <div className="hidden md:block">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--sv-green)] bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                Excellence Delivered
              </span>
            </div>
          </div>
        </Reveal>

        {/* GRID STRATEGY: 
            We use a 4-column grid on XL screens. 
            To handle the 7-card 'missing slot' look, we center the last row.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {coreServices.map((s, i) => (
            <Reveal 
              key={i} 
              delay={i * 50} 
              className={`h-full ${i >= 4 ? "xl:translate-x-1/2" : ""}`} // Centers the 3 cards in the bottom row on 4-col layout
            >
              <div className="group relative h-full min-h-[320px] bg-white border border-slate-100 rounded-[2.5rem] p-8 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.05] hover:z-20 hover:shadow-[0_40px_80px_-20px_rgb(var(--sv-teal-rgb)_/_0.15)] hover:border-[var(--sv-green)]/50 flex flex-col">
                
                {/* Icon Circle */}
                <div className="w-14 h-14 bg-[var(--sv-teal-20)] text-[var(--sv-blue)] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--sv-teal)] group-hover:text-[var(--sv-green)] transition-all duration-500 shadow-sm">
                  {s.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[var(--sv-teal)] mb-4 leading-tight group-hover:text-[var(--sv-teal)] transition-colors">
                  {s.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed font-light group-hover:text-slate-700 transition-colors">
                  {s.desc}
                </p>

                {/* Hover-only footer detail */}
                <div className="mt-auto pt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--sv-green)]">
                    Explore Details
                  </span>
                  <ArrowRight className="w-4 h-4 text-[var(--sv-green)]" />
                </div>

                {/* Background Brand Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[var(--sv-green)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
