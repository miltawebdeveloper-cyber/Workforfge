"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Monitor,
  Briefcase,
  Coffee,
  Globe,
  Users2,
  ArrowRight
} from "lucide-react";

export default function SolutionsSection() {
  const solutions = [
    {
      title: "Dedicated Seats",
      description: "Reserved workstations for individuals and teams looking for consistency.",
      icon: <Monitor className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Private Team Offices",
      description: "Fully managed offices with enterprise privacy and ultimate flexibility.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Hot Desks",
      description: "Flexible seating for freelancers and remote professionals on the move.",
      icon: <Coffee className="w-6 h-6" />,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Virtual Office",
      description: "Premium business address with full GST and MCA compliance support.",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Meeting Rooms",
      description: "High-tech meeting spaces with 4K displays and ergonomic furniture.",
      icon: <Users2 className="w-6 h-6" />,
      color: "bg-rose-50 text-rose-600"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="solutions" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-highlight/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm mb-6"
          >
            <span className="w-2 h-2 bg-highlight rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">
              Our Solutions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-primary mb-6 leading-tight">
            Flexible Spaces. <br />
            Powerful Possibilities.
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {solutions.map((solution, idx) => (
            <motion.article
              key={solution.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-white p-10 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(33,89,220,0.1)] hover:border-highlight/20"
            >
              <div className={`w-14 h-14 rounded-2xl ${solution.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {solution.icon}
              </div>

              <h3 className="text-2xl font-black tracking-tight text-primary mb-4">
                {solution.title}
              </h3>

              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                {solution.description}
              </p>

              {/* <div className="flex items-center gap-2 text-highlight font-bold text-sm uppercase tracking-wider opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>*/}
            </motion.article>
          ))}

          {/* CTA Card */}
          <motion.div
            variants={itemVariants}
            className="bg-highlight p-10 rounded-3xl flex flex-col justify-center text-white"
          >
            <h3 className="text-3xl font-black mb-6 leading-tight">Need a custom enterprise setup?</h3>
            <p className="text-white/80 font-medium mb-8">We design private floors and custom offices for teams of 50+.</p>
            <Link href="/contact" className="block bg-white text-highlight font-black py-4 rounded-xl uppercase tracking-widest text-sm hover:scale-105 transition-transform text-center">
              Contact Sales
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}