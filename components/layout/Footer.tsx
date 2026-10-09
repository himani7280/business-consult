"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { quickLinks, site } from "@/data/data";
import SocialIcon from "@/components/ui/SocialIcons";
import ScrollTop from "./ScrollTop";

function ContactRow({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) {
  return (
    <li className="flex items-center gap-4 group cursor-pointer">
      <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-2 border-gold text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
        {icon}
      </span>
      <div>
        <p className="text-[17px] font-semibold text-white">{title}</p>
        {lines.map((l) => (
          <p key={l} className="text-[17px] text-white/90">
            {l}
          </p>
        ))}
      </div>
    </li>
  );
}

export default function Footer() {
  const pathname = usePathname();
  
  return (
    <footer className="bg-ink font-outfit text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3 lg:grid-cols-[1.1fr_1fr_1.2fr] lg:gap-0">
        {/* About */}
        <div className="lg:pr-12">
          <Image
            src={site.images.logoLight}
            alt="BizConsult"
            width={2172}
            height={724}
            className="h-[56px] w-auto md:h-[80px] object-contain"
          />
          <p className="mt-4 max-w-sm text-[17px] leading-8 text-white/90">{site.about}</p>
          <div className="mt-8 flex gap-3 md:gap-2 lg:gap-3">
            {site.social.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="flex h-14 w-14 md:h-10 md:w-10 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold text-gold transition hover:bg-gold hover:text-ink"
              >
                <SocialIcon name={s.name} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="lg:border-x lg:border-white/10 lg:px-12">
          <h3 className="text-2xl font-semibold">Quick Links</h3>
          <div className="mb-6 mt-3 h-1 w-12 rounded bg-gold" />
          <ul className="space-y-[10px]">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link 
                  href={l.href} 
                  onClick={() => {
                    if (pathname === l.href) window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group flex items-center gap-3 text-[17px] transition hover:text-gold"
                >
                  <div className="flex items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-gold p-0.5">
                    <ChevronRight size={18} strokeWidth={3} className="text-gold transition-colors duration-300 group-hover:text-ink" />
                  </div>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:pl-14">
          <h3 className="text-2xl font-semibold">Contact Us</h3>
          <div className="mb-6 mt-3 h-1 w-12 rounded bg-gold" />
          <ul className="space-y-6">
            <ContactRow icon={<Phone size={22} fill="currentColor" />} title="Call Us Now" lines={[site.phone]} />
            <ContactRow icon={<Mail size={22} />} title="Email Address" lines={[site.email]} />
            <ContactRow icon={<MapPin size={22} fill="currentColor" className="[&>circle]:fill-ink" />} title="Our Location" lines={site.addressLines} />
          </ul>
        </div>
      </div>

      <div className="border-t border-gold">
        <div className="container-x flex flex-wrap items-center justify-between py-4 sm:py-3 gap-y-3">
          <p className="text-[15px] sm:text-[17px]">{site.copyright}</p>
          <div className="flex items-center ml-auto mr-4 sm:mr-6">
            <Link href="/sitemap" className="text-[15px] sm:text-[17px] transition hover:text-gold">
              Sitemap
            </Link>
          </div>
          <ScrollTop />
        </div>
      </div>
    </footer>
  );
}
