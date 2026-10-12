"use client";

import { Component, useEffect, useState, type ReactNode } from "react";
import Tilt from "react-parallax-tilt";

/**
 * react-parallax-tilt can throw "Cannot read properties of null (reading 'style')"
 * when its element unmounts mid-animation (e.g. during navigation). The boundary
 * falls back to a plain wrapper so the page never breaks.
 */
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

  const plain = <div className={className}>{children}</div>;

  // During SSR and initial hydration, render a static div that matches the expected structure.
  if (!mounted) return plain;

  // After hydration, render the interactive Tilt component.
  return (
    <TiltBoundary fallback={plain}>
      <Tilt className={className} {...props}>
        {children}
      </Tilt>
    </TiltBoundary>
  );
}
