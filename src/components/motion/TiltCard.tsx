"use client";

import type { PropsWithChildren } from "react";
import { useMemo, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";

type TiltCardProps = PropsWithChildren<
  {
    className?: string;
    maxTilt?: number;
    spring?: {
      stiffness?: number;
      damping?: number;
      mass?: number;
    };
    spotlight?: boolean;
    spotlightClassName?: string;
    spotlightColor?: {
      r: number;
      g: number;
      b: number;
      a: number;
    };
    spotlightSizePx?: number;
  } & Omit<HTMLMotionProps<"div">, "className" | "children">
>;

export function TiltCard({
  children,
  className,
  maxTilt = 10,
  spring,
  spotlight = true,
  spotlightClassName,
  spotlightColor = { r: 59, g: 130, b: 246, a: 0.18 },
  spotlightSizePx = 640,
  onMouseMove,
  onMouseLeave,
  ...rest
}: TiltCardProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  const base = useMemo(
    () => ({ stiffness: 260, damping: 26, mass: 0.25, ...(spring ?? {}) }),
    [spring]
  );

  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);

  const rotateX = useSpring(rotateXRaw, base);
  const rotateY = useSpring(rotateYRaw, base);

  const handleMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    onMouseMove?.(event);

    if (reduceMotion) return;
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const px = rect.width ? x / rect.width : 0.5;
    const py = rect.height ? y / rect.height : 0.5;

    ref.current.style.setProperty("--mx", `${(px * 100).toFixed(2)}%`);
    ref.current.style.setProperty("--my", `${(py * 100).toFixed(2)}%`);

    const dx = px - 0.5;
    const dy = py - 0.5;

    rotateYRaw.set(dx * maxTilt * 2);
    rotateXRaw.set(-dy * maxTilt * 2);
  };

  const handleLeave: React.MouseEventHandler<HTMLDivElement> = (event) => {
    onMouseLeave?.(event);

    if (reduceMotion) return;

    rotateXRaw.set(0);
    rotateYRaw.set(0);

    if (ref.current) {
      ref.current.style.setProperty("--mx", `50%`);
      ref.current.style.setProperty("--my", `50%`);
    }
  };

  const spotlightBg = `radial-gradient(${spotlightSizePx}px circle at var(--mx, 50%) var(--my, 50%), rgba(${spotlightColor.r}, ${spotlightColor.g}, ${spotlightColor.b}, ${spotlightColor.a}), transparent 42%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={
        reduceMotion
          ? rest.style
          : {
            perspective: 900,
            transformStyle: "preserve-3d",
            rotateX,
            rotateY,
            ...rest.style,
          }
      }
      className={className}
      {...rest}
    >
      {spotlight && !reduceMotion && (
        <div
          aria-hidden
          className={
            spotlightClassName ??
            "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          }
          style={{ backgroundImage: spotlightBg }}
        />
      )}
      {children}
    </motion.div>
  );
}
