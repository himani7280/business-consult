import type { Metadata } from "next";
import { pageTitles } from "@/data/data";
import PageBanner from "@/components/layout/PageBanner";
import AboutSection from "@/components/sections/AboutSection";
import WhyChoose from "@/components/sections/WhyChoose";

export const metadata: Metadata = { title: "About Us | BizConsult" };

export default function AboutPage() {
  return (
    <>
      <PageBanner {...pageTitles.about} />
      <AboutSection hideButton />
      <WhyChoose />
    </>
  );
}
