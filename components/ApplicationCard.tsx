"use client";

import { Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

export function ApplicationCard() {
  const email = "info@syncvisionresearch.com";

  return (
    <Reveal>
      {/* Container: Using syncvision-green for primary background */}
      <div className="bg-[var(--sv-teal)] p-8 md:p-12 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl border border-white/5 h-full flex flex-col justify-center">
        
        {/* Decorative Aura: Subtle Gold glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--sv-green)]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 italic leading-tight">Ready to make <br/>an impact?</h3>
          <p className="text-white/70 mb-10 text-sm md:text-base font-light leading-relaxed">
            Send your updated CV and a brief cover letter to our recruitment team. 
            We review applications for all regional hubs on a rolling basis.
          </p>
          
          {/* CTA Button: Standardized transition and border */}
          <a 
            href={`mailto:${email}`}
            className="
              flex items-center justify-center gap-3 w-full
              bg-[var(--sv-green)]
              text-[var(--sv-teal)]
              font-bold
              py-4 rounded-full border border-[var(--sv-green)]
              transition-all duration-300 transform  
              hover:bg-[var(--sv-blue)] hover:text-white hover:border-[var(--sv-green)] shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Email your CV
          </a>

          <div className="mt-10 pt-8 border-t border-white/10">
             <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-1">Official Recruitment Channel</p>
             <p className="text-xs font-medium text-[var(--sv-green)] break-all">
             <a 
            href={`mailto:${email}`}>{email}</a>
             </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}