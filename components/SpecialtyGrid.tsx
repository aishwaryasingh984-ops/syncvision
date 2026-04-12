"use client";

import { 
  Brain, 
  Stethoscope, 
  Microscope, 
  Activity, 
  Thermometer, 
  Droplets, 
} from "lucide-react";
import Reveal from "./Reveal";

const areas = [
  { title: "Neurology", icon: <Brain className="w-8 h-8" />, desc: "Expertise in CNS disorders, neurodegenerative research, and psychiatric clinical trials." },
  { title: "Oncology", icon: <Microscope className="w-8 h-8" />, desc: "Comprehensive support for early to late-phase solid tumor and hematology-oncology studies." },
  { title: "Cardiology", icon: <Activity className="w-8 h-8" />, desc: "Operational management for interventional, device-based, and observational cardiovascular trials." },
  { title: "Dermatology", icon: <Thermometer className="w-8 h-8" />, desc: "Clinical excellence in skin-related indications, including chronic inflammatory conditions." },
  { title: "Gastroenterology", icon: <Droplets className="w-8 h-8" />, desc: "Focused site management for IBD, hepatology, and chronic digestive health research." },
  { title: "Endocrinology", icon: <Stethoscope className="w-8 h-8" />, desc: "Proven expertise in metabolic disorders, diabetes management, and thyroid-related research." },
];

export function SpecialtyGrid() {
  return (
    /* Standardized Padding: Consistent with the Home/About sections 
       to ensure smooth scrolling on Nest Hub/Tablets. */
    <section className="pt-20 pb-20 lg:pt-24 lg:pb-24 bg-[#F7F9FB] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--syncvision-green)]/14 via-[var(--syncvision-gold)]/6 to-transparent pointer-events-none" />
      <div className="absolute left-1/2 top-0 h-28 w-[min(92vw,72rem)] -translate-x-1/2 rounded-b-[3rem] bg-white/45 blur-3xl pointer-events-none" />
      
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-syncvision-teal/5 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header with Brand Signature */}
        <Reveal className="mb-12 md:mb-16">
          <div className="border-l-4 border-[var(--syncvision-gold)] pl-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--syncvision-green)] tracking-tight">
              Clinical <span className="text-[var(--syncvision-teal)]">Focus</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-2 font-light max-w-2xl">
              Our site network is equipped to handle the complexities of diverse 
              therapeutic protocols while maintaining high recruitment standards.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {areas.map((area, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="group p-8 lg:p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:border-[var(--syncvision-gold)]/30 shadow-sm hover:shadow-xl hover:shadow-[0_20px_40px_rgba(10,77,68,0.05)] transition-all duration-500 h-full flex flex-col">
                
                {/* Icon Container: Transitioning to SyncVision Green/Gold on hover */}
                <div className="w-14 h-14 bg-[#F7F9FB] text-[var(--syncvision-teal)] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--syncvision-green)] group-hover:text-[var(--syncvision-gold)] transition-all duration-500 shadow-sm">
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {area.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[var(--syncvision-green)] mb-3 tracking-tight">
                  {area.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed font-light text-sm md:text-base">
                  {area.desc}
                </p>

                {/* Subtle bottom indicator */}
                <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="h-[2px] w-8 bg-[var(--syncvision-gold)]" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Quality Footnote */}
        <Reveal className="mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-white border border-slate-100 rounded-full shadow-sm">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
              All therapeutic activities are governed by <span className="text-[var(--syncvision-green)]">ICH-GCP</span> & <span className="text-[var(--syncvision-green)]">Schedule Y</span> Compliance
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
