"use client";

import Reveal from "./Reveal";

export function PartnerHero() {
  return (
    <section className="relative min-h-[100svh] lg:min-h-[80vh] flex flex-col justify-center bg-[var(--syncvision-green)] overflow-hidden">
      {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-syncvision-teal/15 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" /> */}
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('assets/partners-background.png')" }}
      />
      <div className="absolute inset-0 bg-[var(--syncvision-background-teal)]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--syncvision-background-teal)] via-[rgb(var(--syncvision-teal-rgb)_/_0.8)] to-transparent lg:via-[rgb(var(--syncvision-teal-rgb)_/_0.6)]" />
      
      {/* partners-background.png */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-28 md:pt-36 lg:pt-0">
        <div className="max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[var(--syncvision-gold)]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--syncvision-gold)] font-bold">Strategic Collaborations</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
              Advancing Research <br />
              <span className="text-[var(--syncvision-gold)]">With Integrity.</span>
            </h1>

            <p className="mt-8 text-xs sm:text-sm md:text-base lg:text-lg text-[#F7F9FB]/80 leading-relaxed font-light max-w-2xl">
              Headquartered in Pune, with operations in Thane and Patna, we build transparent, ethical partnerships that accelerate clinical trial timelines across India.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
