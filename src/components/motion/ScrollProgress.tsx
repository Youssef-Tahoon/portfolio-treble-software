"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

type ScrollProgressProps = {
  className?: string;
  heightClassName?: string;
};

export function ScrollProgress({
  className,
  heightClassName = "h-[3px]",
}: ScrollProgressProps) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    mass: 0.3,
  });

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      className={
        className ??
        `fixed left-0 right-0 top-0 z-50 ${heightClassName} origin-left bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500`
      }
      style={{ scaleX }}
    />
  );
}
