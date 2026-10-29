import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { blogPosts, caseStudies, detailLink, pageTitles, quickLinks, services } from "@/data/data";
import PageBanner from "@/components/layout/PageBanner";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = { title: "Sitemap | BizConsult" };

const groups = [
  { title: "Main Pages", links: quickLinks },
  { title: "Services", links: services.map((s) => ({ label: s.title, href: detailLink.service(s.id) })) },
  { title: "Case Studies", links: caseStudies.map((c) => ({ label: c.title, href: detailLink.caseStudy(c.id) })) },
  { title: "Blog", links: blogPosts.map((p) => ({ label: p.title, href: detailLink.blog(p.id) })) },
];

export default function SitemapPage() {
  return (
    <>
      <PageBanner {...pageTitles.sitemap} />
      <AnimatedSection className="py-14 md:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-7 min-[426px]:px-10 grid gap-10 md:grid-cols-2">
          {groups.map((g, idx) => (
            <div key={g.title} data-aos="zoom-in" data-aos-delay={idx * 100} suppressHydrationWarning>
              <h2 className="font-heading text-2xl font-bold text-ink">{g.title}</h2>
              <div className="mb-5 mt-3 h-1 w-12 rounded bg-brand" />
              <ul className="space-y-3">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="flex items-center gap-3 text-[17px] text-slate-600 transition hover:text-brand">
                      <ChevronRight size={18} strokeWidth={3} className="shrink-0 text-brand" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
