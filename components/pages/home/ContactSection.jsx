import { InquiryForm } from "@/components/forms";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-slate-50 border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#2159dc] mb-6">Inquiry</h2>
        <h3 className="text-5xl font-black mb-16 tracking-tighter uppercase text-primary">JOIN THE ELITE SOCIETY</h3>
        <InquiryForm />
      </div>
    </section>
  );
}
