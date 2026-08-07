"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";

const STEPS = [
  {
    n: "01",
    t: "Знакомство",
    d: "Подписываетесь на Telegram-канал и получаете первые материалы.",
  },
  { n: "02", t: "Основа", d: "Разбираем алфавит, звучание и первые фразы для реальной жизни." },
  { n: "03", t: "Система", d: "Падежи и суффиксы складываются в понятную логику языка." },
  { n: "04", t: "Практика", d: "Говорите, читаете и переходите к курсам, когда они откроются." },
];

export function HowItWorks() {
  return (
    <section className="mt-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="eyebrow">Как это работает</span>
          <h2 className="display mt-3 text-[clamp(1.9rem,4.2vw,3.2rem)]">Четыре спокойных шага</h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <StaggerItem key={s.n}>
              <TiltCard intensity={6} className="h-full p-7">
                <span className="display text-3xl text-primary/70">{s.n}</span>
                <h3 className="display mt-6 text-xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
