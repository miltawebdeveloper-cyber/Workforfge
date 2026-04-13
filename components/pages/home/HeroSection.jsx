"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import { ArrowRight, MousePointer2, CheckCircle, MapPin } from "lucide-react";
import ContactPopup from "@/components/forms/ContactPopup";

export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: { staggerChildren: 0.08 }
    }
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-[#fafafa]">
      {/* Precision Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* Dynamic Visual Layer */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0">
        <m.div
          initial={{ clipPath: "inset(0 0 0 100%)" }}
          animate={{ clipPath: "inset(0 0 0 0%)" }}
          transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src="/coworking_hero.png"
            alt="WorkForge premium coworking space"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
            className="object-cover grayscale active-grayscale-0 transition-all duration-1000 opacity-40 lg:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/80 lg:via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-transparent to-[#fafafa]"></div>
        </m.div>
      </div>

      {/* Content Architecture */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <m.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="lg:max-w-3xl"
        >
          {/* Status Badge */}
          <m.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-8 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-highlight opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-highlight"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Precision-Crafted Workspace Solutions</span>
          </m.div>

          {/* Unique Typographic Stack */}
          <div className="relative mb-10">
            <m.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl lg:text-[11rem] font-black tracking-tighter leading-[0.8] text-primary">
              Work<span className="text-highlight">Forge</span>
            </m.h1>

            <m.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-[2px] bg-highlight mt-6 mb-8"
            ></m.div>

            <m.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-400 leading-[1.1]">
              Premium Coworking <br />
              <span className="text-primary font-bold italic">Space </span>
            </m.h2>
          </div>

          {/* Value Proposition */}
          <m.div variants={fadeInUp} className="flex flex-col md:flex-row gap-8 mb-12 items-start">
            <p className="max-w-sm text-lg text-slate-500 font-medium border-l border-slate-200 pl-6 leading-relaxed">
              Flexible workspaces, private offices, and virtual office solutions with 24/7 access, high-speed connectivity.
            </p>
            <div className="flex flex-col gap-3">
              {["24/7 Access", "Fiber Internet", "Meeting Rooms"].map(item => (
                <div key={item} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary/60">
                  <CheckCircle className="w-3 h-3 text-highlight" /> {item}
                </div>
              ))}
            </div>
          </m.div>

          {/* Core Actions */}
          <m.div variants={fadeInUp} className="flex flex-wrap gap-5">
            <Link href="/contact" className="group relative px-10 py-5 bg-primary text-white font-black uppercase tracking-widest rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(33,89,220,0.2)] inline-flex items-center gap-2">
              <span className="relative z-10 flex items-center gap-2">
                Book A Tour <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-highlight translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            </Link>
            <button onClick={() => setShowPopup(true)} className="px-10 py-5 border border-slate-200 text-primary font-bold uppercase tracking-widest hover:border-highlight hover:bg-white transition-all duration-300 rounded-sm">
              View Pricing
            </button>
          </m.div>

          <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
        </m.div>
      </div>

      {/* Floating Location Access - Unique UI element */}
      <m.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 right-12 hidden xl:block z-20"
      >
        <div className="p-8 bg-white/40 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-2xl space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-highlight">Main Hub</p>
              <h4 className="font-bold text-primary">Coimbatore</h4>
            </div>
          </div>
          <div className="h-[1px] bg-primary/5"></div>
          <p className="text-xs text-slate-500 font-medium">Filling Fast – Limited Seats Available</p>
        </div>
      </m.div>

      {/* Decorative vertical line */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-slate-100 hidden lg:block"></div>
    </section>
  );
}

