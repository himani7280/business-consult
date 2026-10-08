import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactInfo, contactSection, pageTitles, site } from "@/data/data";
import PageBanner from "@/components/layout/PageBanner";
import ContactForm from "@/components/forms/ContactForm";
import Highlight from "@/components/ui/Highlight";

export const metadata: Metadata = { title: "Contact Us | BizConsult" };

const icons = {
  pin: <MapPin size={26} fill="currentColor" />,
  phone: <Phone size={24} fill="currentColor" />,
  mail: <Mail size={26} />,
};

export default function ContactPage() {
  return (
    <>
      <PageBanner {...pageTitles.contact} />

      {/* Info row */}
      <section className="pt-14">
        <div className="container-x grid gap-8 md:grid-cols-3 lg:px-16">
          {contactInfo.map((c) => (
            <div key={c.title} className="group flex items-center gap-4 cursor-pointer">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-110">
                {icons[c.icon as keyof typeof icons]}
              </span>
              <div>
                <p className="font-heading text-[17px] font-bold text-ink transition-colors duration-300 group-hover:text-brand">{c.title}</p>
                {c.lines.map((l) => (
                  <p key={l} className="text-[15px] text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                    {l}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo + form */}
      <section className="py-14 md:py-16">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div className="relative mx-auto h-[400px] w-full max-w-[680px] lg:h-[535px]">
            <Image src={site.images.contact} alt="Consultant ready to help" fill sizes="680px" className="object-contain object-bottom" />
          </div>
          <div>
            <div className="h-1 w-14 bg-brand" />
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-ink md:text-[40px]">
              <Highlight text={contactSection.title} />
            </h2>
            <p className="mt-4 text-[16px] leading-6 text-slate-500">{contactSection.text}</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="container-x pb-12 md:pb-16">
        <iframe
          title="BizConsult office location"
          src={site.mapEmbed}
          className="block h-[300px] w-full rounded-xl shadow-sm border-0 md:h-[350px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
