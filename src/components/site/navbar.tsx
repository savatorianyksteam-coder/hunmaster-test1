"use client";

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "./theme-toggle";
import { Magnetic } from "@/components/ui/magnetic";
import { NAV_LINKS, TELEGRAM_URL } from "@/lib/site";

export function Navbar() {
  const { scrollY } = useScroll();
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setCondensed(v > 40));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4"
    >
      <motion.nav
        animate={{
          marginTop: condensed ? 10 : 22,
          width: condensed ? "min(100%, 62rem)" : "min(100%, 74rem)",
          paddingTop: condensed ? 8 : 12,
          paddingBottom: condensed ? 8 : 12,
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass glass-sheen flex items-center justify-between gap-6 rounded-full px-4 sm:px-5"
      >
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo compact={condensed} />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Magnetic className="hidden sm:inline-flex" strength={6}>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-ember)", boxShadow: "var(--shadow-glow)" }}
            >
              Начать обучение
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Меню"
            className="flex h-9 w-9 items-center justify-center rounded-full text-foreground lg:hidden"
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </motion.nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass absolute top-[5.5rem] w-[calc(100%-2rem)] max-w-lg rounded-3xl p-3 lg:hidden"
        >
          <div className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base text-muted-foreground data-[status=active]:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-ember)" }}
            >
              Начать обучение <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
