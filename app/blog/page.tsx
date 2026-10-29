import type { Metadata } from "next";
import { blogPosts, blogSection, pageTitles } from "@/data/data";
import PageBanner from "@/components/layout/PageBanner";
import BlogCard from "@/components/sections/BlogCard";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = { title: "Blog | BizConsult" };

export default function BlogPage() {
  return (
    <>
      <PageBanner {...pageTitles.blog} />
      <AnimatedSection className="py-12 md:py-16">
        <SectionHeading label={blogSection.label} title={blogSection.title} text={blogSection.text} underline className="mb-12 px-5" />
        <div className="mx-auto w-full max-w-[1320px] px-7 min-[426px]:px-10 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
