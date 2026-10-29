import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactInfo, contactSection, pageTitles, site } from "@/data/data";
import PageBanner from "@/components/layout/PageBanner";
import ContactForm from "@/components/forms/ContactForm";
import Highlight from "@/components/ui/Highlight";
import AnimatedSection from "@/components/ui/AnimatedSection";

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
      <AnimatedSection className="pt-14">
        <div className="mx-auto w-full max-w-[1320px] px-7 min-[426px]:px-10 grid gap-8 md:grid-cols-3">
          {contactInfo.map((c) => (
            <div key={c.title} data-aos="zoom-in" suppressHydrationWarning className="group flex items-center gap-4">
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
      </AnimatedSection>

      {/* Photo + form */}
      <AnimatedSection className="py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1320px] px-7 min-[426px]:px-10 grid items-center gap-10 lg:grid-cols-2">
          <div data-aos="zoom-in" suppressHydrationWarning className="relative mx-auto h-[380px] w-full max-w-[680px] lg:h-[500px]">
            <Image src={site.images.contact} alt="Consultant ready to help" fill sizes="680px" className="object-contain object-bottom" />
          </div>
          <div data-aos="zoom-in" data-aos-delay="100" suppressHydrationWarning>
            <div className="h-1 w-14 bg-brand" />
            <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.2] tracking-tight text-ink sm:text-4xl lg:text-[42px]">
              <Highlight text={contactSection.title} />
            </h2>
            <p className="mt-4 text-[16px] leading-6 text-slate-500">{contactSection.text}</p>
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>

      {/* Map */}
      <AnimatedSection className="mx-auto w-full max-w-[1320px] px-7 min-[426px]:px-10 pb-12 md:pb-16">
        <div data-aos="zoom-in" suppressHydrationWarning className="relative overflow-hidden rounded-2xl border-2 border-brand/30 shadow-xl bg-ink">
          <iframe
            title="BizConsult office location"
            src={site.mapEmbed}
            className="block h-[260px] w-full border-0 md:h-[320px] [filter:grayscale(100%)_invert(92%)_contrast(85%)] transition duration-500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Theme Brand Color Tint & Gradient */}
          <div className="pointer-events-none absolute inset-0 bg-brand/20 mix-blend-color" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />

          {/* Floating Location Card in Theme Style */}
          <div className="absolute bottom-5 left-5 z-10 flex items-center gap-3.5 rounded-xl bg-ink/90 backdrop-blur-md px-5 py-3.5 shadow-xl border border-brand/40">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand text-white shadow-md">
              <MapPin size={22} />
            </span>
            <div>
              <p className="font-heading text-sm sm:text-base font-bold text-white">BizConsult Headquarters</p>
              <p className="text-xs sm:text-sm text-slate-300">{site.address}</p>
            </div>
          </div>

          {/* Direct link to Google Maps */}
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(site.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 z-10 hidden sm:inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 font-heading text-xs font-bold text-white shadow-md transition hover:bg-brand-dark"
          >
            View on Google Maps
          </a>
        </div>
      </AnimatedSection>
    </>
  );
}
