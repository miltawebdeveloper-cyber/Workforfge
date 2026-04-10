export default function ServicesGridSection() {
  const services = [
    {
      title: "Coworking Seats",
      description: "Flexible and dedicated workstations with high-speed internet.",
    },
    {
      title: "Private Offices",
      description: "Managed offices for teams with privacy and infrastructure.",
    },
    {
      title: "Virtual Office",
      description: "Professional address for GST, MCA, and business registration.",
    },
    {
      title: "Meeting Room",
      description: "8-seater meeting room with projector and HDMI facility.",
    },
    {
      title: "Enterprise Team Space",
      description: "Large seating options for call centers and operations teams.",
    },
  ];

  return (
    <section className="pb-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="border border-slate-100 p-10 bg-slate-50/50">
            <h2 className="text-2xl font-black tracking-tight text-primary mb-4 uppercase">{service.title}</h2>
            <p className="text-slate-600 leading-relaxed font-light">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
