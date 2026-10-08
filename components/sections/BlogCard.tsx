"use client";
import Image from "next/image";
import Link from "next/link";
import { Clock3 } from "lucide-react";
import ClientTilt from "@/components/ui/ClientTilt";
import { detailLink, type BlogPost } from "@/data/data";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <ClientTilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.03} transitionSpeed={1500} perspective={1000}>
      <Link
        href={detailLink.blog(post.id)}
        className="group flex flex-col overflow-hidden sm:flex-row rounded-l-lg rounded-r-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition sm:min-h-[240px] mb-2"
        data-aos="fade-up"
      >
      <div className="relative h-64 w-full shrink-0 sm:h-auto sm:w-[42%]">
        <Image src={post.image} alt={post.title} fill sizes="200px" className="object-cover" />
      </div>
      <div className="flex flex-col justify-start px-3 pt-3 pb-1">
        <h3 className="font-heading text-[16px] font-bold leading-tight text-ink group-hover:text-brand sm:text-[18px]">{post.title}</h3>
        <p className="mt-1 flex-1 text-[13px] leading-relaxed text-slate-500 sm:mt-2 sm:text-[14px] line-clamp-3">{post.excerpt}</p>
        <p className="mt-2 flex items-center gap-2 text-[13px] text-slate-600 transition-colors duration-300 group-hover:text-brand sm:mt-3 sm:text-[14px]">
          <Clock3 size={16} className="text-brand transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125 group-hover:text-ink sm:h-4 sm:w-4" /> {post.date}
        </p>
        </div>
      </Link>
    </ClientTilt>
  );
}
