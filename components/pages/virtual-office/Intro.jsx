"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Users, Building2, Clock, MapPin } from "lucide-react";

export default function AboutWorkForgeSection() {
  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "200+", label: "Members" },

    { icon: <Clock className="w-5 h-5" />, value: "24/7", label: "Access" },
    { icon: <Building2 className="w-5 h-5" />, value: "4k", label: "Sq. Ft" },
  ];

  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-highlight"></div>
              <span className="text-xs font-black tracking-[0.4em] uppercase text-highlight">
                Build your brand, the smart way
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-primary mb-8 leading-[1.1]">
              Build Your Business Presence
              <span className="text-highlight"> Without the Overhead</span>
            </h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-12">
              <p className="font-medium text-slate-900">
                WorkForge offers reliable virtual office space in Coimbatore, helping businesses register, operate, and grow with ease.
              </p>
              <p>
                From GST and MCA registration to mail handling and documentation support, we provide everything you need to stay compliant and professional.
              </p>
            </div>


          </motion.div>

          {/* Right Side: Image with Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Image Container */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
              <Image
                src="/space2.jpg"
                alt="WorkForge Interior"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-xl border border-white/20 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-primary uppercase text-sm tracking-tight">Verified Excellence</h4>
                    <p className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-wider">Top Rated Coworking Space 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Boxes */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-slate-50 -z-10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-8 border-highlight/10 -z-10 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}