"use client";

import { motion } from "framer-motion";

export default function QuickHighlightsSection() {
  const highlights = [
    "Startups launching new ventures",
    "Freelancers & consultants",
    "Remote companies expanding presence",
    "Branch offices entering Coimbatore",
  ];
  return (
    <section className="pt-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading with divider */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-0.5 bg-[#0047cc] mr-3"></div>
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#0047cc]">
            WHO IS THIS FOR
          </h2>
          <div className="w-12 h-0.5 bg-[#0047cc] ml-3"></div>
        </div>

        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-primary mb-6 leading-tight">
            Perfect for Modern Businesses

          </motion.h2>
        </div>

        {/* 2 Row Grid - 3 items per row on desktop */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {highlights.map((item, index) => (
            <div
              key={item}
              className="rounded-sm border border-slate-200 bg-white px-5 py-6 text-center shadow-sm transition-all duration-300 hover:border-[#0047cc] hover:shadow-md hover:-translate-y-1"
            >
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-black">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}