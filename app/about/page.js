export const metadata = {
  title: "About",
  description: "Learn more about the WorkForge coworking environment and our mission to provide the ultimate workspace for visionaries.",
  keywords: ["about workforge", "coworking mission", "workspace story", "premium office group"],
  openGraph: {
    images: [{ url: "/og-logo.png" }],
  },
};

import { AboutHeroSection, AboutStorySection } from "@/components/pages/about";

export default function About() {
  return (
    <main className="bg-white">
      <AboutHeroSection />
      <AboutStorySection />
    </main>
  );
}
