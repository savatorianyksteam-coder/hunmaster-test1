"use client";

import { ArrowUpRight, Send } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { Magnetic } from "@/components/ui/magnetic";
import { Parliament } from "@/components/brand/parliament";
import { TELEGRAM_URL } from "@/lib/site";

export const COURSES = [
  { level: "A1", t: "Первые слова", d: "Алфавит, звуки, приветствия и базовые фразы.", soon: true },
  { level: "A2", t: "Быт и город", d: "Магазин, транспорт, кафе, документы, знакомства.", soon: true },
  { level: "B1", t: "Живая речь", d: "Прошедшее время, падежи в потоке, свободные диалоги.", soon: true },
  { level: "B2", t: "Уверенность", d: "Сложные конструкции, стиль, работа и учёба.", soon: true },
];

export function CoursesPreview() {
  return (
    <section className="mt-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Предпросмотр курсов</span>
            <h2 className="display mt-3 text-[clamp(1.9rem,4.2vw,3.2rem)]">Что мы готовим</h2>
          </div>
          <span className="glass rounded-full px-4 py-2 text-xs text-muted-foreground">
            В разработке
          </span>
        </Reveal>
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((c) => (
            <StaggerItem key={c.level}>
              <TiltCard intensity={6} className="h-full p-7">
                <div className="flex items-center justify-between">
                  <span
                    className="display rounded-full px-3 py-1 text-xs text-primary-foreground"
                    style={{ background: "var(--gradient-ember)" }}
                  >
                    {c.level}
                  </span>
                  <span className="text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase">
                    скоро
                  </span>
                </div>
                <h3 className="display mt-7 text-xl">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function Community() {
  return (
    <section className="mt-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <TiltCard intensity={3} className="relative overflow-hidden p-10 sm:p-14">
            <Parliament className="pointer-events-none absolute -right-10 -bottom-8 h-48 w-[30rem] text-foreground/[0.06]" />
            <div className="relative max-w-xl">
              <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-muted-foreground">
                <Send className="h-3.5 w-3.5 text-primary" /> Telegram-сообщество
              </span>
              <h2 className="display mt-6 text-[clamp(1.9rem,4.2vw,3rem)]">
                Всё самое живое — <span className="text-gradient-ember">в канале</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Ежедневные слова, короткие разборы, ответы на вопросы и анонсы курсов. Это главное
                место проекта HunMaster.
              </p>
              <Magnetic strength={9} className="mt-8">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground"
                  style={{ background: "var(--gradient-ember)", boxShadow: "var(--shadow-glow)" }}
                >
                  Открыть Telegram
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="mt-32 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="eyebrow">Kezdjük el</span>
          <h2 className="display mt-4 text-[clamp(2.1rem,5.6vw,3.8rem)]">
            Ваш венгерский начинается сегодня
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Присоединяйтесь к HunMaster — и первые слова появятся уже сегодня вечером.
          </p>
          <Magnetic strength={10} className="mt-9">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-ember)", boxShadow: "var(--shadow-glow)" }}
            >
              Начать обучение
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
