"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, Languages, Sparkles } from "lucide-react";
import { LineReveal, Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { Parliament } from "@/components/brand/parliament";
import { TELEGRAM_URL, WORDS } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yArt = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} className="relative px-6 pt-40 pb-16 sm:pt-48 lg:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div style={{ y: yText, opacity: fade }}>
          <Reveal delay={0.5}>
            <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Венгерский без страха и скуки
            </span>
          </Reveal>

          <h1 className="display mt-7 text-[clamp(2.6rem,7.2vw,5.1rem)]">
            <LineReveal
              delay={0.45}
              lines={[
                <>Венгерский,</>,
                <>
                  который <span className="text-gradient-ember">звучит</span>
                </>,
                <>как дома</>,
              ]}
            />
          </h1>

          <Reveal delay={0.95} className="mt-7 max-w-md">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              HunMaster — проект о живом венгерском языке: материалы, разборы, произношение и
              сообщество. Мы не платформа с уроками, а место, откуда начинается ваш путь.
            </p>
          </Reveal>

          <Reveal delay={1.1} className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic strength={9}>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-ember)", boxShadow: "var(--shadow-glow)" }}
              >
                Начать обучение
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic strength={6}>
              <a
                href="#hub"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium"
              >
                Наши ресурсы
              </a>
            </Magnetic>
          </Reveal>
        </motion.div>

        {/* Decorative composition */}
        <motion.div style={{ y: yArt }} className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, filter: "blur(16px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass glass-sheen grain relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] sm:aspect-[5/5]"
          >
            <Parliament className="absolute bottom-0 left-1/2 h-1/2 w-[115%] -translate-x-1/2 text-foreground/25" />
            <div
              className="absolute bottom-[46%] left-1/2 h-[2px] w-2/3 -translate-x-1/2"
              style={{
                background:
                  "linear-gradient(90deg, var(--paprika), transparent 42%, transparent 58%, var(--magyar-green))",
              }}
            />
            <div className="absolute inset-x-6 top-7 flex flex-col gap-3">
              {WORDS.slice(0, 3).map((w, i) => (
                <motion.div
                  key={w.hu}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 1.05 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                  className="glass flex items-center justify-between rounded-2xl px-4 py-3"
                  style={{ marginLeft: i * 18 }}
                >
                  <span className="display text-lg">{w.hu}</span>
                  <span className="text-xs text-muted-foreground">{w.ru}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="glass absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl px-4 py-3"
            >
              <Languages className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">A1 → B2 · magyar nyelv</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
