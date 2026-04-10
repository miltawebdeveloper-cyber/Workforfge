"use client";

import { motion } from "framer-motion";
import { Lock, ChevronRight } from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Introduction",
    content:
      "At Workforge, we're dedicated to safeguarding your privacy and making sure that your information is handled transparently.",
  },
  {
    number: "02",
    title: "Information We Collect",
    content: "Workforge may collect the following information:",
    list: [
      "Full name, contact number, email address",
      "Business or company details (if applicable)",
      "Payment and billing information",
      "Workspace usage data (WiFi logs, access records)",
      "CCTV footage for security purposes",
    ],
  },
  {
    number: "03",
    title: "How We Use Your Information",
    content: "Your data is used to:",
    list: [
      "Provide and manage Workforge services",
      "Process bookings and memberships",
      "Enhance customer experience",
      "Maintain safety, security, and compliance",
    ],
  },
  {
    number: "04",
    title: "Data Sharing Policy",
    content:
      "Your personal information is neither sold nor rented by Workforge. We may share data only with:",
    list: [
      "Legal authorities when required",
      "Trusted payment processing partners",
      "Internal administrative teams",
    ],
  },
  {
    number: "05",
    title: "Data Security",
    content:
      "Workforge implements strict security measures, including:",
    list: [
      "Secure data storage systems",
      "Controlled access to sensitive information",
      "Continuous monitoring and protection protocols",
    ],
  },
  {
    number: "06",
    title: "Cookies & Website Tracking",


    list: [
      "Cookies may be used on our website to enhance analytics and user experience.",
      "Users can control cookie preferences through browser settings",
    ],
  },
  {
    number: "07",
    title: "Your Rights",
    content: "As a Workforge user, you have the right to:",
    list: [
      "Access your personal data",
      "Request corrections or updates",
      "Request deletion (subject to legal obligations)",
    ],
  },
  {
    number: "08",
    title: "Data Retention",
    content:
      "Workforge retains your data only as long as necessary for:",
    list: [
      "Service delivery",
      "Legal and compliance requirements",
    ],
  },
  {
    number: "09",
    title: "Third-Party Services",
    content:
      "Workforge is not responsible for the privacy practices of third-party websites or services linked from our platform.",
  },
  {
    number: "10",
    title: "Policy Updates",
    content:
      "Workforge may update this Privacy Policy periodically. Any major updates will be communicated appropriately.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function PrivacyPolicyContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#fafafa] overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm mb-8">
              <Lock className="w-4 h-4 text-highlight" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">
                Your Privacy Matters
              </span>
            </div>
          </motion.div>

          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-primary leading-[0.95] mb-6"
          >
            Privacy <span className="text-highlight">Policy</span>
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 font-medium text-base md:text-lg max-w-xl mx-auto"
          >
            We value your trust. This policy outlines how Workforge
            collects, uses, and protects your personal information.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-0">
            {sections.map((section, idx) => (
              <motion.div
                key={section.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04, duration: 0.5 }}
                className="group border-b border-slate-100 last:border-0"
              >
                <div className="py-10 md:py-14">
                  {/* Section Header */}
                  <div className="flex items-start gap-4 md:gap-6 mb-5">
                    <span className="text-[11px] font-black tracking-widest text-highlight/40 mt-1.5 shrink-0">
                      {section.number}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-primary leading-tight">
                      {section.title}
                    </h2>
                  </div>

                  {/* Section Body */}
                  <div className="pl-8 md:pl-14">
                    {section.content && (
                      <p className="text-slate-600 font-light leading-relaxed text-base md:text-lg mb-4">
                        {section.content}
                      </p>
                    )}

                    {section.list && (
                      <ul className="space-y-3 mt-2">
                        {section.list.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-slate-600 font-light text-base md:text-lg leading-relaxed"
                          >
                            <ChevronRight className="w-4 h-4 text-highlight shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="mt-16 p-6 md:p-10 bg-slate-50 border border-slate-100 rounded-2xl text-center"
          >
            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-highlight mb-3">
              Last Updated
            </p>
            <p className="text-slate-500 font-light text-sm">
              This Privacy Policy was last updated in April 2026. For any
              privacy-related queries, reach out to us at{" "}
              <a
                href="mailto:contact@workforge.in"
                className="text-highlight font-medium hover:underline"
              >
                contact@workforge.in
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
