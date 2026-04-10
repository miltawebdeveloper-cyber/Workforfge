export default function QuickHighlightsSection() {
  const highlights = [
    "100+ Workstations",
    "24/7 Access",
    "Virtual Office Available",
    "Static IP Internet",
    "Meeting Rooms",
    "Parking Available",
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading with divider */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-0.5 bg-[#0047cc] mr-3"></div>
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#0047cc]">
            Quick Highlights
          </h2>
          <div className="w-12 h-0.5 bg-[#0047cc] ml-3"></div>
        </div>

        {/* 2 Row Grid - 3 items per row on desktop */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={item}
              className="rounded-sm border border-slate-200 bg-white px-5 py-6 text-center shadow-sm transition-all duration-300 hover:border-[#0047cc] hover:shadow-md hover:-translate-y-1"
            >
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-black">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}