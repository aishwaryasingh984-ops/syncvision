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
     after:bg-[var(--sv-green)]
     after:origin-left after:scale-x-0 after:transition-transform after:duration-300
     hover:after:scale-x-100
     ${pathname === href
       ? `after:scale-x-100 text-[var(--sv-green)]`
       : `${scrolled ? "text-[var(--sv-ice)]/90 hover:text-white" : "text-white hover:text-[var(--sv-green-light)]"}`
     }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500
        ${scrolled
          ? "py-2 shadow-xl border-b border-white/10"
          : "bg-transparent py-4 border-b border-transparent"
        }`}
        style={scrolled ? {
          backgroundColor: "var(--sv-teal-95)",
          backdropFilter: "blur(12px)",
        } : {}}
      >
        <nav className="max-w-[90rem] mx-auto px-6 flex items-center justify-between">

          <Link href="/" className="relative flex items-center group -ml-2">
            <div className={`relative transition-all duration-500 ${
              scrolled
                ? "w-40 h-10 md:w-48 md:h-12"
                : "w-48 h-12 md:w-64 md:h-16"
            }`}>
              {/* 
                Transparent state (over dark hero): use SVRS white-bg short logo — 
                invert so it renders cleanly on dark bg.
                Scrolled state (solid teal navbar): use full colour logo, no filter.
              */}
              {scrolled ? (
                <Image
                  src="/assets/logo-full-tagline-plain.jpeg"
                  alt="SyncVision Research Solutions LLP"
                  fill
                  className="object-contain object-left transition-all duration-500"
                  priority
                />
              ) : (
                <Image
                  src="/assets/logo-short-white.png"
                  alt="SyncVision Research Solutions LLP"
                  fill
                  className="object-contain object-left  transition-all duration-500"
                  priority
                />
              )}
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
            className="cursor-pointer lg:hidden text-white text-3xl p-2 hover:text-[var(--sv-green)] transition-colors"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* MOBILE MENU — dark teal bg, use short logo on teal */}
      <div
        className={`fixed inset-0 z-[100] text-white transition-all duration-500 transform flex flex-col
        ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ backgroundColor: "var(--sv-teal-dark)" }}
      >
        <div
          className="flex items-center justify-between min-h-[80px] px-6 border-b border-white/10"
          style={{ backgroundColor: "var(--sv-teal-mid)" }}
        >
          {/* Short SVRS logo — teal-bg variant sits naturally on teal mid header */}
          <div className="relative w-20 h-14">
            <Image
              src="/assets/logo-short-teal.jpeg"
              alt="SVRS"
              fill
              className="object-contain object-left"
            />
          </div>
          <button
            onClick={() => setOpen(false)}
            className="cursor-pointer text-3xl p-2 hover:text-[var(--sv-green)] transition-colors"
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
                    ? "text-[var(--sv-green)] border-[var(--sv-green)] bg-white/5"
                    : "text-white/90 border-transparent active:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="p-6 text-center border-t border-white/5"
          style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
          <p className="text-[10px] uppercase tracking-[0.3em] font-black"
            style={{ color: "var(--sv-green-light)" }}>
            Reliable • Compliant • Quality
          </p>
        </div>
      </div>
    </>
  );
}
