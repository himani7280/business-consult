"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { detailLink, navLinks, services, site } from "@/data/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);


  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-sm">
      {/* Top bar: logo + contact */}
      <div className="bg-white">
        <div className="container-x !px-4 sm:!px-10 flex h-[70px] items-center justify-between md:h-[90px]">
          <Link href="/" aria-label="BizConsult home" className="block">
            <Image
              src={site.images.logoDark}
              alt="BizConsult"
              width={2172}
              height={724}
              priority
              className="h-[56px] w-auto md:h-[80px] object-contain"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <div className="group flex items-center gap-3 cursor-pointer">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                <Phone size={22} fill="currentColor" />
              </span>
              <div>
                <p className="font-heading text-sm font-bold md:text-base transition-colors duration-300 group-hover:text-brand">Call Us Now</p>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-sm md:text-[15px] hover:text-brand transition-colors">
                  {site.phone}
                </a>
              </div>
            </div>
            <div className="group flex items-center gap-3 cursor-pointer">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                <Mail size={22} />
              </span>
              <div>
                <p className="font-heading text-sm font-bold md:text-base transition-colors duration-300 group-hover:text-brand">Email Address</p>
                <a href={`mailto:${site.email}`} className="text-sm md:text-[15px] hover:text-brand transition-colors">
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          <button
            className="rounded-md p-2 text-ink lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Nav bar */}
      <nav className="hidden lg:block bg-ink text-white py-2">
        <div className="container-x flex items-center justify-between">
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 border-b-2 pt-4 pb-2 mb-2 text-[16px] lg:text-[17px] font-semibold transition-colors hover:text-brand ${
                    isActive(link.href) ? "border-brand text-brand" : "border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <span className="py-4 font-heading text-sm font-semibold uppercase tracking-widest text-brand lg:hidden">
            Menu
          </span>
          <Link
            href="/get-a-quote"
            className="my-2 inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2.5 font-heading text-sm font-semibold text-white transition hover:bg-brand-dark lg:px-6 lg:py-3 lg:text-[16px]"
          >
            Get a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {open && (
        <div 
          className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300" 
          onClick={() => setOpen(false)} 
        />
      )}
      
      {/* Mobile Sidebar Drawer */}
      <div 
        className={`fixed top-0 right-0 z-[9999] w-[85%] max-w-[380px] h-max max-h-[100dvh] overflow-y-auto pb-6 rounded-bl-3xl bg-ink transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Image src={site.images.logoLight} alt="BizConsult" width={150} height={50} className="h-10 w-auto object-contain" />
          <button onClick={() => setOpen(false)} className="rounded-full bg-white/5 p-2 text-white transition-colors hover:bg-brand hover:text-white">
            <X size={24} />
          </button>
        </div>
        
        <div className="px-6 py-8">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block font-heading text-[18px] font-semibold tracking-wide transition-colors hover:text-brand ${
                    isActive(link.href) ? "text-brand" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-12 space-y-8">
            <div className="h-px w-full bg-white/10" />
            
            <div className="space-y-5">
              <h4 className="text-sm font-bold uppercase tracking-widest text-brand">Contact Info</h4>
              <div className="flex items-center gap-4 group">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <Phone size={18} fill="currentColor" />
                </span>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-[15px] font-medium text-white/90 hover:text-brand transition-colors">
                  {site.phone}
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <Mail size={18} />
                </span>
                <a href={`mailto:${site.email}`} className="text-[15px] font-medium text-white/90 hover:text-brand transition-colors">
                  {site.email}
                </a>
              </div>
            </div>
            
            <Link
              href="/get-a-quote"
              onClick={() => setOpen(false)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-brand px-6 py-4 font-heading text-[16px] font-semibold text-white transition hover:bg-brand-dark shadow-lg shadow-brand/20"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
