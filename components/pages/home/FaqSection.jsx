"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Workforge?",
    answer:
      "Workforge is a flexible co-working space designed for freelancers, startups, and businesses to work, collaborate, and grow in a professional environment.",
  },
  {
    question: "What facilities does Workforge provide?",
    answer:
      "We offer high-speed WiFi, fully furnished desks, private cabins, meeting rooms, CCTV security, power backup, and common amenities like a pantry and lounge.",
  },
  {
    question: "Who can use Workforge?",
    answer:
      "Anyone, from freelancers and remote workers to startups and established businesses, can use Workforge.",
  },
  {
    question: "Do you offer flexible plans?",
    answer:
      "Yes, Workforge offers daily, weekly, and monthly plans to suit different work needs.",
  },
  {
    question: "Is there 24/7 access available?",
    answer:
      "Yes, 24/7 access is available based on the selected membership plan.",
  },
  {
    question: "Can I book meeting rooms separately?",
    answer:
      "Yes, meeting and conference rooms can be booked separately based on availability.",
  },
  {
    question: "Is my data and work secure at Workforge?",
    answer:
      "Absolutely. We have CCTV surveillance and secure network systems to ensure safety and privacy.",
  },
  {
    question: "Do you provide virtual office services?",
    answer:
      "Yes, Workforge offers virtual office solutions, including business address and compliance support.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Parking availability depends on the location. Please contact us for specific details.",
  },
  {
    question: "How can I get started with Workforge?",
    answer:
      "You can contact us directly, visit our space, or book your seat online to get started.",
  },
];

export default function FaqSection() {
  const splitIndex = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, splitIndex);
  const rightFaqs = faqs.slice(splitIndex);

  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-highlight mb-3">
            FAQ Section
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-4">
            {leftFaqs.map((item, index) => {
              const globalIndex = index;
              const isOpen = openIndex === globalIndex;

              return (
                <article
                  key={`left-${index}`}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(openIndex === globalIndex ? -1 : globalIndex)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-left-${index}`}
                    className="w-full flex items-center justify-between gap-4 p-6 md:p-7 text-left"
                  >
                    <h3 className="text-lg md:text-xl font-extrabold tracking-tight text-primary">
                      {item.question}
                    </h3>

                    <span
                      className={`shrink-0 text-xl font-bold text-highlight transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    id={`faq-left-${index}`}
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 md:px-7 pb-6 md:pb-7 text-slate-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="space-y-4">
            {rightFaqs.map((item, index) => {
              const globalIndex = splitIndex + index;
              const isOpen = openIndex === globalIndex;

              return (
                <article
                  key={`right-${index}`}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(openIndex === globalIndex ? -1 : globalIndex)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-right-${index}`}
                    className="w-full flex items-center justify-between gap-4 p-6 md:p-7 text-left"
                  >
                    <h3 className="text-lg md:text-xl font-extrabold tracking-tight text-primary">
                      {item.question}
                    </h3>

                    <span
                      className={`shrink-0 text-xl font-bold text-highlight transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    id={`faq-right-${index}`}
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 md:px-7 pb-6 md:pb-7 text-slate-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
