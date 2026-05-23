import Link from "next/link";
import Reveal from "./Reveal";

export default function HomeHero() {
  const btnBase = "cursor-pointer w-full sm:w-auto inline-flex justify-center items-center rounded-full px-8 py-3 md:py-4 text-sm font-bold transition-all duration-300 shadow-lg border-2";
  const btnPrimary = `${btnBase} bg-[var(--sv-green)] border-[var(--sv-green)] text-[var(--sv-teal-dark)] hover:bg-transparent hover:text-white`;
  const btnSecondary = `${btnBase} bg-[rgba(76,123,193,0.18)] border-[var(--sv-blue-light)] text-white backdrop-blur-md hover:bg-[var(--sv-blue)] hover:border-[var(--sv-blue)]`;

  return (
    <section className="relative min-h-[72svh] sm:min-h-[78svh] md:min-h-[100svh] lg:min-h-[85vh] flex flex-col lg:flex-row lg:items-center overflow-hidden"
      style={{ backgroundColor: "var(--sv-teal)" }}>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('assets/home-hero-background.webp')" }}
      />

      {/* 20% teal wash overlay as specified */}
      <div className="absolute inset-0" style={{ backgroundColor: "var(--sv-teal-20)" }} />

      {/* Directional gradient */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(to right, var(--sv-teal-80) 0%, rgba(23,114,109,0.55) 55%, transparent 100%)" }} />

      {/* Blue shimmer edge */}
      <div className="absolute inset-0 opacity-20"
        style={{ background: "linear-gradient(135deg, transparent 60%, var(--sv-blue) 100%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-12 sm:pb-14 md:pt-36 md:pb-20 lg:pt-12 lg:pb-0">
        <div className="max-w-3xl">
          <Reveal>
            {/* Full logo lockup — plain tagline version sits well on teal/dark */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.1] text-white tracking-tight">
              Sync<span className="text-[var(--syncvision-gold)]">Vision</span> <br className="hidden sm:block" />
              Research Solution LLP
            </h1>

            <h2 className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[var(--syncvision-white)] leading-snug border-l-4 border-[var(--syncvision-gold)] pl-4 italic">
                “Where Vision Meets Integrity”
            </h2>

            {/* Description using your SMO site management text */}
            <p className="mt-4 text-xs sm:text-sm md:text-base text-[var(--syncvision-white)]/80 leading-relaxed max-w-2xl font-light">
              A quality-focused Site Management Organization (SMO) delivering ethical, 
              efficient, and high-quality clinical trial site management solutions 
              across India.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="w-full sm:w-auto">
                <button className={btnPrimary}>
                  Know More
                </button>
              </Link>

              <Link href="/services" className="w-full sm:w-auto">
                <button className={btnSecondary}>
                  Our Services
                </button>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20"
        style={{ background: "linear-gradient(to top, var(--sv-teal-dark), transparent)" }} />
    </section>
  );
}
