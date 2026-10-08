"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { contactSection } from "@/data/data";

const field =
  "w-full rounded border border-slate-200 bg-white px-5 py-3.5 text-[15px] text-ink outline-none placeholder:text-slate-400 focus:border-brand";

export default function ContactForm() {
  const router = useRouter();

  return (
    <form
      className="mt-6 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        // Yahan API call jod sakte ho; abhi seedha thank-you page.
        router.push("/thank-you");
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="name" placeholder="Your Name *" className={field} />
        <input required type="email" name="email" placeholder="Your Email *" className={field} />
      </div>
      <input required type="tel" name="phone" placeholder="Phone Number *" className={field} />
      <select required name="service" defaultValue="" className={`${field} text-slate-500`}>
        <option value="" disabled>
          How can we help you? *
        </option>
        {contactSection.helpOptions.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <textarea required name="message" rows={3} placeholder="Your Message *" className={field} />
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-3 rounded bg-brand py-4 font-heading text-lg font-semibold text-white transition hover:bg-brand-dark"
      >
        {contactSection.button} <ArrowRight size={20} />
      </button>
    </form>
  );
}
