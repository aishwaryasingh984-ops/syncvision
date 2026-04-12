"use client";

import Reveal from "./Reveal";

export function TherapeuticHero() {
  return (
    /* FIXED VIEWPORT & ALIGNMENT: 
       - min-h-[100svh] handles short landscape screens (Nest Hub) accurately.
       - flex-col ensures layout integrity on mobile.
    */
    <section className="relative min-h-[100svh] lg:min-h-[85vh] flex flex-col lg:flex-row lg:items-center overflow-hidden bg-[var(--syncvision-green)]">
      
      {/* Background Decoration using SyncVision Teal */}
      {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-syncvision-teal/15 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" /> */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('assets/therapeutic-areas.png')" }}
      />
      <div className="absolute inset-0 bg-[var(--syncvision-background-teal)]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--syncvision-background-teal)] via-[rgb(var(--syncvision-teal-rgb)_/_0.8)] to-transparent lg:via-[rgb(var(--syncvision-teal-rgb)_/_0.6)]" />

      {/* therapeutic-areas.png */}
      
      {/* FIXED PADDING FOR MID-DEVICES:
          - pt-28: Clears Navbar on standard Hub.
          - md:pt-36: Clears Navbar on Hub Max and Tablets.
      */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-28 pb-20 md:pt-36 lg:pt-12 lg:pb-0">
        <div className="max-w-3xl">
          <Reveal>
            {/* Title: Using Gold highlight for the keyword "Expertise" */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.1] text-white tracking-tight">
              Therapeutic <br className="hidden sm:block" />
              <span className="text-[var(--syncvision-gold)]">Expertise</span>
            </h1>

            {/* Tagline: Emphasizing the medical specialty focus */}
            <h2 className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#F7F9FB] leading-snug border-l-4 border-[var(--syncvision-gold)] pl-4">
              Deep Protocol Understanding <br className="hidden sm:block" />
              <span className="text-white italic">Across Medical Specialties</span>
            </h2>

            {/* Description: High-contrast off-white for medical professionalism */}
            <p className="mt-6 text-xs sm:text-sm md:text-base text-[#F7F9FB]/80 leading-relaxed max-w-2xl font-light">
              SyncVision collaborates with seasoned Principal Investigators in <span className="text-white font-medium">Pune, Thane, and Patna</span>, 
              ensuring reliable patient recruitment and high-quality data through 
              focused operational excellence.
            </p>

            {/* Quality Badge */}
            <div className="mt-8 flex items-center gap-4">
               <div className="h-[1px] w-12 bg-[var(--syncvision-gold)]/50" />
               <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[var(--syncvision-gold)] font-bold">
                 Specialized PI Network
               </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Standardized bottom decorative fade to SyncVision Green */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--syncvision-green)] to-transparent" />
    </section>
  );
}
