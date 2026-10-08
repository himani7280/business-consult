import type { Metadata } from "next";
import { blogPosts, blogSection, pageTitles } from "@/data/data";
import PageBanner from "@/components/layout/PageBanner";
import BlogCard from "@/components/sections/BlogCard";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Blog | BizConsult" };

export default function BlogPage() {
  return (
    <>
      <PageBanner {...pageTitles.blog} />
      <section className="py-12 md:py-16">
        <SectionHeading label={blogSection.label} title={blogSection.title} text={blogSection.text} underline className="mb-12 px-5" />
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {blogPosts.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
      </section>
    </>
  );
}
