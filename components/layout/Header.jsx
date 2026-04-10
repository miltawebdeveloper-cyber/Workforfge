"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "py-4 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm"
        : "py-4 bg-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="relative z-50 flex items-center">
          <Image
            src="/Logo-removebg.png"
            alt="WorkForge logo"
            width={140}
            height={90}
            priority
            className={`h-16 w-auto object-contain transition-all duration-300 ${isScrolled ? "scale-95" : "scale-100"}`}
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

          <Link
            href="/contact"
            className="px-8 py-3 bg-primary text-white text-[11px] font-black tracking-widest uppercase rounded-sm hover:bg-highlight hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-primary/10"
          >
            Book a Tour
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-50 p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center lg:hidden"
            >
              <ul className="flex flex-col items-center gap-10">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl font-black uppercase tracking-tight text-primary hover:text-highlight transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-12 px-12 py-5 bg-primary text-white text-sm font-black tracking-widest uppercase rounded-md shadow-xl"
              >
                Schedule Visit
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
