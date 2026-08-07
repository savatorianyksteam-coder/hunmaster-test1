"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Parliament } from "@/components/brand/parliament";

/** Cinematic first paint + smooth transitions between pages. */
export function PageShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIntro(false), 1350);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>
        {intro && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
            exit={{ opacity: 0, filter: "blur(12px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-5"
            >
              <Parliament className="h-14 w-40 text-foreground/70" />
              <span className="display text-2xl tracking-[-0.04em]">
                Hun<span className="text-gradient-ember">Master</span>
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-[2px] rounded-full"
                style={{ background: "var(--gradient-ember)" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
}
