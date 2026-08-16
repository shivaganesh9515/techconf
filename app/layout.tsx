import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TechConf 2025 - The Future of Code",
  description: "Two days of intensive learning, networking, and innovation with industry leaders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#050505] text-white antialiased selection:bg-white selection:text-black overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}