"use client";

import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

export default function ClientTilt({ children, className = "", ...props }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR and initial hydration, render a static div that matches the expected structure.
  if (!mounted) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  // After hydration, render the interactive Tilt component.
  return (
    <Tilt 
      className={className} 
      glareEnable={true} 
      glareMaxOpacity={0.3} 
      glareColor="#ffffff" 
      glarePosition="all" 
      glareBorderRadius="16px"
      {...props}
    >
      {children}
    </Tilt>
  );
}
