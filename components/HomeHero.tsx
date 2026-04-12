import Link from "next/link";
import Reveal from "./Reveal";

export default function HomeHero() {
  const btnBase = "cursor-pointer w-full sm:w-auto inline-flex justify-center items-center rounded-full px-8 py-3 md:py-4 text-sm font-bold transition-all duration-300 shadow-lg border-2 border-[var(--syncvision-gold)]";
  const btnPrimary = `${btnBase} bg-[var(--syncvision-gold)] text-[var(--syncvision-green)] hover:bg-white/10 hover:backdrop-blur-md hover:text-white`;

  return (
    <section className="relative min-h-[100svh] lg:min-h-[85vh] flex flex-col lg:flex-row lg:items-center overflow-hidden bg-[var(--syncvision-green)]">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('assets/home-hero-background.webp')" }}
      />

      <div className="absolute inset-0 bg-[var(--syncvision-background-teal)]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--syncvision-background-teal)] via-[rgb(var(--syncvision-teal-rgb)_/_0.8)] to-transparent lg:via-[rgb(var(--syncvision-teal-rgb)_/_0.6)]" />

      {/* Safe-zone padding for Nest Hub and Mid-devices: 
          pt-28 (Mobile/Hub), md:pt-36 (Hub Max/Tablet), lg:pt-12 (Desktop) 
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-20 md:pt-36 lg:pt-12 lg:pb-0">
        <div className="max-w-3xl">
          <Reveal>
            {/* Title: Using md:text-5xl for Nest Hub compatibility */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.1] text-white tracking-tight">
              Sync<span className="text-[var(--syncvision-gold)]">Vision</span> <br className="hidden sm:block" />
              Research Solution LLP
            </h1>

            {/* Sub-heading using your provided tagline and pillar content */}
            <h2 className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#F7F9FB] leading-snug border-l-4 border-[var(--syncvision-gold)] pl-4 italic">
                “Where Vision Meets Integrity”
            </h2>

            {/* Description using your SMO site management text */}
            <p className="mt-4 text-xs sm:text-sm md:text-base text-[#F7F9FB]/80 leading-relaxed max-w-2xl font-light">
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
                <button className={btnPrimary}>
                  Our Services
                </button>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[var(--syncvision-green)] to-transparent" />
    </section>
  );
}
