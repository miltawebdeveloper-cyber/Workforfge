import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column - Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/Logo-removebg.png"
                alt="WorkForge logo"
                width={240}
                height={120}
                className="h-23 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Premium Flexible Offices & Virtual Workspace Solutions
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-[#0047cc]">200+ Seats</span>
              <span className="text-xs font-semibold uppercase tracking-wide text-[#0047cc]">24/7 Access</span>
              <span className="text-xs font-semibold uppercase tracking-wide text-[#0047cc]">Meeting Rooms</span>
              <span className="text-xs font-semibold uppercase tracking-wide text-[#0047cc]">Virtual Office</span>
            </div>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3">
            <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 text-[#0047cc]/60">
              Contact
            </h5>
            <address className="not-italic text-sm text-slate-500 space-y-2 font-light">
              <p className="hover:text-[#0047cc] transition-colors cursor-pointer">contact@workforge.in</p>
              <p>No. 175, Sri Sai Tower, 3rd floor,
                Bharathi Colony Rd, Peelamedu,
                Coimbatore, Tamil Nadu 641004, India.</p>

            </address>
          </div>

          {/* Explore Column */}
          <div className="md:col-span-2">
            <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 text-[#0047cc]/60">
              Explore
            </h5>
            <div className="space-y-2 text-sm text-slate-500 font-light flex flex-col">
              <Link href="/" className="hover:text-[#0047cc] transition-colors cursor-pointer">Home</Link>
              <Link href="/#solutions" className="hover:text-[#0047cc] transition-colors cursor-pointer">Solutions</Link>
              <Link href="/virtual-office" className="hover:text-[#0047cc] transition-colors cursor-pointer">Virtual Office</Link>
              <Link href="/#amenities" className="hover:text-[#0047cc] transition-colors cursor-pointer">Amenities</Link>
            </div>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-2">
            <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 text-[#0047cc]/60">
              Legal
            </h5>
            <div className="space-y-2 text-sm text-slate-500 font-light">
              <p className="hover:text-[#0047cc] transition-colors cursor-pointer">Privacy Policy</p>
              <p className="hover:text-[#0047cc] transition-colors cursor-pointer">Terms of Service</p>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-400">
            © 2026 WorkForge. Built for growing teams.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-400 hover:text-[#0047cc] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-400 hover:text-[#0047cc] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}