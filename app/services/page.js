export const metadata = {
  title: "Solutions",
  description: "Discover our range of workspace solutions: from dedicated desks and private offices to meeting rooms and virtual offices.",
  keywords: ["workspace solutions", "private office rental", "meeting room booking", "dedicated desk", "enterprise office"],
  openGraph: {
    images: [{ url: "/og-logo.png" }],
  },
};

import { ServicesGridSection, ServicesHeroSection } from "@/components/pages/services";

export default function Services() {
  return (
    <main className="bg-white">
      <ServicesHeroSection />
      <ServicesGridSection />
    </main>
  );
}
