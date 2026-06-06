"use client";

import { type FormEvent, useState } from "react";
import { Building2, CheckCircle2, Send, Users, X } from "lucide-react";
import Reveal from "./Reveal";

type PartnerFormType = "hospital" | "sponsor";

const partnerFormContent = {
  hospital: {
    title: "Hospital Site Collaboration",
    subtitle: "Share your hospital or site details for clinical trial collaboration.",
    subject: "Hospital Site Collaboration Inquiry",
    icon: Building2,
  },
  sponsor: {
    title: "Sponsor / CRO / Pharma Collaboration",
    subtitle: "Share your study requirements for sponsor, CRO, or pharma partnerships.",
    subject: "Sponsor CRO Pharma Collaboration Inquiry",
    icon: Users,
  },
};

export function PartnerHero() {
  const [activeForm, setActiveForm] = useState<PartnerFormType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const activeFormContent = activeForm ? partnerFormContent[activeForm] : null;
  const ActiveIcon = activeFormContent?.icon;

  const openForm = (formType: PartnerFormType) => {
    setActiveForm(formType);
    setSubmitted(false);
    setError(null);
  };

  const closeForm = () => {
    setActiveForm(null);
    setSubmitted(false);
    setError(null);
    setIsSubmitting(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "32219b8a-9860-42c0-ac81-6ed0f9ce300b");
    formData.append("subject", activeFormContent?.subject ?? "Partner Collaboration Inquiry");
    formData.append("collaboration_type", activeFormContent?.title ?? "Partner Collaboration");

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
    } catch {
      setError("Server connection failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const btnBase = "cursor-pointer w-full sm:w-auto inline-flex justify-center items-center gap-3 rounded-full px-6 py-3 md:py-4 text-[11px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-lg border-2 leading-tight text-center";
  const btnPrimary = `${btnBase} bg-[var(--sv-green)] border-[var(--sv-green)] text-[var(--sv-teal-dark)] hover:bg-transparent hover:text-white`;
  const btnSecondary = `${btnBase} bg-[rgba(76,123,193,0.18)] border-[var(--sv-blue-light)] text-white backdrop-blur-md hover:bg-[var(--sv-blue)] hover:border-[var(--sv-blue)]`;
  const inputBase = "w-full px-4 py-3 bg-[var(--sv-teal-20)] border border-slate-200 text-[var(--sv-teal)] rounded-md outline-none focus:border-[var(--sv-blue)] focus:bg-white transition-all placeholder:text-slate-400 text-sm font-medium";
  const labelBase = "text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1";

  return (
    <section className="relative min-h-[72svh] sm:min-h-[78svh] md:min-h-[100svh] lg:min-h-[80vh] flex flex-col justify-center bg-[var(--sv-teal)] overflow-hidden">
      {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--sv-blue)]/15 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" /> */}
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('assets/partners-background.png')" }}
      />
      <div className="absolute inset-0 bg-[var(--sv-teal-mid)]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--sv-teal-mid)] via-[rgb(var(--sv-blue-rgb)_/_0.8)] to-transparent lg:via-[rgb(var(--sv-blue-rgb)_/_0.6)]" />
      
      {/* partners-background.png */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-24 pb-12 md:pt-36 md:pb-0 lg:pt-0">
        <div className="max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[var(--sv-green)]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--sv-green)] font-bold">Strategic Collaborations</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
              Advancing Research <br />
              <span className="text-[var(--sv-green)]">With Integrity.</span>
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-2xl">
              <button type="button" onClick={() => openForm("hospital")} className={btnPrimary}>
                <Building2 className="w-4 h-4 shrink-0" />
                <span>Site Collaboration with Hospitals</span>
              </button>

              <button type="button" onClick={() => openForm("sponsor")} className={btnSecondary}>
                <Users className="w-4 h-4 shrink-0" />
                <span>Sponsors, CROs & Pharma</span>
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      {activeFormContent && (
        <div className="fixed inset-0 z-[200] overflow-y-auto bg-[var(--sv-teal-dark)]/85 px-4 py-6 backdrop-blur-sm">
          <div className="flex min-h-full items-center justify-center">
            <div className="relative w-full max-w-2xl rounded-lg bg-white p-5 sm:p-8 shadow-2xl">
              <button
                type="button"
                onClick={closeForm}
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-[var(--sv-teal)] hover:text-white"
                aria-label="Close collaboration form"
              >
                <X className="h-4 w-4" />
              </button>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--sv-teal)] text-[var(--sv-green)] shadow-xl">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-2xl font-black text-[var(--sv-teal)]">Inquiry Sent!</h3>
                  <p className="max-w-sm text-sm text-slate-500">
                    Our team has received your collaboration inquiry and will respond shortly.
                  </p>
                  <button
                    type="button"
                    onClick={closeForm}
                    className="mt-8 rounded-full bg-[var(--sv-teal)] px-6 py-3 text-[11px] font-black uppercase tracking-widest text-[var(--sv-green)] transition-all hover:bg-[var(--sv-blue)] hover:text-white"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6 pr-10">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--sv-green)]/20 text-[var(--sv-teal)]">
                      {ActiveIcon && <ActiveIcon className="h-5 w-5" />}
                    </div>
                    <h2 className="text-2xl font-black text-[var(--sv-teal)]">
                      {activeFormContent.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {activeFormContent.subtitle}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className={labelBase}>Full Name</label>
                        <input type="text" name="name" required className={inputBase} placeholder="e.g. Dr. John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className={labelBase}>Work Email</label>
                        <input type="email" name="email" required className={inputBase} placeholder="john@company.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className={labelBase}>Phone Number</label>
                        <input type="tel" name="phone" className={inputBase} placeholder="+91 98765 43210" />
                      </div>

                      {activeForm === "hospital" ? (
                        <div className="space-y-2">
                          <label className={labelBase}>Hospital / Site Name</label>
                          <input type="text" name="hospital_site_name" required className={inputBase} placeholder="Hospital or site name" />
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <label className={labelBase}>Company Name</label>
                          <input type="text" name="company_name" required className={inputBase} placeholder="Sponsor, CRO, or pharma company" />
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className={labelBase}>City & State</label>
                        <input type="text" name="city_state" required className={inputBase} placeholder="e.g. Pune, Maharashtra" />
                      </div>

                      {activeForm === "hospital" ? (
                        <div className="space-y-2">
                          <label className={labelBase}>Departments / Specialties</label>
                          <input type="text" name="departments_specialties" className={inputBase} placeholder="Oncology, cardiology, etc." />
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <label className={labelBase}>Study Area / Phase</label>
                          <input type="text" name="study_area_phase" className={inputBase} placeholder="Therapeutic area or trial phase" />
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className={labelBase}>Message</label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        className={`${inputBase} resize-none`}
                        placeholder="Tell us how SyncVision can support this collaboration."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border-2 border-[var(--sv-green)] bg-[var(--sv-green)] px-8 py-3 text-sm font-bold text-[var(--sv-teal)] shadow-lg transition-all duration-300 hover:bg-[var(--sv-blue)] hover:text-white disabled:cursor-not-allowed disabled:opacity-70 md:py-4"
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 rounded-full border-2 border-[var(--sv-teal)]/30 border-t-[var(--sv-teal)] animate-spin" />
                      ) : (
                        <span className="flex items-center gap-3">
                          <Send className="h-4 w-4" />
                          <span className="text-[11px] uppercase tracking-widest md:text-xs">Send Inquiry</span>
                        </span>
                      )}
                    </button>

                    {error && (
                      <p className="text-center text-[10px] font-bold text-red-500 animate-pulse">
                        {error}
                      </p>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
