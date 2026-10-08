import type { Metadata } from "next";
import Image from "next/image";
import { site, thankYou } from "@/data/data";
import Highlight from "@/components/ui/Highlight";
import ArrowButton from "@/components/ui/ArrowButton";

export const metadata: Metadata = { title: "Thank You | BizConsult" };

export default function ThankYouPage() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <Image src={site.images.thankYou} alt="Consultant at work" fill priority sizes="46vw" className="object-cover object-left" />
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent" />
      </div>
      <div className="container-x relative flex min-h-[520px] items-center py-16 lg:min-h-[800px]">
        <div className="max-w-[690px] lg:pl-4 -mt-12 lg:-mt-32">
          <div className="h-1 w-16 bg-brand" />
          <h1 className="mt-8 font-heading text-5xl font-bold leading-[1.1] tracking-tight text-ink md:text-[68px]">
            <Highlight text={thankYou.title} />
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-slate-600">{thankYou.text}</p>
          <ArrowButton href="/" className="mt-10 !text-ink">
            {thankYou.button}
          </ArrowButton>
          <div className="relative mt-10 h-[320px] sm:h-[420px] lg:hidden">
            <Image src={site.images.thankYou} alt="Consultant at work" fill sizes="100vw" className="object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
}
