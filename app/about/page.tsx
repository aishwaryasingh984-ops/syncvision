import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutSection from "@/components/AboutSection";
import MissionVision from "@/components/MissionVision";

export default function Page() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <AboutSection />
      <MissionVision />
      <Footer />
    </main>
  );
}
