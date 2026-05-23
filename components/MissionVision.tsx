"use client";

import { Target, Eye } from "lucide-react";
import Reveal from "./Reveal";

export default function MissionVision() {
  return (
    // Standardized padding to align with zigzag flow and clear Navbars on Hubs
    <section className="bg-[var(--sv-teal-20)] pt-20 pb-16 md:pt-24 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--sv-teal)]/14 via-[var(--sv-green)]/6 to-transparent pointer-events-none" />
      <div className="absolute left-1/2 top-0 h-28 w-[min(92vw,72rem)] -translate-x-1/2 rounded-b-[3rem] bg-white/45 blur-3xl pointer-events-none" />
      
      {/* Decorative accent for the section background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--sv-blue)]/5 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Three Pillars Header - Integrated from your "Our Approach" text */}
        <Reveal className="mb-12 lg:mb-16">
          <div className="border-l-4 border-[var(--sv-green)] pl-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--sv-teal)] tracking-tight uppercase">
              Our Strategic Foundation
            </h2>
            <p className="text-[var(--sv-blue)] font-bold mt-1 text-sm sm:text-base">
              Integrity. Precision. Partnership.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card: Integrated from "Our Mission" text */}
          <Reveal>
            <div className="h-full bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-sm border h-full bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-sm 
            border border-slate-100 
            hover:border-[var(--sv-green)]/30 
            hover:shadow-xl 
            hover:shadow-[0_20px_40px_rgb(var(--sv-teal-rgb)_/_0.05)]
            transition-all duration-500 
            group relative overflow-hiddenborder-slate-100 hover:border-[var(--sv-green)]/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--sv-blue)]/5 rounded-bl-full -z-10" />
              
              <div className="w-14 h-14 bg-[var(--sv-teal-20)] text-[var(--sv-blue)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--sv-teal)] group-hover:text-[var(--sv-green)] transition-all duration-300 shadow-sm">
                <Target className="w-7 h-7" />
              </div>
              
              <h3 className="text-xs font-black text-[var(--sv-teal)] mb-6 tracking-[0.2em] uppercase">
                Our Mission
              </h3>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light italic">
                “To enhance clinical trial execution at the site level by providing structured, compliant, and patient-focused management solutions that accelerate study timelines while safeguarding data integrity.”
              </p>
            </div>
          </Reveal>

          {/* Vision Card: Integrated from "Our Vision" text */}
          <Reveal>
            <div className="h-full bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-sm 
            border border-slate-100 
            hover:border-[var(--sv-green)]/30 
            hover:shadow-xl 
            hover:shadow-[0_20px_40px_rgb(var(--sv-teal-rgb)_/_0.05)]
            transition-all duration-500 
            group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--sv-green)]/5 rounded-bl-full -z-10" />
              
              <div className="w-14 h-14 bg-[var(--sv-teal-20)] text-[var(--sv-blue)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--sv-teal)] group-hover:text-[var(--sv-green)] transition-all duration-300 shadow-sm">
                <Eye className="w-7 h-7" />
              </div>
              
              <h3 className="text-xs font-black text-[var(--sv-teal)] mb-6 tracking-[0.2em] uppercase">
                Our Vision
              </h3>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light italic">
                “To be a trusted and growth-driven Site Management Organization in India, recognized for reliability, regulatory strength, and uncompromising ethical standards.”
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
