"use client";

import { useCallback, useRef, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glow?: boolean;
};

/** Glass surface with 3D tilt + cursor-reactive lighting. */
export function TiltCard({ children, className, intensity = 8, glow = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const rx = useSpring(0, { stiffness: 160, damping: 18 });
  const ry = useSpring(0, { stiffness: 160, damping: 18 });

  const light = useMotionTemplate`radial-gradient(420px circle at ${px}% ${py}%, color-mix(in oklab, var(--ember) 26%, transparent), transparent 62%)`;

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      px.set(x * 100);
      py.set(y * 100);
      ry.set((x - 0.5) * intensity * 2);
      rx.set(-(y - 0.5) * intensity * 2);
    },
    [intensity, px, py, rx, ry],
  );

  const onLeave = useCallback(() => {
    rx.set(0);
    ry.set(0);
    px.set(50);
    py.set(50);
  }, [px, py, rx, ry]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className={cn(
        "glass glass-sheen grain group relative isolate overflow-hidden rounded-3xl",
        className,
      )}
    >
      <motion.span
        aria-hidden
        style={{ background: light }}
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      {glow && (
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-px z-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ boxShadow: "var(--shadow-glow)" }}
        />
      )}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/3 z-0 w-1/3 opacity-0 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--cream) 18%, transparent), transparent)",
          animation: "shimmer-sweep 1.4s ease-in-out",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
