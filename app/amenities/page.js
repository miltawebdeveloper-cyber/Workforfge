import { AmenitiesGroupsSection, AmenitiesHeroSection } from "@/components/pages/amenities";

export const metadata = {
  title: "Amenities",
  description: "Explore the premium workspace features at WorkForge: high-speed connectivity, business support, and world-class comfort.",
  keywords: ["office amenities", "high speed internet office", "business support services", "coworking features"],
  openGraph: {
    images: [{ url: "/og-logo.png" }],
  },
};

export default function AmenitiesPage() {
  return (
    <main className="bg-white">
      <AmenitiesHeroSection />
      <AmenitiesGroupsSection />
    </main>
  );
}
