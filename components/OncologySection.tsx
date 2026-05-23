"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { ShieldCheck, Activity, ClipboardCheck } from "lucide-react";

export default function SiteManagementSection() {
  return (
    // Responsive padding: pt-32 on mobile/mid-devices to clear fixed Navbar
    <section className="bg-[var(--sv-teal-20)] pt-32 pb-20 md:pt-40 lg:py-24 relative overflow-hidden">
      
      {/* Decorative Shape - Flipped to the left side to match the new layout */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[var(--sv-blue)]/5 -skew-x-12 transform origin-top -translate-x-20 -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT: Image Section (Now first in grid, order-1 for all screens) */}
        <Reveal className="order-1 relative w-full">
          <div className="relative mx-auto w-full max-w-[500px]">
            {/* Standardized Brand Glow */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--sv-blue)]/10 rounded-full blur-2xl animate-pulse" />
            
            {/* Main Image Frame - Standardized border and aspect ratio */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-square bg-slate-100 group">
              <Image
                src="/assets/newImage3.png"
                alt="Clinical Site Management Operations"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              
              {/* Site Ops Badge */}
              <div className="absolute top-6 right-6 z-20 bg-[var(--sv-teal)]/90 backdrop-blur-md text-white px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10 shadow-lg">
                <Activity className="w-4 h-4 text-[var(--sv-green)]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Site Operations</span>
              </div>
            </div>

            {/* Decorative outer frame */}
            <div className="absolute -inset-4 border-2 border-[var(--sv-blue)]/5 rounded-[3rem] -z-10" />
          </div>
        </Reveal>

        {/* RIGHT: Text Section (Now second in grid) */}
        <Reveal className="order-2 max-w-3xl">
          <div className="space-y-6">
            {/* Badge using SyncVision Teal */}
            <div className="flex items-center gap-2 text-[var(--sv-blue)] font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em]">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              Operational Excellence
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--sv-teal)] leading-[1.15] tracking-tight">
              Reliable & Compliant <br /> 
              <span className="text-[var(--sv-teal)] underline decoration-[var(--sv-green)] decoration-4 underline-offset-8">Site Operations</span>
            </h2>

            <div className="space-y-6 mt-8">
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base md:text-lg font-light">
                SyncVision Research Solution LLP delivers <span className="text-[var(--sv-teal)] font-medium">structured, process-driven</span> site management services that support high-quality clinical trial execution across India.
              </p>

              <div className="grid gap-6">
                {/* Feature Card */}
                <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--sv-blue)]/10 rounded-xl flex items-center justify-center">
                        <ClipboardCheck className="text-[var(--sv-blue)] w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-[var(--sv-teal)] font-bold text-sm uppercase tracking-wider mb-1">Our Approach</h4>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            We operate with strict adherence to ICH-GCP guidelines, ensuring transparency, accountability, and excellence in every project we manage.
                        </p>
                    </div>
                </div>

                {/* Left Border Signature Style matching HomeHero reference */}
                <div className="border-l-4 border-[var(--sv-green)] pl-6 py-1">
                    <p className="text-[var(--sv-teal)] font-bold italic text-sm md:text-base">
                        Integrity. Precision. Partnership.
                    </p>
                    <p className="text-slate-500 text-xs md:text-sm mt-1">
                        Ensuring ethical conduct while maintaining operational efficiency.
                    </p>
                </div>
              </div>

              {/* Data Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                <div className="flex flex-col">
                    <span className="text-[var(--sv-teal)] font-extrabold text-base md:text-lg">Data Integrity</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Guaranteed</span>
                </div>
                <div className="flex flex-col sm:border-l border-slate-200 sm:pl-6">
                    <span className="text-[var(--sv-teal)] font-extrabold text-base md:text-lg">Patient Safety</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Primary Priority</span>
                </div>
                <div className="flex flex-col sm:border-l border-slate-200 sm:pl-6">
                    <span className="text-[var(--sv-teal)] font-extrabold text-base md:text-lg">Timelines</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Strict Adherence</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}