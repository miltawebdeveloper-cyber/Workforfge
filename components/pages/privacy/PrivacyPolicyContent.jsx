import { Lock, ChevronRight } from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Introduction",
    content:
      "We at Workforge.in are dedicated to preserving your privacy and guaranteeing openness regarding the gathering, use, and security of your data. This Privacy Policy describes how we manage personal and business-related information in all of our virtual office and co-working services.",
  },
  {
    number: "02",
    title: "Information We Collect",
    content: "We may collect:",
    list: [
      "Basic personal details (name, phone number, email)",
      "Business or company information (if applicable)",
      "Payment and billing details",
      "Workspace usage data (entry logs, WiFi access)",
      "CCTV recordings for safety",
      "Visitor details for access management",
    ],
  },
  {
    number: "03",
    title: "How We Use Information",
    content: "Your information is used to:",
    list: [
      "Provide and manage our services",
      "Handle bookings, memberships, and payments",
      "Maintain security and smooth operations",
      "Improve overall user experience",
    ],
  },
  {
    number: "04",
    title: "Virtual Office & Address Usage",
    content: "If you use our virtual office services:",
    list: [
      "Workforge only provides the address facility",
      "We are not responsible for your business activities or communications",
      "You are fully responsible for legal compliance and registrations",
      "You are responsible for handling all official and government-related concerns.",
    ],
  },
  {
    number: "05",
    title: "Address Misuse",
    content:
      "It is not permitted to use our address for the following:",
    list: [
      "Illegal activities",
      "False or misleading registrations",
      "Unauthorized business operations",
    ],
    note:
      "Workforge may suspend services or report such cases if needed.",
  },
  {
    number: "06",
    title: "Communication Handling",
    content: "We may support:",
    list: [
      "Receiving business calls",
      "Managing visitor records",
      "Mail and message forwarding",
    ],
    note:
      "This is done just to support your service and is not kept longer than necessary.",
  },
  {
    number: "07",
    title: "Visitor Information",
    content: "For safety purposes, we may collect:",
    list: [
      "Name",
      "Contact number",
      "Purpose of visit",
    ],
    note: "This helps us maintain a secure environment.",
  },
  {
    number: "08",
    title: "Network Usage",
    content: "Our internet network may be monitored for:",
    list: [
      "Security",
      "Legal compliance",
      "Technical support",
    ],
    note:
      "Basic system logs, such as device information and access time, may be recorded, but we do not monitor private material.",
  },
  {
    number: "09",
    title: "Data Sharing",
    content: "We do not sell or trade your data. Information may be shared only:",
    list: [
      "If required by law",
      "With payment or service providers",
      "For internal operations",
    ],
  },
  {
    number: "10",
    title: "Data Security",
    content: "We take appropriate precautions to safeguard your information, such as:",
    list: ["Secure systems", "Limited access", "Ongoing monitoring"],
  },
  {
    number: "11",
    title: "User Rights",
    content: "You can:",
    list: [
      "Request access to your data",
      "Ask for corrections",
      "Request deletion (as per legal requirements)",
    ],
  },
  {
    number: "12",
    title: "Data Retention",
    content: "We only retain your information for the following purposes:",
    list: [
      "Providing services",
      "Meeting legal and compliance requirements",
    ],
  },
];

export default function PrivacyPolicyContent() {
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
            <Lock className="w-4 h-4 text-highlight" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">
              Your Privacy Matters
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-primary leading-[0.95] mb-6">
            Privacy <span className="text-highlight">Policy</span>
          </h1>

          <p className="text-slate-500 font-medium text-base md:text-lg max-w-xl mx-auto">
            We value your trust. This policy outlines how Workforge collects,
            uses, and protects your personal information.
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
              This Privacy Policy was last updated in April 2026. For any
              privacy-related queries, reach out to us at{" "}
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
