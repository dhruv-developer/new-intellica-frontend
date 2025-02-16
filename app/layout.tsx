import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import WaveBackground from "@/components/WaveBackground";
import Chatbot from "@/components/Chatbot"; // ✅ Ensure "Chatbot" starts with uppercase
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "INTELLICA - Your Personalized Learning Assistant",
  description: "Discover tailored courses and learning paths with INTELLICA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-cream via-orange-50 to-cream min-h-screen`}>
        <WaveBackground />
        <Header />
        {children}
        <Chatbot /> {/* ✅ Chatbot remains visible on all pages */}
      </body>
    </html>
  );
}
