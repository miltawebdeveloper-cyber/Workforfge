import { Shield, ChevronRight } from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Introduction",
    content:
      "Welcome to Workforge, a modern co-working and shared workspace solution designed for professionals, startups, and businesses. By utilizing or gaining access to Workforge services, you agree to the following Terms of Service.",
  },
  {
    number: "02",
    title: "Services Offered",
    content: "Workforge provides flexible workspace solutions, including:",
    list: [
      "Shared desks & private office spaces",
      "High-speed internet (WiFi)",
      "Meeting & conference rooms",
      "CCTV-secured premises",
      "Power backup & essential utilities",
      "Common facilities (pantry, lounge, restrooms)",
    ],
  },
  {
    number: "03",
    title: "Membership & Usage Policy",
    list: [
      "Access to Workforge is granted only to registered members or authorized users",
      "All services must be used strictly for legal and professional purposes",
      "Any activity causing disturbance, misuse, or harm to others is strictly prohibited",
      "Shared resources are subject to fair usage policies",
    ],
  },
  {
    number: "04",
    title: "Payment Terms",
    list: [
      "All plans (daily, weekly, and monthly) must be paid in advance",
      "Failure to pay on time may result in suspension of access",
      "Refunds, if applicable, are subject to Workforge management approval",
    ],
  },
  {
    number: "05",
    title: "User Responsibilities",
    content: "All users of Workforge agree to:",
    list: [
      "Maintain cleanliness and a professional environment",
      "Respect other members' privacy and workspace",
      "Avoid damage to property (damages will be chargeable)",
      "Follow all safety and operational guidelines",
    ],
  },
  {
    number: "06",
    title: "Security & Surveillance",
    list: [
      "Workforge premises are monitored via CCTV for safety and security",
      "Users must not misuse or tamper with security systems",
      "Workforge is not responsible for loss or theft of personal belongings",
    ],
  },
  {
    number: "07",
    title: "Access & Operating Hours",
    list: [
      "Access is based on the selected membership plan (fixed hours / 24x7 access)",
      "Sharing login/access credentials is strictly prohibited",
    ],
  },
  {
    number: "08",
    title: "Suspension & Termination",
    content: "Workforge reserves the right to:",
    list: [
      "If these rules are broken, access may be suspended or terminated",
      "Modify or discontinue services without prior notice",
    ],
  },
  {
    number: "09",
    title: "Limitation of Liability",
    list: [
      "Workforge shall not be liable for business losses, data loss, or indirect damages",
      "Users operate within the premises at their own risk",
    ],
  },
  {
    number: "10",
    title: "Changes to Terms",
    content:
      "These Terms of Service are subject to change at any moment by Workforge. Continued usage implies acceptance of updated terms.",
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
