import { InquiryForm } from "@/components/forms";
import Image from "next/image";

export default function ContactFormSection() {
  return (
    <section className="pb-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8 order-2 lg:order-1">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-primary uppercase mb-4">Contact</h2>
            <div className="space-y-4 text-slate-600 font-light">

              <p><span className="font-bold text-primary">Email:</span> contact@workforge.in</p>
              <p><span className="font-bold text-primary">Address:</span> No. 175, Sri Sai Tower, 3rd floor, Bharathi Colony Rd, Peelamedu, Coimbatore, Tamil Nadu 641004, India.</p>
            </div>
          </div>
          <div className="group relative h-72 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
            <Image
              src="/Contact-us.jpg"
              alt="Contact Workforge"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-white/70 shadow-sm">
              <p className="text-[10px] font-black tracking-[0.2em] uppercase text-primary">
                Visit Workforge
              </p>
            </div>
          </div>
          {/*<div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-4 bg-primary text-white font-bold uppercase tracking-[0.2em] hover:bg-[#2159dc] transition-all duration-300">
              Schedule Visit
            </button>
            <button className="px-6 py-4 border border-[#2159dc] text-[#2159dc] font-bold uppercase tracking-[0.2em] hover:bg-[#2159dc]/5 transition-all duration-300">
              Request Callback
            </button>*/}
        </div>

        <div className="order-1 lg:order-2">
          <div className="mb-12">
            <h2 className="text-2xl font-black tracking-tight text-primary uppercase mb-4">Send Your Inquiry</h2>
            <p className="text-slate-600 font-light leading-relaxed">
              Tell us what kind of membership, office setup, or support you&apos;re looking for.
            </p>
          </div>
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
