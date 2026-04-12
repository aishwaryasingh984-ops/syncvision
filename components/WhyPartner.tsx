"use client";

import { Map, ShieldCheck, Heart, Database, MessageSquare } from "lucide-react";
import Reveal from "./Reveal";

const benefits = [
  {
    title: "Multi-City Presence",
    desc: "Strategically located in Pune, Thane, and Patna for faster site activation and diverse patient access.",
    icon: <Map className="w-6 h-6" />
  },
  {
    title: "Regulatory Expertise",
    desc: "Seamless Ethics Committee submissions and compliance management ensuring smooth study progression.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Patient-Centric",
    desc: "Prioritizing ethical recruitment and retention strategies while safeguarding data integrity.",
    icon: <Heart className="w-6 h-6" />
  },
  {
    title: "Quality Focus",
    desc: "Structured SOP-driven processes strictly aligned with ICH-GCP and national guidelines.",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "Transparent Flow",
    desc: "Proactive updates and solution-oriented problem solving for real-time trial coordination.",
    icon: <MessageSquare className="w-6 h-6" />
  }
];

export function WhyPartner() {
  return (
    <section className="relative pt-20 pb-20 bg-[#F7F9FB] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--syncvision-green)]/14 via-[var(--syncvision-gold)]/6 to-transparent pointer-events-none" />
      <div className="absolute left-1/2 top-0 h-28 w-[min(92vw,72rem)] -translate-x-1/2 rounded-b-[3rem] bg-white/45 blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Reveal className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--syncvision-green)] border-l-4 border-[var(--syncvision-gold)] pl-6">
            Why Partner With <span className="text-[var(--syncvision-teal)]">SyncVision?</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {benefits.map((item, i) => (
    <Reveal key={i} delay={i * 100}>
      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 
                  hover:border-[var(--syncvision-gold)]/30 
                  shadow-sm 
                  hover:shadow-xl 
                  hover:shadow-[0_20px_40px_rgba(10,77,68,0.05)]
                  transition-all duration-500 
                  group h-full">
        <div className="w-12 h-12 bg-[#F7F9FB] text-[var(--syncvision-teal)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--syncvision-green)] group-hover:text-[var(--syncvision-gold)] transition-all">
          {item.icon}
        </div>
        <h3 className="text-lg font-bold text-[var(--syncvision-green)] mb-3">
          {item.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed font-light">
          {item.desc}
        </p>
      </div>
    </Reveal>
  ))}
</div>
      </div>
    </section>
  );
}
