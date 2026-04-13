import { Shield, ChevronRight } from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Introduction",
    content:
      "Welcome to Workforge, a modern co-working and shared workspace solution designed for professionals, startups, and businesses. By accessing or using Workforge services, you agree to comply with the following Terms of Service.",
  },
  {
    number: "02",
    title: "Services Offered",
    content: "Workforge provides flexible workspace solutions, including:",
    list: [
      "Shared desks and private office spaces",
      "High-speed internet (Wi-Fi)",
      "Meeting and conference rooms",
      "CCTV-secured premises",
      "Power backup and essential utilities",
      "Common facilities (pantry, lounge, restrooms)",
    ],
  },
  {
    number: "03",
    title: "Membership & Usage Policy",
    list: [
      "Access is granted only to registered members or authorized users",
      "All services must be used strictly for legal and professional purposes",
      "Any activity causing disturbance, misuse, or harm is strictly prohibited",
      "Shared resources are subject to fair usage policies",
    ],
  },
  {
    number: "04",
    title: "User Responsibilities",
    content: "All users agree to:",
    list: [
      "Maintain cleanliness and professionalism",
      "Respect other members’ privacy and workspace",
      "Avoid damage to property (charges applicable for damages)",
      "Follow all safety and operational guidelines",
    ],
  },
  {
    number: "05",
    title: "Security & Surveillance",
    list: [
      "Premises are monitored via CCTV for safety and security",
      "Users must not tamper with security systems",
      "Workforge is not responsible for loss or theft of personal belongings",
    ],
  },
  {
    number: "06",
    title: "Virtual Office Services",
    list: [
      "Business address usage is limited to approved and lawful activities",
      "Storage of goods is strictly prohibited",
      "Walk-in operations are not permitted without prior approval",
      "Workforge is not responsible for any client liabilities",
      "Government or official notices will only be received and forwarded",
    ],
  },
  {
    number: "07",
    title: "Mail & Courier Handling",
    content:
      "Workforge may receive mail and courier deliveries on behalf of clients as a convenience service. However, Workforge is not responsible for any delays, loss, or damage caused by courier or postal service providers.",
  },
  {
    number: "08",
    title: "Internet Acceptable Use",
    content: "Users must not:",
    list: [
      "Download or distribute illegal content",
      "Operate servers or hosting services",
      "Use excessive bandwidth, affecting others",
      "Engage in unlawful or harmful online activities",
    ],
    note:
      "Any violation may result in immediate suspension or termination of services.",
  },
  {
    number: "09",
    title: "Meeting Room Policy",
    list: [
      "Booking is required for all meeting rooms",
      "Usage beyond the booked time will be charged on an hourly basis",
      "Meetings involving illegal or unauthorized activities are strictly prohibited",
    ],
  },
  {
    number: "10",
    title: "No Tenancy Rights",
    content:
      "Use of coworking or virtual office services does not create any tenancy, leasehold, or ownership rights. Workforge retains full ownership and control of the premises at all times.",
  },
  {
    number: "11",
    title: "Service Interruptions (Force Majeure)",
    content:
      "Workforge shall not be held liable for service interruptions caused by events beyond its control, including:",
    list: [
      "Internet outages",
      "Power failures",
      "Government restrictions",
      "Natural disasters",
    ],
  },
  {
    number: "12",
    title: "Indemnification",
    content:
      "Clients agree to indemnify and hold Workforge harmless against any claims, damages, or liabilities arising from their business activities, communications, or use of the Workforge address and services.",
  },
];

export default function TermsOfServiceContent() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#fafafa] overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm mb-8">
            <Shield className="w-4 h-4 text-highlight" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">
              Legal
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-primary leading-[0.95] mb-6">
            Terms of <span className="text-highlight">Service</span>
          </h1>

          <p className="text-slate-500 font-medium text-base md:text-lg max-w-xl mx-auto">
            Please read these terms carefully before using any Workforge
            services. By accessing our workspace, you agree to abide by these
            terms.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-0">
            {sections.map((section) => (
              <div
                key={section.number}
                className="group border-b border-slate-100 last:border-0"
              >
                <div className="py-10 md:py-14">
                  <div className="flex items-start gap-4 md:gap-6 mb-5">
                    <span className="text-[11px] font-black tracking-widest text-highlight/40 mt-1.5 shrink-0">
                      {section.number}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-primary leading-tight">
                      {section.title}
                    </h2>
                  </div>

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

                    {section.note && (
                      <p className="text-slate-600 font-light leading-relaxed text-base md:text-lg mt-4">
                        {section.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 md:p-10 bg-slate-50 border border-slate-100 rounded-2xl text-center">
            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-highlight mb-3">
              Last Updated
            </p>
            <p className="text-slate-500 font-light text-sm">
              These terms were last updated on April 2026. If you have any
              questions, please contact us at{" "}
              <a
                href="mailto:contact@workforge.in"
                className="text-highlight font-medium hover:underline"
              >
                contact@workforge.in
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
