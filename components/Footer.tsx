"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = "Wellington, Pride World City, Charholi Budruk, Pune, Maharashtra 412105";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;

  return (
    /* Fixed Padding: Increased pt to ensure separation from content on short screens */
    <footer className="bg-[var(--syncvision-green)] text-white pt-20 lg:pt-24 pb-10 border-t border-white/5 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-12 mb-16 items-start">
          
          {/* Column 1: Brand Card - Left Aligned on Mobile per HomeHero Reference */}
          <div className="flex flex-col items-start">
          <div className="group bg-white rounded-3xl p-6 mb-8 border border-white/10 
            shadow-[0_12px_32px_rgba(16,185,129,0.25)]
            transition-all duration-500 w-full max-w-[280px]">
              <Link href="/" className="relative block transition-transform duration-500 hover:scale-[1.02]">
                <div className="relative w-full aspect-[3/1]">
                  <Image 
                    src="/assets/SyncVisionLogoFooter.png" 
                    alt="SyncVision Logo" 
                    fill
                    className="object-contain" 
                    priority
                  />
                </div>
              </Link>
            </div>
            
            {/* <p className="text-white/70 text-sm leading-relaxed mb-6 font-light max-w-xs">
              Delivering ethical, efficient, and quality-driven clinical trial site management solutions across India.
            </p> */}

            <div className="flex gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn", color: "hover:bg-[#0077B5]" },
                { Icon: Twitter, label: "Twitter", color: "hover:bg-[#1DA1F2]" },
                { Icon: Facebook, label: "Facebook", color: "hover:bg-[#1877F2]" },
                { Icon: Instagram, label: "Instagram", color: "hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" },
              ].map(({ Icon, label, color }, idx) => (
                <Link 
                  key={idx}
                  href="#" 
                  aria-label={label}
                  className={`p-2 rounded-xl bg-white/5 border border-white/10 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:text-white ${color} shadow-md`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links - Left Aligned */}
          <div className="text-left">
            <h4 className="text-base font-bold mb-8 text-[var(--syncvision-gold)] uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-white/80 text-sm font-light">
              <li><Link href="/about" className="hover:text-[var(--syncvision-gold)] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[var(--syncvision-gold)] transition-colors">Our Services</Link></li>
              <li><Link href="/partner" className="hover:text-[var(--syncvision-gold)] transition-colors">Partner With Us</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--syncvision-gold)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Presence - Updated with your Content */}
          <div className="text-left">
            <h4 className="text-base font-bold mb-8 text-[var(--syncvision-gold)] uppercase tracking-widest">Presence</h4>
            <ul className="space-y-4 text-white/80 text-sm font-light">
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[var(--syncvision-gold)]" /> Pune (HQ)</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[var(--syncvision-gold)]" /> Thane</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[var(--syncvision-gold)]" /> Patna</li>
              <li className="pt-2 italic text-[var(--syncvision-gold)]/80 font-medium">Pan-India Support</li>
            </ul>
          </div>

          {/* Column 4: Contact - Using your specific Email/Phone */}
          <div className="text-left">
            <h4 className="text-base font-bold mb-8 text-[var(--syncvision-gold)] uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-6 text-white text-sm font-light">
              <li className="flex items-start gap-4 group">
                <Mail className="w-5 h-5 text-[var(--syncvision-gold)] flex-shrink-0 mt-0.5" />
                <a href="mailto:info@syncvisionresearch.com" className="text-white/80 hover:text-white transition-colors break-all">
                  info@syncvisionresearch.com
                </a>
              </li>
              <li className="flex items-start gap-4 group">
                <Phone className="w-5 h-5 text-[var(--syncvision-gold)] flex-shrink-0 mt-0.5" />
                <a href="tel:+919711416627">
                <span className="text-white/80">+91 9711416627</span>
                </a>
              </li>
              <li className="mt-4 border-l-2 border-[var(--syncvision-gold)] pl-4 italic text-white/50 text-xs">
                "Where Vision Meets Integrity"
              </li>
            </ul>
          </div>
        </div>

        {/* Column 5: Location Map */}
        <div className="text-left">
          <h4 className="text-base font-bold mb-8 text-[var(--syncvision-gold)] uppercase tracking-widest">
            Our Location
          </h4>

          <div className="w-full h-[400px] rounded-xl overflow-hidden border border-white/10 shadow-lg">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Bottom Bar: Correct Year & Mobile Optimized */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>© {currentYear} SyncVision Research Solution LLP. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
