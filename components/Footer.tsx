"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--syncvision-green)] text-white py-16 lg:py-24 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-16 items-start">
          
          {/* Column 1: Enhanced Brand Card */}
          <div className="col-span-1 lg:col-span-1">
            <div className="group bg-white rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col items-center text-center mx-auto lg:mx-0">
              
              <Link href="/" className="relative w-full transition-transform duration-500 group-hover:scale-[1.03] mb-8">
                <div className="relative w-full aspect-[2/1] max-w-[280px] md:max-w-[320px] mx-auto">
                  <Image 
                    src="/assets/SyncVisionLogoFooter.png" 
                    alt="SyncVision Logo" 
                    fill
                    className="object-contain" 
                    priority
                  />
                </div>
              </Link>
              
              {/* Refined social icons: smaller size and tighter gap */}
              <div className="flex gap-3 justify-center w-full">
                {[
                  { Icon: Linkedin, label: "LinkedIn", color: "bg-[#0077B5]" },
                  { Icon: Twitter, label: "Twitter", color: "bg-[#1DA1F2]" },
                  { Icon: Facebook, label: "Facebook", color: "bg-[#1877F2]" },
                  { Icon: Instagram, label: "Instagram", color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" },
                ].map(({ Icon, label, color }, idx) => (
                  <Link 
                    key={idx}
                    href="#" 
                    aria-label={label}
                    /* Reduced padding to p-2.5 and icon to w-5 */
                    className={`p-2.5 rounded-xl ${color} transition-all duration-300 hover:-translate-y-1.5 hover:brightness-110 shadow-md group/icon`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center sm:text-left lg:pl-12">
            <h4 className="text-lg font-bold mb-8 text-[var(--syncvision-gold)] tracking-tight">Quick Links</h4>
            <ul className="space-y-4 text-white text-sm">
              <li><Link href="/about" className="hover:text-[var(--syncvision-gold)] hover:pl-2 transition-all duration-300">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[var(--syncvision-gold)] hover:pl-2 transition-all duration-300">Our Services</Link></li>
              <li><Link href="/therapeutic-areas" className="hover:text-[var(--syncvision-gold)] hover:pl-2 transition-all duration-300">Therapeutic Areas</Link></li>
              <li><Link href="/careers" className="hover:text-[var(--syncvision-gold)] hover:pl-2 transition-all duration-300">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Expertise */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold mb-8 text-[var(--syncvision-gold)] tracking-tight">Expertise</h4>
            <ul className="space-y-4 text-white text-sm">
              <li className="hover:text-white transition-colors cursor-default">Oncology</li>
              <li className="hover:text-white transition-colors cursor-default">Neurology</li>
              <li className="hover:text-white transition-colors cursor-default">Cardiology</li>
              <li className="hover:text-white transition-colors cursor-default">Dermatology</li>
              <li className="pt-2 italic text-[var(--syncvision-gold)] font-medium">And more...</li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold mb-8 text-[var(--syncvision-gold)] tracking-tight">Contact Us</h4>
            <ul className="space-y-6 text-white text-sm">
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4 group/item">
                <MapPin className="w-5 h-5 text-[var(--syncvision-gold)] flex-shrink-0" />
                <span className="leading-relaxed">Maharashtra, India</span>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4 group/item">
                <Mail className="w-5 h-5 text-[var(--syncvision-gold)] flex-shrink-0" />
                <a href="mailto:aishwarya.singh@syncvisionresearch.com" className="hover:text-white transition-colors break-all">
                  aishwarya.singh@syncvisionresearch.com
                </a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4 group/item">
                <Phone className="w-5 h-5 text-[var(--syncvision-gold)] flex-shrink-0" />
                <span className="hover:text-white transition-colors">+91 9711416627</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold text-center">
          <p>© {currentYear} SyncVision Research Solution LLP.</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            <Link href="/privacy" className="hover:text-white transition-all duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-all duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}