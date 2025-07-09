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
  title: "Akash Prodhan - Software Developer",
  description: "This is my portfolio",
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


