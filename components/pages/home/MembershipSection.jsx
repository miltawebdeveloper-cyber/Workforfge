export default function MembershipSection() {
  const tiers = [
    { name: "Lounge", price: "$250", features: ["Hot Desk Access", "Member Events", "High-speed Wifi"] },
    { name: "Dedicated", price: "$450", features: ["Personal Desk", "Private Locker", "8h Meeting Room"] },
    { name: "Executive", price: "$900", features: ["Private Suite", "Dedicated Support", "Unlimited Guest Access"] },
  ];

  return (
    <section id="membership" className="py-32 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#2159dc] mb-4">MEMBERSHIP</h2>
        <h3 className="text-4xl font-bold mb-20 tracking-tight text-primary uppercase">CHOOSE YOUR SPACE</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div key={tier.name} className={`p-10 border transition-all duration-500 rounded-sm ${idx === 1 ? "bg-primary text-white border-primary shadow-2xl scale-105" : "bg-white text-primary border-slate-100 hover:border-primary/20 hover:shadow-lg"}`}>
              <h4 className={`text-sm font-bold tracking-widest uppercase mb-2 ${idx === 1 ? "text-white" : "text-primary"}`}>{tier.name}</h4>
              <div className="text-4xl font-black mb-8">{tier.price}<span className={`text-sm font-normal ${idx === 1 ? "text-white/60" : "text-slate-400"}`}>/mo</span></div>
              <ul className="text-left space-y-4 mb-10 text-sm opacity-80">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${idx === 1 ? "bg-white" : "bg-primary"}`}></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 text-xs font-bold uppercase tracking-widest border transition-all ${idx === 1 ? "bg-white text-primary border-white hover:bg-slate-100" : "border-[#2159dc] text-[#2159dc] hover:bg-[#2159dc] hover:text-white"}`}>
                Select Tier
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
