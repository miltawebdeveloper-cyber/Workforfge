export default function VirtualOfficeDetailsSection() {
  const includes = [
    "Business Address",
    "GST Registration Support",
    "MCA Registration Support",
    "Mail Handling",
    "NOC Documentation",
    "CA Support",
  ];

  const idealFor = [
    "Startups",
    "Freelancers",
    "Remote Companies",
    "Branch Offices",
  ];

  return (
    <section className="pb-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2">
        <article className="border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-black tracking-tight text-primary mb-6">Includes</h2>
          <ul className="space-y-3">
            {includes.map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-700">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2159dc]"></span>
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-black tracking-tight text-primary mb-6">Ideal for</h2>
          <ul className="space-y-3">
            {idealFor.map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-700">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2159dc]"></span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
