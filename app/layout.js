import "./globals.css";
import { Inter } from "next/font/google";
import { Footer, Header } from "@/components/layout";
import MotionProvider from "@/components/providers/MotionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Workforge | Premium Coworking Space",
    template: "%s | Workforge",
  },
  description: "Bespoke workspace for the visionary. Experience the peak of productivity and aesthetics.",
  keywords: ["coworking space", "premium office", "Workforge workspace", "flexible desk", "private office"],
  metadataBase: new URL("https://www.workforge.in"),
  openGraph: {
    images: [{ url: "/og-logo.png" }],
  },
  icons: {
    icon: "/Logo-removebg.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-white text-primary selection:bg-highlight selection:text-white`}
      >
        <MotionProvider>
          <Header />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
