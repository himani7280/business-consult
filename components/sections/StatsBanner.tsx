"use client";

import Image from "next/image";
import { site, stats } from "@/data/data";
import Highlight from "@/components/ui/Highlight";
import Icon from "@/components/ui/Icon";
import CountUp from "react-countup";

export default function StatsBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0b0d10] text-white">
      <Image src={site.images.stats} alt="" fill sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d10] via-[#0b0d10]/80 to-[#0b0d10]/30" />

      {/* Centered content wrapper to align title and stats perfectly */}
      <div className="relative flex flex-col justify-between py-12 md:min-h-[300px] md:py-16 w-full max-w-[1000px] mx-auto px-6 drop-shadow-lg">
        
        {/* Title area */}
        <div className="mb-12">
          <h2 className="border-l-[3px] border-brand pl-5 font-body text-3xl font-bold leading-[1.2] sm:text-4xl md:text-[42px]">
            <Highlight text={stats.title} className="text-brand block mt-1" />
          </h2>
        </div>

        {/* Stats Flex Container */}
        <div className="flex flex-wrap items-center justify-between gap-y-10 w-full">
          {stats.items.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center gap-4 w-[45%] sm:w-auto ${i > 0 ? "sm:border-l sm:border-white/20 sm:pl-6 lg:pl-10" : ""}`}
            >
              <Icon
                name={s.icon}
                className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
                {...(s.icon === "handshake" ? { strokeWidth: 1.8 } : { fill: "currentColor", strokeWidth: 1.2 })}
              />
              <div>
                <p className="mb-0.5 font-body text-[26px] font-bold leading-none text-brand sm:text-[30px]">
                  <CountUp 
                    end={parseInt(s.value.replace(/[^0-9]/g, ''))} 
                    suffix={s.value.replace(/[0-9]/g, '')} 
                    enableScrollSpy 
                    scrollSpyOnce 
                    duration={2.5}
                  />
                </p>
                <p className="max-w-[90px] text-[13px] leading-[1.2] text-gray-200 sm:text-[14px]">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
