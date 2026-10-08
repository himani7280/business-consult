"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/data";

export default function Testimonials() {
  const [start, setStart] = useState(0);
  const n = testimonials.length;
  const next = () => setStart((start + 1) % n);
  const prev = () => setStart((start - 1 + n) % n);
  const visible = Array.from({ length: n }, (_, i) => testimonials[(start + i) % n]);

  return (
    <div className="container-x relative mt-12">
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute -left-1 top-[140px] z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand transition hover:bg-brand hover:text-white xl:flex"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute -right-1 top-[140px] z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand transition hover:bg-brand hover:text-white xl:flex"
      >
        <ChevronRight />
      </button>

      <div className="grid gap-8 md:grid-cols-3 xl:px-8">
        {visible.map((t, i) => (
          <div key={t.name} className={`group flex flex-col cursor-pointer transition-transform duration-300 hover:scale-[0.98] ${i > 0 ? "hidden md:flex" : ""}`}>
            <div className="relative flex-1 rounded-lg bg-white p-7 shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300 group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
              <div className="flex items-start justify-between">
                <div className="flex gap-1 text-brand">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={18} fill="currentColor" />
                  ))}
                </div>
                <span className="font-heading text-7xl font-black leading-[0.6] text-brand">&ldquo;</span>
              </div>
              <p className="mt-4 min-h-[100px] text-base leading-7 text-slate-700">{t.text}</p>
              <span className="absolute -bottom-2 left-12 h-4 w-4 rotate-45 bg-white shadow-[4px_4px_8px_rgba(0,0,0,0.05)]" />
            </div>
            <div className="mt-6 flex items-center gap-4 pl-2">
              <Image src={t.image} alt={t.name} width={72} height={72} className="h-[72px] w-[72px] rounded-full object-cover" />
              <div>
                <p className="font-heading text-lg font-bold text-ink">{t.name}</p>
                <p className="text-[15px] text-slate-600">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setStart(i)}
            className={`h-3.5 w-3.5 rounded-full transition ${i === start ? "bg-brand" : "bg-slate-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
