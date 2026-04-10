import { InquiryForm } from "@/components/forms";

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
          <div className="border border-slate-200 bg-slate-50 h-72 w-full overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7832.348598828587!2d76.99521!3d11.025546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859412de57513%3A0x6589c77f7c346bfa!2sMilta%20Accounting%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1775742677560!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
