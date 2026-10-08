import type { Metadata } from "next";
import { Suspense } from "react";
import { pageTitles } from "@/data/data";
import PageBanner from "@/components/layout/PageBanner";
import CaseDetail from "@/components/sections/CaseDetail";

export const metadata: Metadata = { title: "Case Studies Detail | BizConsult" };

export default function Page() {
  return (
    <>
      <PageBanner {...pageTitles.caseDetail} parentCrumb={{ label: "Case Studies", href: "/case-study" }} />
      <Suspense>
        <CaseDetail />
      </Suspense>
    </>
  );
}
