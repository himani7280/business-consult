"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ClientTilt from "@/components/ui/ClientTilt";
import { detailLink, type CaseStudy } from "@/data/data";

export default function CaseCard({ item }: { item: CaseStudy }) {
  return (
    <ClientTilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.05} transitionSpeed={1500} perspective={1000}>
      <Link
        href={detailLink.caseStudy(item.id)}
        className="group relative block h-[260px] overflow-hidden rounded-lg shadow-md md:h-[300px]"
        data-aos="fade-up"
      >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      {/* Faded overlay only covers the text area, leaving the top half of the image completely clear */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#111111] via-[#111111]/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-3 text-white z-10">
        <p className="flex items-center gap-1 text-[13px] text-slate-300">
          {item.category} <ChevronRight size={14} className="text-brand" strokeWidth={3} />
        </p>
        <h3
          className="mt-1 font-heading text-[16px] font-bold leading-snug md:text-lg text-left line-clamp-3 min-h-[66px] md:min-h-[75px] pr-12"
          title={item.title}
        >
          {item.title}
          </h3>
        </div>
      </Link>
    </ClientTilt>
  );
}
