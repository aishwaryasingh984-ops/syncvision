"use client";

import Reveal from "./Reveal";
import Image from "next/image";

export default function AboutSyncVision() {
  return (
    // Fixed Padding: pt-32/md:pt-40 to prevent Navbar overlap on Nest Hub and landscape tablets
    <section className="bg-[var(--sv-teal-20)] pt-32 pb-20 md:pt-40 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Text Content - Forced Left Alignment for Brand Consistency */}
          <Reveal className="order-2 lg:order-1 max-w-3xl">
            <div className="space-y-6 text-left">
              {/* Badge using SyncVision Teal */}
              <div className="inline-block px-4 py-1.5 bg-[var(--sv-blue)]/10 border border-[var(--sv-blue)]/20 rounded-full">
                <span className="text-[var(--sv-teal)] text-[10px] font-bold uppercase tracking-[0.2em]">Our Story</span>
              </div>
              
              {/* Title using SyncVision Green and Gold accents */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--sv-teal)] leading-tight tracking-tight">
                Foundations of <br />
                <span className="text-[var(--sv-teal)] underline decoration-[var(--sv-green)] decoration-4 underline-offset-8">Expertise & Trust</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-light">
                SyncVision Research Solution LLP is a newly established Site Management Organization built on strong foundations of clinical research expertise and regulatory understanding.
              </p>

              <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base font-light">
                <p>
                  While we are a young organization, our operations are guided by experienced professionals with hands-on exposure to global clinical trials. 
                </p>
                
                {/* Signature Border Style */}
                <div className="border-l-4 border-[var(--sv-green)] pl-6 py-1 mt-6">
                  <p className="italic">
                    We are committed to supporting Sponsors and CROs with dependable site management services that align with 
                    <span className="text-[var(--sv-teal)] font-bold"> ICH-GCP</span>, national regulations, and global quality expectations.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: Image Section - Fixed Aspect Ratio for Short Screens */}
          <Reveal className="order-1 lg:order-2 relative w-full">
            <div className="relative mx-auto w-full max-w-[500px]">
              {/* Standardized Brand Aura */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--sv-blue)]/10 rounded-full blur-2xl animate-pulse" />
              
              {/* Container: Applied aspect-square and standardized border-4 */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-square bg-slate-100 group">
                <Image 
                  src="/assets/newImage4.jpeg" 
                  alt="SyncVision Clinical Research Excellence" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--sv-teal)]/20 to-transparent" />
              </div>
              
              {/* Innovation Badge: Updated to Green and Gold */}
              <div className="absolute -bottom-6 -right-4 lg:-right-6 bg-[var(--sv-teal)] px-6 py-4 rounded-2xl shadow-xl hidden sm:flex flex-col border border-white/10 z-20">
                <p className="text-[var(--sv-green)] font-black text-xl tracking-tighter">SyncVision</p>
                <p className="text-white text-[10px] uppercase font-bold tracking-widest">Site Management</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}