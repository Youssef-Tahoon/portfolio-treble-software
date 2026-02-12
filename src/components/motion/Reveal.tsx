"use client";

import { motion, useReducedMotion } from "framer-motion";

import type { PropsWithChildren } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
}>;

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 16,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.3 }}
      transition={{ duration, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
