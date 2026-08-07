"use client";

import { ArrowUpRight, Facebook, GraduationCap, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { TiltCard } from "@/components/ui/tilt-card";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/reveal";
import { TELEGRAM_URL } from "@/lib/site";

type Card = {
  icon: LucideIcon;
  title: string;
  text: string;
  action: string;
  href?: string;
  to?: "/courses";
  soon?: boolean;
};

const CARDS: Card[] = [
  {
    icon: Send,
    title: "Telegram",
    text: "Новости, материалы и поддержка. Главный канал проекта.",
    action: "Перейти в канал",
    href: TELEGRAM_URL,
  },
  {
    icon: Facebook,
    title: "Facebook",
    text: "Страница сообщества готовится к запуску.",
    action: "Скоро",
    soon: true,
  },
  {
    icon: GraduationCap,
    title: "Наши курсы",
    text: "Программы от первых слов до свободной речи.",
    action: "Смотреть",
    to: "/courses",
  },
];

export function HubCards() {
  return (
    <section id="hub" className="scroll-mt-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Главные действия</span>
            <h2 className="display mt-3 text-[clamp(1.7rem,3.4vw,2.6rem)]">Куда идти дальше</h2>
          </div>
          <div className="hairline hidden w-1/3 sm:block" />
        </Reveal>

        <Stagger className="grid gap-5 md:grid-cols-3">
          {CARDS.map(({ icon: Icon, ...c }) => {
            const inner = (
              <TiltCard className="h-full p-7 sm:p-8">
                <div className="flex h-full flex-col">
                  <span className="glass flex h-12 w-12 items-center justify-center rounded-2xl text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="display mt-7 text-2xl">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                  <span
                    className={`mt-10 flex items-center justify-between text-sm font-semibold ${
                      c.soon ? "text-muted-foreground/70" : "text-foreground"
                    }`}
                  >
                    {c.action}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </TiltCard>
            );

            return (
              <StaggerItem key={c.title} className="h-full">
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noreferrer" className="block h-full">
                    {inner}
                  </a>
                ) : c.to ? (
                  <Link to={c.to} className="block h-full">
                    {inner}
                  </Link>
                ) : (
                  <div className="h-full cursor-default">{inner}</div>
                )}
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
