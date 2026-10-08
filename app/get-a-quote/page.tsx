import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { pageTitles, quoteSection, site } from "@/data/data";
import PageBanner from "@/components/layout/PageBanner";
import QuoteForm from "@/components/forms/QuoteForm";
import Highlight from "@/components/ui/Highlight";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = { title: "Get a Quote | BizConsult" };

export default function QuotePage() {
  const q = quoteSection;
  return (
    <>
      <PageBanner {...pageTitles.quote} />

      <section className="py-14 md:py-16">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1fr_580px]">
          <div>
            <p className="flex items-center gap-5 font-heading text-base font-bold uppercase text-ink">
              <span className="h-[3px] w-14 bg-brand" /> {q.label}
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-[52px]">
              <Highlight text={q.title} />
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-7 text-slate-500">{q.text}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {q.features.map((f) => (
                <div key={f.title} className="group cursor-pointer rounded-lg bg-brand-soft px-5 py-6 text-center">
                  <span className="mx-auto flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[#fbe4c4] text-ink transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-110 group-hover:shadow-lg">
                    <Icon name={f.icon} size={36} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-bold text-ink transition-colors duration-300 group-hover:text-brand">{f.title}</h3>
                  <p className="mt-1 text-[15px] leading-5 text-slate-600 transition-colors duration-300 group-hover:text-slate-800">{f.text}</p>
                </div>
              ))}
            </div>

            {/* Need help card */}
            <div className="mt-4 grid overflow-hidden rounded-lg bg-brand-soft sm:grid-cols-[1fr_1.1fr]">
              <div className="relative min-h-[220px]">
                <Image src={site.images.quoteHelp} alt="Talk to our experts" fill sizes="400px" className="object-cover" />
              </div>
              <div className="p-6">
                <p className="flex items-center gap-3 font-heading text-sm font-bold uppercase text-ink">
                  <span className="h-[3px] w-10 bg-brand" /> {q.help.label}
                </p>
                <h3 className="mt-1 font-heading text-2xl font-bold text-ink">{q.help.title}</h3>
                <p className="mt-2 text-[15px] leading-5 text-slate-500">{q.help.text}</p>
                <div className="mt-5 flex flex-wrap gap-5">
                  <div className="group flex items-center gap-3 cursor-pointer">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white transition-all duration-300 group-hover:bg-ink group-hover:text-brand group-hover:scale-110">
                      <Phone size={18} fill="currentColor" />
                    </span>
                    <div className="text-sm transition-colors duration-300 group-hover:text-brand">
                      <p className="font-bold">Call Us</p>
                      <p className="font-semibold">{site.phone}</p>
                    </div>
                  </div>
                  <div className="group flex items-center gap-3 cursor-pointer">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white transition-all duration-300 group-hover:bg-ink group-hover:text-brand group-hover:scale-110">
                      <Mail size={18} />
                    </span>
                    <div className="text-sm transition-colors duration-300 group-hover:text-brand">
                      <p className="font-bold">Email Us</p>
                      <p className="text-xs">{site.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>

      {/* Process */}
      <section className="bg-brand-soft/70 py-10">
        <div className="container-x grid items-start gap-8 lg:grid-cols-[250px_1fr]">
          <div>
            <p className="flex items-center gap-4 font-heading text-sm font-bold uppercase text-ink">
              <span className="h-[3px] w-10 bg-brand" /> {q.process.label}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold leading-tight text-ink">{q.process.title}</h2>
          </div>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {q.process.steps.map((s, i) => (
              <li key={s.no} className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-heading text-lg font-bold text-white">
                  {s.no}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-1 text-[15px] text-slate-500">{s.text}</p>
                {i < q.process.steps.length - 1 && (
                  <span className="absolute -right-8 top-4 hidden text-2xl text-slate-400 lg:block">&rarr;</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
