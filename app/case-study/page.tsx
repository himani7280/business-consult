import type { Metadata } from "next";
import { caseSection, caseStudies, pageTitles } from "@/data/data";
import PageBanner from "@/components/layout/PageBanner";
import CaseCard from "@/components/sections/CaseCard";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = { title: "Case Study | BizConsult" };

export default function CaseStudyPage() {
  const cases = caseStudies.filter((c) => c.listed);
  return (
    <>
      <PageBanner {...pageTitles.caseStudy} />
      <AnimatedSection className="py-12 md:py-16">
        <SectionHeading label={caseSection.label} title={caseSection.title} underline className="mb-12 px-5" />
        <div className="mx-auto w-full max-w-[1320px] px-7 min-[426px]:px-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <CaseCard key={c.id} item={c} />
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
