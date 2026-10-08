"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Briefcase, FileText, Mail, MessageSquareText, Phone, User } from "lucide-react";
import { quoteSection } from "@/data/data";

const wrap =
  "flex items-center gap-3 rounded border border-slate-300 bg-white px-4 py-3 focus-within:border-brand";
const input = "w-full bg-transparent text-[15px] outline-none placeholder:text-slate-400";

export default function QuoteForm() {
  const router = useRouter();
  const f = quoteSection.form;

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)]">
      <div className="flex items-center gap-5 bg-ink px-7 py-6 text-white">
        <FileText size={44} strokeWidth={1.3} className="shrink-0 text-brand" />
        <div>
          <h2 className="font-heading text-2xl font-bold">{f.title}</h2>
          <p className="text-[15px] text-white/90">{f.text}</p>
        </div>
      </div>

      <form
        className="space-y-5 p-7"
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/thank-you");
        }}
      >
        <label className="block">
          <span className="mb-1.5 block text-[15px] font-semibold">
            Name <span className="text-red-500">*</span>
          </span>
          <span className={wrap}>
            <User size={20} className="text-slate-500" />
            <input required name="name" placeholder="Enter your full name" className={input} />
          </span>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[15px] font-semibold">
            Email <span className="text-red-500">*</span>
          </span>
          <span className={wrap}>
            <Mail size={20} className="text-slate-500" />
            <input required type="email" name="email" placeholder="Enter your email address" className={input} />
          </span>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[15px] font-semibold">
            Phone Number <span className="text-red-500">*</span>
          </span>
          <span className={wrap}>
            <Phone size={20} className="text-slate-500" />
            <input required type="tel" name="phone" placeholder="Enter your phone number" className={input} />
          </span>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[15px] font-semibold">
            Business Type <span className="text-red-500">*</span>
          </span>
          <span className={wrap}>
            <Briefcase size={20} className="text-slate-500" />
            <select required name="businessType" defaultValue="" className={`${input} text-slate-500`}>
              <option value="" disabled>
                Select business type
              </option>
              {f.businessTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </span>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[15px] font-semibold">
            Message <span className="text-red-500">*</span>
          </span>
          <span className={`${wrap} items-start`}>
            <MessageSquareText size={20} className="mt-0.5 text-slate-500" />
            <textarea required name="message" rows={4} placeholder="Tell us about your requirements..." className={`${input} resize-y`} />
          </span>
        </label>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-3 rounded bg-brand py-4 font-heading text-lg font-semibold text-white transition hover:bg-brand-dark"
        >
          {f.button} <ArrowRight size={20} />
        </button>
      </form>
    </div>
  );
}
