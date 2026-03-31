"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Therapeutic Areas", href: "/therapeutic-areas" },
    { name: "Partner With Us", href: "/partner" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const navLinkClass = (href: string) =>
    `relative pb-1 transition-colors duration-300 font-bold tracking-tight text-[13px] xl:text-[14px] uppercase
     after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
     ${scrolled ? "after:bg-[var(--syncvision-blue-light)]" : "after:bg-[var(--syncvision-navy-mid)]"}
     after:origin-left after:scale-x-0 after:transition-transform after:duration-300
     hover:after:scale-x-100
     ${pathname === href
       ? `after:scale-x-100 ${scrolled ? "text-[var(--syncvision-ice)]" : "text-[var(--syncvision-navy-mid)]"}`
       : `${scrolled ? "text-[var(--syncvision-ice)]/90 hover:text-white" : "text-white hover:text-[var(--syncvision-ice)]/90"}`
     }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500
        ${scrolled
          ? "bg-[var(--syncvision-navy)]/95 backdrop-blur-md py-2 shadow-xl border-b border-white/10"
          : "bg-transparent py-4 border-b border-transparent"
        }`}
      >
        <nav className="max-w-[90rem] mx-auto px-6 flex items-center justify-between">

          {/* FIXED: brightness-0 invert always applied — strips baked-in bg, renders clean white logo */}
          <Link href="/" className="relative flex items-center group -ml-2">
            <div className={`relative transition-all duration-500 ${
              scrolled
                ? "w-40 h-10 md:w-48 md:h-12"
                : "w-48 h-12 md:w-64 md:h-16"
            }`}>
              <Image
                src="/assets/SyncVisionLogoLatest.png"
                alt="SyncVision Logo"
                fill
                className="object-contain object-left brightness-0 invert transition-all duration-500"
                priority
              />
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.href} className="flex items-center">
                <Link href={link.href} className={navLinkClass(link.href)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(true)}
            className="cursor-pointer lg:hidden text-white text-3xl p-2 hover:text-[var(--syncvision-ice)] transition-colors"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[100] bg-[var(--syncvision-navy)] text-white transition-all duration-500 transform flex flex-col
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between min-h-[80px] px-6 border-b border-white/10">
          <div className="relative w-44 h-12">
            <Image
              src="/assets/SyncVisionLogoLatest.png"
              alt="SyncVision Logo"
              fill
              className="object-contain object-left brightness-0 invert"
            />
          </div>
          <button
            onClick={() => setOpen(false)}
            className="cursor-pointer text-3xl p-2 hover:text-[var(--syncvision-ice)] transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-8">
          <div className="flex flex-col gap-5 text-lg font-bold tracking-tight">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                onClick={() => setOpen(false)}
                href={link.href}
                className={`transition-all border-l-2 pl-4 py-1.5 uppercase text-sm tracking-widest ${
                  pathname === link.href
                    ? "text-[var(--syncvision-ice)] border-[var(--syncvision-blue-light)] bg-[var(--syncvision-blue-light)]/10"
                    : "text-white/90 border-transparent active:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="p-6 text-center border-t border-white/5 bg-white/5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--syncvision-ice)] font-black">
            Reliable • Compliant • Quality
          </p>
        </div>
      </div>
    </>
  );
}
