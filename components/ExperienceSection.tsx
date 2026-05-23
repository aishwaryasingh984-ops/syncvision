"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { GraduationCap, Briefcase, Workflow } from "lucide-react";

export default function ExperienceSection() {
  return (
    // Responsive padding: pt-32 on mobile/mid-devices to clear fixed Navbar on short screens
    <section className="bg-[var(--sv-teal-20)] pt-32 pb-20 md:pt-40 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT: Text Content - Left Aligned Reference */}
        <Reveal className="order-2 lg:order-1 max-w-3xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[var(--sv-blue)]/10 border border-[var(--sv-blue)]/20">
            <span className="text-[var(--sv-teal)] text-[10px] font-bold uppercase tracking-[0.2em]">Our Expertise</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--sv-teal)] leading-tight mb-8 tracking-tight">
            Experienced Team, <br />
            <span className="text-[var(--sv-teal)] underline decoration-[var(--sv-green)] decoration-4 underline-offset-8">Efficient Processes</span>
          </h2>

          <div className="space-y-8 mt-10">
            {/* Feature 1: Proprietary SOPs */}
            <div className="flex gap-5 group">
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm group-hover:border-[var(--sv-green)]/50 transition-all">
                <Workflow className="text-[var(--sv-blue)] w-6 h-6 md:w-7 md:h-7 group-hover:text-[var(--sv-green)] transition-colors" />
              </div>
              <div className="flex-1">
                <h4 className="text-[var(--sv-teal)] font-bold text-sm uppercase tracking-wider mb-1">Standardized SOPs</h4>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-light">
                  <span className="text-[var(--sv-teal)] font-semibold">SyncVision</span> operates with proprietary SITE SOPs, overseen by a leadership team with global pharma experience in complex clinical operations.
                </p>
              </div>
            </div>

            {/* Feature 2: Qualified CRC Team */}
            <div className="flex gap-5 group">
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm group-hover:border-[var(--sv-green)]/50 transition-all">
                <GraduationCap className="text-[var(--sv-blue)] w-6 h-6 md:w-7 md:h-7 group-hover:text-[var(--sv-green)] transition-colors" />
              </div>
              <div className="flex-1">
                <h4 className="text-[var(--sv-teal)] font-bold text-sm uppercase tracking-wider mb-1">Qualified CRC Team</h4>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-light">
                  Our team holds degrees in <span className="text-[var(--sv-teal)] font-semibold">Nursing, Medicine, and Life Sciences</span>, bringing direct hospital workflow experience for seamless site integration.
                </p>
              </div>
            </div>

            {/* Feature 3: Project Specific Plans */}
            <div className="flex gap-5 group">
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm group-hover:border-[var(--sv-green)]/50 transition-all">
                <Briefcase className="text-[var(--sv-blue)] w-6 h-6 md:w-7 md:h-7 group-hover:text-[var(--sv-green)] transition-colors" />
              </div>
              <div className="flex-1">
                <h4 className="text-[var(--sv-teal)] font-bold text-sm uppercase tracking-wider mb-1">Quality Control</h4>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-light">
                  We develop project-specific <span className="text-[var(--sv-teal)] font-semibold">Risk Management</span> plans to deliver high-quality, inspection-ready services to our Sponsors and CROs.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* RIGHT: Image Section - Fixed for Nest Hub & Spacing */}
        <Reveal className="order-1 lg:order-2 relative w-full">
          <div className="relative mx-auto w-full max-w-[500px]">
            {/* Standardized Brand Aura */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--sv-blue)]/10 rounded-full blur-2xl animate-pulse" />
            
            {/* Square Aspect Ratio Frame */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-square bg-slate-100 group">
              <Image
                src="/assets/newImage2.png"
                alt="SyncVision Professional CRC Team"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--sv-teal)]/20 to-transparent" />
            </div>

            {/* Methodology Badge - Standardized Gold/Green Focus */}
            <div className="absolute -bottom-6 -right-4 lg:-right-6 bg-[var(--sv-teal)] p-5 md:p-6 rounded-2xl shadow-xl border border-white/10 hidden sm:block z-20">
              <p className="text-[var(--sv-green)] font-black text-[10px] tracking-[0.2em] uppercase mb-1">Methodology</p>
              <p className="text-white text-base md:text-lg font-medium">Data-Driven Excellence</p>
            </div>
            {/* Decorative outer frame */}
            <div className="absolute -inset-4 border-2 border-[var(--sv-blue)]/5 rounded-[3rem] -z-10" />
          </div>
        </Reveal>

      </div>
    </section>
  );
}