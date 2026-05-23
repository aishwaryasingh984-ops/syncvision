"use client";

import { TherapeuticHero } from "@/components/TherapeuticHero";
import { SpecialtyGrid } from "@/components/SpecialtyGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowRight, Search } from "lucide-react";

export default function TherapeuticAreasPage() {
  const btnPrimary = "cursor-pointer w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full px-10 py-4 text-sm font-bold transition-all duration-300 shadow-lg border-2 bg-[var(--sv-green)] border-[var(--sv-green)] text-[var(--sv-teal)] hover:bg-[var(--sv-blue)] hover:text-white hover:border-[var(--sv-green)] active:scale-95";

  return (
    <main className="bg-[var(--sv-teal-20)] min-h-screen">
      <Navbar />
      <TherapeuticHero />
      <SpecialtyGrid />
      
      {/* CTA SECTION: Adjusted for Nest Hub height fit */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-slate-100">
        
        {/* Subtle Brand Aura */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[var(--sv-blue)]/5 rounded-full blur-3xl -z-0" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            {/* Signature Border Accent */}
            <div className="w-16 h-1 bg-[var(--sv-green)] mx-auto mb-8 rounded-full" />
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--sv-teal)] mb-6 tracking-tight leading-[1.1]">
              Need expertise in <br className="sm:hidden" />
              <span className="text-[var(--sv-green)]">another area?</span>
            </h2>
            
            <p className="text-slate-600 mb-10 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
              While we specialize in the areas listed, our investigator network across 
              <span className="text-[var(--sv-teal)] font-bold italic"> Pune, Thane, and Patna </span> 
              is constantly expanding. Reach out to discuss your specific protocol and site feasibility.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className={btnPrimary}>
                <Search className="w-4 h-4" />
                Inquire Feasibility
              </a>
              
              <a href="/services" className={btnPrimary}>
                View SMO Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
