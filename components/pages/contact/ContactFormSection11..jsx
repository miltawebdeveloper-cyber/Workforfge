import { InquiryForm } from "@/components/forms";

export default function ContactFormSection() {
  return (
    <section className="pb-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-primary uppercase mb-4">Contact</h2>
            <div className="space-y-4 text-slate-600 font-light">

              <p><span className="font-bold text-primary">Email:</span> contact@vantage.in</p>
              <p><span className="font-bold text-primary">Address:</span> No. 175, Sri Sai Tower, 3rd floor, Bharathi Colony Rd, Peelamedu, Coimbatore, Tamil Nadu 641004, India.</p>
            </div>
          </div>
          <div className="border border-slate-200 bg-slate-50 h-72 flex items-center justify-center text-slate-500 text-sm uppercase tracking-[0.2em]">
            Map Embed
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-4 bg-primary text-white font-bold uppercase tracking-[0.2em] hover:bg-[#2159dc] transition-all duration-300">
              Schedule Visit
            </button>
            <button className="px-6 py-4 border border-[#2159dc] text-[#2159dc] font-bold uppercase tracking-[0.2em] hover:bg-[#2159dc]/5 transition-all duration-300">
              Request Callback
            </button>
          </div>
        </div>
        <div>
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
