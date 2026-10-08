import type { Metadata } from "next";
import { Suspense } from "react";
import { pageTitles } from "@/data/data";
import PageBanner from "@/components/layout/PageBanner";
import BlogDetail from "@/components/sections/BlogDetail";

export const metadata: Metadata = { title: "Blog Detail | BizConsult" };

export default function Page() {
  return (
    <>
      <PageBanner {...pageTitles.blogDetail} parentCrumb={{ label: "Blog", href: "/blog" }} />
      <Suspense>
        <BlogDetail />
      </Suspense>
    </>
  );
}
