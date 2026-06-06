import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import CourseEnquiryForm from "@/components/CourseEnquiryForm";
import {
  BookOpenCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

const programs = [
  {
    title: "Clinical Research Comprehensive Program",
    desc: "Learn the practical flow of clinical trial site work, from feasibility and start-up support to visit coordination and close-out readiness.",
    points: ["Site feasibility", "Trial coordination", "Source documentation"],
    Icon: ClipboardCheck,
  },
  {
    title: "ICH-GCP, Ethics and Documentation",
    desc: "Build a clear foundation in ethical trial conduct, essential documents, informed consent, protocol compliance, and quality expectations.",
    points: ["ICH-GCP basics", "IEC documentation", "Audit readiness"],
    Icon: ShieldCheck,
  },
  {
    title: "Pharmacovigilance Basics",
    desc: "Understand safety reporting workflows, adverse event documentation, reconciliation basics, and the role of PV in patient protection.",
    points: ["AE and SAE basics", "Safety timelines", "Case workflow"],
    Icon: HeartPulse,
  },
  {
    title: "Clinical Data Management",
    desc: "Get introduced to data capture, query handling, source data verification, data quality checks, and coordination with study teams.",
    points: ["eCRF overview", "Query resolution", "Data integrity"],
    Icon: BookOpenCheck,
  },
  {
    title: "Medical Writing and Regulatory Documentation",
    desc: "Practice structured clinical research writing for study documents, reports, trackers, and communication used in trial operations.",
    points: ["Clinical writing", "Regulatory basics", "Study trackers"],
    Icon: FileText,
  },
  {
    title: "Career Guidance in Clinical Research",
    desc: "Prepare for clinical research roles with resume support, interview readiness, domain orientation, and guidance from industry experience.",
    points: ["Role mapping", "Interview support", "Career mentoring"],
    Icon: BriefcaseBusiness,
  },
];

const eligibility = [
  "Pharmacy, life sciences, biotechnology, microbiology, nursing, medical, dental, and allied health students.",
  "Fresh graduates looking to enter clinical research, SMO operations, CRO roles, or pharma trial support.",
  "Healthcare professionals who want structured exposure to ethical clinical trial execution.",
  "Working candidates who need practical orientation in documentation, GCP, and site coordination.",
];

const features = [
  { title: "Practical Site Perspective", desc: "Training is shaped around real site workflows and clinical trial coordination tasks." },
  { title: "Ethics First Learning", desc: "Learners are oriented to patient safety, informed consent, documentation discipline, and compliance." },
  { title: "Industry Mentorship", desc: "Guidance from clinical research professionals with hands-on trial operations experience." },
  { title: "Career Readiness", desc: "Support for resume building, interview preparation, role awareness, and professional communication." },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[var(--sv-teal-20)]">
      <Navbar />

      <section
        className="relative flex min-h-[72svh] flex-col overflow-hidden bg-[var(--sv-teal)] sm:min-h-[78svh] md:min-h-[100svh] lg:min-h-[85vh] lg:flex-row lg:items-center"
        style={{ backgroundColor: "var(--sv-teal)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/clinical-research.png')" }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "var(--sv-teal-20)" }} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, var(--sv-teal-80) 0%, rgba(23,114,109,0.62) 55%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: "linear-gradient(135deg, transparent 60%, var(--sv-blue) 100%)" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 pt-24 sm:pb-14 md:pb-20 md:pt-36 lg:pb-0 lg:pt-12">
          <div className="max-w-3xl">
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-[1px] w-12 bg-[var(--syncvision-gold)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--syncvision-gold)]">
                  Clinical Research Training
                </span>
              </div>

              <h1 className="text-2xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
                Courses for Future <br className="hidden sm:block" />
                <span className="text-[var(--syncvision-gold)]">Clinical Research Professionals</span>
              </h1>

              <h2 className="mt-4 border-l-4 border-[var(--syncvision-gold)] pl-4 text-sm font-medium leading-snug text-[var(--syncvision-white)] sm:mt-6 sm:text-base md:text-lg lg:text-xl">
                Practical learning in GCP, ethics, site operations, documentation, and trial coordination.
              </h2>

              <p className="mt-4 max-w-2xl text-xs font-normal leading-relaxed text-[var(--syncvision-white)]/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)] sm:text-sm md:text-base">
                SyncVision courses are designed for students, freshers, and healthcare professionals who want to understand how ethical, quality-focused clinical trials are managed at real study sites.
              </p>

              <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row">
                <Link
                  href="#course-enquiry"
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border-2 border-[var(--sv-green)] bg-[var(--sv-green)] px-8 py-3 text-sm font-bold text-[var(--sv-teal-dark)] shadow-lg transition-all duration-300 hover:bg-transparent hover:text-white sm:w-auto md:py-4"
                >
                  Enquire Now
                </Link>
                <Link
                  href="#course-programs"
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border-2 border-[var(--sv-blue-light)] bg-[rgba(76,123,193,0.18)] px-8 py-3 text-sm font-bold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[var(--sv-blue)] hover:bg-[var(--sv-blue)] sm:w-auto md:py-4"
                >
                  View Courses
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{ background: "linear-gradient(to top, var(--sv-teal-dark), transparent)" }}
        />
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <div className="border-l-4 border-[var(--sv-green)] pl-6">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--sv-blue)]">
                  Why Learn With SyncVision
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight text-[var(--sv-teal)] md:text-4xl">
                  Training shaped by clinical trial execution.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.title} className="rounded-lg border border-slate-100 bg-[var(--sv-teal-20)] p-5">
                    <h3 className="mb-2 text-sm font-black uppercase tracking-wider text-[var(--sv-teal)]">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="course-programs" className="bg-[var(--sv-teal-20)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--sv-blue)]">
                Course Options
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[var(--sv-teal)] md:text-4xl">
                Choose the learning track that matches your career goal.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programs.map(({ title, desc, points, Icon }, index) => (
              <Reveal key={title} delay={index * 70}>
                <article className="flex h-full flex-col rounded-lg border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--sv-green)]/50 hover:shadow-xl hover:shadow-[rgb(var(--sv-teal-rgb)_/_0.08)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--sv-teal-20)] text-[var(--sv-blue)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-lg font-black leading-tight text-[var(--sv-teal)]">{title}</h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600">{desc}</p>
                  <ul className="space-y-2">
                    {points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                        <CheckCircle2 className="h-4 w-4 text-[var(--sv-green)]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--sv-green)]/20 text-[var(--sv-teal)]">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-[var(--sv-teal)] md:text-4xl">
                Who can apply?
              </h2>
              <div className="space-y-4">
                {eligibility.map((item) => (
                  <div key={item} className="flex gap-3 rounded-lg border border-slate-100 bg-white p-4 shadow-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--sv-green)]" />
                    <p className="text-sm leading-relaxed text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="rounded-lg bg-[var(--sv-teal)] p-6 text-white shadow-2xl shadow-[rgb(var(--sv-teal-rgb)_/_0.18)] md:p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-[var(--sv-green)]">
                <Stethoscope className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-black">What learners practice</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  "Protocol and visit schedule basics",
                  "Informed consent documentation",
                  "Source document and SDV workflow",
                  "AE and SAE reporting awareness",
                  "IEC and regulatory file basics",
                  "Sponsor, CRO, and site communication",
                ].map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm font-medium leading-relaxed text-white/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="course-enquiry" className="bg-[var(--sv-teal-20)] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--sv-blue)]">
                Course Contact
              </p>
              <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-[var(--sv-teal)] md:text-4xl">
                Ask about batches, eligibility, and training guidance.
              </h2>
              <p className="mb-8 text-base leading-relaxed text-slate-600">
                Share your background and preferred course. SyncVision will get back to you with the next steps, batch guidance, and suitable learning path.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-lg border border-slate-100 bg-white p-5">
                  <Users className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--sv-blue)]" />
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-wider text-[var(--sv-teal)]">For Students and Freshers</h3>
                    <p className="mt-1 text-sm text-slate-500">Get guidance on entry-level clinical research learning paths.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-slate-100 bg-white p-5">
                  <BriefcaseBusiness className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--sv-blue)]" />
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-wider text-[var(--sv-teal)]">For Working Professionals</h3>
                    <p className="mt-1 text-sm text-slate-500">Discuss practical upskilling in site operations, documentation, and compliance.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="rounded-lg border border-slate-100 bg-white p-5 shadow-2xl shadow-[rgb(var(--sv-teal-rgb)_/_0.10)] sm:p-8">
              <CourseEnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
