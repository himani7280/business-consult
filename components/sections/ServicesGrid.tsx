"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ClientTilt from "@/components/ui/ClientTilt";

import { detailLink, serviceCardOrder, services } from "@/data/data";


export default function ServicesGrid({ dark = false, limit }: { dark?: boolean; limit?: number }) {
  let cards = serviceCardOrder
    .map((id) => services.find((s) => s.id === id))
    .filter((s) => s?.card);

  if (limit) {
    cards = cards.slice(0, limit);
  }

  return (
    <div className="mx-auto w-full max-w-[1320px] px-7 min-[426px]:px-10 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((s, idx) => {
        const content = (
          <>
            <div className="relative h-[215px] overflow-hidden rounded-2xl">
              <Image src={s!.image} alt={s!.card!.title} fill sizes="(min-width:1024px) 420px, 100vw" className="object-cover" />
            </div>
            <h3 className="relative z-10 -mt-6 mx-auto w-[90%] rounded-md bg-brand py-2.5 text-xl font-bold text-white shadow-lg">
              {s!.card!.title}
            </h3>
            <p className={`mx-auto mt-6 max-w-[340px] flex-1 text-[15px] leading-6 line-clamp-3 ${dark ? "text-white/90" : "text-slate-600"}`}>
              {s!.card!.text}
            </p>
            <div className="mt-6 flex flex-col w-full">
              <div className="flex items-center justify-center">
                <span className={`inline-flex items-center gap-4 text-[13px] font-bold tracking-[0.1em] uppercase transition-colors ${dark ? "text-white" : "text-ink group-hover:text-brand"}`}>
                  SEE MORE
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand text-brand transition-colors hover:bg-brand hover:text-white group-hover:bg-brand group-hover:text-white">
                    <ArrowRight size={20} />
                  </span>
                </span>
              </div>
              {!dark && <div className="mt-5 border-t-2 border-brand" />}
            </div>
          </>
        );

        return (
          <ClientTilt key={s!.id} tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.05} transitionSpeed={1500} perspective={1000} className="h-full">
            <Link
              href={detailLink.service(s!.id)}
              data-cursor="view"
              suppressHydrationWarning
              className="group flex flex-col h-full text-center font-mont transition cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              {content}
            </Link>
          </ClientTilt>
        );
      })}
    </div>
  );
}
