import { Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

export function ApplicationCard() {
  return (
    <Reveal>
      {/* Container: Using syncvision-green for the primary background */}
      <div className="bg-[var(--syncvision-green)] p-10 rounded-3xl text-white relative overflow-hidden shadow-2xl border border-white/5">
        
        {/* Decorative Aura: Using Gold for a subtle glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--syncvision-gold)]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        
        <h3 className="text-2xl font-bold mb-4 italic">Ready to make an impact?</h3>
        <p className="text-white/70 mb-8 text-sm md:text-base font-light">
          Send your updated CV and a brief cover letter to our recruitment team. 
          We review applications on a rolling basis.
        </p>
        
        {/* CTA Button: Using syncvision-gold for high visibility */}
        <a 
          href="mailto:aishwarya.singh@syncvisionresearch.com"
          className="
            flex items-center justify-center gap-3 w-full
            bg-[var(--syncvision-gold)]
            text-[var(--syncvision-green)]
            font-bold
            py-4 rounded-xl border-1 border-[var(--syncvision-gold)]
            transition-all transform hover:bg-white/5 hover:text-white  hover:backdrop-blur-sm"
        >
          <Mail className="w-5 h-5" />
          Email your CV
        </a>

        
        <p className="mt-6 text-center text-xs uppercase tracking-widest font-bold">
          Official Email: aishwarya.singh@syncvisionresearch.com
        </p>
      </div>
    </Reveal>
  );
}