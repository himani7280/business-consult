import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter, Montserrat, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import AOSProvider from "@/components/layout/AOSProvider";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BizConsult | Strategy, Growth, Success",
  description:
    "BizConsult helps businesses grow with expert consulting, practical strategies and measurable results.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${montserrat.variable} ${outfit.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col overflow-x-hidden" suppressHydrationWarning>
        <AOSProvider>
          <Suspense fallback={null}>
            <CustomCursor />
          </Suspense>
          <Suspense fallback={null}>
            <Header />
          </Suspense>
          <main className="flex-1 pt-[140px] md:pt-[160px]">{children}</main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </AOSProvider>
      </body>
    </html>
  );
}
