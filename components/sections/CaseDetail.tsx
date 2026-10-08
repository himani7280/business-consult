"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { caseHelpCard, caseStudies, detailLink } from "@/data/data";
import Highlight from "@/components/ui/Highlight";
import useItemId from "@/components/ui/useItemId";

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div className="grid gap-3 border-t border-slate-200 py-6 md:grid-cols-[150px_1fr]">
      <div>
        <h3 className="font-heading text-2xl font-bold text-ink">{title}</h3>
        <div className="mt-2 h-[3px] w-12 rounded bg-brand" />
      </div>
      <p className="text-[16px] leading-7 text-slate-600">{text}</p>
    </div>
  );
}

export default function CaseDetail() {
  const id = useItemId();
  const item = caseStudies.find((c) => c.id === id) ?? caseStudies[0];
  const index = caseStudies.findIndex((c) => c.id === item.id);
  // Sidebar: abhi wala + agle 3
  const sidebar = [0, 1, 2, 3].map((k) => caseStudies[(index + k) % caseStudies.length]);

  return (
    <section className="pt-8 pb-12 md:pt-10 md:pb-14">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_385px]">
        <div>
          <h1 className="font-heading text-3xl font-bold leading-[1.2] tracking-tight text-ink md:text-4xl lg:text-[42px] text-balance">
            <Highlight text={item.heading} />
          </h1>
          <p className="mt-3 font-heading text-lg font-medium text-ink md:text-xl">{item.subtitle}</p>
          <div className="mt-3 h-1 w-14 rounded bg-brand" />

          <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,443px)_1fr]">
            <div className="relative h-[240px] overflow-hidden rounded-lg shadow-md md:h-[272px]">
              <Image src={item.image} alt={item.title} fill sizes="443px" className="object-cover" />
            </div>
            <div>
              <p className="text-[16px] font-bold leading-6 text-ink">{item.intro}</p>
              <p className="mt-4 text-[16px] leading-6 text-slate-500">{item.body}</p>
            </div>
          </div>

          <div className="mt-8">
            <Block title="Challenge" text={item.challenge} />
            <Block title="Solutions" text={item.solution} />
            <Block title="Result" text={item.result} />
          </div>
        </div>

        <aside className="space-y-8">
          <ul className="overflow-hidden rounded-md bg-slate-50 shadow-sm">
            {sidebar.map((c, k) => (
              <li key={c.id} className="border-b border-slate-100">
                <Link
                  href={detailLink.caseStudy(c.id)}
                  className={`flex items-center justify-between gap-4 px-7 py-5 font-heading text-[17px] leading-snug ${
                    k === 0 ? "border-l-4 border-l-brand bg-slate-100 font-semibold text-ink" : "text-slate-600 hover:text-brand"
                  }`}
                >
                  {c.title}
                  <ChevronRight size={18} className="shrink-0" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="rounded-md bg-brand-soft p-8">
            <h3 className="font-heading text-2xl font-bold text-ink">{caseHelpCard.title}</h3>
            <div className="mt-2 h-[3px] w-12 rounded bg-brand" />
            <p className="mt-5 text-[17px] leading-7 text-slate-600">{caseHelpCard.text}</p>
            <Link
              href="/contact-us"
              className="mt-6 flex items-center justify-center gap-3 rounded bg-gold py-4 font-heading text-lg font-semibold text-white transition hover:bg-brand-dark"
            >
              <Phone size={20} fill="currentColor" className="text-ink" /> {caseHelpCard.button}
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
