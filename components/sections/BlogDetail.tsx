"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ChevronRight, FolderOpen, User } from "lucide-react";
import { blogCategories, blogPosts, detailLink } from "@/data/data";
import Highlight from "@/components/ui/Highlight";
import useItemId from "@/components/ui/useItemId";
import AnimatedSection from "@/components/ui/AnimatedSection";

function SideTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="font-heading text-2xl font-bold text-ink">{children}</h3>
      <div className="mt-2 h-[3px] w-14 rounded bg-brand" />
    </div>
  );
}

export default function BlogDetail() {
  const id = useItemId();
  const post = blogPosts.find((p) => p.id === id) ?? blogPosts[0];
  const popular = blogPosts.filter((p) => p.id !== post.id).slice(0, 4);

  return (
    <AnimatedSection className="py-10 md:py-14">
      <div className="mx-auto w-full max-w-[1320px] px-7 min-[426px]:px-10 grid gap-12 lg:grid-cols-[1fr_395px]">
        <article>
          <h1 className="font-heading text-3xl font-bold leading-[1.2] tracking-tight text-ink sm:text-4xl lg:text-[42px]">
            <Highlight text={post.heading} />
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] text-slate-500">
            <span className="flex items-center gap-2">
              <CalendarDays size={18} /> {post.date}
            </span>
            <span className="flex items-center gap-2 sm:border-l sm:border-slate-300 sm:pl-6">
              <User size={18} /> By {post.author}
            </span>
            <span className="flex items-center gap-2 sm:border-l sm:border-slate-300 sm:pl-6">
              <FolderOpen size={18} /> {post.category}
            </span>
          </div>

          <div className="relative mt-6 h-[220px] overflow-hidden rounded-xl sm:h-[290px]">
            <Image src={post.heroImage ?? post.image} alt={post.title} fill sizes="830px" className="object-cover" priority />
          </div>

          <div className="mt-8 space-y-4 text-[17px] leading-7 text-slate-600">
            {post.intro.map((t: string) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          {post.sections.map((s: { heading: string; text: string }) => (
            <div key={s.heading} className="mt-8">
              <h2 className="font-heading text-2xl font-bold text-ink">{s.heading}</h2>
              <div className="mb-4 mt-2 h-[3px] w-10 rounded bg-brand" />
              <p className="text-[17px] leading-7 text-slate-600">{s.text}</p>
            </div>
          ))}
        </article>

        <aside className="space-y-12">
          <div>
            <SideTitle>Popular Posts</SideTitle>
            <ul className="space-y-4">
              {popular.map((p, i) => (
                <li key={p.id} data-aos="zoom-in" data-aos-delay={i * 80} suppressHydrationWarning>
                  <Link href={detailLink.blog(p.id)} data-cursor="view" className="flex items-center gap-4 rounded-md bg-white p-3 shadow-[0_3px_14px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.02]">
                    <span className="relative h-[110px] w-[110px] shrink-0 overflow-hidden rounded sm:w-[138px]">
                      <Image src={p.image} alt={p.title} fill sizes="140px" className="object-cover" />
                    </span>
                    <span>
                      <span className="block font-heading text-[16px] font-bold leading-snug text-ink">{p.title}</span>
                      <span className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                        <CalendarDays size={16} className="text-brand" /> {p.date}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SideTitle>Categories</SideTitle>
            <ul className="space-y-2">
              {blogCategories.map((c) => (
                <li key={c.name}>
                  <Link href="/blog" className="flex items-center justify-between rounded bg-slate-100 px-5 py-3.5 text-[16px] text-slate-700 hover:text-brand">
                    {c.name} ({c.count})
                    <ChevronRight size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </AnimatedSection>
  );
}
