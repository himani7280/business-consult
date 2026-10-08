"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { detailLink, services } from "@/data/data";
import Icon from "@/components/ui/Icon";
import useItemId from "@/components/ui/useItemId";

export default function ServiceDetail() {
  const id = useItemId();
  const service = services.find((s) => s.id === id) ?? services[0];
  const [first, ...rest] = service.title.split(" ");

  return (
    <section className="py-14 md:py-20">
      <div className="container-x grid gap-10 lg:grid-cols-[316px_1fr]">
        {/* Sidebar */}
        <aside>
          <ul className="overflow-hidden rounded-md border border-slate-100 bg-white shadow-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={detailLink.service(s.id)}
                  className={`flex items-center justify-between border-b border-slate-100 px-7 py-4 text-[17px] transition ${
                    s.id === service.id ? "border-l-[6px] border-l-ink bg-brand text-white" : "text-ink hover:text-brand"
                  }`}
                >
                  {s.title}
                  <ChevronRight size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <div>
          <div className="relative h-[200px] overflow-hidden rounded-xl md:h-[265px]">
            <Image src={service.image} alt={service.title} fill sizes="975px" className="object-cover" />
          </div>
          <p className="mt-6 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">Our Service</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-ink md:text-4xl">
            {first} <span className="text-brand">{rest.join(" ")}</span>
          </h2>
          <p className="mt-4 max-w-4xl text-[17px] leading-7 text-slate-500">{service.intro}</p>
          <hr className="my-8 border-slate-200" />

          <div className="grid gap-8 xl:grid-cols-[1fr_340px]">
            <div>
              <h3 className="font-heading text-xl font-bold text-ink">What We Offer</h3>
              <p className="mt-3 text-[16px] leading-7 text-slate-500">{service.offerText}</p>
              <ul className="mt-6 space-y-4">
                {service.offers.map((o: { title: string; text: string; icon: string }) => (
                  <li key={o.title} className="group flex gap-4 cursor-pointer">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-brand-soft text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-110 group-hover:shadow-lg">
                      <Icon name={o.icon as any} size={28} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h4 className="font-heading text-lg font-bold text-ink transition-colors duration-300 group-hover:text-brand">{o.title}</h4>
                      <p className="text-[15px] text-slate-500 transition-colors duration-300 group-hover:text-slate-700">{o.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-fit rounded-md border border-slate-100 bg-slate-50 p-7 shadow-sm">
              <h3 className="font-heading text-2xl font-bold text-ink">Key Benefits</h3>
              <ul className="mt-5 space-y-3.5">
                {service.benefits.map((b: string) => (
                  <li key={b} className="group flex items-center gap-3 text-[16px] text-slate-600 cursor-pointer">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-all duration-300 group-hover:bg-ink group-hover:text-brand group-hover:scale-110">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="transition-colors duration-300 group-hover:text-brand">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
