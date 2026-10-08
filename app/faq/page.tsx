import type { Metadata } from "next";
import Image from "next/image";
import { faqSection, pageTitles, site } from "@/data/data";
import PageBanner from "@/components/layout/PageBanner";
import FaqList from "@/components/sections/FaqList";
import Highlight from "@/components/ui/Highlight";

export const metadata: Metadata = { title: "FAQ | BizConsult" };

export default function FaqPage() {
  return (
    <>
      <PageBanner {...pageTitles.faq} />
      <section className="py-12 md:py-16">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div className="order-last lg:order-first">
            <p className="flex items-center gap-5 font-heading text-lg font-bold uppercase text-ink">
              <span className="h-[3px] w-14 bg-brand" /> {faqSection.label}
            </p>
            <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-[48px] w-full whitespace-pre-line">
              <Highlight text={faqSection.title} />
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-7 text-slate-500">{faqSection.text}</p>
          </div>
          <div className="relative h-[300px] lg:h-[450px] order-first lg:order-last">
            <Image src={site.images.faq} alt="Customer support consultant" fill sizes="50vw" className="object-contain object-right" />
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent" />
          </div>
        </div>
      </section>
      <section className="pb-12 md:pb-16">
        <FaqList />
      </section>
    </>
  );
}
