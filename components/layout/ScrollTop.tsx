"use client";

import { ArrowUp } from "lucide-react";

export default function ScrollTop() {
  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold text-gold shadow-lg transition hover:bg-gold hover:text-ink"
    >
      <ArrowUp size={22} />
    </button>
  );
}
