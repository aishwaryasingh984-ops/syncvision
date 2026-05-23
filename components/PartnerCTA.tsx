"use client";

import Reveal from "./Reveal";
import { Mail } from "lucide-react";

export function PartnerCTA() {
  return (
    <section className="py-24 bg-[var(--sv-teal-20)] text-center px-6">
      <Reveal>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--sv-teal)] mb-8">
            Let&apos;s Advance <br className="sm:hidden" /> Research Together
          </h2>
          <p className="text-slate-600 text-lg mb-10 font-light italic">
            &ldquo;Connect with us to build research partnerships that accelerate timelines while upholding the highest ethical standards.&rdquo;
          </p>
          <a 
            href="mailto:info@syncvisionresearch.com"
            className="inline-flex items-center gap-3 
                      bg-[var(--sv-green)] 
                      text-[var(--sv-teal)] 
                      px-10 py-5 rounded-full 
                      border-2 border-[var(--sv-green)] 
                      font-black uppercase tracking-widest text-sm 
                      shadow-2xl 
                      hover:bg-[var(--sv-blue)] 
                      hover:text-white 
                      hover:border-[var(--sv-green)] 
                      transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Partner With Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}
