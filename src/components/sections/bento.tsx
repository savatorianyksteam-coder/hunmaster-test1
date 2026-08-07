"use client";

import {
  AudioLines,
  Award,
  Brain,
  ChartNoAxesCombined,
  Library,
  MessageCircle,
} from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { WORDS } from "@/lib/site";

export function Bento() {
  return (
    <section className="mt-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="eyebrow">Почему HunMaster</span>
          <h2 className="display mt-3 max-w-2xl text-[clamp(1.9rem,4.2vw,3.2rem)]">
            Язык, объяснённый <span className="text-gradient-ember">по-человечески</span>
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-6">
          <StaggerItem className="md:col-span-4">
            <TiltCard intensity={5} className="h-full p-8">
              <Brain className="h-5 w-5 text-primary" />
              <h3 className="display mt-6 text-2xl">Логика вместо заучивания</h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Венгерский кажется сложным только до первого нормального объяснения. Мы разбираем
                падежи, гармонию гласных и суффиксы как систему, а не как список исключений.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {WORDS.map((w) => (
                  <div key={w.hu} className="glass rounded-2xl px-4 py-3">
                    <div className="display text-base">{w.hu}</div>
                    <div className="mt-1 text-[0.7rem] text-muted-foreground">{w.ru}</div>
                    <div className="mt-0.5 text-[0.62rem] tracking-wider text-primary/80">
                      {w.hint}
                    </div>
                  </div>
                ))}
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem className="md:col-span-2">
            <TiltCard intensity={7} className="h-full p-8">
              <AudioLines className="h-5 w-5 text-primary" />
              <h3 className="display mt-6 text-xl">Произношение</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Долгие гласные, ö и ü, ритм фразы — слышно и понятно с первых занятий.
              </p>
              <div className="mt-8 flex items-end gap-1.5">
                {[10, 22, 16, 34, 26, 44, 30, 18, 38, 24, 12].map((h, i) => (
                  <span
                    key={i}
                    className="w-1.5 rounded-full"
                    style={{ height: h, background: "var(--gradient-ember)", opacity: 0.5 + i / 24 }}
                  />
                ))}
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem className="md:col-span-2">
            <TiltCard intensity={7} className="h-full p-8">
              <Library className="h-5 w-5 text-primary" />
              <h3 className="display mt-6 text-xl">Материалы</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Разборы, подборки слов, шпаргалки и полезные ссылки — всё в канале.
              </p>
            </TiltCard>
          </StaggerItem>

          <StaggerItem className="md:col-span-2">
            <TiltCard intensity={7} className="h-full p-8">
              <ChartNoAxesCombined className="h-5 w-5 text-primary" />
              <h3 className="display mt-6 text-xl">Понятный прогресс</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Уровни A1 → B2 с ясными ориентирами: что вы умеете на каждом шаге.
              </p>
            </TiltCard>
          </StaggerItem>

          <StaggerItem className="md:col-span-2">
            <TiltCard intensity={7} className="h-full p-8">
              <MessageCircle className="h-5 w-5 text-primary" />
              <h3 className="display mt-6 text-xl">Сообщество</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Вопросы, ответы и практика с теми, кто учит венгерский рядом с вами.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs text-magyar-green">
                <Award className="h-3.5 w-3.5" /> живое общение
              </span>
            </TiltCard>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
