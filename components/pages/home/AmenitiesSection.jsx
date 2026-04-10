"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  Zap,
  Clock,
  ShieldCheck,
  Coffee,
  Users,
  Truck,
  Mail,
  Receipt,
  PlugZap,
  LayoutGrid
} from "lucide-react";

export default function AmenitiesSection() {
  const amenities = [
    { title: "High Speed WiFi", desc: "Reliable business-grade connectivity for teams.", icon: <Wifi className="w-5 h-5" /> },
    { title: "Wired Internet", desc: "Dedicated connectivity options for stable workflows.", icon: <PlugZap className="w-5 h-5" /> },
    { title: "Meeting Rooms", desc: "Presentation-ready rooms with 4K projectors.", icon: <Users className="w-5 h-5" /> },
    { title: "Full Pantry", desc: "Premium coffee and essentials for your team.", icon: <Coffee className="w-5 h-5" /> },
    { title: "24/7 Access", desc: "Secure entry to your workspace any time.", icon: <Clock className="w-5 h-5" /> },
    { title: "Power Backup", desc: "Dual UPS support for uninterrupted workdays.", icon: <Zap className="w-5 h-5" /> },
    { title: "Gold Security", desc: "CCTV and biometric surveillance systems.", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Ample Parking", desc: "Convenient access for teams and visitors.", icon: <Truck className="w-5 h-5" /> },
    { title: "Business Support", desc: "Mail handling and front-desk services.", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <section id="amenities" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <LayoutGrid className="text-highlight w-5 h-5" />
              <span className="text-xs font-black tracking-[0.4em] uppercase text-highlight">
                Workspace Amenities
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black tracking-tight text-primary leading-tight">
              Everything You Need to <br />
              Work Better With Us
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-500 max-w-sm font-medium border-l-2 border-slate-100 pl-8"
          >
            We handle the infrastructure so you can handle the innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {amenities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-highlight group-hover:text-white transition-all duration-500 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-black mb-2 tracking-tight text-primary group-hover:text-highlight transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 font-medium leading-relaxed max-w-[240px]">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Subtle accent hover line */}
              <div className="absolute -bottom-6 left-0 w-0 h-[2px] bg-highlight/20 group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}