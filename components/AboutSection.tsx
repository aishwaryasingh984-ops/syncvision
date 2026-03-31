import Image from "next/image";
import Reveal from "./Reveal";
import { CheckCircle2, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-[var(--syncvision-bg-light)] pt-28 pb-16 md:pt-36 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* LEFT: Content Mapping from your "About Us" and "Partner With Us" */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs text-[var(--syncvision-gold)]">
              Who We Are
            </span>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--syncvision-green)] leading-tight mt-4 mb-6 tracking-tight">
              Sync<span className="">Vision</span> Research <br className="hidden md:block" /> Solution LLP
            </h2>

            <p className="text-lg md:text-xl font-medium text-[var(--syncvision-teal)] mb-6 border-l-4 border-[var(--syncvision-gold)] pl-4">
              “Where Vision Meets Integrity”
            </p>

            <div className="space-y-6 text-[var(--syncvision-text-muted)] leading-relaxed text-sm md:text-base mb-10 font-light">
              <p>
                Headquartered in <span className="font-bold text-[var(--syncvision-green)]">Pune</span>, with a strong operational presence in <span className="font-bold text-[var(--syncvision-green)]">Thane</span> and <span className="font-bold text-[var(--syncvision-green)]">Patna</span>, we are a quality-focused Site Management Organization (SMO).
              </p>
              <p>
                We bridge the gap between Sponsors, CROs, Investigators, and Ethics Committees—ensuring seamless execution at every stage of the study lifecycle through structured, process-driven solutions.
              </p>
            </div>

            {/* Why Partner Grid - Updated with your "Why Partner With SyncVision?" points */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-[rgba(74,126,171,0.18)] border border-[var(--syncvision-blue-light)]/20">
              <h3 className="text-xl font-bold text-[var(--syncvision-green)] mb-6">
                Why Partner With Us?
              </h3>

              <ul className="grid sm:grid-cols-1 gap-5">
                {[
                  { t: "Strategic Multi-City Presence", d: "Pune, Thane, and Patna for faster site activation." },
                  { t: "Regulatory & Ethics Expertise", d: "Seamless EC submissions and documentation management." },
                  { t: "Data Integrity & Quality", d: "SOP-driven processes aligned with ICH-GCP guidelines." },
                  { t: "Transparent Communication", d: "Proactive updates and solution-oriented problem solving." }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="mt-1 bg-[var(--syncvision-gold)]/20 rounded-full p-1.5 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[var(--syncvision-green)]" />
                    </div>
                    <div>
                      <p className="text-[var(--syncvision-green)] font-bold text-sm uppercase tracking-wide">{item.t}</p>
                      <p className="text-[var(--syncvision-text-muted)] text-sm mt-1">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* RIGHT: Visual Side - Fixed for Nest Hub/Tablets */}
        <div className="order-1 lg:order-2 relative pt-4 lg:pt-12">
          <Reveal className="flex justify-center">
            <div className="relative w-full max-w-[550px]">
              {/* Image Container with Nest Hub specific aspect ratio protection */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-[4/5] lg:aspect-square bg-slate-200">
                <Image
                  src="/assets/newImage1.png" 
                  alt="SyncVision Research Operations"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--syncvision-green)]/45 to-transparent" />
              </div>

              {/* Floating Presence Badge */}
              <div className="absolute -bottom-6 right-6 bg-[var(--syncvision-green)] text-white p-6 rounded-3xl shadow-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-[var(--syncvision-gold)]" />
                  <p className="font-bold text-sm tracking-widest uppercase">Our Reach</p>
                </div>
                <p className="text-[var(--syncvision-ice)] text-xs leading-relaxed">
                  Pune • Thane • Patna
                </p>
              </div>
              <div className="absolute -inset-4 border-2 border-syncvision-teal/5 rounded-[3rem] -z-10" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Refitted Vision/Mission Section
export function MissionVisionSection() {
  return (
    <section className="py-24 bg-[var(--syncvision-green)] text-[var(--syncvision-ice)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10">
        <Reveal>
          <div className="border-l-4 border-[var(--syncvision-gold)] pl-8">
            <h3 className="text-[var(--syncvision-gold)] font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Vision</h3>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              To be a trusted and growth-driven Site Management Organization in India, recognized for reliability, regulatory strength, and uncompromising ethical standards.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="border-l-4 border-[var(--syncvision-gold)] pl-8">
            <h3 className="text-[var(--syncvision-gold)] font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Mission</h3>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              To enhance clinical trial execution by providing structured, compliant, and patient-focused solutions that accelerate study timelines while safeguarding data integrity.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
