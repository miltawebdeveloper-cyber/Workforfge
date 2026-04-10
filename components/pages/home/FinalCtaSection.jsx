import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="py-28 bg-primary text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/70 mb-4"></p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
          Ready to move into WorkForge?
        </h2>
        <p className="text-lg md:text-xl text-white/80 font-light mb-10">
          Book your workspace today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="px-8 py-4 bg-white text-primary font-bold uppercase tracking-[0.2em] hover:bg-[#2159dc] hover:text-white transition-all duration-300">
            Schedule Visit
          </Link>
          <Link href="/contact" className="px-8 py-4 border border-white text-white font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all duration-300">
            Enquire Now
          </Link>
        </div>
      </div>
    </section>
  );
}
