"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hoverState, setHoverState] = useState<"default" | "clickable" | "text">("default");
  const pathname = usePathname();

  useEffect(() => {
    // Only show custom cursor on non-touch devices with fine pointers
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    setMounted(true);
    requestAnimationFrame(() => {
      document.body.classList.add("custom-cursor-active");
    });

    const handleMouseLeave = () => {
      setPosition({ x: -100, y: -100 });
      setHoverState("default");
    };

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Text input fields: allow standard text typing cursor
      const isTextInput = target.closest(
        'input:not([type="submit"]):not([type="button"]):not([type="checkbox"]):not([type="radio"]), textarea'
      );
      if (isTextInput) {
        setHoverState("text");
        return;
      }

      // Check if target is clickable:
      const isClickable = !!(
        target.closest(
          'a, button, [role="button"], input[type="submit"], input[type="button"], select, [data-cursor="view"], .card-hover, .card-view, .cursor-pointer'
        ) || window.getComputedStyle(target).cursor === "pointer"
      );

      if (isClickable) {
        setHoverState("clickable");
      } else {
        setHoverState("default");
      }
    };

    window.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pathname]);

  if (!mounted) return null;

  return (
    <>
      {/* Main Cursor Dot / Compact View Circle */}
      <div 
        suppressHydrationWarning
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full bg-brand text-white font-bold transition-all duration-200 ease-out shadow-md"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`, 
          width: hoverState === "clickable" ? "38px" : hoverState === "text" ? "0px" : "10px",
          height: hoverState === "clickable" ? "38px" : hoverState === "text" ? "0px" : "10px",
          transform: `translate(-50%, -50%)`,
          opacity: position.x === -100 || hoverState === "text" ? 0 : 1
        }}
      >
        {hoverState === "clickable" && (
          <span className="text-[9.5px] font-extrabold tracking-wider leading-none select-none text-white animate-in fade-in zoom-in duration-150">
            VIEW
          </span>
        )}
      </div>

      {/* Outer Ring for default state */}
      <div 
        suppressHydrationWarning
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-brand/50 transition-all duration-300 ease-out"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`, 
          width: hoverState === "default" ? "34px" : "0px",
          height: hoverState === "default" ? "34px" : "0px",
          transform: `translate(-50%, -50%)`,
          opacity: hoverState === "default" && position.x !== -100 ? 1 : 0
        }}
      />
    </>
  );
}
