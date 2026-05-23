"use client";

import dynamic from "next/dynamic";
import Reveal from "./Reveal";

const ContactForm = dynamic(() => import("./ContactForm"), {
  ssr: false,
  loading: () => (
    <div className="space-y-4 w-full animate-pulse">
      <div className="h-12 bg-white/10 rounded-xl"></div>
      <div className="h-12 bg-white/10 rounded-xl"></div>
      <div className="h-32 bg-white/10 rounded-xl"></div>
      <div className="h-12 bg-[var(--sv-green)]/20 rounded-xl w-full"></div>
    </div>
  ),
});

export default function ContactHero() {
  return (
    /* FIXED VIEWPORT: shorter mobile height keeps phone hero sections compact.
       FIXED PADDING: pt-24/md:pt-36 clears the Navbar across breakpoints.
    */
    <section className="relative min-h-[72svh] sm:min-h-[78svh] md:min-h-[100svh] lg:min-h-[90vh] flex flex-col lg:flex-row items-center bg-[var(--sv-teal)] text-white pt-24 pb-10 md:pt-36 md:pb-16 lg:pt-12 lg:pb-0 overflow-hidden">
      
      {/* Background Decoration */}
      {/* <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#125E54]/20 rounded-full blur-[80px] md:blur-[120px] -z-0 translate-x-1/3 -translate-y-1/3" /> */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('assets/contact-background.png')" }}
      />
      <div className="absolute inset-0 bg-[var(--sv-teal-mid)]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--sv-teal-mid)] via-[rgb(var(--sv-blue-rgb)_/_0.8)] to-transparent lg:via-[rgb(var(--sv-blue-rgb)_/_0.6)]" />

      {/* contact-background.png */}
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
        
        {/* Left Column */}
        <div className="text-left max-w-3xl order-1">
          <Reveal>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.1] text-white tracking-tight">
              Let&apos;s execute <br className="hidden sm:block" />
              <span className="text-[var(--sv-green)]">Better Trials.</span>
            </h1>

            <h2 className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[var(--sv-white)] leading-snug border-l-4 border-[var(--sv-green)] pl-4">
                Partner with SyncVision
            </h2>

            <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-[var(--sv-white)]/70 leading-relaxed max-w-xl font-light">
              Reliable, ICH-GCP compliant site management tailored to your clinical study needs. Reach out to our regional hubs in Pune, Thane, or Patna.
            </p>
            
            <div className="mt-8 flex flex-col gap-2">
               <p className="text-white/40 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-bold">
                 Direct Correspondence
               </p>
               <a 
                 href="mailto:info@syncvisionresearch.com" 
                 className="text-lg sm:text-xl md:text-2xl font-light text-[var(--sv-green)] hover:text-white transition-colors break-all"
               >
                  info@syncvisionresearch.com
               </a>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Form Container */}
        {/* <div className="order-2 w-full max-w-xl lg:max-w-none pb-10 lg:pb-0">
          <Reveal>
            <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-[2rem] border border-white/10 shadow-2xl">
              <ContactForm />
            </div>
          </Reveal>
        </div> */}

        <div className="order-2 w-full max-w-xl lg:max-w-none pb-10 lg:pb-0">
          <Reveal>
            {/* Switched to Solid White for maximum visibility */}
            <div className="bg-white p-6 sm:p-10 rounded-[1rem] border border-slate-100 shadow-2xl shadow-[var(--sv-teal)]/20 relative overflow-hidden">
              {/* Subtle brand accent line at the top */}
              {/* <div className="absolute top-0 left-0 right-0 h-2 bg-[var(--sv-green)]" /> */}
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--sv-teal)] to-transparent pointer-events-none" />
    </section>
  );
}
