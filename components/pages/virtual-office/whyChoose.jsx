"use client";

import { m } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    "Prime Business Location in Coimbatore",
    "Quick Setup & Documentation",
    "100% Compliance Support",
    "Affordable & Scalable Plans",
    "Backed by Business & Marketing Ecosystem"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#0047cc] mb-4">
            WHY CHOOSE WORKFORGE
          </h2>
          <m.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-primary leading-tight"
          >
            Trusted Virtual Office Partner
          </m.h3>
        </div>

        <div className="grid gap-6 md:grid-cols-6">
          {reasons.map((reason, idx) => (
            <m.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex items-start gap-4 p-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-[#0047cc]/30 hover:bg-white transition-all duration-300 hover:shadow-lg md:col-span-2 ${idx === 3 ? 'md:col-start-2' : ''}`}
            >
              <CheckCircle2 className="w-6 h-6 text-[#0047cc] shrink-0 mt-0.5" />
              <p className="text-lg font-bold text-slate-800 tracking-tight">
                {reason}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

