import type { Metadata } from "next";
import { caseSection, caseStudies, pageTitles } from "@/data/data";
import PageBanner from "@/components/layout/PageBanner";
import CaseCard from "@/components/sections/CaseCard";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Case Study | BizConsult" };

export default function CaseStudyPage() {
  const cases = caseStudies.filter((c) => c.listed);
  return (
    <>
      <PageBanner {...pageTitles.caseStudy} />
      <section className="py-12 md:py-16">
        <SectionHeading label={caseSection.label} title={caseSection.title} underline className="mb-12 px-5" />
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <CaseCard key={c.id} item={c} />
          ))}
        </div>
      </section>
    </>
  );
}
