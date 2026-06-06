"use client";

import { type FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const courseOptions = [
  "Clinical Research and Site Operations",
  "ICH-GCP, Ethics and Documentation",
  "Pharmacovigilance Basics",
  "Clinical Data Management",
  "Medical Writing and Regulatory Documentation",
  "Career Guidance in Clinical Research",
];

export default function CourseEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "32219b8a-9860-42c0-ac81-6ed0f9ce300b");
    formData.append("subject", "Course Enquiry - SyncVision Training");

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

  if (submitted) {
    return (
      <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--sv-teal)] text-[var(--sv-green)] shadow-xl">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mb-2 text-2xl font-black text-[var(--sv-teal)]">Enquiry Sent!</h3>
        <p className="max-w-sm text-sm leading-relaxed text-slate-500">
          Our training team has received your course enquiry and will contact you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 rounded-full bg-[var(--sv-teal)] px-6 py-3 text-[11px] font-black uppercase tracking-widest text-[var(--sv-green)] transition-all hover:bg-[var(--sv-blue)] hover:text-white"
        >
          New Enquiry
        </button>
      </div>
    );
  }

  const inputBase = "w-full rounded-md border border-slate-200 bg-[var(--sv-teal-20)] px-4 py-3 text-sm font-medium text-[var(--sv-teal)] outline-none transition-all placeholder:text-slate-400 focus:border-[var(--sv-blue)] focus:bg-white";
  const labelBase = "ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400";

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className={labelBase}>Full Name</label>
          <input type="text" name="name" required className={inputBase} placeholder="e.g. Priya Sharma" />
        </div>
        <div className="space-y-2">
          <label className={labelBase}>Email Address</label>
          <input type="email" name="email" required className={inputBase} placeholder="name@email.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className={labelBase}>Phone Number</label>
          <input type="tel" name="phone" required className={inputBase} placeholder="+91 98765 43210" />
        </div>
        <div className="space-y-2">
          <label className={labelBase}>City</label>
          <input type="text" name="city" className={inputBase} placeholder="Pune, Patna, Ahmedabad..." />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className={labelBase}>Qualification</label>
          <input type="text" name="qualification" className={inputBase} placeholder="B.Pharm, M.Sc, Nursing, MBBS..." />
        </div>
        <div className="space-y-2">
          <label className={labelBase}>Course Interest</label>
          <div className="relative">
            <select name="course_interest" required className={`${inputBase} cursor-pointer appearance-none`}>
              <option value="">Select a course</option>
              {courseOptions.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              v
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className={labelBase}>Message</label>
        <textarea
          name="message"
          rows={4}
          className={`${inputBase} resize-none`}
          placeholder="Tell us about your background, preferred batch timing, or training goal."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border-2 border-[var(--sv-green)] bg-[var(--sv-green)] px-8 py-3 text-sm font-bold text-[var(--sv-teal)] shadow-lg transition-all duration-300 hover:bg-[var(--sv-blue)] hover:text-white disabled:cursor-not-allowed disabled:opacity-70 md:py-4"
      >
        {isSubmitting ? (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-[var(--sv-teal)]/30 border-t-[var(--sv-teal)]" />
        ) : (
          <span className="flex items-center gap-3">
            <Send className="h-4 w-4" />
            <span className="text-[11px] uppercase tracking-widest md:text-xs">Send Course Enquiry</span>
          </span>
        )}
      </button>

      {error && (
        <p className="text-center text-[10px] font-bold text-red-500 animate-pulse">
          {error}
        </p>
      )}
    </form>
  );
}
