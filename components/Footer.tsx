"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = "Wellington, Pride World City, Charholi Budruk, Pune, Maharashtra 412105";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;
  const footerLogo = "/assets/logo-full-tagline-plain.jpeg";

  const footerLinks = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/partner", label: "Partner With Us" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { Icon: Linkedin, label: "LinkedIn", color: "hover:bg-[#0077B5] hover:text-white" },
    { Icon: Twitter, label: "Twitter", color: "hover:bg-[#1DA1F2] hover:text-white" },
    { Icon: Facebook, label: "Facebook", color: "hover:bg-[#1877F2] hover:text-white" },
    { Icon: Instagram, label: "Instagram", color: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white" },
  ];

  return (
    <footer
      className="relative overflow-hidden border-t border-white/10 pt-12 pb-7 text-white"
      style={{ backgroundColor: "var(--sv-teal-dark)" }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[1.15fr_0.72fr_0.7fr_1fr_1.25fr] lg:gap-9 items-start">
          <div className="flex flex-col items-start">
            <div className="relative mb-5 h-28 w-full max-w-[260px]">
              <Image
                src={footerLogo}
                alt="SyncVision Research Solutions LLP"
                fill
                className="object-contain object-left mix-blend-multiply"
                priority
              />
            </div>

            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label, color }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className={`rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 transition-all duration-300 hover:-translate-y-1 ${color}`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="text-left">
            <h4 className="mb-5 text-sm font-black uppercase tracking-widest text-[var(--sv-green)]">Quick Links</h4>
            <ul className="space-y-3 text-sm font-medium">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    className="text-white/75 transition-colors hover:text-[var(--sv-green-light)]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-left">
            <h4 className="mb-5 text-sm font-black uppercase tracking-widest text-[var(--sv-green)]">Presence</h4>
            <ul className="space-y-3 text-sm font-medium text-white/75">
              {["Pune (HQ)", "Thane", "Patna"].map((city) => (
                <li key={city} className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-[var(--sv-blue-light)]" />
                  {city}
                </li>
              ))}
              <li className="pt-1 font-bold italic text-[var(--sv-green-light)]">
                Pan-India Support
              </li>
            </ul>
          </div>

          <div className="text-left">
            <h4 className="mb-5 text-sm font-black uppercase tracking-widest text-[var(--sv-green)]">Contact Us</h4>
            <ul className="space-y-4 text-sm font-medium text-white/75">
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--sv-blue-light)]" />
                <a href="mailto:info@syncvisionresearch.com"
                  className="break-all transition-colors hover:text-[var(--sv-green-light)]">
                  info@syncvisionresearch.com
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--sv-blue-light)]" />
                <a href="tel:+918669569686" className="transition-colors hover:text-[var(--sv-green-light)]">
                  +91 866 956 9686
                </a>
              </li>
              <li className="mt-3 border-l-2 border-[var(--sv-green)] pl-4 text-xs italic text-white/60">
                &ldquo;Where Vision Meets Integrity&rdquo;
              </li>
            </ul>
          </div>

          <div className="w-full text-left lg:justify-self-end">
            <h4 className="mb-4 text-sm font-black uppercase tracking-widest text-[var(--sv-green)]">
              Our Location
            </h4>
            <div className="h-[185px] w-full overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="SyncVision Research Solutions LLP location"
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
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-[9px] font-bold uppercase tracking-[0.2em] text-white/45 sm:text-[10px] md:flex-row">
          <p>© {currentYear} SyncVision Research Solution LLP. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="transition-colors hover:text-[var(--sv-green-light)]">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-[var(--sv-green-light)]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
