import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ArrowButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-md bg-brand px-8 py-4 font-heading text-base font-semibold text-white shadow-sm transition hover:bg-brand-dark ${className}`}
    >
      {children}
      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
