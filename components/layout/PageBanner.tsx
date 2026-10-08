import Link from "next/link";
import Highlight from "@/components/ui/Highlight";
import { site } from "@/data/data";

// Har inner page ka upar wala banner (title + breadcrumb)
export default function PageBanner({ 
  title, 
  crumb, 
  parentCrumb 
}: { 
  title: string; 
  crumb: string; 
  parentCrumb?: { label: string; href: string };
}) {
  return (
    <section
      className="relative flex min-h-[200px] items-center justify-center bg-cover bg-center md:min-h-[235px]"
      style={{ backgroundImage: `url(${site.images.pageBanner})` }}
    >
      <div className="absolute inset-0 bg-black/15" />
      <div className="relative px-4 text-center text-white">
        <h1 className="text-4xl font-bold md:text-[56px] md:leading-tight" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
          <Highlight text={title} />
        </h1>
        <p className="mt-2 text-lg md:text-xl">
          <Link href="/" className="hover:text-brand transition-colors">
            Home
          </Link>
          
          {parentCrumb && (
            <>
              <span className="mx-3 text-brand">/</span>
              <Link href={parentCrumb.href} className="hover:text-brand transition-colors">
                {parentCrumb.label}
              </Link>
            </>
          )}
          
          <span className="mx-3 text-brand">/</span>
          <span className="text-white/90">{crumb}</span>
        </p>
      </div>
    </section>
  );
}
