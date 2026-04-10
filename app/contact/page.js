import { ContactFormSection, ContactHeroSection } from "@/components/pages/contact";

export const metadata = {
  title: "Contact",
  description: "Get in touch with the WorkForge team to book your premium workspace experience or inquire about membership options.",
  keywords: ["contact workforge", "book office tour", "coworking membership inquiry", "customer support"],
  openGraph: {
    images: [{ url: "/og-logo.png" }],
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactHeroSection />
      <ContactFormSection />
    </main>
  );
}
