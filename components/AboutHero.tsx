"use client";

import Reveal from "./Reveal";

export default function AboutHero() {
  return (
    <section className="relative min-h-[72svh] sm:min-h-[78svh] md:min-h-[100svh] lg:min-h-[85vh] flex flex-col lg:flex-row lg:items-center overflow-hidden"
      style={{ backgroundColor: "var(--sv-teal)" }}>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/newImage5.jpeg')" }}
      />

      {/* 20% teal wash overlay as specified */}
      <div className="absolute inset-0" style={{ backgroundColor: "var(--sv-teal-20)" }} />

      {/* Directional gradient */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(to right, var(--sv-teal-80) 0%, rgba(23,114,109,0.55) 55%, transparent 100%)" }} />

      {/* Blue shimmer edge */}
      <div className="absolute inset-0 opacity-20"
        style={{ background: "linear-gradient(135deg, transparent 60%, var(--sv-blue) 100%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-12 sm:pb-14 md:pt-36 md:pb-20 lg:pt-12 lg:pb-0">
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.1] text-white tracking-tight">
              About Sync<span className="text-[var(--syncvision-gold)]">Vision</span>
            </h1>

            <h2 className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[var(--syncvision-white)] leading-snug border-l-4 border-[var(--syncvision-gold)] pl-4 italic">
              &quot;Where Vision Meets Integrity&quot;
            </h2>

            <p className="mt-4 text-xs sm:text-sm md:text-base text-[var(--syncvision-white)]/95 leading-relaxed max-w-2xl font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]">
              Headquartered in Pune with a strong operational presence in Kolhapur and across 
              Maharashtra, SyncVision Research Solution LLP operates clinical trial sites in 
              Bihar and Gujarat — with rapid expansion underway across India. Founded by an 
              expert with over 9 years of hands-on experience in global clinical trials, having 
              worked within renowned CROs and Pharma companies, we are an ethically bound, 
              quality-focused Site Management Organization (SMO) committed to delivering 
              efficient, compliant, and high-integrity trial solutions at every site we manage.
            </p>

            {/* Vision Highlight */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[var(--syncvision-gold)]/50" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[var(--syncvision-gold)] font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]">
                Pune Headquarters • Operations across Maharashtra, Bihar, and Gujarat
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20"
        style={{ background: "linear-gradient(to top, var(--sv-teal-dark), transparent)" }} />
    </section>
  );
}
