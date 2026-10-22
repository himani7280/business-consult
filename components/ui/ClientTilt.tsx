"use client";

import { Component, useEffect, useState, type ReactNode } from "react";
import Tilt from "react-parallax-tilt";


class TiltBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {}
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

export default function ClientTilt({ children, className = "", ...props }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const plain = <div className={className} suppressHydrationWarning>{children}</div>;

  // During SSR and initial hydration, render a static div that matches the expected structure.
  if (!mounted) return plain;

  // After hydration, render the interactive Tilt component.
  return (
    <div suppressHydrationWarning className="contents">
      <TiltBoundary fallback={plain}>
        <Tilt className={className} {...props}>
          {children}
        </Tilt>
      </TiltBoundary>
    </div>
  );
}
