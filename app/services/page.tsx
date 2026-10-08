import type { Metadata } from "next";
import { pageTitles, servicesSection } from "@/data/data";
import PageBanner from "@/components/layout/PageBanner";
import ServicesGrid from "@/components/sections/ServicesGrid";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Our Services | BizConsult" };

export default function ServicesPage() {
  return (
    <>
      <PageBanner {...pageTitles.services} />
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <SectionHeading
          label={servicesSection.label}
          title={servicesSection.title}
          text={servicesSection.text}
          underline
          className="mb-12 px-5 font-mont"
        />
        <ServicesGrid />
      </section>
    </>
  );
}
