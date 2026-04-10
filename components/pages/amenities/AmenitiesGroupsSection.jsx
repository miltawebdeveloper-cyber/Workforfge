export default function AmenitiesGroupsSection() {
  const groups = [
    {
      title: "Workspace Features",
      items: ["24/7 Access", "Security & Surveillance", "UPS Power Backup", "Air Conditioned Workspace"],
    },
    {
      title: "Connectivity",
      items: ["High Speed WiFi", "Static IP Internet", "Wired LAN Connections"],
    },
    {
      title: "Business Support",
      items: ["Virtual Office", "Mail Handling", "GST Registration Support", "NOC Documentation"],
    },
    {
      title: "Comfort",
      items: ["Fully Equipped Pantry", "Breakout Area", "Parking Available"],
    },
  ];

  return (
    <section className="pb-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2">
        {groups.map((group) => (
          <article key={group.title} className="border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-black tracking-tight text-primary mb-6">{group.title}</h2>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#2159dc]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
