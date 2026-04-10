"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ContactPopup from "@/components/forms/ContactPopup";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Close mobile menu when scrolling
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]); // Add isMobileMenuOpen as dependency

  // Keep body scroll locked while mobile menu or contact popup is open
  useEffect(() => {
    if (isMobileMenuOpen || showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen, showPopup]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Amenities", href: "#amenities" },
    { name: "Virtual Office", href: "/virtual-office" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
            ? "py-3 md:py-4 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm"
            : "py-4 md:py-6 bg-transparent"
          }`}
      >
        <nav className="w-full max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="relative z-50 flex items-center">
            <Image
              src="/Logo-removebg.png"
              alt="WorkForge logo"
              width={140}
              height={90}
              priority
              className={`h-12 md:h-16 w-auto object-contain transition-all duration-300 ${(isScrolled || isMobileMenuOpen) ? "scale-90 md:scale-95" : "scale-100"}`}
            />
          </Link>

          {/* Desktop Links - Minimalist & High-end */}
          <div className="hidden lg:flex items-center gap-12">
            <ul className="flex gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-primary/80 hover:text-highlight transition-colors group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-highlight transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setShowPopup(true)}
              className="px-8 py-3 bg-primary text-white text-[11px] font-black tracking-widest uppercase rounded-sm hover:bg-highlight hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-primary/10"
            >
              Book a Tour
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 text-primary focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation Drawer / Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <m.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xl flex flex-col lg:hidden"
              >
                <div className="flex flex-col px-6 py-6 gap-2 max-h-[80vh] overflow-y-auto">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="py-4 text-[13px] font-bold uppercase tracking-widest text-primary hover:text-highlight transition-colors border-b border-slate-50 last:border-0"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-6 pb-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setShowPopup(true);
                      }}
                      className="block w-full text-center px-8 py-4 bg-primary text-white text-xs font-black tracking-widest uppercase rounded-sm shadow-md hover:bg-highlight transition-colors"
                    >
                      Book a Tour
                    </button>
                  </div>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
