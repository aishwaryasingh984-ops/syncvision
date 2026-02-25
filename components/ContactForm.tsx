"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const btnBase = "cursor-pointer w-full inline-flex justify-center items-center rounded-full px-8 py-3 md:py-4 text-sm font-bold transition-all duration-300 shadow-lg border-2 border-[var(--syncvision-gold)]";

  // Main Form Action Style
  const btnPrimary = `${btnBase} bg-[var(--syncvision-gold)] text-[var(--syncvision-green)] hover:bg-[var(--syncvision-teal)] hover:text-white`;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "32219b8a-9860-42c0-ac81-6ed0f9ce300b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError("Error. Please try again.");
      }
    } catch (err) {
      setError("Server connection failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-[var(--syncvision-green)] text-[var(--syncvision-gold)] rounded-full flex items-center justify-center mb-6 shadow-xl">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-black text-[var(--syncvision-green)] mb-2">Message Sent!</h3>
        <p className="text-slate-500 text-sm max-w-xs">Our clinical team has received your inquiry and will respond within 24 hours.</p>
        <button onClick={() => setSubmitted(false)} className="mt-8 text-xs font-black text-[var(--syncvision-gold)] bg-[var(--syncvision-green)] px-6 py-2 rounded-full uppercase tracking-widest hover:scale-105 transition-all">
          New Message
        </button>
      </div>
    );
  }

  // Input styles for white background
  const inputBase = "w-full px-4 py-3 bg-[#F7F9FB] border border-slate-200 text-[var(--syncvision-green)] rounded-xl outline-none focus:border-[var(--syncvision-teal)] focus:bg-white transition-all placeholder:text-slate-400 text-sm font-medium";
  const labelBase = "text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className={labelBase}>Full Name</label>
          <input type="text" name="name" required className={inputBase} placeholder="e.g. Dr. John Doe" />
        </div>
        <div className="space-y-2">
          <label className={labelBase}>Work Email</label>
          <input type="email" name="email" required className={inputBase} placeholder="john@company.com" />
        </div>
      </div>

      <div className="space-y-2">
        <label className={labelBase}>Inquiry Type</label>
        <div className="relative">
          <select name="subject" className={`${inputBase} appearance-none cursor-pointer`}>
            <option value="General">General Inquiry</option>
            <option value="Feasibility">Site Feasibility</option>
            <option value="Partnership">Sponsor/CRO Partnership</option>
            <option value="Career">Career Application</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            ▼
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className={labelBase}>Message</label>
        <textarea name="message" rows={4} required className={`${inputBase} resize-none`} placeholder="How can SyncVision support your research goals?"></textarea>
      </div>

      <div className="pt-2">
      <button
        type="submit"
        disabled={isSubmitting}
        className={btnPrimary}
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-[var(--syncvision-green)]/30 border-t-[var(--syncvision-green)] rounded-full animate-spin" />
        ) : (
          <div className="flex items-center gap-3">
            <Send className="w-4 h-4" /> 
            <span className="uppercase tracking-widest text-[11px] md:text-xs">Send Message</span>
          </div>
        )}
      </button>
    </div>

    {error && (
      <p className="text-red-500 font-bold text-[10px] text-center mt-2 animate-pulse">
        {error}
      </p>
    )}
    </form>
  );
}
