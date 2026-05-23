"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { PartnerHero } from "@/components/PartnerHero";
import { WhyPartner } from "@/components/WhyPartner";
import { TargetPartners } from "@/components/TargetPartners";
import { PartnerCTA } from "@/components/PartnerCTA";
import { CheckCircle2, Globe, Shield, Users } from "lucide-react";

export default function PartnerPage() {
  return (
    <main className="bg-[var(--sv-teal-20)] min-h-screen">
      <Navbar />
      
      {/* 1. Hero Section: Establish Authority */}
      <PartnerHero />

      {/* 2. Value Proposition Grid: Why SyncVision? */}
      <WhyPartner />

      {/* 3. Detailed Strategic Alignment Section (Zig-Zag) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Strategic Content */}
            <Reveal>
              <div className="border-l-4 border-[var(--sv-green)] pl-6 mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--sv-teal)] tracking-tight">
                  Our Commitment to <br />
                  <span className="text-[var(--sv-blue)]">Operational Excellence</span>
                </h2>
              </div>
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-8">
                At SyncVision Research Solution LLP, we believe successful clinical research is built on 
                strong, transparent, and ethical partnerships. We bridge the gap between 
                complex protocol requirements and real-world site execution.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Strategic Multi-City Presence", desc: "Faster site activation in Pune, Thane, and Patna." },
                  { title: "Ethics & Regulatory Expertise", desc: "Seamless EC submissions and compliance management." },
                  { title: "Patient-Centric Execution", desc: "High-quality source documentation and retention strategies." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-[var(--sv-green)]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--sv-teal)] text-sm uppercase tracking-wider">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right: Visual Illustration / Placeholder */}
            <Reveal delay={200}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-[var(--sv-green)]/10 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all" />
                <div className="relative bg-[var(--sv-teal)] p-12 rounded-[3rem] shadow-2xl border border-white/10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="flex flex-col gap-8 relative z-10">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--sv-green)]/20 flex items-center justify-center text-[var(--sv-green)]">
                        <Globe size={24} />
                      </div>
                      <p className="text-white/80 font-bold uppercase tracking-widest text-xs">Wide Geographic Reach</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--sv-green)]/20 flex items-center justify-center text-[var(--sv-green)]">
                        <Shield size={24} />
                      </div>
                      <p className="text-white/80 font-bold uppercase tracking-widest text-xs">GCP-Compliant Quality</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--sv-green)]/20 flex items-center justify-center text-[var(--sv-green)]">
                        <Users size={24} />
                      </div>
                      <p className="text-white/80 font-bold uppercase tracking-widest text-xs">Experienced PI Network</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Who We Partner With: Targeted Audience */}
      <TargetPartners />

      {/* 5. Final CTA: Direct Recruitment/Collaboration */}
      <PartnerCTA />

      <Footer />
    </main>
  );
}