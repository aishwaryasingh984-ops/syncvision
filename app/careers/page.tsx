import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CareersHero } from "@/components/CareersHero";
import { JobRoles } from "@/components/JobRoles";
import { ApplicationCard } from "@/components/ApplicationCard";

export default function CareersPage() {
  return (
    <main className="bg-white min-h-screen">
         <Navbar />
      <CareersHero />
      
      <section className="relative pt-20 pb-12 md:pt-24 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--sv-teal)]/14 via-[var(--sv-green)]/6 to-transparent pointer-events-none" />
        <div className="absolute left-1/2 top-0 h-28 w-[min(92vw,72rem)] -translate-x-1/2 rounded-b-[3rem] bg-white/45 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <JobRoles />
          <div className="lg:sticky lg:top-32">
            <ApplicationCard />
          </div>
        </div>
      </section>
      <Footer />

    </main>
  );
}
