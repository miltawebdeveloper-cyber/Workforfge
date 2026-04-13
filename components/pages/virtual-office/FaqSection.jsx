"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is a virtual office valid for GST registration?",
    answer:
      "Yes, our virtual office provides valid documentation for GST registration.",
  },
  {
    question: "Can I use this address for company registration?",
    answer:
      "Yes, it can be used for MCA registration and official business purposes.",
  },
  {
    question: "Do you provide NOC and address proof?",
    answer:
      "Yes, all required documents, including NOC, are provided.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="pb-16 md:pb-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-highlight mb-3">
            FAQ Section
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <article
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-white"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 p-6 md:p-7 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg md:text-xl font-extrabold tracking-tight text-primary">
                  {item.question}
                </h3>
                <span
                  className={`shrink-0 text-xl font-bold text-highlight transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                style={{
                  gridTemplateRows: openIndex === index ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <p className="px-6 md:px-7 pb-6 md:pb-7 text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
