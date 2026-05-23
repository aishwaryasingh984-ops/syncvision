"use client";

import Reveal from "./Reveal";

export default function AboutHero() {
  return (
    /* FIXED VIEWPORT & ALIGNMENT:
       - shorter mobile height keeps phone hero sections compact.
       - md:min-h-[100svh] handles short landscape screens (Nest Hub) accurately.
       - flex-col for mobile/tablet to avoid vertical centering overlap.
    */
    <section className="relative min-h-[72svh] sm:min-h-[78svh] md:min-h-[100svh] lg:min-h-[85vh] flex flex-col lg:flex-row lg:items-center overflow-hidden [background:var(--sv-teal)]">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/newImage5.jpeg')",
        }}
      />

      {/* Overlays: Using Green and Teal for depth */}
      <div className="absolute inset-0 bg-[var(--sv-teal-mid)]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--sv-teal-mid)] via-[rgb(var(--sv-blue-rgb)_/_0.8)] to-transparent lg:via-[rgb(var(--sv-blue-rgb)_/_0.6)]" />

      {/* FIXED PADDING FOR MID-DEVICES:
          - pt-24: Clears Navbar on phones while keeping the hero shorter.
          - md:pt-36: Clears Navbar on Nest Hub Max/Tablets.
          - lg:pt-12: Standard desktop spacing.
      */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-24 pb-12 sm:pb-14 md:pt-36 md:pb-20 lg:pt-12 lg:pb-0">
        <div className="max-w-3xl">
          <Reveal>
            {/* Title: Decreased md:text size to 5xl for Nest Hub height fit */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.1] text-white tracking-tight">
              About Sync<span className="text-[var(--sv-green)]">Vision</span>
            </h1>

            {/* Tagline: Integrated "Where Vision Meets Integrity" */}
            <h2 className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[var(--sv-white)] leading-snug border-l-4 border-[var(--sv-green)] pl-4 italic">
              “Where Vision Meets Integrity”
            </h2>

            {/* Description: Integrated Pune, Thane, Patna presence */}
            <p className="mt-6 text-xs sm:text-sm md:text-base text-[var(--sv-white)]/80 leading-relaxed max-w-2xl font-light">
              Headquartered in Pune with a strong operational presence in Thane and Patna, 
              we are a quality-focused Site Management Organization (SMO) committed to 
              delivering ethical and efficient clinical trial solutions across India.
            </p>
            
            {/* Vision Highlight */}
            <div className="mt-8 flex items-center gap-4">
               <div className="h-[1px] w-12 bg-[var(--sv-green)]/50" />
               <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[var(--sv-green)] font-bold">
                 Established in Pune • Thane • Patna
               </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Standardized bottom decorative fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--sv-teal)] to-transparent" />
    </section>
  );
}
