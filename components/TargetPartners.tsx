"use client";

import Reveal from "./Reveal";

const partners = [
  "Pharmaceutical & Biotech Companies",
  "Contract Research Organizations (CROs)",
  "Hospitals & Investigators",
  "Ethics Committees",
  "Academic Research Institutions"
];

export function TargetPartners() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--sv-teal)] leading-tight">
            Our Collaborative <br />
            <span className="text-[var(--sv-green)]">Ecosystem</span>
          </h2>
          <p className="mt-6 text-slate-600 font-light text-lg">
            We bridge the gap between complex research protocols and real-world clinical execution.
          </p>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            {partners.map((p, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-[var(--sv-teal-20)] rounded-2xl border border-slate-100 hover:translate-x-2 transition-transform duration-300">
                <div className="w-2 h-2 bg-[var(--sv-green)] rounded-full" />
                <span className="font-bold text-[var(--sv-teal)] uppercase text-xs tracking-widest">{p}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}