export default function VisionMissionSection() {
  return (
    <section className="py-20 md:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[2px] bg-highlight"></div>
            <span className="text-xs font-black tracking-[0.35em] uppercase text-highlight">
              Fueling the Future of Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary leading-tight">
            Vision and Mission for a Better Workspace Future
          </h2>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 md:p-10">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-highlight mb-4">
              Vision 
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              To become India&apos;s most trusted partner for transforming commercial
              buildings into thriving, fully managed coworking ecosystems&mdash;where
              property owners enjoy stable, risk-free returns and businesses find
              inspiring spaces to grow.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 ">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-highlight mb-4">
              Mission
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
Our mission is to unlock the full potential of commercial real estate by designing, building, and operating high-quality coworking spaces—partnering with building owners to reduce vacancy risks, ensure consistent occupancy, and deliver seamless management with long-term, sustainable growth.            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
