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
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
