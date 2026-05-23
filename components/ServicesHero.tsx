"use client";

import Reveal from "./Reveal";

export function ServicesHero() {
  return (
    /* FIXED VIEWPORT & ALIGNMENT: 
       - shorter mobile height keeps phone hero sections compact.
       - md:min-h-[100svh] for tablet-sized viewports.
       - flex-col ensures layout integrity on short landscape screens.
    */
    <section className="relative min-h-[72svh] sm:min-h-[78svh] md:min-h-[100svh] lg:min-h-[85vh] flex flex-col lg:flex-row lg:items-center overflow-hidden bg-[var(--sv-teal)]">
      
      {/* Background Decoration using SyncVision Teal */}
      {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--sv-teal-mid)]/15 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" /> */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('assets/our-services.png')" }}
      />
      <div className="absolute inset-0 bg-[var(--sv-teal-mid)]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--sv-teal-mid)] via-[rgb(var(--sv-blue-rgb)_/_0.8)] to-transparent lg:via-[rgb(var(--sv-blue-rgb)_/_0.6)]" />
      
      {/* FIXED PADDING FOR NEST HUB:
          - pt-24: Clears Navbar on phones while keeping the hero shorter.
          - md:pt-36: Clears Navbar on Hub Max and Tablets.
      */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-24 pb-12 sm:pb-14 md:pt-36 md:pb-20 lg:pt-12 lg:pb-0">
        <div className="max-w-3xl">
          <Reveal>
            {/* Title: Reduced md: size to 5xl for better fit on Hub screens */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.1] text-white tracking-tight">
              Comprehensive <br className="hidden sm:block" />
              <span className="text-[var(--sv-green)]">SMO Solutions</span>
            </h1>

            {/* Tagline: Integrated "Operational Efficiency" theme from your content */}
            <h2 className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[var(--sv-white)] leading-snug border-l-4 border-[var(--sv-green)] pl-4">
              Regulatory Compliance & <br className="hidden sm:block" />
              <span className="text-white italic">Operational Efficiency</span>
            </h2>

            {/* Description: Integrated "Sponsors, CROs, Investigators" mapping */}
            <p className="mt-6 text-xs sm:text-sm md:text-base text-[var(--sv-white)]/80 leading-relaxed max-w-2xl font-light">
              We deliver end-to-end site management services designed to ensure 
              high-quality clinical trial execution for Sponsors, CROs, and 
              healthcare institutions across India.
            </p>

            {/* Service Highlight Badge */}
            {/* <div className="mt-8 flex items-center gap-3">
              <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-[var(--sv-green)] border border-white/20">
                End-to-End Support
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/20">
                ICH-GCP Aligned
              </span>
            </div> */}
          </Reveal>
        </div>
      </div>

      {/* Standardized bottom decorative fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--sv-teal)] to-transparent" />
    </section>
  );
}
