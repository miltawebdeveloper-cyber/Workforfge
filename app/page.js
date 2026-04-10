export const metadata = {
  title: "Premium Coworking Space in Coimbatore | WorkForge Offices",
  verification: {
    google: "QnbxCN4kS2oK0_48At-DDDJFB7HwprXS6WUXZGVRVRU",
  },
  description:
    "We offer premium coworking space in Coimbatore with private offices, dedicated desks, and virtual office solutions-24/7 access.",
  keywords: [
    "business outsourcing services",
    "accounting services for small business",
    "finance and accounting outsourcing",
    "outsource accounting services",
    "virtual cfo services",
  ],
  authors: [{ name: "Workforge" }],
  alternates: {
    canonical: "https://www.workforge.in/",
  },
  openGraph: {
    title: "Premium Coworking Space in Coimbatore | WorkForge Offices",
    description:
      "We offer premium coworking space in Coimbatore with private offices, dedicated desks, and virtual office solutions-24/7 access.",
    url: "https://www.workforge.in/",
    siteName: "https://www.workforge.in/",
    images: [
      {
        url: "https://www.workforge.in/og-logo.png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Premium Coworking Space in Coimbatore | WorkForge Offices",
    description:
      "We offer premium coworking space in Coimbatore with private offices, dedicated desks, and virtual office solutions-24/7 access.",
    images: ["https://www.workforge.in/og-logo.png"],
  },
  other: {
    language: "en",
    "revisit-after": "7 days",
    Expires: "never",
    Distribution: "Global",
    Rating: "general",
    "search engines": "ALL",
    copyright: "https://www.workforge.in/",
    email: "contact@workforge.in",
  },
};

import {
  AboutWorkForgeSection,
  AmenitiesSection,
  DemandValidationSection,
  FinalCtaSection,
  HeroSection,
  QuickHighlightsSection,
  SolutionsSection,
} from "@/components/pages/home";

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <QuickHighlightsSection />
      <AboutWorkForgeSection />
      <SolutionsSection />
      <AmenitiesSection />
      <FinalCtaSection />
    </main>
  );
}
