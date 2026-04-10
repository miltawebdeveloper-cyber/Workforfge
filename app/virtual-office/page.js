import { VirtualOfficeDetailsSection, VirtualOfficeHeroSection, Intro, HeroSection, SolutionsSection, QuickHighlightsSection, FinalCtaSection, WhyChoose } from "@/components/pages/virtual-office";

export const metadata = {
  title: "Virtual Office",
  description: "Get a professional business address, mail handling, and administrative support with WorkForge Virtual Office solutions.",
  keywords: ["virtual office", "business address", "mail handling", "gst registration address", "company incorporation"],
  openGraph: {
    images: [{ url: "/og-logo.png" }],
  },
};

export default function VirtualOfficePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <Intro />
      <QuickHighlightsSection />
      <WhyChoose />
      <SolutionsSection />
      <FinalCtaSection />

    </main>
  );
}
