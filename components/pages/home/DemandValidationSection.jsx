export default function DemandValidationSection() {
  const points = [
    "65 seats already booked before launch.",
    "Strong digital presence driving immediate demand.",
    "Backed by PAN India digital marketing agency.",
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#2159dc] mb-4">Demand Validation</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary mb-10">
          Proven demand before launch.
        </h2>
        <div className="space-y-4">
          {points.map((point) => (
            <div key={point} className="flex items-start gap-4 border border-slate-200 bg-slate-50 px-6 py-5">
              <span className="mt-1 h-3 w-3 rounded-full bg-[#2159dc]"></span>
              <p className="text-lg text-slate-700 font-light">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
