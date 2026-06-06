"use client";

import { Briefcase, GraduationCap, CheckCircle } from "lucide-react";
import Reveal from "@/components/Reveal";

export function JobRoles() {
  // const roles = ["Site Managers", "Clinical Research Coordinators", "Regulatory Support", "Quality Assurance"];
  const roles = ["Site Managers", "Clinical Research Coordinators"];

  return (
    <div className="space-y-8">
      <Reveal>
        <div className="border-l-4 border-[var(--sv-green)] pl-6 mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--sv-teal)] tracking-tight">
            Current <span className="text-[var(--sv-blue)]">Opportunities</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {roles.map((role) => (
            <div 
              key={role} 
              className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 group hover:border-[var(--sv-green)]/50 transition-all duration-300"
            >
              <div className="p-2 bg-[var(--sv-teal-20)] rounded-lg group-hover:bg-[var(--sv-teal)] transition-colors">
                <Briefcase className="w-4 h-4 text-[var(--sv-blue)] group-hover:text-[var(--sv-green)] transition-colors" />
              </div>
              <span className="font-bold text-[var(--sv-teal)] text-sm">
                {role}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 space-y-6 p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-[var(--sv-teal-20)] rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-100">
              <GraduationCap className="w-5 h-5 text-[var(--sv-blue)]" />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Degrees in <span className="font-bold text-[var(--sv-teal)]">Life Sciences, Pharmacy, or Nursing</span> required.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 bg-[var(--sv-teal-20)] rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-100">
              <CheckCircle className="w-5 h-5 text-[var(--sv-blue)]" />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Foundational knowledge of <span className="font-bold text-[var(--sv-teal)]">ICH-GCP guidelines</span> is essential.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}