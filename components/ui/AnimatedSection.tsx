"use client";
import { motion } from "framer-motion";
import React from "react";

export default function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0,
  tag = "section" 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
  tag?: any;
}) {
  const MotionTag = motion[tag as keyof typeof motion] as any;

  return (
    <MotionTag
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full ${className}`}
      suppressHydrationWarning
    >
      {children}
    </MotionTag>
  );
}
