import { Suspense } from "react";
import type { Metadata } from "next";
import { Asap, Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import AOSProvider from "@/components/layout/AOSProvider";
import RouteScrollReset from "@/components/layout/RouteScrollReset";
import "./globals.css";

const asap = Asap({ 
  variable: "--font-asap", 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap" 
});

const poppins = Poppins({ 
  variable: "--font-poppins", 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap" 
});

export const metadata: Metadata = {
  title: "BizConsult | Strategy, Growth, Success",
  description:
    "BizConsult helps businesses grow with expert consulting, practical strategies and measurable results.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${asap.variable} ${poppins.variable} antialiased scroll-smooth max-[425px]:text-[12px]`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col overflow-x-clip bg-white font-body text-navy [&_:where(h1,h2,h3,h4,h5,h6)]:font-heading" suppressHydrationWarning>
        <AOSProvider>
          <Suspense fallback={null}>
            <CustomCursor />
            <RouteScrollReset />
          </Suspense>
          <Suspense fallback={null}>
            <Header />
          </Suspense>
          <main className="flex-1">{children}</main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </AOSProvider>
      </body>
    </html>
  );
}
