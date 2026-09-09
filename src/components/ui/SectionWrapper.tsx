"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";
import { useIntersectionObserver } from "@/lib/hooks";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  const [ref, isVisible] = useIntersectionObserver(0.1);

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding relative ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionTitle({ children, subtitle }: { children: ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">{children}</h2>
      {subtitle && (
        <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
