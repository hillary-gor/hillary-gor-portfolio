import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ethan Smith | Portfolio",
  description: "Ethan Smith is a Full-stack web developer with 10+ years of experience.",
  keywords: [
    "react",
    "next",
    "nextjs",
    "html",
    "css",
    "javascript",
    "js",
    "modern-ui",
    "modern-ux",
    "portfolio",
    "framer-motion",
    "3d-website",
    "particle-effect",
  ],
  authors: [{ name: "Sanidhya Kumar Verma" }],
  themeColor: "#f13024",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      >
        <TopLeftImg />
        <Nav />
        <Header />

        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}
