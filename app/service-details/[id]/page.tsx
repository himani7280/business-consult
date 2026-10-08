import type { Metadata } from "next";
import { Suspense } from "react";
import { pageTitles } from "@/data/data";
import PageBanner from "@/components/layout/PageBanner";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = { title: "Service Detail | BizConsult" };

export default function Page() {
  return (
    <>
      <PageBanner {...pageTitles.serviceDetail} parentCrumb={{ label: "Services", href: "/services" }} />
      <Suspense>
        <ServiceDetail />
      </Suspense>
    </>
  );
}
