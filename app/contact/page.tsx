"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Reveal from "@/components/Reveal";
import { MapPin, Phone, Mail } from "lucide-react";
import { ReactNode } from "react";

interface ContactInfoCardProps {
  icon: ReactNode;
  title: string;
  detail: string;
  subDetail?: string;
  type:string;
}

export default function ContactPage() {
  return (
    <main className="bg-[var(--sv-teal-20)] min-h-screen">
      <Navbar />
      <ContactHero />

      {/* Info Cards Section: Standardized spacing to match Zigzag sections */}
      <section className="relative pt-20 pb-16 md:pt-24 md:pb-24 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--sv-teal)]/14 via-[var(--sv-green)]/6 to-transparent pointer-events-none" />
        <div className="absolute left-1/2 top-0 h-28 w-[min(92vw,72rem)] -translate-x-1/2 rounded-b-[3rem] bg-white/45 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Reveal>
              <ContactInfoCard 
                icon={<MapPin size={24} />}
                title="Headquarters"
                detail="Pune, Maharashtra"
                subDetail="Operational Presence: Thane & Patna"
                type="address"
              />
            </Reveal>
            <Reveal>
              <ContactInfoCard 
                icon={<Phone size={24} />}
                title="Direct Call"
                detail="+91 9711416627 / +91 9637340154"
                subDetail="Mon - Fri, 9am - 6pm"
                type="phone"
              />
            </Reveal>
            <Reveal>
              <ContactInfoCard 
                icon={<Mail size={24} />}
                title="Email Us"
                detail="info@syncvisionresearch.com"
                subDetail="Typical response: < 24 hrs"
                type="email"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactInfoCard({ icon, title, detail, subDetail, type }: ContactInfoCardProps) {
  return (
    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:border-[var(--sv-green)]/30 hover:shadow-xl hover:shadow-[0_20px_40px_rgb(var(--sv-teal-rgb)_/_0.05)] transition-all duration-500 h-full">
      
      {/* Icon Container: Transitioning from Teal to Green */}
      <div className="w-14 h-14 bg-[var(--sv-teal-20)] text-[var(--sv-blue)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--sv-teal)] group-hover:text-[var(--sv-green)] transition-all duration-300 shadow-sm">
        {type === 'email' ? (
          <a href="mailto:info@syncvisionresearch.com">{icon}</a>
        ) : type === 'phone' ? (
          <a href="tel:+919711416627">{icon}</a>
        ) : (
          icon
        )}
      </div>
      
      <h3 className="font-black text-[var(--sv-teal)] mb-3 tracking-[0.2em] uppercase text-[10px]">
        {title}
      </h3>
      
      <div className="text-[var(--sv-teal)] text-base lg:text-lg leading-tight font-bold mb-2">
        {type === 'email' ? (
          <a href="mailto:info@syncvisionresearch.com">{detail}</a>
        ) : type === 'phone' ? (
          <div className="flex flex-col gap-1 items-center">
            <a href="tel:+919711416627" className="hover:underline">+91 9711416627</a>
            <a href="tel:+919637340154" className="hover:underline">+91 9637340154</a>
          </div>
        ) : (
          detail
        )}
      </div>

      {subDetail && (
        <p className="text-slate-400 text-xs font-light">
          {subDetail}
        </p>
      )}
    </div>
  );
}
