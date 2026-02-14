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
      {/* Skeleton button updated to Gold/20 */}
      <div className="h-12 bg-[var(--syncvision-gold)]/20 rounded-xl w-full"></div>
    </div>
  ),
});


export default function ContactHero() {
  return (
    // Updated background to SyncVision Green
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center bg-[var(--syncvision-green)] text-white pt-32 pb-20 lg:pt-0 lg:pb-0 overflow-hidden">
      
      {/* Background Decoration using SyncVision Teal (#125E54) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-syncvision-teal/20 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <div className="text-center lg:text-left">
          <Reveal>
            {/* Brand Tag using Gold */}
            <span className=" font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
              Get In Touch
            </span>

            {/* Title with Gold highlight */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mt-6 mb-8 leading-[1.1] tracking-tight">
              Let's execute <br className="hidden lg:block" />
              <span className="">Better Trials.</span>
            </h1>

            {/* Description with Gold left-border signature */}
            <p className="text-[#F7F9FB]/70 text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 border-t lg:border-t-0 lg:border-l-4 border-[var(--syncvision-gold)] pt-8 lg:pt-0 lg:pl-8 mt-4 font-light">
              Partner with SyncVision for reliable, ICH-GCP compliant site management. We are ready to support your clinical study needs across India.
            </p>
            
            <div className="flex flex-col gap-4">
               <p className="text-white/40 text-xs md:text-sm uppercase tracking-[0.3em] font-bold">
                 Official Correspondence
               </p>
               <a href="mailto:aishwarya.singh@syncvisionresearch.com" className="text-xl sm:text-2xl font-light hover:text-[var(--syncvision-gold)] transition-colors break-words">
                  aishwarya.singh@syncvisionresearch.com
               </a>
            </div>
          </Reveal>
        </div>

        {/* Responsive Form Container */}
        <Reveal className="w-full">
          <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-[2rem] border border-white/10 shadow-2xl shadow-black/20">
            <ContactForm />
          </div>
        </Reveal>
      </div>

      {/* Standardized bottom decorative fade: Transitioning into SyncVision Green */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--syncvision-green)] to-transparent" />
    </section>
  );
}