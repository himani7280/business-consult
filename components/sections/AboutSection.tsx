import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { about, site } from "@/data/data";
import Highlight from "@/components/ui/Highlight";
import Icon from "@/components/ui/Icon";

const badgeBase = "absolute flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)]";

export default function AboutSection({ hideButton = false }: { hideButton?: boolean } = {}) {
  const [b1, b2, b3] = about.badges;
  return (
    <section className="overflow-hidden py-12 md:py-16">
      <div className="container-x px-12 md:px-24 lg:px-32 xl:px-40 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Photo with badges */}
        <div className="relative mx-auto w-full max-w-[560px] my-8 lg:my-0">
          <div className="absolute -bottom-6 -left-6 h-48 w-64 rounded-3xl bg-brand md:-bottom-8 md:-left-8" />
          <div className="relative h-[380px] overflow-hidden rounded-3xl border-4 border-white md:h-[480px]">
            <Image src={site.images.about} alt="Our consulting team" fill sizes="560px" className="object-cover object-[50%_35%]" />
          </div>
          <div className="group absolute flex items-center gap-3 rounded-2xl bg-white py-3 pl-4 pr-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] right-0 -top-6 md:right-0 md:-top-8 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)]">
            <Icon name={b1.icon} className="text-brand shrink-0 transition-all duration-300 group-hover:text-ink group-hover:scale-110 group-hover:-rotate-12" size={32} strokeWidth={1.5} />
            <span className="whitespace-pre-line font-heading text-sm font-bold leading-tight md:text-base transition-colors duration-300 group-hover:text-brand">{b1.text.replace(" ", "\n")}</span>
          </div>
          
          <div className="group absolute flex flex-col items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.08)] top-1/2 -left-4 -translate-y-1/2 md:-left-12 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)]">
            <Icon name={b2.icon} className="text-brand shrink-0 transition-all duration-300 group-hover:text-ink group-hover:scale-110 group-hover:-rotate-12" size={38} fill="currentColor" />
            <span className="whitespace-pre-line text-center font-heading text-sm font-bold leading-tight md:text-base transition-colors duration-300 group-hover:text-brand">{b2.text.replace(" ", "\n")}</span>
          </div>
          
          <div className="group absolute flex items-center gap-3 rounded-2xl bg-white py-3 pl-4 pr-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] -bottom-6 right-4 md:-bottom-8 md:right-10 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)]">
            <Icon name={b3.icon} className="text-brand shrink-0 transition-all duration-300 group-hover:text-ink group-hover:scale-110 group-hover:-rotate-12" size={32} strokeWidth={1.5} />
            <span className="whitespace-pre-line font-heading text-sm font-bold leading-tight md:text-base transition-colors duration-300 group-hover:text-brand">{b3.text.replace(" ", "\n")}</span>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="font-heading text-xl font-semibold text-brand">{about.label}</p>
          <h2 className="mt-3 font-heading text-4xl font-bold leading-[1.1] text-ink md:text-6xl">
            <Highlight text={about.title} />
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{about.intro}</p>
          <ul className="mt-6 space-y-4">
            {about.points.map((p) => (
              <li key={p} className="group flex items-center gap-4 text-lg text-ink cursor-pointer">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-all duration-300 group-hover:bg-ink group-hover:text-gold group-hover:scale-110">
                  <Check size={18} strokeWidth={3} />
                </span>
                <span className="transition-colors duration-300 group-hover:text-brand">{p}</span>
              </li>
            ))}
          </ul>
          {!hideButton && (
            <Link href="/about" className="mt-8 inline-flex items-center gap-4 font-heading text-lg font-semibold text-ink hover:text-brand">
              Read More <ArrowRight className="text-brand" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
