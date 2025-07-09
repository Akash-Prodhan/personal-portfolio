import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { ThemeProvider } from "next-themes";
import { DockDemo } from "@/components/magicui/Dockdemo";
import LenisProvider from "@/components/ui/lenisprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akash Prodhan - Frontend Developer",
  description: "I'm Akash Prodhan, a passionate frontend web developer specializing in React, Next.js, and TypeScript.",
  keywords: [
    "Akash Prodhan",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Portfolio",
    "Personal Website",
  ],
  authors: [{ name: "Akash Prodhan" }],
  creator: "Akash Prodhan",
  publisher: "Akash Prodhan",
  robots: "index, follow",
  openGraph: {
    title: "Akash Prodhan - Frontend Developer",
    description:
      "This is my personal portfolio built with Next.js and TypeScript. Showcasing my projects and skills as a frontend web developer.",
    url: "https://akashprodhan.fun",
    siteName: "Akash Prodhan Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Prodhan - Frontend Developer",
    description:
      "Portfolio website of Akash Prodhan, a frontend web developer skilled in React and Next.js.",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden relative`}
      >
        <LenisProvider />
        <div className="fixed bottom-20 max-sm:bottom-5 w-full flex justify-center z-[30]">
          <DockDemo />
        </div>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-sm:hidden">
            <StarsCanvas />
          </div>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}


