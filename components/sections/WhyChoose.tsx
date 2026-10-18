import Image from "next/image";
import { site, whyChoose } from "@/data/data";
import Highlight from "@/components/ui/Highlight";
import Icon from "@/components/ui/Icon";
import ClientTilt from "@/components/ui/ClientTilt";

export default function WhyChoose() {
  return (
    <section className="bg-white mb-12">
      <div className="grid lg:grid-cols-2">
        <div className="pt-12 pb-16 pl-6 pr-6 lg:ml-auto lg:w-full lg:max-w-[50vw] lg:pt-16 lg:pb-24 lg:pl-[max(2.5rem,calc((100vw-1320px)/2+2.5rem))] lg:pr-16 xl:pr-24">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-brand">{whyChoose.label}</p>
          <div className="mt-4 h-[3px] w-12 bg-brand" />
          <h2 className="mt-6 font-heading text-3xl font-bold leading-[1.2] tracking-tight text-ink sm:text-4xl lg:text-[42px] max-w-[550px]">
            <Highlight text={whyChoose.title} />
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-slate-500 max-w-[600px]">{whyChoose.text}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {whyChoose.items.map((it) => (
              <ClientTilt key={it.title} tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.03} transitionSpeed={1500} perspective={1000} className="h-full">
              <div data-aos="zoom-in" suppressHydrationWarning className="group flex h-full gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand/30">
                <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[12px] bg-[#F2994A] text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <Icon name={it.icon} size={28} strokeWidth={1.8} />
                </span>
                <div className="flex-1 pt-0.5">
                  <h3 className="font-heading text-[16px] font-bold text-ink transition-colors duration-300 group-hover:text-brand">{it.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-slate-700">{it.text}</p>
                </div>
              </div>
              </ClientTilt>
            ))}
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="150" suppressHydrationWarning className="relative min-h-[300px] lg:min-h-0 lg:h-full overflow-hidden">
          <Image src={site.images.about} alt="Business consultants at work" fill sizes="50vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
