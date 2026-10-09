"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { faqs } from "@/data/data";

export default function FaqList() {
  const [open, setOpen] = useState<number[]>([0, 1]);
  const toggle = (i: number) => setOpen((o) => (o.includes(i) ? o.filter((x) => x !== i) : [...o, i]));

  // 2 columns: left = even index, right = odd index
  const cols = [faqs.map((f, i) => ({ ...f, i })).filter((f) => f.i % 2 === 0), faqs.map((f, i) => ({ ...f, i })).filter((f) => f.i % 2 === 1)];

  return (
    <div className="container-x grid items-start gap-3 lg:grid-cols-2 lg:gap-x-8">
      {cols.map((col, c) => (
        <div key={c} className="space-y-2">
          {col.map((f) => {
            const isOpen = open.includes(f.i);
            return (
              <div
                key={f.i}
                className={`rounded border bg-white ${
                  isOpen ? "border-slate-100 border-l-4 border-l-brand shadow-[0_6px_20px_rgba(0,0,0,0.08)]" : "border-slate-200"
                }`}
              >
                <button
                  onClick={() => toggle(f.i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-heading text-lg font-bold text-ink transition-colors duration-300 group-hover:text-brand">{f.q}</span>
                  {isOpen ? (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                      <X size={16} />
                    </span>
                  ) : (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-brand-soft text-ink group-hover:text-brand">
                      <ChevronDown size={20} className="shrink-0" />
                    </span>
                  )}
                </button>
                {isOpen && <p className="px-6 pb-6 text-[17px] leading-7 text-slate-500">{f.a}</p>}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
