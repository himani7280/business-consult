"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/** Jumps instantly to the top (banner) on every route change. */
export default function RouteScrollReset() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    requestAnimationFrame(() => {
      const html = document.documentElement;
      const prev = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      html.style.scrollBehavior = prev;
    });
  }, [pathname, search]);

  return null;
}
