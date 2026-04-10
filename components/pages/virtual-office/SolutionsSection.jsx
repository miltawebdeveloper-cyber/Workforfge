"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  FileText,
  Building,
  Mail,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function SolutionsSection() {
  const solutions = [
    {
      title: "Business Address",
      description: "Use a prime Coimbatore address for official communication and registration.",
      icon: <MapPin className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "GST Registration Support",
      description: "Hassle-free GST registration with proper documentation.",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "MCA Registration Support",
      description: "Get your company registered with valid address proof.",
      icon: <Building className="w-6 h-6" />,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Mail Handling",
      description: "Secure collection and notification for your business emails.",
      icon: <Mail className="w-6 h-6" />,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "NOC Documentation",
      description: "All required No Objection Certificates provided.",
      icon: <CheckCircle className="w-6 h-6" />,
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
              WHAT’S INCLUDED
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-primary mb-6 leading-tight">
            Complete Virtual <br /> Office Solutions
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


            </motion.article>
          ))}

          {/* CTA Card */}
          <motion.div
            variants={itemVariants}
            className="bg-highlight p-10 rounded-3xl flex flex-col justify-center text-white"
          >
            <h3 className="text-3xl font-black mb-6 leading-tight">CA Support</h3>
            <p className="text-white/80 font-medium mb-8">Professional assistance for compliance and filings.</p>
            <button className="bg-white text-highlight font-black py-4 rounded-xl uppercase tracking-widest text-sm hover:scale-105 transition-transform">
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}