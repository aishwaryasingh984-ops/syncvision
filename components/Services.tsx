"use client";

import Reveal from "./Reveal";

const services = [
  { 
    title: "Site Management", 
    description: "Ethics committee communications and regulatory document submission.", 
    icon: "📋" 
  },
  { 
    title: "CRC Out-sourcing", 
    description: "Experienced team with medical backgrounds and efficient management processes.", 
    icon: "👥" 
  },
  { 
    title: "Study Start Up", 
    description: "Project schedule management, site feasibility, and laboratory coordination.", 
    icon: "🚀" 
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--sv-green)] tracking-tight">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-[var(--sv-green)] mx-auto mt-4" />
        </Reveal>

        {/* Grid with Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="p-8 h-full border border-slate-100 rounded-[2rem] hover:border-[var(--sv-blue)]/30 hover:shadow-2xl hover:shadow-[0_4px_20px_rgb(var(--sv-teal)_/_0.05)] transition-all duration-500 bg-white group">
                
                {/* Icon Container using Teal/Green transitions */}
                <div className="w-16 h-16 bg-[var(--sv-teal-20)] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[var(--sv-teal)] transition-colors duration-300">
                  <span className="group-hover:scale-110 transition-transform">
                    {s.icon}
                  </span>
                </div>
                
                {/* Title using SyncVision Green */}
                <h3 className="text-xl font-bold text-[var(--sv-green)] mb-3 tracking-tight">
                  {s.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed font-light">
                  {s.description}
                </p>
                
                {/* Subtle Gold Indicator on hover */}
                <div className="mt-6 w-0 h-0.5 bg-[var(--sv-green)] group-hover:w-12 transition-all duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}