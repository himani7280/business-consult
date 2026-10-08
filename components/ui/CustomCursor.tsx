"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hoverState, setHoverState] = useState<"default" | "pointer" | "card">("default");
  const pathname = usePathname();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      setIsDesktop(false);
      return;
    }

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      
      // Look for a card container
      if (target.closest(".group") || target.closest(".card-hover")) {
         setHoverState("card");
      } 
      // Look for clickable elements
      else if (
        window.getComputedStyle(target).cursor === "pointer" || 
        target.closest("a") || 
        target.closest("button")
      ) {
         setHoverState("pointer");
      } 
      else {
         setHoverState("default");
      }
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, [pathname]);

  if (!isDesktop) return null;

  return (
    <>
      <style>{`
        body * {
          cursor: none !important;
        }
      `}</style>
      
      {/* Main Cursor Dot / View Circle */}
      <div 
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full bg-brand text-white font-bold transition-all duration-300 ease-out"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`, 
          width: hoverState === "card" ? "50px" : hoverState === "pointer" ? "20px" : "12px",
          height: hoverState === "card" ? "50px" : hoverState === "pointer" ? "20px" : "12px",
          transform: `translate(-50%, -50%)`,
          opacity: position.x === -100 ? 0 : 1
        }}
      >
        {hoverState === "card" && (
          <span className="text-[10px] tracking-widest animate-in fade-in zoom-in duration-300">
            VIEW
          </span>
        )}
      </div>

      {/* Outer Ring */}
      <div 
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-brand/50 transition-all duration-500 ease-out"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`, 
          width: hoverState === "default" ? "44px" : "0px",
          height: hoverState === "default" ? "44px" : "0px",
          transform: `translate(-50%, -50%)`,
          opacity: hoverState === "default" ? 1 : 0
        }}
      />
    </>
  );
}
